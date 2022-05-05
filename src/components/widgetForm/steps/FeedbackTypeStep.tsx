import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "../Index";

interface FeedbackTypeStepProps {
  onFeedbackTypeChange: (type: FeedbackType | null) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChange,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-6 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([type, value]) => {
          return (
            <button
              className="bg-slate-700 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-slate-300"
              onClick={() => onFeedbackTypeChange(type as FeedbackType)}
            >
              {value.image}
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
