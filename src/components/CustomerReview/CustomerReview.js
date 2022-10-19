import React from 'react';
import UserReviews from '../../hooks/UserReview';
import Review from '../Review/Review';

const CustomerReview = () => {
  const [reviews] = UserReviews();
  return (
    <div className="mt-3 font-serif text-center">
      <h2 className="text-4xl font-bold bg-slate-800 text-cyan-400 p-1 mx-4 rounded-lg">
        Customer reviews({reviews.length})
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
