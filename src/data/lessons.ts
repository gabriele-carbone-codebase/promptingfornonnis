export interface LessonQuiz {
  id: number;
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
  quiz: LessonQuiz[];
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "More text is better",
    concept: "Details matter",
    description: "AI chatbots work best when you give them lots of details. The more specific you are, the better the results. AI hates guessing!",
    tip: "Think of it like giving directions: 'Go to the store' vs 'Go to the grocery store on Main Street, the one with the red sign, and buy fresh tomatoes for pasta sauce.'",
    quiz: [
      {
        id: 1,
        question: "Which prompt will get better results?",
        options: [
          { id: "a", text: "Write an email", isCorrect: false },
          { id: "b", text: "Write a professional email to my manager asking for Friday off next week. Keep it polite but brief, about 3 sentences.", isCorrect: true },
          { id: "c", text: "Email please", isCorrect: false },
        ],
        explanation: "The detailed prompt tells the AI exactly what you need: the type of email, who it's for, the purpose, tone, and length. This leaves no room for guessing!",
      },
      {
        id: 2,
        question: "What's wrong with the prompt: 'Help me cook dinner'?",
        options: [
          { id: "a", text: "It's too vague - doesn't specify cuisine, ingredients, skill level, or time available", isCorrect: true },
          { id: "b", text: "It's too long and complicated", isCorrect: false },
          { id: "c", text: "Nothing wrong, it's perfect", isCorrect: false },
        ],
        explanation: "Without knowing what ingredients you have, your cooking skill, dietary restrictions, or how much time you have, the AI has to guess everything!",
      },
      {
        id: 3,
        question: "Which detail helps the AI most when writing content?",
        options: [
          { id: "a", text: "Saying 'write fast'", isCorrect: false },
          { id: "b", text: "Specifying the word count, like '500 words'", isCorrect: true },
          { id: "c", text: "Adding 'thanks' at the end", isCorrect: false },
        ],
        explanation: "Concrete details like word count, format, or structure give the AI a clear target. Vague instructions or pleasantries don't improve output quality.",
      },
      {
        id: 4,
        question: "Pick the most specific prompt:",
        options: [
          { id: "a", text: "Make a logo", isCorrect: false },
          { id: "b", text: "Design a blue minimalist logo for a coffee shop called 'Bean & Brew' targeting young professionals", isCorrect: true },
          { id: "c", text: "Logo for business", isCorrect: false },
        ],
        explanation: "The second prompt includes color, style, business name, business type, and target audience - giving the AI everything it needs to create something relevant.",
      },
      {
        id: 5,
        question: "Why do detailed prompts work better?",
        options: [
          { id: "a", text: "AI enjoys reading longer text", isCorrect: false },
          { id: "b", text: "Less guessing means more accurate results", isCorrect: true },
          { id: "c", text: "It's considered polite to the AI", isCorrect: false },
        ],
        explanation: "When you provide specifics, the AI doesn't have to make assumptions. Every detail you add narrows down the possibilities to what you actually want.",
      },
    ],
  },
  {
    id: 2,
    title: "Ask 'What info do you need?'",
    concept: "Let AI help you",
    description: "Here's a secret: you can ask the AI what information it needs to help you better. This saves time and gets better results!",
    tip: "Start your prompt with: 'Before you answer, what information would help you give me the best response?'",
    quiz: [
      {
        id: 1,
        question: "Which approach is smarter when starting a complex task?",
        options: [
          { id: "a", text: "Just say 'Help me write a business plan'", isCorrect: false },
          { id: "b", text: "Ask: 'I want to write a business plan. What information do you need from me to create the best plan possible?'", isCorrect: true },
          { id: "c", text: "Give up because it's too complicated", isCorrect: false },
        ],
        explanation: "Asking the AI what it needs turns it into your collaborator. It might ask about your industry, target market, budget, and goals—things you might have forgotten to mention!",
      },
      {
        id: 2,
        question: "When should you ask the AI what information it needs?",
        options: [
          { id: "a", text: "Only for simple tasks like 'write a poem'", isCorrect: false },
          { id: "b", text: "For complex or unfamiliar tasks where you might miss important details", isCorrect: true },
          { id: "c", text: "Never - you should always know what to include", isCorrect: false },
        ],
        explanation: "For complex tasks, the AI often knows what questions to ask that you wouldn't think of. It's like consulting an expert who guides you through the process.",
      },
      {
        id: 3,
        question: "What's the benefit of letting AI ask clarifying questions?",
        options: [
          { id: "a", text: "It makes the conversation longer", isCorrect: false },
          { id: "b", text: "It helps uncover details you might have forgotten to mention", isCorrect: true },
          { id: "c", text: "It's just being polite", isCorrect: false },
        ],
        explanation: "The AI can identify gaps in your request that you didn't even know existed. This collaborative approach leads to much better final results.",
      },
      {
        id: 4,
        question: "You want help planning a birthday party. What's the best first message?",
        options: [
          { id: "a", text: "Plan a birthday party", isCorrect: false },
          { id: "b", text: "I need to plan a birthday party. Before we start, what details would help you give me the best suggestions?", isCorrect: true },
          { id: "c", text: "Party ideas now", isCorrect: false },
        ],
        explanation: "By asking first, the AI might ask about the birthday person's age, interests, budget, venue, number of guests, and theme preferences - creating a much better plan.",
      },
      {
        id: 5,
        question: "What does asking 'What info do you need?' turn the AI into?",
        options: [
          { id: "a", text: "A slower, more annoying assistant", isCorrect: false },
          { id: "b", text: "A collaborative partner that helps you think through the problem", isCorrect: true },
          { id: "c", text: "A question-asking machine with no answers", isCorrect: false },
        ],
        explanation: "This technique transforms the AI from a one-way tool into an interactive collaborator that actively helps you define and solve your problem.",
      },
    ],
  },
  {
    id: 3,
    title: "Use examples",
    concept: "Show, don't tell",
    description: "Examples teach AI better than explanations. If you want a specific style or format, show it what you mean!",
    tip: "Say 'Here's an example of what I'm looking for:' and then paste a sample. The AI will match that style.",
    quiz: [
      {
        id: 1,
        question: "Which prompt gives clearer guidance?",
        options: [
          { id: "a", text: "Write a catchy product description for my coffee mug", isCorrect: false },
          { id: "b", text: "Write a product description for my coffee mug. Here's an example of the style I like: 'Start your morning right with our handcrafted ceramic mug. Each sip feels like a warm hug.'", isCorrect: true },
          { id: "c", text: "Product description. Make it good.", isCorrect: false },
        ],
        explanation: "The example shows exactly the tone, length, and style you want. The AI can now match it perfectly instead of guessing what 'catchy' means to you.",
      },
      {
        id: 2,
        question: "Why are examples more effective than describing what you want?",
        options: [
          { id: "a", text: "Examples are shorter to type", isCorrect: false },
          { id: "b", text: "Examples show exactly what you mean, eliminating interpretation guesswork", isCorrect: true },
          { id: "c", text: "AI can't understand descriptions", isCorrect: false },
        ],
        explanation: "Words like 'professional,' 'casual,' or 'creative' mean different things to different people. An example removes all ambiguity.",
      },
      {
        id: 3,
        question: "When asking for email templates, what's the best approach?",
        options: [
          { id: "a", text: "Say 'write it professionally'", isCorrect: false },
          { id: "b", text: "Paste an email you liked and say 'write in this style'", isCorrect: true },
          { id: "c", text: "Just ask for any email template", isCorrect: false },
        ],
        explanation: "Showing the AI an actual email you liked gives it a perfect reference point. It can match the tone, structure, and length precisely.",
      },
      {
        id: 4,
        question: "You want social media posts in a specific voice. What should you do?",
        options: [
          { id: "a", text: "Describe the voice as 'fun and engaging'", isCorrect: false },
          { id: "b", text: "Share 2-3 example posts you love and ask for similar ones", isCorrect: true },
          { id: "c", text: "Hope the AI figures it out", isCorrect: false },
        ],
        explanation: "Multiple examples help the AI understand patterns in your preferred style - the word choices, emoji usage, sentence length, and overall vibe.",
      },
      {
        id: 5,
        question: "What's a good way to introduce an example in your prompt?",
        options: [
          { id: "a", text: "Just paste it without context", isCorrect: false },
          { id: "b", text: "Say 'Here's an example of what I'm looking for:' then paste it", isCorrect: true },
          { id: "c", text: "Don't use examples, just describe more", isCorrect: false },
        ],
        explanation: "Clearly labeling your example helps the AI understand it's a reference to follow, not content to edit or respond to.",
      },
    ],
  },
  {
    id: 4,
    title: "Use quotes for texts",
    concept: "Be crystal clear",
    description: "When you include text you want the AI to work with (like something to summarize or translate), put it in quotes or clearly mark it. This helps the AI know exactly what's your instruction vs. what's the content.",
    tip: "Use quotation marks or say 'Here is the text:' followed by the content on a new line.",
    quiz: [
      {
        id: 1,
        question: "Which format is clearer?",
        options: [
          { id: "a", text: "Summarize this meeting was productive we discussed Q3 goals and decided to launch in October", isCorrect: false },
          { id: "b", text: "Summarize the following text:\n\n\"This meeting was productive. We discussed Q3 goals and decided to launch in October.\"", isCorrect: true },
          { id: "c", text: "Meeting summary Q3 October launch productive", isCorrect: false },
        ],
        explanation: "Quotes and formatting make it obvious where your instruction ends and the content begins. This prevents confusion and ensures accurate results.",
      },
      {
        id: 2,
        question: "Why is separating instructions from content important?",
        options: [
          { id: "a", text: "It makes the prompt look prettier", isCorrect: false },
          { id: "b", text: "It prevents the AI from confusing your instructions with the text to process", isCorrect: true },
          { id: "c", text: "It's not important at all", isCorrect: false },
        ],
        explanation: "Without clear separation, the AI might try to include parts of your instructions in the output, or miss parts of the content you wanted processed.",
      },
      {
        id: 3,
        question: "You want to translate a paragraph. What's the best format?",
        options: [
          { id: "a", text: "Translate to Spanish hello how are you today", isCorrect: false },
          { id: "b", text: "Translate to Spanish:\n\n\"Hello, how are you today?\"", isCorrect: true },
          { id: "c", text: "Spanish: hello how are you today", isCorrect: false },
        ],
        explanation: "The clear format shows exactly what needs translating. The colon and quotes create an unmistakable boundary between instruction and content.",
      },
      {
        id: 4,
        question: "What happens if you don't clearly mark the text you want analyzed?",
        options: [
          { id: "a", text: "Nothing, AI always figures it out", isCorrect: false },
          { id: "b", text: "The AI might confuse your instructions with the content, giving wrong results", isCorrect: true },
          { id: "c", text: "The AI will ask you to reformat", isCorrect: false },
        ],
        explanation: "Without clear markers, the AI has to guess where instructions end and content begins. This often leads to parts being missed or misinterpreted.",
      },
      {
        id: 5,
        question: "Which is the best way to mark text for the AI to work with?",
        options: [
          { id: "a", text: "Use ALL CAPS for the text", isCorrect: false },
          { id: "b", text: "Use quotes, or introduce with 'Here is the text:' on a new line", isCorrect: true },
          { id: "c", text: "Put it at the very start of your message", isCorrect: false },
        ],
        explanation: "Quotes and clear labels are universally understood markers. They create visual separation that helps the AI parse your request correctly.",
      },
    ],
  },
  {
    id: 5,
    title: "Assign roles",
    concept: "Set the scene",
    description: "Tell the AI who they are! When you give the AI a role, it adjusts its knowledge, tone, and approach to match that character.",
    tip: "Start with 'You are a...' or 'Act as a...' followed by a specific role like 'friendly teacher', 'experienced chef', or 'patient customer support agent'.",
    quiz: [
      {
        id: 1,
        question: "Which prompt sets up a better interaction?",
        options: [
          { id: "a", text: "Explain quantum physics", isCorrect: false },
          { id: "b", text: "You are a friendly science teacher who explains complex topics using everyday examples. Explain quantum physics to a curious 10-year-old.", isCorrect: true },
          { id: "c", text: "Physics explanation needed", isCorrect: false },
        ],
        explanation: "By assigning the role of a 'friendly science teacher' and specifying the audience, you get an explanation that's actually understandable, not a technical lecture!",
      },
      {
        id: 2,
        question: "What does assigning a role to the AI actually do?",
        options: [
          { id: "a", text: "Nothing, it's just for fun", isCorrect: false },
          { id: "b", text: "It adjusts the AI's tone, vocabulary, and approach to match that character", isCorrect: true },
          { id: "c", text: "It confuses the AI", isCorrect: false },
        ],
        explanation: "Roles act as powerful context. A 'lawyer' will use formal language and cite precedents, while a 'friendly neighbor' will be casual and approachable.",
      },
      {
        id: 3,
        question: "You need help debugging code. Which role would be most helpful?",
        options: [
          { id: "a", text: "You are a poet", isCorrect: false },
          { id: "b", text: "You are a senior software engineer with 10 years of experience in debugging", isCorrect: true },
          { id: "c", text: "You are a chef", isCorrect: false },
        ],
        explanation: "Matching the role to your task ensures the AI approaches the problem with the right expertise and perspective.",
      },
      {
        id: 4,
        question: "What's the best way to start a role assignment?",
        options: [
          { id: "a", text: "Maybe you could be like a...", isCorrect: false },
          { id: "b", text: "You are a... or Act as a...", isCorrect: true },
          { id: "c", text: "If you want, pretend to be...", isCorrect: false },
        ],
        explanation: "Direct statements like 'You are' or 'Act as' clearly establish the role. Hesitant language weakens the instruction.",
      },
      {
        id: 5,
        question: "You want advice on starting a small bakery. Which role prompt is best?",
        options: [
          { id: "a", text: "Give me bakery advice", isCorrect: false },
          { id: "b", text: "You are an experienced small business consultant who specializes in food businesses. Help me plan my new bakery.", isCorrect: true },
          { id: "c", text: "Be a business person", isCorrect: false },
        ],
        explanation: "The specific role 'small business consultant specializing in food businesses' brings exactly the right expertise - general business knowledge plus food industry specifics.",
      },
    ],
  },
];
