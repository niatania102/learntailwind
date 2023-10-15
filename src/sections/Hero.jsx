import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { statistics } from "../constants";

const Hero = () => {
  return (
    // on extra large devices it's gonna be flex-row and usually it's flex-column
    <section
      id="home"
      className="w-full p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="font-montserrat text-xl text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text[-72px] max-sm:leading[-82px] font-bold">
          <span className="bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active live.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
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
      <div className="relative flex-1 flex justify-center items-center xl:minh-screen max-x:py-40 bg-primary bg-hero bg-cober bg-center">
        <img
          src={bigShoe1}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
