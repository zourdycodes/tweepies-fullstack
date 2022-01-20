import React from 'react';

type Props = {
  Icon: React.ElementType;
  text: string;
  active?: boolean;
};

export const SidebarLink: React.FC<Props> = ({ Icon, active, text }) => {
  return (
    <div
      className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
        active && 'font-bold'
      }`}
      // onClick={() => active && router.push('/')}
    >
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
};
