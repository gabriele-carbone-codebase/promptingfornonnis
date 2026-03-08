import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { usePromptBuilder } from "@/hooks/usePromptBuilder";
import { ProgressBar } from "./ProgressBar";
import { StepGoal } from "./StepGoal";
import { StepResult } from "./StepResult";
import { StepAttachments } from "./StepAttachments";
import { StepLinks } from "./StepLinks";
import { StepNotes } from "./StepNotes";
import { PromptOutput } from "./PromptOutput";
import { useTranslation } from "@/i18n/useTranslation";

export function PromptWizard() {
  const t = useTranslation();
  const {
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
  } = usePromptBuilder();

  const isLastStep = step === totalSteps;
  const showOutput = step > totalSteps;
  const canProceed = isStepValid(step);

  const handleNext = () => {
    if (isLastStep) {
      goToStep(totalSteps + 1);
    } else {
      nextStep();
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepGoal
            promptData={promptData}
            updatePromptData={updatePromptData}
          />
        );
      case 2:
        return (
          <StepResult
            promptData={promptData}
            updatePromptData={updatePromptData}
          />
        );
      case 3:
        return (
          <StepAttachments
            promptData={promptData}
            addAttachment={addAttachment}
            updateAttachment={updateAttachment}
            removeAttachment={removeAttachment}
          />
        );
      case 4:
        return (
          <StepLinks
            promptData={promptData}
            addWebLink={addWebLink}
            updateWebLink={updateWebLink}
            removeWebLink={removeWebLink}
          />
        );
      case 5:
        return (
          <StepNotes
            promptData={promptData}
            updatePromptData={updatePromptData}
          />
        );
      default:
        return (
          <PromptOutput
            generatedPrompt={generatePrompt()}
            promptData={promptData}
            onReset={reset}
          />
        );
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!showOutput && (
        <ProgressBar
          currentStep={step}
          totalSteps={totalSteps}
          onStepClick={goToStep}
        />
      )}

      <div className="px-4 py-6">
        {renderStep()}

        {!showOutput && (
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              variant="ghost"
              onClick={prevStep}
              disabled={step === 1}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.wizard.back}
            </Button>

            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className="gap-2"
            >
              {isLastStep ? (
                <>
                  <Sparkles className="w-4 h-4" />
                  {t.wizard.generatePrompt}
                </>
              ) : (
                <>
                  {t.wizard.next}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
