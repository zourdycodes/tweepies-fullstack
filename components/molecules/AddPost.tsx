import * as React from 'react';
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from '@heroicons/react/outline';
import { EmojiData, Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

export const AddPost: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  // https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/01/08/16/peter-sarstedt.jpg?width=982&height=726&auto=webp&quality=75

  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide ${
        loading && 'opacity-60'
      }`}
    >
      <h1>add post component</h1>

      <Picker
        onSelect={(e: EmojiData) => {
          const { name, colons, emoticons, id } = e;

          console.log({
            name,
            colons,
            emoticons,
            id,
          });
          // const codesArray = [];
          // sym.forEach((el) => codesArray.push('0x' + el));
          // const emoji = String.fromCodePoint(...codesArray);
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
    </div>
  );
};
