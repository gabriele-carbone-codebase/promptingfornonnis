export type AgeBucket = "under-15" | "15-25" | "25-40" | "40-60" | "60+";

export interface UseCase {
  id: string;
  title: string;
  description: string;
  examplePrompt: string;
}

export interface Activity {
  id: string;
  label: string;
  examplePrompt: string;
  useCases: UseCase[];
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
    {
      id: "homework",
      label: "Study & homework",
      examplePrompt: "I want to: get help with my science homework about the solar system. As a result I expect to receive: clear explanations of planetary characteristics and fun facts that make learning enjoyable. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "u15-tutoring",
          title: "Homework help & personalized tutoring",
          description: "AI chatbots can act as a 24/7 personal tutor, helping students understand difficult concepts, solve math problems step-by-step, and prepare study summaries.",
          examplePrompt: "I want to: understand how photosynthesis works in simple terms for my science homework. As a result I expect to receive: a clear explanation suitable for a middle school student with maybe a simple diagram or analogy. Can you help me? If so, how? Do you need any additional information?",
        },
        {
          id: "u15-brainstorm",
          title: "Brainstorming for creative projects",
          description: "Assistance generating ideas for school projects, essays, presentations and research. The chatbot can suggest different angles to approach a topic.",
          examplePrompt: "I want to: create an engaging presentation about Roman history for my class. As a result I expect to receive: 5 creative and original presentation ideas that would impress my teacher and classmates. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "entertainment",
      label: "Entertainment & games",
      examplePrompt: "I want to: create a fun adventure story where I'm the main character exploring a magical forest. As a result I expect to receive: an interactive story where I can make choices and see different outcomes. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "u15-languages",
          title: "Foreign language practice",
          description: "Interactive conversations to practice English, Spanish or other languages, with immediate corrections and grammar explanations.",
          examplePrompt: "I want to: practice my English conversation skills by talking about my summer vacation. As a result I expect to receive: interactive dialogue practice with corrections on my grammar and vocabulary. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "new-skills",
      label: "Learning new skills",
      examplePrompt: "I want to: learn how to draw cartoon characters step by step. As a result I expect to receive: simple instructions and tips that a beginner can follow easily. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "u15-brainstorm2",
          title: "Brainstorming for creative projects",
          description: "The chatbot can suggest different angles, propose writing structures, and provide starting points for research.",
          examplePrompt: "I want to: create an engaging presentation about Roman history for my class. As a result I expect to receive: 5 creative and original presentation ideas that would impress my teacher and classmates. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "socializing",
      label: "Socializing with peers",
      examplePrompt: "I want to: understand how to start a conversation with new classmates. As a result I expect to receive: friendly conversation starters and tips to feel more confident. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "u15-emotional",
          title: "Emotional support & safe conversation",
          description: "A safe space to talk about emotions, school anxieties, social pressures or difficulties in peer relationships. Chatbots can offer non-judgmental listening and stress management suggestions.",
          examplePrompt: "I want to: talk about feeling excluded when my friends hang out without me. As a result I expect to receive: advice on how to handle these feelings and maybe ways to communicate with my friends about it. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
  ],

