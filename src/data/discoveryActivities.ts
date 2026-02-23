import { UseCasePrompt } from "./useCasePrompts";

export type AgeBucket = "under-15" | "15-25" | "25-40" | "40-60" | "60+";

export interface Activity {
  id: string;
  label: string;
  categories: UseCasePrompt["category"][];
}

export const ageBucketLabels: Record<AgeBucket, string> = {
  "under-15": "Under 15",
  "15-25": "15 – 25",
  "25-40": "25 – 40",
  "40-60": "40 – 60",
  "60+": "60+",
};

export const activitiesByAge: Record<AgeBucket, Activity[]> = {
  "under-15": [
    { id: "homework", label: "Homework help", categories: ["Education"] },
    { id: "creative-writing", label: "Creative writing", categories: ["Creative"] },
    { id: "learning", label: "Learning new things", categories: ["Education"] },
    { id: "fun-projects", label: "Fun projects", categories: ["Creative", "Personal"] },
  ],
  "15-25": [
    { id: "study", label: "Study & exams", categories: ["Education"] },
    { id: "job-apps", label: "Job applications", categories: ["Business", "Personal"] },
    { id: "social-media", label: "Social media content", categories: ["Marketing", "Creative"] },
    { id: "creative-projects", label: "Creative projects", categories: ["Creative"] },
  ],
  "25-40": [
    { id: "work-emails", label: "Work emails", categories: ["Business"] },
    { id: "marketing", label: "Marketing", categories: ["Marketing"] },
    { id: "meal-planning", label: "Meal planning", categories: ["Personal"] },
    { id: "side-projects", label: "Side projects", categories: ["Business", "Creative"] },
    { id: "job-hunting", label: "Job hunting", categories: ["Business", "Personal"] },
  ],
  "40-60": [
    { id: "business-comms", label: "Business communication", categories: ["Business"] },
    { id: "travel", label: "Travel planning", categories: ["Personal"] },
    { id: "learning-tech", label: "Learning technology", categories: ["Education"] },
    { id: "health", label: "Health & fitness", categories: ["Personal"] },
  ],
  "60+": [
    { id: "letters", label: "Writing letters", categories: ["Business", "Creative"] },
    { id: "cooking", label: "Cooking recipes", categories: ["Personal"] },
    { id: "family", label: "Staying connected with family", categories: ["Personal"] },
    { id: "travel-senior", label: "Travel", categories: ["Personal"] },
    { id: "understand-tech", label: "Understanding technology", categories: ["Education"] },
  ],
};
