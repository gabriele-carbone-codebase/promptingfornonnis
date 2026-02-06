export interface LessonQuiz {
  question: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
}

export interface Lesson {
  id: number;
  title: string;
  concept: string;
  description: string;
  tip: string;
  quiz: LessonQuiz;
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "More text is better",
    concept: "Details matter",
    description: "AI chatbots work best when you give them lots of details. The more specific you are, the better the results. AI hates guessing!",
    tip: "Think of it like giving directions: 'Go to the store' vs 'Go to the grocery store on Main Street, the one with the red sign, and buy fresh tomatoes for pasta sauce.'",
    quiz: {
      question: "Which prompt will get better results?",
      options: [
        {
          id: "a",
          text: "Write an email",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Write a professional email to my manager asking for Friday off next week. Keep it polite but brief, about 3 sentences.",
          isCorrect: true,
        },
      ],
      explanation: "The detailed prompt tells the AI exactly what you need: the type of email, who it's for, the purpose, tone, and length. This leaves no room for guessing!",
    },
  },
  {
    id: 2,
    title: "Ask 'What info do you need?'",
    concept: "Let AI help you",
    description: "Here's a secret: you can ask the AI what information it needs to help you better. This saves time and gets better results!",
    tip: "Start your prompt with: 'Before you answer, what information would help you give me the best response?'",
    quiz: {
      question: "Which approach is smarter?",
      options: [
        {
          id: "a",
          text: "Help me write a business plan",
          isCorrect: false,
        },
        {
          id: "b",
          text: "I want to write a business plan. Before we start, what information do you need from me to create the best plan possible?",
          isCorrect: true,
        },
      ],
      explanation: "Asking the AI what it needs turns it into your collaborator. It might ask about your industry, target market, budget, and goals—things you might have forgotten to mention!",
    },
  },
  {
    id: 3,
    title: "Use examples",
    concept: "Show, don't tell",
    description: "Examples teach AI better than explanations. If you want a specific style or format, show it what you mean!",
    tip: "Say 'Here's an example of what I'm looking for:' and then paste a sample. The AI will match that style.",
    quiz: {
      question: "Which prompt gives clearer guidance?",
      options: [
        {
          id: "a",
          text: "Write a catchy product description for my coffee mug",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Write a product description for my coffee mug. Here's an example of the style I like: 'Start your morning right with our handcrafted ceramic mug. Each sip feels like a warm hug.'",
          isCorrect: true,
        },
      ],
      explanation: "The example shows exactly the tone, length, and style you want. The AI can now match it perfectly instead of guessing what 'catchy' means to you.",
    },
  },
  {
    id: 4,
    title: "Use quotes for texts",
    concept: "Be crystal clear",
    description: "When you include text you want the AI to work with (like something to summarize or translate), put it in quotes or clearly mark it. This helps the AI know exactly what's your instruction vs. what's the content.",
    tip: "Use quotation marks or say 'Here is the text:' followed by the content on a new line.",
    quiz: {
      question: "Which format is clearer?",
      options: [
        {
          id: "a",
          text: "Summarize this meeting was productive we discussed Q3 goals and decided to launch in October",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Summarize the following text:\n\n\"This meeting was productive. We discussed Q3 goals and decided to launch in October.\"",
          isCorrect: true,
        },
      ],
      explanation: "Quotes and formatting make it obvious where your instruction ends and the content begins. This prevents confusion and ensures accurate results.",
    },
  },
  {
    id: 5,
    title: "Assign roles",
    concept: "Set the scene",
    description: "Tell the AI who they are! When you give the AI a role, it adjusts its knowledge, tone, and approach to match that character.",
    tip: "Start with 'You are a...' or 'Act as a...' followed by a specific role like 'friendly teacher', 'experienced chef', or 'patient customer support agent'.",
    quiz: {
      question: "Which prompt sets up a better interaction?",
      options: [
        {
          id: "a",
          text: "Explain quantum physics",
          isCorrect: false,
        },
        {
          id: "b",
          text: "You are a friendly science teacher who explains complex topics using everyday examples. Explain quantum physics to a curious 10-year-old.",
          isCorrect: true,
        },
      ],
      explanation: "By assigning the role of a 'friendly science teacher' and specifying the audience, you get an explanation that's actually understandable, not a technical lecture!",
    },
  },
];
