import { ReviewCard } from "../Components";
import { reviews } from "../Constants";

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
      Customer Reviews:
        <span className='text-pink-600'>Your Stories, </span>
        Our Inspiration
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
      These reviews are not just words; they are the authentic experiences of our customers. From everyday wear to special occasions, our products have become a part of your lives, and we are honored to be part of your journey.
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;