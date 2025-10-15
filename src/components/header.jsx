import { motion } from "motion/react";
import { useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  function checkWidth() {
    if (window.innerWidth > 768) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }

  const scrollToSection = (sectionId) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: sectionId,
        offsetY: 100,
      },
      ease: "power3.inOut",
    });

    // Close mobile menu after clicking
    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  };

  useLayoutEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.7 },
      }}
      className="flex w-full justify-between items-center p-4 fixed top-4 max-w-[1440px] left-0 right-0 mx-auto z-[999]"
    >
      <div>
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_43_997)">
            <g clipPath="url(#clip1_43_997)">
              <mask
                id="mask0_43_997"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="51"
                height="51"
              >
                <path
                  d="M0.331543 0.5H50.3315V50.5H0.331543V0.5Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_43_997)">
                <path
                  d="M16.9975 8.849C16.9975 13.449 20.7305 17.182 25.3305 17.182H41.9975C39.7877 17.1812 37.6687 16.303 36.1061 14.7404C34.5435 13.1779 33.6653 11.0588 33.6645 8.849M33.6495 8.833V0.5H16.9835V8.833H33.6495ZM33.6655 42.18C33.6655 37.581 29.9315 33.848 25.3315 33.848H8.66553C13.2655 33.848 16.9985 37.581 16.9985 42.181"
                  fill="white"
                />
                <path
                  d="M17.0135 42.167V50.5H33.6796V42.167H17.0135Z"
                  fill="white"
                />
                <path
                  d="M41.9985 17.1821C39.7887 17.1829 37.6697 18.0611 36.1071 19.6237C34.5445 21.1862 33.6663 23.3053 33.6655 25.5151V42.1801C33.6655 37.5801 37.3985 33.8471 41.9985 33.8471M41.9985 33.8181H50.3315V17.1521H41.9985V33.8181ZM8.66554 33.8491C13.2655 33.8491 16.9985 30.1151 16.9985 25.5151V8.8501C16.9985 13.4501 13.2655 17.1831 8.66554 17.1831M8.66454 17.1821H0.331543V33.8481H8.66454V17.1821Z"
                  fill="white"
                />
              </g>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_43_997">
              <rect
                width="50"
                height="51"
                fill="white"
                transform="translate(0.331543)"
              />
            </clipPath>
            <clipPath id="clip1_43_997">
              <rect
                width="50"
                height="51"
                fill="white"
                transform="translate(0.331543)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      {isMenuOpen ? (
        <ul className="flex absolute top-[85px] w-[97%] md:w-fit rounded-4xl z-50 right-2 flex-col md:static md:flex-row gap-4 border-2 border-[#262626] md:rounded-full p-4 bg-[var(--primary-light)]/50 backdrop-blur-sm h-[30vh] md:h-fit justify-around">
          <li
            onClick={() => scrollToSection("#features")}
            className="text-center text-2xl md:text-base px-2 text-[var(--text)] hover:text-white transition-all delay-200 cursor-pointer"
          >
            Features
          </li>
          <li
            onClick={() => scrollToSection("#how-it-works")}
            className="text-center text-2xl md:text-base px-2 text-[var(--text)] hover:text-white transition-all delay-200 cursor-pointer"
          >
            How it works
          </li>
          <li
            onClick={() => scrollToSection("#testimonials")}
            className="text-center text-2xl md:text-base px-2 text-[var(--text)] hover:text-white transition-all delay-200 cursor-pointer"
          >
            Testimonials
          </li>
          <li
            onClick={() => scrollToSection("#faqs")}
            className="text-center text-2xl md:text-base px-2 text-[var(--text)] hover:text-white transition-all delay-200 cursor-pointer"
          >
            FAQs
          </li>
        </ul>
      ) : null}
      <div className="flex flex-row-reverse gap-4 items-center">
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="border-2 border-[#262626] rounded-full p-4 px-6 bg-[var(--primary-light)] md:hidden"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
        <button className="border-2 border-[#262626] rounded-full p-4 px-6 bg-[var(--primary-light)]/50 backdrop:blur-sm hover:bg-[var(--primary-light)] transition-all delay-200 text-[var(--text)] hover:text-white">
          Notify me
        </button>
      </div>
    </motion.div>
  );
}
