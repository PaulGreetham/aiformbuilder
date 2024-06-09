export interface FormField {
  title: string;
  type: string; // 'text', 'multiple-choice', etc.
  options?: string[]; // Add options for multiple-choice questions
}

export interface Message {
  sender: 'user' | 'ai';
  text: string;
  options?: string[]; // Optional array for multiple-choice options in AI messages
}
