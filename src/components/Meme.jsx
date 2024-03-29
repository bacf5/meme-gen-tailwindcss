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
      <span className="flex justify-center">
        <a href="https://github.com/bacf5/meme-gen-tailwindcss">
          <svg
            className="m-1 hover:scale-125 ease-in duration-200 "
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
          </svg>
        </a>{' '}
        <a href="https://twitter.com/bcarusofassa">
          <svg
            className="m-1 hover:scale-125 ease-in duration-200"
            width="32px"
            height="32px"
            viewBox="0 0 97.75 97.75"
          >
            <g>
              <path
                d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z
		 M78.43,35.841c0.023,0.577,0.035,1.155,0.035,1.736c0,20.878-15.887,42.473-42.473,42.473c-8.127,0-16.04-2.319-22.883-6.708
		c-0.143-0.091-0.202-0.268-0.145-0.427c0.057-0.158,0.218-0.256,0.383-0.237c1.148,0.137,2.322,0.205,3.487,0.205
		c6.323,0,12.309-1.955,17.372-5.664c-6.069-0.512-11.285-4.619-13.161-10.478c-0.039-0.122-0.011-0.255,0.073-0.351
		c0.085-0.096,0.215-0.138,0.339-0.115c1.682,0.319,3.392,0.34,5.04,0.072c-6.259-1.945-10.658-7.808-10.658-14.483l0.002-0.194
		c0.003-0.127,0.072-0.243,0.182-0.306c0.109-0.064,0.245-0.065,0.355-0.003c1.632,0.906,3.438,1.488,5.291,1.711
		c-3.597-2.867-5.709-7.213-5.709-11.862c0-2.682,0.71-5.318,2.054-7.623c0.06-0.103,0.166-0.169,0.284-0.178
		c0.119-0.012,0.234,0.04,0.309,0.132c7.362,9.03,18.191,14.59,29.771,15.305c-0.193-0.972-0.291-1.974-0.291-2.985
		c0-8.361,6.802-15.162,15.162-15.162c4.11,0,8.082,1.689,10.929,4.641c3.209-0.654,6.266-1.834,9.09-3.508
		c0.129-0.077,0.291-0.065,0.41,0.028c0.116,0.094,0.164,0.25,0.118,0.394c-0.957,2.993-2.823,5.604-5.33,7.489
		c2.361-0.411,4.652-1.105,6.831-2.072c0.146-0.067,0.319-0.025,0.424,0.098c0.104,0.124,0.113,0.301,0.023,0.435
		C83.759,31.175,81.299,33.744,78.43,35.841z"
              />
            </g>
          </svg>
        </a>
      </span>
    </div>
  );
}
