export type WebhookEventType =
  | "page_visited"
  | "rating_submitted"
  | "review_link_clicked"
  | "negative_feedback_submitted";

export type Platform = "google" | "facebook" | "bbb" | "yelp";

export interface PageVisitedPayload {
  event_type: "page_visited";
  customer_id: string;
  job_id: string;
  step: number;
  timestamp: string;
}

export interface RatingSubmittedPayload {
  event_type: "rating_submitted";
  customer_id: string;
  job_id: string;
  rating: number;
  step: number;
  timestamp: string;
}

export interface ReviewLinkClickedPayload {
  event_type: "review_link_clicked";
  customer_id: string;
  job_id: string;
  rating: number;
  step: number;
  platform: Platform;
  timestamp: string;
}

export interface NegativeFeedbackSubmittedPayload {
  event_type: "negative_feedback_submitted";
  customer_id: string;
  job_id: string;
  rating: number;
  feedback_text: string;
  step: number;
  timestamp: string;
}

export type WebhookPayload =
  | PageVisitedPayload
  | RatingSubmittedPayload
  | ReviewLinkClickedPayload
  | NegativeFeedbackSubmittedPayload;

export type ReviewStep = 1 | 2 | 3 | 4 | 5 | 6;

export interface ReviewParams {
  customer_id: string | null;
  job_id: string | null;
  name: string | null;
  step: ReviewStep;
}

export type AppScreen =
  | "rating"
  | "positive"
  | "negative"
  | "final-thank-you"
  | "negative-thank-you"
  | "error";
