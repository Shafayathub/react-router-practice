import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const Review = ({ review }) => {
  const { userImage, description, comments, rating } = review;
  return (
    <div className="bg-slate-800 text-cyan-400 p-2 border rounded-lg">
      <div className="flex justify-center items-center space-x-2">
        <img
          className="w-12 h-12 border-2 rounded-full"
          src={userImage}
          alt=""
        />
        <h2 className="text-2xl font-semibold text-cyan-50">{comments.user}</h2>
      </div>
      <div className="mt-1">
        <p className="text-justify">{description}</p>
        <p className="mt-2 text-justify font-semibold text-cyan-50">
          {comments.text}
        </p>
        <p className="flex text-cyan-100 justify-center mt-2">
          Rating: {rating}
          <StarIcon className="w-6 h-6 text-yellow-400"></StarIcon> out of 5
          <StarIcon className="w-6 h-6 text-yellow-400"></StarIcon>
        </p>
      </div>
    </div>
  );
};

export default Review;
