import { FollowResult } from '@/types';
import { TrendingResult } from '@/types';
import { Trending } from '@/molecules/Trending';
import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import { ImageGenerics } from '@/atoms/ImageGenerics';

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

      {/* TRENDING */}
      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">Trending around you.</h4>
        {trendingResult.map((result, index) => {
          return <Trending key={index} result={result} />;
        })}
        <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
          Show more
        </button>
      </div>

      {/* WHO TO FOLLOW WIDGET */}
      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">Who to follow.</h4>

        {followResult.map((result, index) => {
          return (
            <div
              key={index}
              className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center group"
            >
              <ImageGenerics
                src={result.userImg}
                width={50}
                height={50}
                objectFit="cover"
                className="rounded-full"
                alt={result.username}
              />
              <div className="ml-4 leading-5 group">
                <h4 className="font-bold group-hover:underline">
                  {result.username}
                </h4>
                <h5 className="text-gray-500 text-[15px]">{result.tag}</h5>
              </div>
              <button className="ml-auto group-hover:bg-[#4a1369] bg-[#A020F0] text-white rounded-full font-bold text-sm py-1.5 px-3.5">
                Follow
              </button>
            </div>
          );
        })}

        <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
          Show more
        </button>
      </div>
    </div>
  );
};
