export type AnalyticsEvent = {
  type: 'cta_click' | 'scroll_depth' | 'newsletter_submit' | 'favorite_toggle' | 'cart_add' | 'chatbot_open';
  payload?: Record<string, unknown>;
  timestamp: string;
};
