import React, { useState } from 'react';
import useSWR from 'swr';
import { LifeBuoy, Send } from 'lucide-react';
import { useAccount } from '../../context/AccountContext';
import { apiRequest } from '../../lib/api-client';
import {
  TICKET_CATEGORIES,
  TICKET_LIMITS,
  TICKET_CATEGORY_LABELS,
  TICKET_STATUS_LABELS,
  type TicketCategory,
  type TicketStatus
} from '../../lib/support-tickets';

interface Ticket {
  id: string;
  category: TicketCategory;
  subject: string;
  message: string;
  status: TicketStatus;
  adminReply: string | null;
  repliedAt: string | null;
  createdAt: string;
}

const fieldClassName =
  'w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500';

export const statusBadgeClassName: Record<TicketStatus, string> = {
  open: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-200',
  in_progress: 'bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-200',
  resolved: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200',
  closed: 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
};

export const SupportTickets: React.FC = () => {
  const { session } = useAccount();
  const [category, setCategory] = useState<TicketCategory>('feedback');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const { data, error, isLoading, mutate } = useSWR<{ tickets: Ticket[] }>(
    ['support-tickets', session.user.id],
    () => apiRequest('/api/support-tickets', session.access_token),
    { shouldRetryOnError: false }
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);
    setIsSubmitting(true);

    try {
      await apiRequest('/api/support-tickets', session.access_token, {
        method: 'POST',
        body: { category, subject, message }
      });
      setSubject('');
      setMessage('');
      setFeedback({ type: 'success', text: 'Your request was sent. You will see the reply here.' });
      await mutate();
    } catch (submitError) {
      setFeedback({
        type: 'error',
        text: submitError instanceof Error ? submitError.message : 'Unable to submit your request right now.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const tickets = data?.tickets ?? [];

  return (
    <section
      aria-labelledby="support-heading"
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
    >
      <div>
        <h3 id="support-heading" className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
          <LifeBuoy aria-hidden="true" className="size-4 text-teal-600" />
          <span>Support and feedback</span>
        </h3>
        <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
          Send feedback, a review, a lesson request, or report a problem. The administrator will reply here.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[12rem_1fr]">
          <div>
            <label htmlFor="ticket-category" className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">
              Type
            </label>
            <select
              id="ticket-category"
              value={category}
              onChange={(event) => setCategory(event.target.value as TicketCategory)}
              className={fieldClassName}
            >
              {TICKET_CATEGORIES.map((item) => (
                <option key={item} value={item}>{TICKET_CATEGORY_LABELS[item]}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="ticket-subject" className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">
              Subject
            </label>
            <input
              id="ticket-subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              minLength={TICKET_LIMITS.subjectMin}
              maxLength={TICKET_LIMITS.subjectMax}
              required
              placeholder="Short summary"
              className={fieldClassName}
            />
          </div>
        </div>
        <div>
          <label htmlFor="ticket-message" className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">
            Message
          </label>
          <textarea
            id="ticket-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            minLength={TICKET_LIMITS.messageMin}
            maxLength={TICKET_LIMITS.messageMax}
            required
            rows={4}
            placeholder="Describe your request in detail"
            className={`${fieldClassName} resize-y`}
          />
          <p className="mt-1 text-right text-[11px] text-slate-500">{message.length}/{TICKET_LIMITS.messageMax}</p>
        </div>

        {feedback && (
          <p
            role={feedback.type === 'error' ? 'alert' : 'status'}
            className={`rounded-xl border px-3.5 py-2.5 text-sm ${feedback.type === 'error'
              ? 'border-red-200 bg-red-50 text-red-800 dark:border-red-900/70 dark:bg-red-950/40 dark:text-red-200'
              : 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900/70 dark:bg-emerald-950/40 dark:text-emerald-200'
            }`}
          >
            {feedback.text}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-teal-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-900 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-teal-700 dark:hover:bg-teal-600"
        >
          <Send aria-hidden="true" className="size-4" /> {isSubmitting ? 'Sending…' : 'Send request'}
        </button>
      </form>

      <div className="border-t border-slate-100 pt-4 dark:border-slate-800">
        <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Your requests</h4>
        {error ? (
          <p role="alert" className="mt-3 text-sm text-amber-700 dark:text-amber-300">
            {error instanceof Error ? error.message : 'Unable to load your requests right now.'}{' '}
            <button type="button" onClick={() => void mutate()} className="font-semibold underline">Try again</button>
          </p>
        ) : isLoading ? (
          <p role="status" className="mt-3 text-sm text-slate-500">Loading your requests…</p>
        ) : tickets.length === 0 ? (
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">You have not sent any requests yet.</p>
        ) : (
          <ul className="mt-3 space-y-3">
            {tickets.map((ticket) => (
              <li key={ticket.id} className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="break-words text-sm font-semibold text-slate-900 dark:text-white">{ticket.subject}</p>
                    <p className="mt-0.5 text-[11px] text-slate-500">
                      {TICKET_CATEGORY_LABELS[ticket.category]} · {new Date(ticket.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${statusBadgeClassName[ticket.status]}`}>
                    {TICKET_STATUS_LABELS[ticket.status]}
                  </span>
                </div>
                <p className="mt-2 whitespace-pre-wrap break-words text-sm text-slate-700 dark:text-slate-300">{ticket.message}</p>
                {ticket.adminReply && (
                  <div className="mt-3 rounded-lg border-l-4 border-teal-600 bg-teal-50 p-3 dark:bg-teal-950/30">
                    <p className="text-[11px] font-semibold text-teal-800 dark:text-teal-300">Administrator reply</p>
                    <p className="mt-1 whitespace-pre-wrap break-words text-sm text-slate-800 dark:text-slate-200">{ticket.adminReply}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
