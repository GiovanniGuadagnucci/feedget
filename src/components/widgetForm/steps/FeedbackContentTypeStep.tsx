import { ArrowLeft } from "phosphor-react";
import { useState } from "react";
import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "../Index";
import { ScreenShotButton } from "../ScreenShotButton";

interface FeedbackContentTypeStepProps {
  feedbacktype: FeedbackType;
  onFeedbackTypeReset: () => void;
}

export function FeedbackContentTypeStep({
  feedbacktype,
  onFeedbackTypeReset,
}: FeedbackContentTypeStepProps) {
  const [screenshot, setScreenshot] = useState<String | null>(null);
  const feedbackTypeInfo = feedbackTypes[feedbacktype];

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute"
          onClick={onFeedbackTypeReset}
        >
          <ArrowLeft weight="bold" className="w-4 h-5" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          {feedbackTypeInfo.image}
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form action="" className="my-2 w-full">
        <textarea
          className="scrollbar scrollbar-thumb-transparent scrollbar-track-transparent min-w-[304px] min-h-[112px] w-full text-sm border-slate-300 bg-transparent rounded-md"
          placeholder="Conte-me o que te aflinge"
        />
      </form>
      <footer className="flex gap-2 my-2 w-full">
        <ScreenShotButton
          onScreenshot={setScreenshot}
          screenshot={screenshot}
        />
        <button
          type="submit"
          className="p-2 bg-slate-900 rounded-md boder-transparent flex-1 justify-center items-center text-sm w-full"
        >
          Enviar Feedback
        </button>
      </footer>
    </>
  );
}
