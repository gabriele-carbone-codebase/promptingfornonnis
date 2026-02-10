export interface UseCasePrompt {
  id: number;
  title: string;
  category: "Business" | "Education" | "Creative" | "Marketing" | "Personal";
  prompt: string;
}

export const useCasePrompts: UseCasePrompt[] = [
  {
    id: 1,
    title: "Write a Professional Business Email",
    category: "Business",
    prompt: `I want to write a professional follow-up email to a potential client after our first meeting.

As a result I expect to receive a polished email that thanks them for their time, summarizes the key discussion points, proposes next steps, and maintains a warm but professional tone. The email should be no longer than 200 words.

Please also consider that the meeting was about a software development project and the client seemed interested but had budget concerns.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 2,
    title: "Create a Weekly Meal Plan",
    category: "Personal",
    prompt: `I want to create a healthy weekly meal plan for a family of four on a budget of $100.

As a result I expect to receive a complete Monday-to-Sunday meal plan with breakfast, lunch, and dinner. Each meal should be simple to prepare (under 30 minutes), include a grocery list organized by store section, and account for leftovers to minimize waste.

Please also consider that one family member is vegetarian and another has a gluten intolerance.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 3,
    title: "Explain a Complex Topic Simply",
    category: "Education",
    prompt: `I want to explain how blockchain technology works to a complete beginner who has no technical background.

As a result I expect to receive a clear, jargon-free explanation using everyday analogies and examples. The explanation should cover what blockchain is, why it matters, and one real-world use case. It should be about 300 words and suitable for a 15-year-old to understand.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 4,
    title: "Write Social Media Captions",
    category: "Marketing",
    prompt: `I want to write 5 engaging Instagram captions for a small bakery launching a new line of sourdough breads.

As a result I expect to receive 5 unique captions, each with a different angle (storytelling, humor, educational, behind-the-scenes, customer testimonial style). Each caption should include relevant emoji suggestions, 3-5 hashtag recommendations, and a clear call-to-action.

Please also consider that the bakery's brand voice is warm, playful, and community-focused.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 5,
    title: "Write a Short Story Opening",
    category: "Creative",
    prompt: `I want to write the opening chapter of a mystery short story set in a small coastal town.

As a result I expect to receive a compelling 500-word opening that introduces the main character (a retired librarian), establishes an atmospheric setting, and ends with a hook that makes the reader want to continue. The tone should be suspenseful but not horror.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 6,
    title: "Prepare for a Job Interview",
    category: "Personal",
    prompt: `I want to prepare for a job interview for a marketing manager position at a tech startup.

As a result I expect to receive 10 likely interview questions with suggested answer frameworks, 5 smart questions I should ask the interviewer, and tips on how to present my experience transitioning from a corporate role to a startup environment.

Please also consider that I have 5 years of marketing experience but this would be my first startup role.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 7,
    title: "Create a Lesson Plan",
    category: "Education",
    prompt: `I want to create a 45-minute lesson plan for teaching 8th graders about the water cycle.

As a result I expect to receive a structured lesson plan with learning objectives, a warm-up activity, main instruction with a hands-on experiment, a group discussion component, and an assessment quiz with 5 questions. Include a list of materials needed.

Please also consider that the class has 25 students and limited lab equipment.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 8,
    title: "Draft a Product Description",
    category: "Marketing",
    prompt: `I want to write a compelling product description for a wireless noise-canceling headphone sold on an e-commerce website.

As a result I expect to receive a product description with a catchy headline, 3 key benefit-focused paragraphs, a bulleted feature list, and a persuasive closing line. The description should be optimized for SEO with natural keyword placement.

Please also consider that the target audience is remote workers aged 25-40 who value comfort during long work sessions.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 9,
    title: "Plan a Birthday Party",
    category: "Personal",
    prompt: `I want to plan a surprise 30th birthday party for my best friend with a budget of $500.

As a result I expect to receive a complete party plan including theme suggestions, a venue recommendation (home vs. rented space), a food and drink menu, decoration ideas, a timeline for the evening, and a playlist concept. Include a budget breakdown.

Please also consider that there will be about 20 guests and my friend loves the 90s aesthetic.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 10,
    title: "Write a Cover Letter",
    category: "Business",
    prompt: `I want to write a cover letter for a graphic designer position at a creative agency.

As a result I expect to receive a one-page cover letter that highlights my portfolio strengths, demonstrates cultural fit, explains why I'm passionate about the agency's work specifically, and includes a confident but not arrogant closing. The tone should be creative yet professional.

Please also consider that I'm a self-taught designer with 3 years of freelance experience and no formal degree.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 11,
    title: "Create Study Flashcards",
    category: "Education",
    prompt: `I want to create 20 flashcards to help me study for a psychology exam on cognitive biases.

As a result I expect to receive 20 flashcard pairs with the bias name on one side and a clear definition plus a memorable real-world example on the other side. Organize them from most common to least common biases.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 12,
    title: "Write a Blog Post Outline",
    category: "Marketing",
    prompt: `I want to create a detailed outline for a 1500-word blog post about "10 Time Management Tips for Freelancers."

As a result I expect to receive a structured outline with an engaging introduction hook, 10 numbered tips each with a brief description and a practical action item, subheadings optimized for readability, and a conclusion with a call-to-action. Include SEO title and meta description suggestions.

Please also consider that the target audience is new freelancers in their first year of self-employment.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 13,
    title: "Write a Poem for a Special Occasion",
    category: "Creative",
    prompt: `I want to write a heartfelt poem for my parents' 40th wedding anniversary.

As a result I expect to receive a poem of 4-6 stanzas that celebrates their enduring love, references shared memories and milestones, and ends on a hopeful note about the future. The style should be warm and accessible, not overly literary. Rhyming is welcome but not required.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 14,
    title: "Create a Business Plan Summary",
    category: "Business",
    prompt: `I want to write a one-page executive summary for a business plan for a mobile pet grooming service.

As a result I expect to receive a concise executive summary covering the business concept, target market, competitive advantage, revenue model, startup costs estimate, and projected first-year revenue. The tone should be confident and data-driven.

Please also consider that the service will operate in a suburban area with high pet ownership rates and no existing mobile grooming competitors.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 15,
    title: "Simplify a Legal Document",
    category: "Personal",
    prompt: `I want to understand the key terms and conditions of a standard apartment lease agreement.

As a result I expect to receive a plain-language summary of the most important clauses renters should understand, including rent payment terms, security deposit rules, maintenance responsibilities, early termination conditions, and tenant rights. Use bullet points and highlight any red flags to watch for.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 16,
    title: "Design a Workout Routine",
    category: "Personal",
    prompt: `I want to create a beginner-friendly 4-week workout plan for someone who wants to get fit at home with no equipment.

As a result I expect to receive a progressive program with 3 workout days per week, each session lasting 20-30 minutes. Include warm-up and cool-down routines, exercise descriptions with rep/set counts, and weekly progression guidelines. Add rest day recommendations.

Please also consider that the person has a sedentary office job and mild lower back sensitivity.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 17,
    title: "Write a Children's Bedtime Story",
    category: "Creative",
    prompt: `I want to write an original bedtime story for a 5-year-old about a brave little fox who learns the value of friendship.

As a result I expect to receive a 400-word story with simple vocabulary, a clear beginning-middle-end structure, gentle humor, a positive moral lesson, and a calming ending suitable for bedtime. Include suggestions for where to add illustrations.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 18,
    title: "Create an Email Newsletter",
    category: "Marketing",
    prompt: `I want to write a monthly email newsletter for a yoga studio to keep members engaged and attract new students.

As a result I expect to receive a newsletter template with sections for: a personal note from the instructor, upcoming class schedule highlights, a wellness tip of the month, a member spotlight feature, and a promotional offer. Include subject line options and preview text.

Please also consider that the studio focuses on beginner-friendly classes and has a calm, inclusive brand voice.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 19,
    title: "Research and Compare Products",
    category: "Business",
    prompt: `I want to compare three popular project management tools (Trello, Asana, and Monday.com) for a small team of 10 people.

As a result I expect to receive a comparison table covering pricing, key features, ease of use, integrations, and best-fit scenarios. Include a final recommendation based on a team that needs simple task tracking with minimal learning curve and a budget under $100/month.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
  {
    id: 20,
    title: "Write a Thank You Speech",
    category: "Creative",
    prompt: `I want to write a 2-minute thank you speech for receiving a community volunteer award.

As a result I expect to receive a warm, genuine speech that acknowledges the organization, thanks key people by role (not name, so I can fill them in), shares a brief anecdote about why volunteering matters to me, and inspires others to get involved. The tone should be humble and heartfelt, not preachy.

If anything is unclear, please ask me before proceeding. How can you help me further?`,
  },
];
