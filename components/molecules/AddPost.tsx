import * as React from 'react';
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  // XIcon,
} from '@heroicons/react/outline';
import { EmojiData, Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import { ImageGenerics } from '@/atoms/ImageGenerics';

export const AddPost: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [showEmoji, setShowEmoji] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide ${
        loading && 'opacity-60'
      }`}
    >
      <ImageGenerics
        src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/01/08/16/peter-sarstedt.jpg?width=982&height=726&auto=webp&quality=75"
        alt="profile picture"
        className="rounded-full cursor-pointer"
        ContainerClassName="h-11 w-[50px]"
        objectFit="cover"
        layout="fill"
      />

      <div className="divide-y divide-gray-700 w-full">
        <div className={`pb-7 ${inputValue && 'space-y-2.5'}`}>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What's happening?"
            rows={2}
            className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
          />
        </div>

        {!loading ? (
          <div className="flex items-center justify-between pt-2.5">
            <div className="flex items-center">
              <div
                className="icon"
                // onClick={() => filePickerRef.current.click()}
              >
                <PhotographIcon className="text-[#1d9bf0] h-[22px]" />
                <input
                  type="file"
                  hidden
                  // ref={filePickerRef}
                  // onChange={addImageToPost}
                />
              </div>

              <div className="icon rotate-90">
                <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
              </div>

              <div
                className="icon"
                onClick={() => setShowEmoji((showEmoji) => !showEmoji)}
              >
                <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
              </div>

              <div className="icon">
                <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
              </div>

              {showEmoji ? (
                <Picker
                  native={true}
                  onSelect={(e: EmojiData) => {
                    const { name, colons, emoticons, id } = e;

                    console.log({
                      name,
                      colons,
                      emoticons,
                      id,
                    });
                  }}
                  style={{
                    position: 'absolute',
                    marginTop: '465px',
                    marginLeft: -40,
                    maxWidth: '320px',
                    borderRadius: '20px',
                  }}
                  theme="dark"
                />
              ) : null}
            </div>

            <button
              className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
              disabled={!inputValue}
            >
              Tweet
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
