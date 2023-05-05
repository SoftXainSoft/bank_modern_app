import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily create a unique <br className="sm:block hidden" /> book & get
        help along the way.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Using our advanced AI technology based on GPT-3.5, we can generate a
        unique story for each child - a story that's not only personalized to
        the child's name and interests, but also offers the possibility of
        including friends or other important people in the plot. In addition to
        our AI technology, we also use Midjourney to create custom illustrations
        that bring the story to life and engage young readers even further.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
