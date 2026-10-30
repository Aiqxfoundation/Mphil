export const TICKET_CATEGORIES = ['feedback', 'review', 'lesson_request', 'bug', 'other'] as const;
export const TICKET_STATUSES = ['open', 'in_progress', 'resolved', 'closed'] as const;

export type TicketCategory = (typeof TICKET_CATEGORIES)[number];
export type TicketStatus = (typeof TICKET_STATUSES)[number];

export const TICKET_CATEGORY_LABELS: Record<TicketCategory, string> = {
  feedback: 'Feedback',
  review: 'Review',
  lesson_request: 'New subject or lesson',
  bug: 'Problem report',
  other: 'Other'
};

export const TICKET_STATUS_LABELS: Record<TicketStatus, string> = {
  open: 'Open',
  in_progress: 'In progress',
  resolved: 'Resolved',
  closed: 'Closed'
};

export const TICKET_LIMITS = {
  subjectMin: 3,
  subjectMax: 120,
  messageMin: 5,
  messageMax: 2000
} as const;

export interface SupportTicket {
  id: string;
  category: TicketCategory;
  subject: string;
  message: string;
  status: TicketStatus;
  adminReply: string | null;
  repliedAt: string | null;
  createdAt: string;
}

export interface AdminSupportTicket extends SupportTicket {
  userId: string;
  username: string;
}
