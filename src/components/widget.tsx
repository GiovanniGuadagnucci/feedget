import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-5 ">
      <Popover.Panel>
        <p>Hey There</p>
      </Popover.Panel>
      <Popover.Button className="flex items-center bg-violet-500 px-3 h-12 rounded-full text-white group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500">
          <span className="pl-2">FeedBack</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}
