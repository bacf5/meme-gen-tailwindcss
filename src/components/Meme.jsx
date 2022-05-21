import { useState } from 'react';

export default function Meme({ ...props }) {
  const [memeImage, setMemeImage] = useState('');

  function newMemeHandler() {
    const memeArray = props.item.data.memes;
    const numRandom = Math.floor(Math.random() * memeArray.length);
    console.log(memeArray[numRandom].url);
    return setMemeImage(memeArray[numRandom].url);
  }

  return (
    <div className="bg-white py-10 px-4  rounded-lg sm:px-10 mt-4">
      <div className="flex">
        <label
          for="text-up"
          class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
        ></label>
        <input
          type="text"
          id="text-up"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Text up"
        />
        <label
          for="text-down"
          class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300 m-8"
        ></label>
        <input
          type="text"
          id="text-down"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Text down"
        />
      </div>
      <div className="p-12">
        <button
          onClick={newMemeHandler}
          className="bg-gradient-to-r from-violet-600 to-fuchsia-300 h-10 pl-48 pr-48 rounded-lg font-bold text-base shadow-lg"
        >
          New meme 🖼
        </button>
        <img
          className="pt-4 m-w-0 justify-center "
          src={memeImage}
          alt="meme"
        ></img>
      </div>
    </div>
  );
}
