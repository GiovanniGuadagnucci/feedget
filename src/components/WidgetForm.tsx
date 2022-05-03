import { CloseButton } from "./CloseButton";
import { BugBeetle, Lightbulb, Alien } from "phosphor-react";
import { useState } from "react";

export function WidgetForm() {
  const feedbackTypes = {
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

  type FeedbackType = keyof typeof feedbackTypes;
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-slate-800 p-4 relative rounded-2xl flex flex-col items-center shadow-lg md:bottom-2">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([type, value]) => {
            return (
              <button
                className="bg-slate-700 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-slate-300"
                onClick={() => setFeedbackType(type as FeedbackType)}
              >
                {value.image}
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <p>hey there</p>
      )}

      <footer className="text-xs text-slate-200">
        Feito com amor pelo Giogio
      </footer>
    </div>
  );
}
