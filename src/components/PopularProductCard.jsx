const PopularProductCard = ({ imgURL, name, material, size }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[342px] h-[342px]" />
      {/* <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-inter text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div> */}
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-syne">
        {name}
      </h3>
      <p className="mt-2 font-normal text-lg font-inter text-slate-gray leading-7">
        {material}
      </p>
      <p className="mt-2 font-normal text-lg font-inter text-slate-gray leading-7">
        {size}
      </p>
    </div>
  );
};

export default PopularProductCard;
