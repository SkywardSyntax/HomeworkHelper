import { Popover } from '@headlessui/react';

const MyPopover = () => {
  return (
    <Popover className="relative">
      <Popover.Button>Open Popover</Popover.Button>
      <Popover.Panel className="absolute z-10">
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <p>This is the content of the popover.</p>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default MyPopover;
