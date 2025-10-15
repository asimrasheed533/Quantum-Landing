import Group1 from "assets/Group-1.png";
import Group2 from "assets/Group-2.png";
import bottomLeft from "assets/bottomLeft.png";
import bottomMid from "assets/bottomMid.png";
import bottomRight from "assets/bottomRight.png";
import topLeft from "assets/topLeft.png";
import topRight from "assets/topRight.png";
import Wrapper from "./wrapper";
import { motion } from "motion/react";
const heroVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.5, delayChildren: 0.3 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function Hero() {
  return (
    <Wrapper>
      <div className=" h-fit md:h-[850px] w-full mt-32 md:mt-16 justify-center flex flex-col items-center gap-4 md:gap-16">
        <div className="flex w-full justify-evenly">
          <div className="relative flex-1 hidden sm:block">
            <img
              src={Group1}
              alt="Mobile Screen send money"
              className="hidden md:absolute left-0 -bottom-8 h-[212px] w-[212px] object-cover"
            />
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
              data-lag="0.4"
              src={topLeft}
              alt="cursor with name sara"
              className="absolute bottom-0 right-0 object-contain left-cursor"
            />
          </div>
          <div data-lag="0.5" className="w-full sm:max-w-[45%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
              className="text-center text-2xl md:text-4xl lg:text-7xl font-semibold bg-gradient-to-r from-[var(--text)] to-white bg-clip-text text-transparent font-poppins hero-heading"
            >
              Design work, <div>the efficient way</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,

                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
              className="text-center text-[var(--text)] mt-4 hero-text overflow-hidden"
            >
              Innovative design solutions for technology firms and emerging
              businesses weary of the typical aesthetic methodology. Arriving
              shortly.
            </motion.div>
          </div>
          <div className="relative flex-1 hidden sm:block">
            <img
              src={Group2}
              alt="Mobile Screen send money"
              className=" right-0 -bottom-8 h-[212px] w-[212px] object-cover hidden md:absolute"
            />
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
              data-lag="0.6"
              src={topRight}
              alt="cursor with name sara"
              className="absolute top-0 left-0 object-contain right-cursor"
            />
          </div>
        </div>
        <motion.div
          variants={heroVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col md:flex-row w-full justify-around items-center gap-4 relative"
        >
          <motion.div variants={childVariants}>
            <img
              data-lag="1.5"
              src={bottomLeft}
              alt="Mobile Screen send money"
              className="hidden md:block hero-image"
            />
          </motion.div>
          <motion.div variants={childVariants}>
            <img
              data-lag=".9"
              src={bottomMid}
              alt="Mobile Screen send money"
              className="hero-image"
            />
          </motion.div>
          <motion.div variants={childVariants}>
            <img
              data-lag="0.5"
              src={bottomRight}
              alt="Mobile Screen send money"
              className="hero-image"
            />
          </motion.div>
        </motion.div>
      </div>
    </Wrapper>
  );
}