  "15-25": [
    {
      id: "uni-study",
      label: "University study & professional training",
      examplePrompt: "I want to: prepare a compelling cover letter for my internship application in graphic design. As a result I expect to receive: a professional draft that highlights my skills and enthusiasm for the position. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "1525-academic",
          title: "Academic writing assistance",
          description: "Complete support for university essays, theses, and research reports. The chatbot can help with document structure, argument brainstorming, paraphrasing complex concepts, and grammar review.",
          examplePrompt: "I want to: prepare a compelling cover letter for my internship application in graphic design. As a result I expect to receive: a professional draft that highlights my skills and enthusiasm for the position. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "first-job",
      label: "Finding first job or internship",
      examplePrompt: "I want to: optimize my LinkedIn profile to attract recruiters in the tech industry. As a result I expect to receive: specific suggestions for my headline, summary, and experience sections with industry keywords. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "1525-interview",
          title: "Job interview preparation",
          description: "Interview simulation, creating effective answers to common questions, CV and cover letter review. The chatbot can provide constructive feedback and suggest improvements.",
          examplePrompt: "I want to: practice for my first job interview as a junior developer. As a result I expect to receive: realistic interview questions with feedback on my answers and suggestions for improvement. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "career-skills",
      label: "Career skill development",
      examplePrompt: "I want to: create a 3-month learning plan to become proficient in Python programming. As a result I expect to receive: a structured roadmap with resources, milestones, and practice projects. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "1525-career",
          title: "Career planning & skill development",
          description: "Career path guidance, identifying skills to develop, suggestions for relevant courses and certifications. 61% of young Gen Z believe AI skills are essential for career advancement.",
          examplePrompt: "I want to: plan my career path in artificial intelligence and understand what skills I need. As a result I expect to receive: a roadmap of technical and soft skills to develop, plus recommendations for courses or certifications. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "relationships",
      label: "Managing personal relationships",
      examplePrompt: "I want to: navigate a difficult conversation with my roommate about shared expenses. As a result I expect to receive: communication strategies and phrasing that help resolve the issue without damaging our friendship. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "1525-mental",
          title: "Mental health support & stress management",
          description: "32% of young adults turn to AI for personal life support, including relationship advice and anxiety management. Chatbots can offer mindfulness techniques and breathing exercises.",
          examplePrompt: "I want to: manage my anxiety and stress during exam period because I feel overwhelmed. As a result I expect to receive: practical techniques for stress management and a study plan that feels manageable. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "digital-content",
      label: "Creating digital content",
      examplePrompt: "I want to: brainstorm engaging Instagram captions for my photography portfolio. As a result I expect to receive: 10 creative caption ideas that showcase my artistic vision and connect with my audience. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "1525-content",
          title: "Social media content creation",
          description: "Brainstorming captions, content calendars, video scripts, and audience engagement strategies for social media platforms.",
          examplePrompt: "I want to: brainstorm engaging Instagram captions for my photography portfolio. As a result I expect to receive: 10 creative caption ideas that showcase my artistic vision and connect with my audience. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
  ],

  "25-40": [
    {
      id: "career-mgmt",
      label: "Career management",
      examplePrompt: "I want to: negotiate a salary increase during my performance review next month. As a result I expect to receive: a strategy with market data, talking points, and responses to common objections. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "2540-automation",
          title: "Automating repetitive work tasks",
          description: "Millennials are the most consistent AI users for work productivity. 56% use generative AI at work daily. Chatbots can automate professional emails, draft reports, generate presentations, and summarize long documents.",
          examplePrompt: "I want to: decline a business proposal professionally without burning bridges. As a result I expect to receive: a well-crafted email that is polite, clear, and maintains a positive business relationship. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "work-life",
      label: "Work-life balance",
      examplePrompt: "I want to: create a time management system that allows me to work efficiently while having quality time with my family. As a result I expect to receive: practical techniques, scheduling templates, and boundary-setting strategies. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "2540-skills",
          title: "Professional skill development",
          description: "62% of Millennial workers (35-44) report high AI expertise. Chatbots support continuous learning by explaining new technologies and suggesting upskilling paths.",
          examplePrompt: "I want to: learn the basics of machine learning to apply them in my marketing role. As a result I expect to receive: practical explanations of ML concepts with specific examples of marketing applications. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "parenting",
      label: "Parenting & family management",
      examplePrompt: "I want to: create a weekly meal plan for my family that is healthy, budget-friendly, and kid-approved. As a result I expect to receive: a detailed menu with recipes and a shopping list organized by store sections. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "2540-parenting",
          title: "Parenting support",
          description: "Millennial parents use chatbots to create personalized bedtime stories, weekly family meal plans, generate ideas for children's school projects, and get advice on common educational challenges.",
          examplePrompt: "I want to: create an engaging bedtime story for my 5-year-old about friendship. As a result I expect to receive: an original story featuring a dragon character that teaches the value of friendship in an age-appropriate way. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "financial",
      label: "Financial planning & investments",
      examplePrompt: "I want to: start investing for my children's college education with a 15-year horizon. As a result I expect to receive: an overview of investment vehicles, risk considerations, and a sample allocation strategy. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "2540-finance",
          title: "Financial management & investment decisions",
          description: "Analysis of financial options, explanation of investment concepts, family budget creation, and financial product comparison. Chatbots can simplify complex information.",
          examplePrompt: "I want to: understand the difference between ETFs and mutual funds to make informed investment decisions. As a result I expect to receive: a clear comparison with pros and cons of each option, explained in simple terms. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "prof-dev",
      label: "Continuous professional development",
      examplePrompt: "I want to: identify emerging trends in my industry (digital marketing) to stay competitive. As a result I expect to receive: a summary of key trends, recommended skills to develop, and resources for learning. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "2540-automation2",
          title: "Automating repetitive work tasks",
          description: "Chatbots can automate email drafting, report creation, presentation generation, and document summarization to save time.",
          examplePrompt: "I want to: decline a business proposal professionally without burning bridges. As a result I expect to receive: a well-crafted email that is polite, clear, and maintains a positive business relationship. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
  ],

  "40-60": [
    {
      id: "leadership",
      label: "Leadership & management roles",
      examplePrompt: "I want to: develop interview questions to hire a senior marketing manager for my team. As a result I expect to receive: behavioral and situational questions that assess leadership skills and cultural fit. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "4060-projects",
          title: "Project & team management assistance",
          description: "82% of Gen X professionals agree that AI will help them solve problems and overcome work obstacles. Chatbots can create report templates, generate interview questions, structure employee feedback, and plan effective meetings.",
          examplePrompt: "I want to: structure an effective quarterly feedback meeting with my team of 8 people. As a result I expect to receive: a meeting agenda with timing, topics to cover, and techniques to ensure constructive dialogue. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "team-mgmt",
      label: "Team & process management",
      examplePrompt: "I want to: implement a new project management methodology for my department of 15 people. As a result I expect to receive: a change management plan with communication templates, training guidelines, and success metrics. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "4060-tech",
          title: "Learning new technologies",
          description: "76% of Gen X professionals believe AI adoption will reduce workload and improve work-life balance. Chatbots can explain new business software, provide personalized tutorials, and assist with digital tool adoption.",
          examplePrompt: "I want to: learn how to use Slack effectively because my company just adopted it. As a result I expect to receive: a beginner-friendly guide with best practices for communication and organization. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "retirement-plan",
      label: "Retirement planning",
      examplePrompt: "I want to: evaluate whether I'm on track to retire comfortably at age 62 with my current savings rate. As a result I expect to receive: a retirement readiness assessment with gap analysis and actionable recommendations. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "4060-retirement",
          title: "Retirement financial planning",
          description: "Analysis of retirement scenarios, calculation of savings needed, explanation of long-term investment options, and comparison of pension plans.",
          examplePrompt: "I want to: plan my retirement savings to maintain a comfortable lifestyle when I retire at 65. As a result I expect to receive: calculations of monthly savings needed and comparison of retirement plan options. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "elderly-care",
      label: "Caring for elderly parents",
      examplePrompt: "I want to: understand the different senior care options available for my father who needs daily assistance. As a result I expect to receive: a comparison of in-home care, assisted living, and nursing facilities with cost considerations and quality factors. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "4060-health",
          title: "Health information & family care",
          description: "Support in understanding medical documents, researching health conditions, managing appointments for elderly relatives, and understanding health insurance options.",
          examplePrompt: "I want to: understand my mother's medical diagnosis in simple terms so I can help her make informed decisions. As a result I expect to receive: a plain-language explanation and a list of important questions to ask her doctor. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "tech-update",
      label: "Professional tech upskilling",
      examplePrompt: "I want to: understand how AI tools can streamline my team's workflow and increase productivity. As a result I expect to receive: practical AI applications for my industry with implementation examples and ROI considerations. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "4060-tech2",
          title: "Learning new technologies",
          description: "Chatbots can explain new business software, provide personalized tutorials, and assist with digital tool adoption.",
          examplePrompt: "I want to: learn how to use Slack effectively because my company just adopted it. As a result I expect to receive: a beginner-friendly guide with best practices for communication and organization. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
  ],

  "60+": [
    {
      id: "health",
      label: "Health & wellness management",
      examplePrompt: "I want to: create a simple exercise routine that is safe for someone with arthritis and can be done at home. As a result I expect to receive: gentle exercises with clear descriptions and safety tips for my condition. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "60-meds",
          title: "Medication reminders & health management",
          description: "Voice chatbots can send medication reminders, confirm intake, and alert caregivers if doses are skipped. They can also track symptoms and support chronic condition management.",
          examplePrompt: "I want to: set up daily reminders for taking my blood pressure medication at 9 AM. As a result I expect to receive: a reliable reminder system with confirmation tracking to ensure I don't miss doses. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "independence",
      label: "Maintaining daily independence",
      examplePrompt: "I want to: organize my medications and create a system to remember when to take each one. As a result I expect to receive: practical organizing strategies and reminder methods that work without complicated technology. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "60-appointments",
          title: "Appointment support & healthcare navigation",
          description: "Assistance understanding insurance coverage, booking and reminding about medical visits, and explaining available health benefits. 82% of seniors have not had annual wellness visits and chatbots can help identify financial benefits.",
          examplePrompt: "I want to: keep track of my doctor appointments and understand what my health insurance covers. As a result I expect to receive: appointment reminders and clear explanations of my insurance benefits. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "socializing-senior",
      label: "Socializing & preventing isolation",
      examplePrompt: "I want to: find local activities and social groups for seniors in my area who share my interests in gardening. As a result I expect to receive: suggestions for community resources, clubs, and volunteer opportunities. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "60-companion",
          title: "Companionship & conversation",
          description: "Lonely seniors are increasingly using chatbots for daily companionship. Chatbots can share stories, ask trivia questions, play memory games, and offer meaningful conversations.",
          examplePrompt: "I want to: have a meaningful conversation about my memories from the 1960s. As a result I expect to receive: engaging questions that help me share stories and reminisce about that era. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "pension",
      label: "Pension & finance management",
      examplePrompt: "I want to: understand my pension benefits and optimize my monthly budget on a fixed income. As a result I expect to receive: a clear breakdown of my income sources and practical budgeting tips for retirees. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "60-tech",
          title: "Everyday technology assistance",
          description: "Step-by-step support for using smartphones, online services, video calls with family, and solving common technical problems. 71% of seniors have never used tools like ChatGPT, but with simple assistance they can benefit from technology.",
          examplePrompt: "I want to: send a photo to my granddaughter using WhatsApp but I'm not sure how. As a result I expect to receive: step-by-step instructions with simple language that guide me through the process. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
    {
      id: "learn-tech",
      label: "Learning new technologies",
      examplePrompt: "I want to: learn how to make a video call with my family using my smartphone. As a result I expect to receive: simple, step-by-step instructions with clear language that I can follow easily. Can you help me? If so, how? Do you need any additional information?",
      useCases: [
        {
          id: "60-tech2",
          title: "Everyday technology assistance",
          description: "Step-by-step support for using smartphones, online services, video calls with family, and solving common technical problems.",
          examplePrompt: "I want to: send a photo to my granddaughter using WhatsApp but I'm not sure how. As a result I expect to receive: step-by-step instructions with simple language that guide me through the process. Can you help me? If so, how? Do you need any additional information?",
        },
      ],
    },
  ],
};
