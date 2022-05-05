import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./widgetForm/Index";

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-5 md:bottom-8 md:right-8 flex flex-col items-end ">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="flex items-center bg-slate-800 px-3 h-12 rounded-full group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500">
          <span className="pl-2"></span>
          FeedBack
        </span>
      </Popover.Button>
    </Popover>
  );
}
