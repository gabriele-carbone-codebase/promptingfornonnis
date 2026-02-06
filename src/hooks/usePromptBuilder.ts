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

    if (promptData.goal) {
      parts.push(`**Task:** ${promptData.goal}`);
    }

    if (promptData.expectedResult) {
      parts.push(`**Expected Result:** ${promptData.expectedResult}`);
    }

    if (promptData.attachments.length > 0) {
      const attachmentsList = promptData.attachments
        .filter((att) => att.filename)
        .map((att) => `- ${att.filename}${att.description ? `: ${att.description}` : ""}`)
        .join("\n");
      if (attachmentsList) {
        parts.push(`**Reference Attachments:**\n${attachmentsList}`);
      }
    }

    if (promptData.webLinks.length > 0) {
      const linksList = promptData.webLinks
        .filter((link) => link.url)
        .map((link) => `- ${link.url}${link.description ? `: ${link.description}` : ""}`)
        .join("\n");
      if (linksList) {
        parts.push(`**Reference Links:**\n${linksList}`);
      }
    }

    if (promptData.extraNotes) {
      parts.push(`**Additional Notes:** ${promptData.extraNotes}`);
    }

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
