import React from 'react';

const Home = () => {
  return (
    <div className="md:flex md:gap-20 bg-slate-800 p-5">
      <img className="md:w-1/2" src="../../Asus_Laptop.png" alt="Asus_Laptop" />

      <div className="text-center md:mt-32">
        <h1 className="text-4xl md:text-7xl font-extrabold  text-cyan-400">
          East and west <br />
          <span className="text-white">Asus</span> is the best
        </h1>
        <p className="mt-5 text-xl text-white">
          ASUS VivoBook S15 is an unconventional take on daily computing, with
          an unique color-blocking design that tells the world that you go
          against the grain. Its narrow bezel design not only gives you an
          immersive viewing experience, but makes VivoBook S15 more compact and
          portable so you can take it wherever you go. <br />A Gun Metal chassis
          is paired with Cobalt Blue accents is designed to reflect bold musical
          expression that aims to break away from tradition.
        </p>
        <button className="mt-5 p-3 text-white border rounded">
          View full details
        </button>
      </div>
    </div>
  );
};

export default Home;
