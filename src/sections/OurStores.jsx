import { swooshart3 } from "../assets/images";
import { Button } from "../components";

const OurStores = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-syne capitalize text-4xl lg:max-w-lg font-bold">
          <span className="text-[#000000]">The </span>
          <span className="text-[#F22836]">Swoosh</span>
        </h2>
        <p className="mt-4  info-text">
          Nike&apos;s iconic Swoosh logo is emblematic of its enduring legacy in
          the footwear industry. It debuted in 1971, created by designer Carolyn
          Davidson. The name Nike was inspired by the Greek goddess of victory.
        </p>
        <p className="mt-6 info-text">
          Nike shoes captivate buyers with a winning combination of style,
          innovation, and performance. They feature cutting-edge technologies
          like Air Max and Flyknit, ensuring comfort and support. Iconic designs
          and collaborations with athletes and celebrities add to their allure.
          Nike&apos;s commitment to sustainability and social responsibility
          also appeals to conscious consumers.
        </p>
        <div className="mt-11">
          <Button
            label="View details"
            backgroundColor="bg-[#F22836]"
            textColor="text-[#FFFFFF]"
          />
        </div>
      </div>

      <div className="flex-1 flex justify-end items-center">
        <img
          src={swooshart3}
          alt="product detail"
          width={500}
          height={200}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default OurStores;
