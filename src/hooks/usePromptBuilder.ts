import { useState, useCallback } from "react";
import type { PromptData, Attachment, WebLink } from "@/types/prompt";

const initialPromptData: PromptData = {
  goal: "",
  expectedResult: "",
  attachments: [],
  webLinks: [],
  extraNotes: "",
};

export function usePromptBuilder() {
  const [step, setStep] = useState(1);
  const [promptData, setPromptData] = useState<PromptData>(initialPromptData);

  const totalSteps = 5;

  const updatePromptData = useCallback((updates: Partial<PromptData>) => {
    setPromptData((prev) => ({ ...prev, ...updates }));
  }, []);

  const addAttachment = useCallback(() => {
    const newAttachment: Attachment = {
      id: crypto.randomUUID(),
      filename: "",
      description: "",
    };
    setPromptData((prev) => ({
      ...prev,
      attachments: [...prev.attachments, newAttachment],
    }));
  }, []);

  const updateAttachment = useCallback((id: string, updates: Partial<Attachment>) => {
    setPromptData((prev) => ({
      ...prev,
      attachments: prev.attachments.map((att) =>
        att.id === id ? { ...att, ...updates } : att
      ),
    }));
  }, []);

  const removeAttachment = useCallback((id: string) => {
    setPromptData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((att) => att.id !== id),
    }));
  }, []);

  const addWebLink = useCallback(() => {
    const newLink: WebLink = {
      id: crypto.randomUUID(),
      url: "",
      description: "",
    };
    setPromptData((prev) => ({
      ...prev,
      webLinks: [...prev.webLinks, newLink],
    }));
  }, []);

  const updateWebLink = useCallback((id: string, updates: Partial<WebLink>) => {
    setPromptData((prev) => ({
      ...prev,
      webLinks: prev.webLinks.map((link) =>
        link.id === id ? { ...link, ...updates } : link
      ),
    }));
  }, []);

  const removeWebLink = useCallback((id: string) => {
    setPromptData((prev) => ({
      ...prev,
      webLinks: prev.webLinks.filter((link) => link.id !== id),
    }));
  }, []);

  const nextStep = useCallback(() => {
    if (step < totalSteps) {
      setStep((prev) => prev + 1);
    }
  }, [step]);

  const prevStep = useCallback(() => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  }, [step]);

  const goToStep = useCallback((targetStep: number) => {
    if (targetStep >= 1 && targetStep <= totalSteps) {
      setStep(targetStep);
    }
  }, []);

  const reset = useCallback(() => {
    setStep(1);
    setPromptData(initialPromptData);
  }, []);

  const generatePrompt = useCallback((): string => {
    const parts: string[] = [];

    // Always include the goal
    parts.push(`I want to:\n${promptData.goal}`);

    // Expected result (only if provided)
    if (promptData.expectedResult.trim()) {
      parts.push(`As a result I expect to receive:\n${promptData.expectedResult}`);
    }

    // Attachments (only if any have filenames)
    const validAttachments = promptData.attachments.filter((att) => att.filename.trim());
    if (validAttachments.length > 0) {
      const attachmentsList = validAttachments
        .map((att) => `- ${att.filename}${att.description ? ` : ${att.description}` : ""}`)
        .join("\n");
      parts.push(`To help with this task, you will find the following attachments:\n${attachmentsList}`);
    }

    // Web links (only if any have URLs)
    const validLinks = promptData.webLinks.filter((link) => link.url.trim());
    if (validLinks.length > 0) {
      const linksList = validLinks
        .map((link) => `- ${link.url}${link.description ? ` : ${link.description}` : ""}`)
        .join("\n");
      parts.push(`As additional resources you can also navigate these webpages:\n${linksList}`);
    }

    // Extra notes (only if provided)
    if (promptData.extraNotes.trim()) {
      parts.push(`For added context, these are some additional information:\n${promptData.extraNotes}`);
    }

    // Closing question
    parts.push(`Can you help me? If so, how?\nDo you need any additional information?`);

    return parts.join("\n\n");
  }, [promptData]);

  const isStepValid = useCallback((stepNumber: number): boolean => {
    switch (stepNumber) {
      case 1:
        return promptData.goal.trim().length > 0;
      case 2:
      case 3:
      case 4:
      case 5:
        return true; // Optional steps
      default:
        return false;
    }
  }, [promptData]);

  return {
    step,
    totalSteps,
    promptData,
    updatePromptData,
    addAttachment,
    updateAttachment,
    removeAttachment,
    addWebLink,
    updateWebLink,
    removeWebLink,
    nextStep,
    prevStep,
    goToStep,
    reset,
    generatePrompt,
    isStepValid,
  };
}
