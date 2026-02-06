

# PromptCoach - Implementation Plan

## Overview
A beginner-friendly web app that helps anyone create effective AI chatbot prompts through a guided wizard and interactive training lessons.

---

## Phase 1: Core Prompt Builder

### Landing Page
- Clean hero with tagline: *"Create perfect AI prompts in 5 easy steps"*
- Prominent "Start Building" button
- Link to free training section
- Soft pastel accents on white background

### 5-Step Wizard
A friendly, one-question-per-page flow with progress bar:

1. **What should the chatbot do?** – Dropdown examples + text input
2. **Describe your ideal result** – Tone, length, detail level guidance
3. **Add attachments** – Optional filename + description fields (reference only)
4. **Add web links** – Optional URL + description with disclaimer
5. **Any extra notes?** – Open text area

### Generated Prompt Output
- Clean card displaying the assembled prompt
- One-click **Copy** button
- Helpful note: *"Paste this into ChatGPT, Claude, or any AI chatbot!"*
- Link to training: *"Learn how to write even better prompts"*

---

## Phase 2: User Accounts & Prompt Library

### Authentication
- Simple email/password signup and login
- Friendly error messages, no jargon

### Personal Prompt Library
- Save generated prompts with custom titles
- View, edit, copy, or delete saved prompts
- Toggle prompts as public or private

### User Profile
- Display name and saved prompts
- Simple settings

---

## Phase 3: Community Features

### Public Prompt Feed
- Browse prompts shared by other users
- Search by keyword or category
- Like and copy buttons on each prompt

### Prompt Sharing
- Share button generates a link
- Public prompts appear in community feed

---

## Phase 4: Interactive Training

### Training Hub
Accessible from main navigation: *"Free Training: Master Prompts in 5 Minutes"*

### 5 Interactive Lessons
Each lesson follows: **Explanation → Quiz → Feedback**

| Lesson | Concept | Quiz Type |
|--------|---------|-----------|
| 1 | "More text is better" | Compare two prompts, pick the detailed one |
| 2 | "Ask what info is needed" | Identify prompt that asks AI for clarification |
| 3 | "Use examples" | Compare with/without examples |
| 4 | "Use quotes for text" | Pick correctly quoted version |
| 5 | "Assign roles" | Identify prompt with role assignment |

### Gamification
- Progress bar showing lesson completion
- "Next Lesson" button after each quiz
- Completion badge when all 5 lessons finished
- Prompts increase in complexity as lessons progress

---

## Design System

### Visual Style
- **Background**: Clean white with soft pastel accent colors
- **Typography**: Friendly, readable fonts (Inter or similar)
- **Buttons**: Rounded corners, pastel hover states
- **Cards**: Subtle shadows, generous padding
- **Progress bars**: Smooth animations

### UX Principles
- Mobile-first, responsive design
- Maximum 2-3 actions per screen
- Clear progress indicators everywhere
- Friendly, encouraging microcopy

---

## Technical Approach

### Frontend
- React with Vite (fast builds)
- Tailwind CSS for styling
- React Router for navigation

### Backend (Lovable Cloud)
- User authentication (email/password)
- Database for prompts, users, likes
- Secure prompt sharing

