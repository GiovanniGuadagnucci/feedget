import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button>
      <X className="w-4 h-4 font-bold right-5 top-5 absolute" />
    </Popover.Button>
  );
}
