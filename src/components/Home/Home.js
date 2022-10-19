import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MoonIcon, StarIcon } from '@heroicons/react/24/solid';
import UserReviews from '../../hooks/UserReview';
import Review from '../Review/Review';

const Home = () => {
  // Dark mode
  const [darkToggle, setDarkToggle] = useState(false);

  // user review
  const [reviews] = UserReviews();
  const threeReviews = reviews.slice(0, 3);
  return (
    <div className={`${darkToggle ? 'bg-slate-900' : 'bg-slate-700'} p-1`}>
      <section>
        <button
          onClick={() => setDarkToggle(!darkToggle)}
          className={`mx-1 p-2 flex border rounded-xl ${
            darkToggle ? 'bg-slate-900' : 'bg-slate-700'
          }`}
        >
          {darkToggle ? (
            <MoonIcon className="w-6 h-6 text-blue-300"></MoonIcon>
          ) : (
            <MoonIcon className="w-6 h-6 text-white"></MoonIcon>
          )}
          <span className="text-cyan-300 ml-2 font-semibold">
            Dark Mode ({darkToggle ? 'on' : 'off'})
          </span>
        </button>
        <div className="md:flex md:gap-20 p-5">
          <img
            className="md:w-1/2"
            src="../../Asus_Laptop.png"
            alt="Asus_Laptop"
          />

          <div className="text-center md:mt-32">
            <h1 className="text-4xl md:text-7xl font-extrabold  text-cyan-400">
              East and west <br />
              <span className="text-white">ASUS</span> is the best
            </h1>
            <p className="mt-5 text-xl text-white">
              ASUS VivoBook S15 is an unconventional take on daily computing,
              with an unique color-blocking design that tells the world that you
              go against the grain. Its narrow bezel design not only gives you
              an immersive viewing experience, but makes VivoBook S15 more
              compact and portable so you can take it wherever you go. <br />A
              Gun Metal chassis is paired with Cobalt Blue accents is designed
              to reflect bold musical expression that aims to break away from
              tradition.
            </p>
            <button className="mt-5 p-3 text-white font-semibold border rounded-md hover:bg-cyan-500">
              <Link to="details">View full details</Link>
            </button>
          </div>
        </div>
      </section>
      <hr />

      <section className="m-3">
        <h1 className="text-white text-4xl font-bold text-center">
          User Reviews({threeReviews.length})
        </h1>
        <div className="mt-3 font-serif text-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
            {threeReviews.map((review) => (
              <Review key={review.id} review={review}></Review>
            ))}
          </div>
        </div>
        <div className="text-center">
          <button className="p-3 text-white font-semibold border rounded-md hover:bg-cyan-500 mx-auto">
            <Link className="flex" to="/customer_reviews">
              All reviews
              <StarIcon className="ml-1 w-6 h-6 text-yellow-400"></StarIcon>
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
