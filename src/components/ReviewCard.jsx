const ReviewCard = ({ imgURL, customerName, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <h3 className="mt-1 font-syne text-3xl text-center font-bold">
        {customerName}
      </h3>
      <p className="mt-2 max-w-sm info-text">{feedback}</p>
    </div>
  );
};

export default ReviewCard;
