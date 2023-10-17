const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[0px] shadow-xl px-10 py-16 bg-[#000000]">
      <div className="w-11 h-11 flex justify-center items-center bg-[#F22836] rounded-[5px]">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-syne text-3xl leading-normal font-bold text-[#ffffff]">
        {label}
      </h3>
      <p className="mt-3 break-words font-inter text-lg leading-normal text-[#ffffff]">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
