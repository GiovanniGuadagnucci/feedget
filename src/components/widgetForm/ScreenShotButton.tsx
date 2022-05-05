import html2canvas from "html2canvas";
import { Camera, CircleNotch, Trash } from "phosphor-react";
import { useState } from "react";

interface ScreenShotButtonProps {
  screenshot: string;
  onScreenshot: (screenshot: string | null) => void;
}

export function ScreenShotButton({
  screenshot,
  onScreenshot,
}: ScreenShotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function takeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    onScreenshot(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={() => onScreenshot(null)}
        className="p-1 w-10 h-10 rounded-md border-transition flex justify-end items-end"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 100,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={takeScreenshot}
      className="p-2 bg-slate-700 rounded-md"
    >
      {isTakingScreenshot ? (
        <CircleNotch className="w-6 h-6 animate-spin" />
      ) : (
        <Camera className="w-6 h-6" />
      )}
    </button>
  );
}
