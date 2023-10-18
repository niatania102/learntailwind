import { useState } from "react";

import { shoes, statistics } from "../constants";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { Button, ShoeCard } from "../components";

const Hero = () => {
  // pass bigShoe1 as the basic currently selected shoe
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    // on extra large devices it's gonna be flex-row and usually it's flex-column
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      {/* max-xtra large device would have padding-x and padding-top 28 */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />
        {/* justify-start so the element starts at the left side */}
        {/* items-start so they start from the top  */}
        {/* flex-wrap if our screen is smaller, they start collapsing slowly */}
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        {/* render whichever one is selected */}
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        {/* flex to make it appear in a row */}
        {/* on small devices: gap-6 but usually would be gap-4 */}
        {/* absolute position to get where you want them */}
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {/* callback function will be given shoe and pass the shoe to setBigShoeImg and pass the current bigShoeImg  */}
          {/* so we know which one is currently selected */}
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
