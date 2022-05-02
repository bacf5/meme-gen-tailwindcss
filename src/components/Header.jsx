import trollface from './../assets/trollface.png';

export default function Header() {
  return (
    <header className=" p-6 bg-gradient-to-r from-violet-600 to-fuchsia-300 flex font-Inter text-lg shadow-lg rounded-lg">
      <img
        src={trollface}
        alt="meme-logo"
        className="h-12 w-12 object-contain"
      />
      <h1 className="pt-2 ml-4 font-bold text-white tracking-wide">
        MEME GENERATOR
      </h1>
      <h2 className="m-auto text-sm text-white font-bold pl-32 pb-1">
        React Course - Project
      </h2>
    </header>
  );
}
