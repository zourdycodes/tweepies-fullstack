import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';

export type TrendingResult = {
  heading: string;
  description: string;
  img: string;
  tags: string[];
};

type FollowResult = {
  userImg: string;
  username: string;
  tag: string;
};

interface Props {
  trendingResult: TrendingResult[];
  followResult: FollowResult[];
}

export const Widgets: React.FC<Props> = ({ followResult, trendingResult }) => {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12">
        <div className="flex items-center bg-[#202327] p-3 rounded-full relative">
          <SearchIcon className="text-gray-500 h-5 z-50" />
          <input
            type="text"
            className="bg-transparent placeholder-gray-600 outline-none text-[#d9d9d9] absolute focus:outline-none focus:border-none pl-11 border border-transparent w-full rounded-full"
            placeholder="Search Twitter"
          />
        </div>
      </div>
    </div>
  );
};
