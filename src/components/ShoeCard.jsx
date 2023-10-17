const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-[4px] ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-[#ffffff] hover:border-coral-red"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-primary bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe colletion"
          width={150}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
