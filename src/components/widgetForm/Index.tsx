import { CloseButton } from "../CloseButton";
import { BugBeetle, Lightbulb, Alien } from "phosphor-react";
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentTypeStep } from "./steps/FeedbackContentTypeStep";

export const feedbackTypes = {
  bug: {
    title: "Bug",
    image: <BugBeetle className="w-6 h-6" />,
  },
  idea: {
    title: "Ideia",
    image: <Lightbulb className="w-6 h-6" />,
  },
  sugestion: {
    title: "Outro",
    image: <Alien className="w-6 h-6" />,
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const resetFeedbackType = () => setFeedbackType(null);

  return (
    <div className="bg-slate-800 p-4 relative rounded-2xl flex flex-col items-center shadow-lg md:bottom-2 md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
      ) : (
        <FeedbackContentTypeStep
          feedbacktype={feedbackType}
          onFeedbackTypeReset={resetFeedbackType}
        />
      )}
      <footer className="text-xs text-slate-200">
        Feito com amor pelo Giogio
      </footer>
    </div>
  );
}
