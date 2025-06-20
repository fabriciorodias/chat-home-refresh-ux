
export interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  references?: string[];
  feedback?: 'up' | 'down' | null;
}
