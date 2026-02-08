export interface FinalQuizQuestion {
  id: number;
  concept: string;
  question: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
}

export const finalQuizQuestions: FinalQuizQuestion[] = [
  // Concept 1: More text is better (Questions 1-4)
  {
    id: 1,
    concept: "More text is better",
    question: "You want AI to write a blog post. Which prompt will give you the best result?",
    options: [
      { id: "a", text: "Write a blog post about productivity", isCorrect: false },
      { id: "b", text: "Write a 800-word blog post about productivity tips for remote workers, with 5 actionable tips, a friendly tone, and include a personal anecdote in the intro", isCorrect: true },
      { id: "c", text: "Blog post please", isCorrect: false },
    ],
    explanation: "The detailed prompt specifies length, topic focus, structure (5 tips), tone, and style elements. This gives the AI everything it needs.",
  },
  {
    id: 2,
    concept: "More text is better",
    question: "What's the main reason detailed prompts work better?",
    options: [
      { id: "a", text: "They show the AI you're serious", isCorrect: false },
      { id: "b", text: "They eliminate guesswork and narrow down possibilities", isCorrect: true },
      { id: "c", text: "They take longer to process so the AI tries harder", isCorrect: false },
    ],
    explanation: "Every detail you add removes an assumption the AI would have to make. Fewer assumptions = more accurate results.",
  },
  {
    id: 3,
    concept: "More text is better",
    question: "Which detail would NOT improve a prompt asking for a recipe?",
    options: [
      { id: "a", text: "Specifying dietary restrictions", isCorrect: false },
      { id: "b", text: "Mentioning the current weather outside", isCorrect: true },
      { id: "c", text: "Stating available cooking time", isCorrect: false },
    ],
    explanation: "Details should be relevant. Weather rarely affects recipe choice, but dietary needs and time constraints are crucial information.",
  },
  {
    id: 4,
    concept: "More text is better",
    question: "You need help with a presentation. What information should you include?",
    options: [
      { id: "a", text: "Just the topic", isCorrect: false },
      { id: "b", text: "Topic, audience, length, purpose, and key points to cover", isCorrect: true },
      { id: "c", text: "Only the number of slides", isCorrect: false },
    ],
    explanation: "All these details help tailor the presentation. Who's watching, why they're watching, and what they should learn are all crucial.",
  },

  // Concept 2: Ask what info is needed (Questions 5-8)
  {
    id: 5,
    concept: "Ask what info is needed",
    question: "When is asking 'What information do you need?' most valuable?",
    options: [
      { id: "a", text: "For simple tasks like 'tell me a joke'", isCorrect: false },
      { id: "b", text: "For complex, multi-faceted tasks where you might miss important details", isCorrect: true },
      { id: "c", text: "Never - you should always provide everything upfront", isCorrect: false },
    ],
    explanation: "Complex tasks benefit most from this technique because there are many variables you might not think to mention.",
  },
  {
    id: 6,
    concept: "Ask what info is needed",
    question: "You want help planning your career change. What's the best first message?",
    options: [
      { id: "a", text: "Help me change careers", isCorrect: false },
      { id: "b", text: "I want to change careers. Before giving advice, what would you need to know about my situation to help me best?", isCorrect: true },
      { id: "c", text: "New job ideas", isCorrect: false },
    ],
    explanation: "The AI might ask about your current field, skills, interests, financial situation, and timeline - creating much more personalized guidance.",
  },
  {
    id: 7,
    concept: "Ask what info is needed",
    question: "What does this technique turn the AI into?",
    options: [
      { id: "a", text: "A slower, more complicated tool", isCorrect: false },
      { id: "b", text: "A collaborative partner that helps define the problem", isCorrect: true },
      { id: "c", text: "An interrogator that asks too many questions", isCorrect: false },
    ],
    explanation: "This transforms the interaction from one-way commands to a two-way collaboration, often uncovering requirements you didn't know you had.",
  },
  {
    id: 8,
    concept: "Ask what info is needed",
    question: "After the AI asks clarifying questions, what should you do?",
    options: [
      { id: "a", text: "Ignore them and repeat your original request", isCorrect: false },
      { id: "b", text: "Answer the questions to give the AI the context it needs", isCorrect: true },
      { id: "c", text: "Ask it to just guess the answers", isCorrect: false },
    ],
    explanation: "The questions are there to help! Answering them ensures the AI has the full picture needed for a great response.",
  },

  // Concept 3: Use examples (Questions 9-12)
  {
    id: 9,
    concept: "Use examples",
    question: "Why is showing an example often better than describing what you want?",
    options: [
      { id: "a", text: "Examples are shorter to type", isCorrect: false },
      { id: "b", text: "Examples eliminate interpretation differences - 'professional' means different things to different people", isCorrect: true },
      { id: "c", text: "AI can't understand written descriptions", isCorrect: false },
    ],
    explanation: "Words are subjective. Your idea of 'casual' might be someone else's 'unprofessional.' Examples provide an objective reference.",
  },
  {
    id: 10,
    concept: "Use examples",
    question: "You want taglines in a specific style. What's most effective?",
    options: [
      { id: "a", text: "Describe the style as 'punchy and memorable'", isCorrect: false },
      { id: "b", text: "Share 3 taglines you love and say 'create similar ones for my brand'", isCorrect: true },
      { id: "c", text: "Just ask for 'good' taglines", isCorrect: false },
    ],
    explanation: "Multiple examples help the AI identify patterns: word count, structure, tone, use of wordplay - things hard to describe but easy to show.",
  },
  {
    id: 11,
    concept: "Use examples",
    question: "How should you introduce an example in your prompt?",
    options: [
      { id: "a", text: "Just paste it without explanation", isCorrect: false },
      { id: "b", text: "Say 'Here's an example of the style I want:' before pasting", isCorrect: true },
      { id: "c", text: "Put 'EXAMPLE' in all caps after it", isCorrect: false },
    ],
    explanation: "Clear introduction prevents confusion about whether you want the example edited, analyzed, or used as a style reference.",
  },
  {
    id: 12,
    concept: "Use examples",
    question: "What type of content benefits MOST from providing examples?",
    options: [
      { id: "a", text: "Simple factual questions", isCorrect: false },
      { id: "b", text: "Creative writing where style and tone matter", isCorrect: true },
      { id: "c", text: "Math problems", isCorrect: false },
    ],
    explanation: "When subjective qualities like voice, style, or format are important, examples are invaluable. Facts have right answers; style doesn't.",
  },

  // Concept 4: Use quotes for texts (Questions 13-16)
  {
    id: 13,
    concept: "Use quotes for texts",
    question: "Why should you separate your instructions from the text you want processed?",
    options: [
      { id: "a", text: "It looks more organized", isCorrect: false },
      { id: "b", text: "It prevents the AI from confusing instructions with content", isCorrect: true },
      { id: "c", text: "It's not really necessary", isCorrect: false },
    ],
    explanation: "Clear separation ensures the AI knows exactly what to process and what action to take. Mixed content causes errors.",
  },
  {
    id: 14,
    concept: "Use quotes for texts",
    question: "You want to proofread an email. Which format is best?",
    options: [
      { id: "a", text: "Proofread hi john i wanted to follow up on our meeting from last week", isCorrect: false },
      { id: "b", text: "Please proofread this email:\n\n\"Hi John, I wanted to follow up on our meeting from last week.\"", isCorrect: true },
      { id: "c", text: "Fix email john meeting last week follow up", isCorrect: false },
    ],
    explanation: "The structured format with quotes makes it crystal clear what needs proofreading and what your instruction is.",
  },
  {
    id: 15,
    concept: "Use quotes for texts",
    question: "What could go wrong if you don't clearly mark the text to process?",
    options: [
      { id: "a", text: "Nothing, AI is smart enough", isCorrect: false },
      { id: "b", text: "The AI might include parts of your instructions in the output or miss content", isCorrect: true },
      { id: "c", text: "The AI will refuse to help", isCorrect: false },
    ],
    explanation: "Without clear boundaries, the AI has to guess where instructions end and content begins, leading to partial or incorrect processing.",
  },
  {
    id: 16,
    concept: "Use quotes for texts",
    question: "Which methods work well for marking text? (Choose the best option)",
    options: [
      { id: "a", text: "Using red font color", isCorrect: false },
      { id: "b", text: "Quotation marks, or 'Here is the text:' followed by a new line", isCorrect: true },
      { id: "c", text: "Writing text in a different language", isCorrect: false },
    ],
    explanation: "Quotes and clear labels are simple, universal markers that AI systems consistently recognize and interpret correctly.",
  },

  // Concept 5: Assign roles (Questions 17-20)
  {
    id: 17,
    concept: "Assign roles",
    question: "What happens when you tell AI 'You are a financial advisor'?",
    options: [
      { id: "a", text: "Nothing changes", isCorrect: false },
      { id: "b", text: "The AI adjusts its vocabulary, caution level, and advice style to match that profession", isCorrect: true },
      { id: "c", text: "The AI becomes legally liable as a financial advisor", isCorrect: false },
    ],
    explanation: "Roles shape how the AI responds: a financial advisor will be cautious and mention disclaimers, while a friend might be more casual.",
  },
  {
    id: 18,
    concept: "Assign roles",
    question: "You need to make complex legal terms simple. Which role helps most?",
    options: [
      { id: "a", text: "You are a lawyer", isCorrect: false },
      { id: "b", text: "You are a legal translator who explains complex terms in plain English for non-lawyers", isCorrect: true },
      { id: "c", text: "You are a judge", isCorrect: false },
    ],
    explanation: "The role should match your goal. A lawyer might use more jargon; a 'legal translator' is specifically aimed at simplification.",
  },
  {
    id: 19,
    concept: "Assign roles",
    question: "What's the most effective way to assign a role?",
    options: [
      { id: "a", text: "Could you maybe act like a teacher if you want to?", isCorrect: false },
      { id: "b", text: "You are an experienced high school chemistry teacher known for making difficult concepts fun", isCorrect: true },
      { id: "c", text: "Teacher stuff", isCorrect: false },
    ],
    explanation: "Be direct ('You are') and specific (experience level, specialty, teaching style). Vague or hesitant role assignments are less effective.",
  },
  {
    id: 20,
    concept: "Assign roles",
    question: "When is role assignment MOST valuable?",
    options: [
      { id: "a", text: "When asking for the time in different cities", isCorrect: false },
      { id: "b", text: "When you need a specific perspective, expertise level, or communication style", isCorrect: true },
      { id: "c", text: "For every single prompt regardless of topic", isCorrect: false },
    ],
    explanation: "Roles shine when perspective matters. Explaining medicine to a doctor vs. a patient requires different approaches - roles achieve this.",
  },
];
