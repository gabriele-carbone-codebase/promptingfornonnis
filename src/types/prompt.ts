export interface Attachment {
  id: string;
  filename: string;
  description: string;
}

export interface WebLink {
  id: string;
  url: string;
  description: string;
}

export interface PromptData {
  goal: string;
  expectedResult: string;
  attachments: Attachment[];
  webLinks: WebLink[];
  extraNotes: string;
}

export interface SavedPrompt {
  id: string;
  title: string;
  content: string;
  data: PromptData;
  isPublic: boolean;
  likes: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
}
