/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

export default function Meme({ ...props }) {
  const [memeImage, setMemeImage] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setMemeImage((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  function newMemeHandler() {
    const numRandom = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[numRandom].url;
    setMemeImage((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
          onChange={handleChange}
          name="topText"
          value={memeImage.topText}
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
          onChange={handleChange}
          name="bottomText"
          value={memeImage.bottomText}
        />
      </div>
      <div className="p-12 overflow-hidden">
        <button
          onClick={newMemeHandler}
          className="bg-gradient-to-r from-fuchsia-300 to-violet-500 h-10 pl-48 pr-48 rounded-lg font-bold text-white shadow-lg"
        >
          New meme 🖼
        </button>
        <div className="relative">
          <h2 id="image--text" className="top-0">
            {memeImage.topText}
          </h2>
          <h2 id="image--text" className="bottom-0">
            {memeImage.bottomText}
          </h2>
          <img
            className="pt-4 m-w-0 justify-center "
            src={memeImage.randomImage}
            alt="meme"
          ></img>
        </div>
      </div>
    </div>
  );
}
