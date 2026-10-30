import React, { useState } from 'react';
import useSWR from 'swr';
import { Inbox, Save } from 'lucide-react';
import { useAccount } from '../../context/AccountContext';
import { apiRequest } from '../../lib/api-client';
import {
  TICKET_CATEGORY_LABELS,
  TICKET_LIMITS,
  TICKET_STATUSES,
  TICKET_STATUS_LABELS,
  type AdminSupportTicket,
  type TicketStatus
} from '../../lib/support-tickets';
import { statusBadgeClassName } from './SupportTickets';

interface TicketDraft {
  status: TicketStatus;
  reply: string;
}

const fieldClassName =
  'w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500';

const TicketCard: React.FC<{
  ticket: AdminSupportTicket;
  accessToken: string;
  onSaved: () => Promise<unknown>;
}> = ({ ticket, accessToken, onSaved }) => {
  const [draft, setDraft] = useState<TicketDraft>({ status: ticket.status, reply: ticket.adminReply ?? '' });
  const [isSaving, setIsSaving] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);
    setFeedback(null);

    try {
      await apiRequest('/api/admin-tickets', accessToken, {
        method: 'PATCH',
        body: { ticketId: ticket.id, status: draft.status, adminReply: draft.reply }
      });
      await onSaved();
      setFeedback({ type: 'success', text: 'Saved.' });
    } catch (error) {
      setFeedback({ type: 'error', text: error instanceof Error ? error.message : 'Unable to update this request.' });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <li className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="break-words text-sm font-semibold text-slate-900 dark:text-white">{ticket.subject}</p>
          <p className="mt-0.5 text-[11px] text-slate-500">
            @{ticket.username} · {TICKET_CATEGORY_LABELS[ticket.category]} · {new Date(ticket.createdAt).toLocaleString()}
          </p>
        </div>
        <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${statusBadgeClassName[ticket.status]}`}>
          {TICKET_STATUS_LABELS[ticket.status]}
        </span>
      </div>
      <p className="mt-2 whitespace-pre-wrap break-words text-sm text-slate-700 dark:text-slate-300">{ticket.message}</p>

      <form onSubmit={handleSave} className="mt-3 space-y-2">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-[10rem_1fr]">
          <div>
            <label htmlFor={`status-${ticket.id}`} className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">Status</label>
            <select
              id={`status-${ticket.id}`}
              value={draft.status}
              onChange={(event) => setDraft({ ...draft, status: event.target.value as TicketStatus })}
              className={fieldClassName}
            >
              {TICKET_STATUSES.map((status) => (
                <option key={status} value={status}>{TICKET_STATUS_LABELS[status]}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={`reply-${ticket.id}`} className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">Reply</label>
            <textarea
              id={`reply-${ticket.id}`}
              value={draft.reply}
              onChange={(event) => setDraft({ ...draft, reply: event.target.value })}
              maxLength={TICKET_LIMITS.messageMax}
              rows={2}
              placeholder="Write a reply for this user"
              className={`${fieldClassName} resize-y`}
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={isSaving}
            className="inline-flex min-h-9 items-center gap-2 rounded-lg bg-teal-800 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-teal-900 disabled:opacity-60 dark:bg-teal-700 dark:hover:bg-teal-600"
          >
            <Save aria-hidden="true" className="size-3.5" /> {isSaving ? 'Saving…' : 'Save reply'}
          </button>
          {feedback && (
            <span
              role={feedback.type === 'error' ? 'alert' : 'status'}
              className={`text-xs ${feedback.type === 'error' ? 'text-red-700 dark:text-red-300' : 'text-emerald-700 dark:text-emerald-300'}`}
            >
              {feedback.text}
            </span>
          )}
        </div>
      </form>
    </li>
  );
};

export const AdminTickets: React.FC = () => {
  const { session } = useAccount();
  const { data, error, isLoading, mutate } = useSWR<{ tickets: AdminSupportTicket[] }>(
    ['admin-tickets', session.user.id],
    () => apiRequest('/api/admin-tickets', session.access_token),
    { shouldRetryOnError: false, revalidateOnFocus: true }
  );

  const tickets = data?.tickets ?? [];
  const openCount = tickets.filter((ticket) => ticket.status === 'open' || ticket.status === 'in_progress').length;

  return (
    <section
      aria-labelledby="admin-tickets-heading"
      className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 sm:p-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 id="admin-tickets-heading" className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
          <Inbox aria-hidden="true" className="size-4 text-teal-600" /> Support tickets
        </h2>
        <span className="text-xs text-slate-500">{openCount} need attention · {tickets.length} total</span>
      </div>

      {error ? (
        <p role="alert" className="mt-4 text-sm text-amber-700 dark:text-amber-300">
          {error instanceof Error ? error.message : 'Unable to load requests right now.'}{' '}
          <button type="button" onClick={() => void mutate()} className="font-semibold underline">Try again</button>
        </p>
      ) : isLoading ? (
        <p role="status" className="mt-4 text-sm text-slate-500">Loading tickets…</p>
      ) : tickets.length === 0 ? (
        <p className="mt-4 rounded-xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500 dark:border-slate-700">
          No support tickets yet.
        </p>
      ) : (
        <ul className="mt-4 space-y-3">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} accessToken={session.access_token} onSaved={mutate} />
          ))}
        </ul>
      )}
    </section>
  );
};
