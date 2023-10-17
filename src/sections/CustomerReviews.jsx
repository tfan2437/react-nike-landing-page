import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-syne text-center text-4xl font-bold">
        What Our
        <span> Customers </span>
        Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg  text-center font-syne text-lg leading-7">
        Hear genuine stories from our satisfied customers
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-[150px]">
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
