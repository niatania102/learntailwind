import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up from{" "}
        <span className="text-coral-red">Updates & Newsletter</span>
      </h3>
      {/* large device, will take 40% of the width of the screen , usually will be w-full*/}
      <div className="lg:max-w-[40%] w-full items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input"/>
        <div>
          <Button className="flex max-sm:justify-end items-center max-sm:w-full" label="Sign Up" fullWidth/>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
