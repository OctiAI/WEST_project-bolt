import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Quincy Mittertreiner",
      location: "Kensington, Calgary",
      rating: 5,
      text: "Highly recommend Westland for any EV charging equipment or installation services you may require. Installations for EZ's can be tricky and the Westland team did an excellent job!"
    },
    {
      name: "Sara S",
      location: "Brentwood, Calgary", 
      rating: 5,
      text: "Our company has been using Westland for many years. They are a top notch company. Very professional. Reasonable prices. Quotes and estimates are right on. Friendly and knowledgeable technicians. Very prompt and quick to attend in any situation."
    },
    {
      name: "Vikram Bakshi",
      location: "Mission, Calgary",
      rating: 5,
      text: "We have been using Westland Electric at our commercial buildings for 12 years. All their staff are great to deal with and very experienced. They explain the best solution and costs before doing work."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What Calgary Homeowners Say About Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{review.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
                 <h3 className="text-xl text-center text-gray-900 mt-8">
          Rated 4.7/5 stars on Google based on 25 reviews
        </h3>
      </div>
    </section>
  );
};

export default Reviews;