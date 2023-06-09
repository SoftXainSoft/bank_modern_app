import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Book</span> creation.
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[32px] text-white ss:leading-[100px] leading-[75px]">
          Create unique
          <br className="sm:block hidden" />{" "}
          <span className="text-gradient text-[48px]"> children's books</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0" />
        <GetStarted />
      </div>

      <h1 className=" font-poppins font-semibold ss:text-[68px] text-[32px] text-white ss:leading-[100px] leading-[75px] w-full">
        with the help of AI.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Welcome to "UNIQUE", our unique service for creating personalized
        children's books! We believe that every child is special and deserves
        their own story - that's why we've developed a platform that allows you
        to create a book specifically tailored to your child.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-index[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);
export default Hero;
