import growth from "./assets/growth.png";
import chart from "./assets/chart.png";
import cards from "./assets/cards.png";
import icons from "./assets/icons.png";
import profiles from "./assets/profiles.png";
import laptopPerson from "./assets/laptopPerson.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion, useScroll, useSpring } from "motion/react";
import Header from "components/header";
import Hero from "components/hero";
import Wrapper from "components/wrapper";
import Choosen from "components/choosen";
import "swiper/css";
import "swiper/css/pagination";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Introducing from "./components/introducing";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
    });
  });

  // const locomotiveScroll = new LocomotiveScroll({
  //   lenisOptions: {
  //     lerp: 0.07,
  //     smoothWheel: true,
  //   },
  // });

  const faqs = [
    {
      id: 1,
      question: "Can I use Atomic Template for commercial purposes?",
      answer:
        "This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. See more at https://www.gnu.org/licenses/gpl-3.0.html",
    },
    {
      id: 2,
      question: "Read and understand Template restrictions?",
      answer:
        "This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. See more at https://www.gnu.org/licenses/gpl-3.0.html",
    },
    {
      id: 3,
      question: "Accept the Template Usage Disclaimer",
      answer:
        "This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. See more at https://www.gnu.org/licenses/gpl-3.0.html",
    },
    {
      id: 4,
      question: "Can I use Atomic Template for commercial purposes?",
      answer:
        "This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. See more at https://www.gnu.org/licenses/gpl-3.0.html",
    },
    {
      id: 5,
      question: "Read and understand Template restrictions?",
      answer:
        "This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. See more at https://www.gnu.org/licenses/gpl-3.0.html",
    },
    {
      id: 6,
      question: "Accept the Template Usage Disclaimer",
      answer:
        "This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. See more at https://www.gnu.org/licenses/gpl-3.0.html",
    },
  ];

  return (
    <>
      {/* header - outside smooth wrapper for fixed positioning */}
      <Header />
      <motion.div
        style={{ scaleX }}
        className="w-full bg-[var(--secondary)] h-1 fixed top-0 left-0 z-50 origin-left"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* hero */}
          <Hero />
          {/* choosen */}
          <Choosen />
          {/* Introducing */}
          <Introducing />
          {/* what you 'll get */}
          <Wrapper>
            <div
              id="features"
              className="flex flex-col w-full items-center py-4"
            >
              <div className="flex items-center text-xl text-[var(--secondary)] gap-2 mb-4 fade-in">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_43_9)">
                    <g clipPath="url(#clip1_43_9)">
                      <mask
                        id="mask0_43_9"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="26"
                        height="26"
                      >
                        <path
                          d="M25.5 0.988281H0.5V25.9883H25.5V0.988281Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_43_9)">
                        <path
                          d="M13 3.33203C10.9913 3.33203 9.02768 3.92768 7.35749 5.04367C5.68731 6.15965 4.38556 7.74584 3.61685 9.60165C2.84815 11.4575 2.64702 13.4996 3.0389 15.4697C3.43079 17.4398 4.39807 19.2495 5.81845 20.6699C7.23883 22.0902 9.0485 23.0575 11.0186 23.4494C12.9887 23.8413 15.0308 23.6402 16.8866 22.8715C18.7424 22.1027 20.3286 20.801 21.4446 19.1308C22.5606 17.4606 23.1563 15.497 23.1563 13.4883C23.1534 10.7956 22.0825 8.21392 20.1784 6.30987C18.2744 4.40582 15.6927 3.33487 13 3.33203ZM18.7764 11.8623L14.2695 13.793L17.5049 17.6758C17.6375 17.8351 17.7014 18.0405 17.6825 18.2469C17.6637 18.4533 17.5636 18.6438 17.4043 18.7764C17.245 18.909 17.0396 18.9729 16.8332 18.954C16.6268 18.9352 16.4363 18.8351 16.3037 18.6758L13 14.709L9.69434 18.6758C9.56173 18.8351 9.37128 18.9352 9.16488 18.954C8.95848 18.9729 8.75304 18.909 8.59375 18.7764C8.43447 18.6438 8.33439 18.4533 8.31552 18.2469C8.29666 18.0405 8.36056 17.8351 8.49317 17.6758L11.7305 13.793L7.22364 11.8623C7.1264 11.824 7.03784 11.7665 6.96321 11.6933C6.88859 11.6202 6.8294 11.5327 6.78916 11.4363C6.74893 11.3398 6.72845 11.2363 6.72896 11.1317C6.72947 11.0272 6.75095 10.9238 6.79212 10.8278C6.8333 10.7317 6.89333 10.6449 6.96867 10.5724C7.044 10.5 7.13311 10.4434 7.23072 10.406C7.32833 10.3686 7.43244 10.3511 7.5369 10.3547C7.64137 10.3583 7.74405 10.3828 7.83887 10.4268L12.2188 12.3037V7.82422C12.2188 7.61702 12.3011 7.4183 12.4476 7.27179C12.5941 7.12528 12.7928 7.04297 13 7.04297C13.2072 7.04297 13.4059 7.12528 13.5524 7.27179C13.6989 7.4183 13.7813 7.61702 13.7813 7.82422V12.3037L18.1611 10.4268C18.256 10.3828 18.3586 10.3583 18.4631 10.3547C18.5676 10.3511 18.6717 10.3686 18.7693 10.406C18.8669 10.4434 18.956 10.5 19.0313 10.5724C19.1067 10.6449 19.1667 10.7317 19.2079 10.8278C19.2491 10.9238 19.2705 11.0272 19.271 11.1317C19.2716 11.2363 19.2511 11.3398 19.2108 11.4363C19.1706 11.5327 19.1114 11.6202 19.0368 11.6933C18.9622 11.7665 18.8736 11.824 18.7764 11.8623Z"
                          fill="#E2FF02"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_43_9">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(0.5 0.988281)"
                      />
                    </clipPath>
                    <clipPath id="clip1_43_9">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(0.5 0.988281)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                What you'll get
              </div>
              <div className="w-full  md:w-1/2 md:text-4xl text-center text-2xl font-semibold bg-gradient-to-r from-[var(--text)] to-white bg-clip-text text-transparent font-poppins fade-in ">
                We resolve problems associated with creative procedures.
              </div>
              <div className="w-full flex flex-col md:flex-row gap-4 lg:my-8 my-4 fade-in ">
                <div className="w-full md:w-1/3 md:aspect-square rounded-2xl flex justify-start md:justify-center items-start p-8 bg-gradient-to-b from-[#1E1E1E] to-[#141414] border border-[#262626] hover:border-[var(--secondary)] transition-all delay-200 hover:shadow-md hover:shadow-[var(--secondary)] ">
                  <img
                    src={growth}
                    alt="Growth Picture"
                    className="relative md:top-8 w-72 object-contain"
                  />
                </div>
                <div className="w-full md:w-1/3 md:aspect-square rounded-2xl gap-8 md:gap-0 flex flex-col justify-between  p-8 bg-gradient-to-b from-[#1E1E1E] to-[#141414] border border-[#262626] hover:border-[var(--secondary)] transition-all delay-200 hover:shadow-md hover:shadow-[var(--secondary)] ">
                  <img
                    src={cards}
                    alt="Growth Picture"
                    className="relative md:top-8 w-72 object-contain "
                  />
                  <div>
                    <div className="text-xl mb-2">Tailor–made design</div>
                    <div className="text-[var(--text)]">
                      We've got the expertise to make your vision a reality.
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 md:aspect-square gap-8 md:gap-0 rounded-2xl flex flex-col justify-between p-8 bg-gradient-to-b from-[#1E1E1E] to-[#141414] borderborder-[#262626] hover:border-[var(--secondary)] transition-all delay-200 hover:shadow-md hover:shadow-[var(--secondary)]">
                  <img
                    src={chart}
                    alt="Growth Picture"
                    className="relative md:top-8 w-72 object-contain"
                  />
                  <div>
                    <div className="text-xl mb-2">Scalable as you grow</div>
                    <div className="text-[var(--text)]">
                      We’re ready to meet your evolving needs.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-4 lg:gap-8 flex-col lg:flex-row">
                <div className="lg:w-1/2 h-[220px] rounded-2xl flex justify-between p-8 bg-gradient-to-b from-[#1F1F1F] to-[#141414] border border-[#262626] relative">
                  <div className="w-1/2 lg:block flex flex-col justify-center">
                    <div className="text-2xl mb-2">Workflow integration</div>
                    <div className="text-[var(--text)]">
                      Seamlessly connect all your existing apps.
                    </div>
                  </div>
                  <div className="w-1/2 ">
                    <img
                      src={icons}
                      alt="Social Icons"
                      className="absolute right-0 h-24 sm:h-fit"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 h-[220px] rounded-2xl flex justify-between p-8 bg-gradient-to-b from-[#1F1F1F] to-[#141414] border border-[#262626] relative overflow-hidden">
                  <div className="w-[40%] lg:block flex flex-col justify-center">
                    <div className="text-2xl mb-2">Collaborate real-time</div>
                    <div className="text-[var(--text)]">
                      Seamlessly connect all your existing apps.
                    </div>
                  </div>
                  <div className="w-[60%]">
                    <img
                      src={profiles}
                      alt="Social Icons"
                      className="absolute bottom-0 sm:-right-4 -right-12 h-24 sm:h-fit"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-6 lg:w-[65%] flex-wrap my-6 justify-center">
                <TextCard text="Design workshops" />
                <TextCard text="Design workshops" />
                <TextCard text="Design workshops" />
                <TextCard text="Design workshops" />
                <TextCard text="Design workshops" />
                <TextCard text="Design workshops" />
                <TextCard text="Design workshops" />
              </div>
            </div>
          </Wrapper>
          {/* how it works */}
          <Wrapper>
            <div
              id="how-it-works"
              className="flex flex-col w-full items-center py-4"
            >
              <div className="flex items-center text-xl text-[var(--secondary)] gap-2 mb-4">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_43_9)">
                    <g clipPath="url(#clip1_43_9)">
                      <mask
                        id="mask0_43_9"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="26"
                        height="26"
                      >
                        <path
                          d="M25.5 0.988281H0.5V25.9883H25.5V0.988281Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_43_9)">
                        <path
                          d="M13 3.33203C10.9913 3.33203 9.02768 3.92768 7.35749 5.04367C5.68731 6.15965 4.38556 7.74584 3.61685 9.60165C2.84815 11.4575 2.64702 13.4996 3.0389 15.4697C3.43079 17.4398 4.39807 19.2495 5.81845 20.6699C7.23883 22.0902 9.0485 23.0575 11.0186 23.4494C12.9887 23.8413 15.0308 23.6402 16.8866 22.8715C18.7424 22.1027 20.3286 20.801 21.4446 19.1308C22.5606 17.4606 23.1563 15.497 23.1563 13.4883C23.1534 10.7956 22.0825 8.21392 20.1784 6.30987C18.2744 4.40582 15.6927 3.33487 13 3.33203ZM18.7764 11.8623L14.2695 13.793L17.5049 17.6758C17.6375 17.8351 17.7014 18.0405 17.6825 18.2469C17.6637 18.4533 17.5636 18.6438 17.4043 18.7764C17.245 18.909 17.0396 18.9729 16.8332 18.954C16.6268 18.9352 16.4363 18.8351 16.3037 18.6758L13 14.709L9.69434 18.6758C9.56173 18.8351 9.37128 18.9352 9.16488 18.954C8.95848 18.9729 8.75304 18.909 8.59375 18.7764C8.43447 18.6438 8.33439 18.4533 8.31552 18.2469C8.29666 18.0405 8.36056 17.8351 8.49317 17.6758L11.7305 13.793L7.22364 11.8623C7.1264 11.824 7.03784 11.7665 6.96321 11.6933C6.88859 11.6202 6.8294 11.5327 6.78916 11.4363C6.74893 11.3398 6.72845 11.2363 6.72896 11.1317C6.72947 11.0272 6.75095 10.9238 6.79212 10.8278C6.8333 10.7317 6.89333 10.6449 6.96867 10.5724C7.044 10.5 7.13311 10.4434 7.23072 10.406C7.32833 10.3686 7.43244 10.3511 7.5369 10.3547C7.64137 10.3583 7.74405 10.3828 7.83887 10.4268L12.2188 12.3037V7.82422C12.2188 7.61702 12.3011 7.4183 12.4476 7.27179C12.5941 7.12528 12.7928 7.04297 13 7.04297C13.2072 7.04297 13.4059 7.12528 13.5524 7.27179C13.6989 7.4183 13.7813 7.61702 13.7813 7.82422V12.3037L18.1611 10.4268C18.256 10.3828 18.3586 10.3583 18.4631 10.3547C18.5676 10.3511 18.6717 10.3686 18.7693 10.406C18.8669 10.4434 18.956 10.5 19.0313 10.5724C19.1067 10.6449 19.1667 10.7317 19.2079 10.8278C19.2491 10.9238 19.2705 11.0272 19.271 11.1317C19.2716 11.2363 19.2511 11.3398 19.2108 11.4363C19.1706 11.5327 19.1114 11.6202 19.0368 11.6933C18.9622 11.7665 18.8736 11.824 18.7764 11.8623Z"
                          fill="#E2FF02"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_43_9">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(0.5 0.988281)"
                      />
                    </clipPath>
                    <clipPath id="clip1_43_9">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(0.5 0.988281)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                How it works
              </div>
              <div className="w-full md:w-1/2 md:text-4xl text-center text-2xl font-semibold bg-gradient-to-r from-[var(--text)] to-white bg-clip-text text-transparent font-poppins">
                Top–notch designs, delivered at your doorstep.
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 my-12 w-full">
                <div className="bg-[#161616] border border-[#262626] flex  flex-col justify-between items-start p-6 lg:p-8 gap-12 rounded-xl md:w-1/3">
                  <div className="bg-[#131313] rounded-full h-24 w-24 flex justify-center items-center ">
                    <svg
                      width="46"
                      height="50"
                      viewBox="0 0 46 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M45.2884 13.2564C44.9688 12.6982 44.5009 12.2394 43.9366 11.9307L24.68 1.38917C24.1653 1.10617 23.5874 0.957773 23 0.957773C22.4126 0.957773 21.8347 1.10617 21.32 1.38917L2.07 11.9285C1.5057 12.2372 1.0378 12.696 0.7181 13.2542C0.4134 13.7825 0.2521 14.3812 0.25 14.991V35.9123C0.2514 36.5389 0.421099 37.1537 0.741199 37.6924C1.0614 38.2311 1.5203 38.674 2.07 38.9748L21.32 49.512C21.8343 49.7962 22.4124 49.9452 23 49.9452C23.5876 49.9452 24.1657 49.7962 24.68 49.512L43.93 38.9748C44.4797 38.674 44.9386 38.2311 45.2588 37.6924C45.5789 37.1537 45.7486 36.5389 45.75 35.9123V14.991C45.7496 14.3825 45.5905 13.7846 45.2884 13.2564ZM21.25 45.4914L14.25 41.6589V30.7017C14.2493 30.3883 14.1645 30.0809 14.0044 29.8116C13.8443 29.5422 13.6149 29.3208 13.34 29.1704L3.75 23.9204V16.9204L21.25 26.5017V45.4914ZM23 23.4567L5.6444 13.9542L13.1869 9.82637L22.1556 14.7373C22.4132 14.8782 22.702 14.9521 22.9956 14.9521C23.2892 14.9521 23.5781 14.8782 23.8356 14.7373L32.8044 9.82637L40.3469 13.9542L23 23.4567ZM42.25 23.916L32.66 29.166C32.3851 29.3164 32.1557 29.5379 31.9956 29.8072C31.8355 30.0766 31.7507 30.384 31.75 30.6973V41.6545L24.75 45.487V26.4885L42.25 16.9073V23.916Z"
                        fill="#BDFF02"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl text-white mb-2">
                      Tell us your vision
                    </div>
                    <div className="text-[var(--text)]">
                      Choose a plan and share your design project details with
                      us: we’re here to listen.
                    </div>
                  </div>
                </div>
                <div className="bg-[#161616] border border-[#262626] flex  flex-col justify-between items-start p-6 lg:p-8 gap-12 rounded-xl md:w-1/3">
                  <div className="bg-[#131313] rounded-full h-24 w-24 flex justify-center items-center">
                    <svg
                      width="57"
                      height="57"
                      viewBox="0 0 57 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_43_516"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="57"
                        height="57"
                      >
                        <path
                          d="M56.33 0.451874H0.329987V56.4519H56.33V0.451874Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_43_516)">
                        <path
                          d="M52.8305 35.4524C52.8278 39.8134 51.197 44.0164 48.2574 47.2378C45.3177 50.4592 41.2812 52.467 36.9386 52.8677C32.596 53.2685 28.2602 52.0334 24.7807 49.4043C21.3012 46.7753 18.9287 42.9418 18.128 38.6549C20.9211 39.1744 23.7987 39.0061 26.5122 38.1644C29.2257 37.3228 31.6935 35.8332 33.7024 33.8243C35.7113 31.8154 37.2009 29.3476 38.0425 26.6341C38.8842 23.9206 39.0525 21.043 38.533 18.2499C42.5494 18.9975 46.1776 21.1268 48.7889 24.2686C51.4002 27.4105 52.83 31.367 52.8305 35.4524ZM35.3305 17.9524C36.4048 17.9534 37.4768 18.053 38.533 18.2499C37.9501 15.1161 36.5224 12.201 34.4039 9.81927C32.2854 7.43757 29.5567 5.67968 26.5122 4.73538C23.4677 3.79118 20.2232 3.69637 17.1288 4.46117C14.0344 5.22607 11.2076 6.82157 8.95369 9.07557C6.69969 11.3295 5.10419 14.1563 4.33929 17.2507C3.57449 20.3451 3.66929 23.5896 4.61349 26.6341C5.55779 29.6786 7.31569 32.4073 9.69739 34.5258C12.0791 36.6443 14.9942 38.072 18.128 38.6549C17.6578 36.129 17.7496 33.5306 18.3968 31.0441C19.044 28.5577 20.2307 26.2443 21.8727 24.2682C23.5148 22.2921 25.5718 20.7018 27.8976 19.6102C30.2235 18.5187 32.7612 17.9527 35.3305 17.9524Z"
                          fill="#BDFF02"
                        />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl text-white mb-2">
                      Receive the magic
                    </div>
                    <div className="text-[var(--text)]">
                      Sit back and relax: our expert designers will turn your
                      vision into reality.
                    </div>
                  </div>
                </div>
                <div className="bg-[#161616] border border-[#262626] flex  flex-col justify-between items-start p-6 lg:p-8 gap-12 rounded-xl md:w-1/3">
                  <div className="bg-[#131313] rounded-full h-24 w-24 flex justify-center items-center">
                    <svg
                      width="57"
                      height="57"
                      viewBox="0 0 57 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_43_534"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="57"
                        height="57"
                      >
                        <path
                          d="M56.66 0.451874H0.659973V56.4519H56.66V0.451874Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_43_534)">
                        <path
                          d="M28.3143 5.70158C16.1321 5.88748 6.17457 15.7837 5.90987 27.9725C5.81717 32.0722 6.83937 36.1202 8.86737 39.6844C8.94707 39.8237 9.06347 39.9384 9.20397 40.016C9.34447 40.0936 9.50357 40.131 9.66397 40.1243C9.82427 40.1175 9.97967 40.0667 10.1131 39.9776C10.2466 39.8884 10.3529 39.7643 10.4206 39.6187C12.0635 36.1294 12.9129 32.3193 12.9077 28.4625C12.9039 26.1002 13.4332 23.7674 14.4562 21.638C15.4792 19.5087 16.9695 17.6377 18.8162 16.1644C18.9973 16.0227 19.2045 15.9182 19.4261 15.8567C19.6476 15.7951 19.8791 15.7778 20.1073 15.8058C20.3355 15.8337 20.556 15.9063 20.7561 16.0194C20.9563 16.1326 21.1322 16.284 21.2738 16.4651C21.4155 16.6463 21.52 16.8535 21.5815 17.075C21.6431 17.2966 21.6604 17.5281 21.6324 17.7563C21.6045 17.9845 21.5319 18.205 21.4188 18.4051C21.3056 18.6053 21.1542 18.7812 20.9731 18.9228C19.5455 20.0697 18.3941 21.5229 17.6043 23.175C16.8144 24.8271 16.4062 26.6357 16.4099 28.4669C16.4157 33.7206 15.0227 38.8812 12.374 43.4184C12.2758 43.5851 12.2357 43.7797 12.2598 43.9717C12.2839 44.1636 12.371 44.3422 12.5074 44.4794C12.9449 44.9169 13.4021 45.3544 13.8746 45.7525C13.9715 45.8338 14.0848 45.8932 14.2068 45.9266C14.3288 45.9599 14.4565 45.9664 14.5813 45.9456C14.706 45.9248 14.8248 45.8772 14.9294 45.8061C15.034 45.735 15.1219 45.6421 15.1871 45.5337C17.1237 42.3188 18.4988 38.7977 19.2537 35.1212C19.3462 34.6664 19.6156 34.2669 20.0027 34.0107C20.3898 33.7546 20.8627 33.6626 21.3176 33.7551C21.7724 33.8477 22.1719 34.1171 22.4281 34.5042C22.6843 34.8912 22.7762 35.3642 22.6837 35.8191C21.8375 39.9674 20.278 43.9375 18.0746 47.5528C18.0125 47.6556 17.9722 47.7701 17.9562 47.8891C17.9402 48.0081 17.9489 48.1292 17.9817 48.2447C18.0146 48.3602 18.0708 48.4678 18.147 48.5606C18.2232 48.6535 18.3177 48.7296 18.4246 48.7844C18.9649 49.0578 19.5184 49.3116 20.0806 49.5434C20.2747 49.6266 20.4923 49.6368 20.6933 49.572C20.8944 49.5073 21.0652 49.3721 21.1743 49.1912C24.9325 42.9489 26.9156 35.7992 26.9099 28.5128C26.9054 28.0636 27.0705 27.6292 27.3722 27.2963C27.6738 26.9634 28.0899 26.7565 28.5374 26.7169C28.7773 26.7 29.0181 26.7328 29.2448 26.8132C29.4715 26.8936 29.6791 27.0198 29.8548 27.184C30.0305 27.3482 30.1705 27.5469 30.266 27.7676C30.3615 27.9883 30.4105 28.2264 30.4099 28.4669C30.4186 35.9064 28.5199 43.2239 24.8952 49.7206C24.8255 49.845 24.7872 49.9846 24.7837 50.1273C24.7802 50.2699 24.8117 50.4112 24.8753 50.5388C24.9389 50.6665 25.0328 50.7767 25.1487 50.8598C25.2647 50.9429 25.3992 50.9964 25.5406 51.0156C26.2041 51.1075 26.8757 51.1702 27.5552 51.2037C27.7186 51.2098 27.8804 51.17 28.0223 51.0888C28.1642 51.0076 28.2805 50.8883 28.3581 50.7444C31.9961 43.9392 33.9028 36.3431 33.9099 28.6266C33.9209 25.7281 31.6568 23.2694 28.7606 23.2147C28.0638 23.2013 27.3714 23.3268 26.7236 23.5838C26.0758 23.8409 25.4857 24.2243 24.9877 24.7117C24.4897 25.1992 24.0937 25.7809 23.8228 26.423C23.5519 27.0651 23.4115 27.7547 23.4099 28.4516C23.4067 28.8886 23.2421 29.309 22.9478 29.632C22.6534 29.955 22.2501 30.1579 21.8152 30.2016C21.5727 30.2232 21.3283 30.1939 21.0978 30.1157C20.8672 30.0375 20.6555 29.912 20.4761 29.7473C20.2968 29.5826 20.1538 29.3823 20.0563 29.1592C19.9588 28.936 19.909 28.695 19.9099 28.4516C19.9099 27.2947 20.1392 26.1493 20.5847 25.0817C21.0301 24.0141 21.6829 23.0454 22.5051 22.2317C23.3274 21.4179 24.3029 20.7753 25.3751 20.3411C26.4473 19.9068 27.595 19.6894 28.7518 19.7016C33.5643 19.7519 37.4318 23.895 37.4077 28.7053C37.3864 35.8403 35.8567 42.8903 32.919 49.3925C32.8522 49.5423 32.8289 49.7078 32.8517 49.8702C32.8744 50.0325 32.9423 50.1853 33.0477 50.3109C33.1531 50.4366 33.2916 50.5301 33.4475 50.5808C33.6035 50.6315 33.7705 50.6374 33.9296 50.5978C34.6885 50.4179 35.4377 50.1988 36.174 49.9416C36.2888 49.9008 36.3937 49.8366 36.4823 49.753C36.5708 49.6694 36.6409 49.5682 36.6881 49.4559C37.7067 47.0418 38.5461 44.5559 39.1993 42.0184C39.2568 41.7958 39.3575 41.5867 39.4958 41.403C39.6341 41.2193 39.8072 41.0646 40.0052 40.9478C40.2033 40.831 40.4224 40.7544 40.65 40.7222C40.8777 40.6901 41.1095 40.7032 41.3321 40.7606C41.5547 40.8181 41.7639 40.9188 41.9476 41.0571C42.1313 41.1954 42.2859 41.3685 42.4027 41.5665C42.5195 41.7646 42.5962 41.9837 42.6283 42.2114C42.6604 42.439 42.6474 42.6708 42.5899 42.8934C42.4266 43.5307 42.2516 44.1651 42.0649 44.7966C42.01 44.9784 42.0157 45.1731 42.0812 45.3514C42.1467 45.5297 42.2684 45.6818 42.428 45.7848C42.5876 45.8878 42.7763 45.9361 42.9657 45.9224C43.1552 45.9087 43.335 45.8337 43.4781 45.7087C47.0255 42.6625 49.5482 38.5972 50.7027 34.0661C51.8572 29.535 51.5875 24.7582 49.9302 20.3859C48.273 16.0135 45.3088 12.258 41.4409 9.63047C37.5731 7.00297 32.9896 5.63108 28.3143 5.70158ZM43.9724 35.6878C43.9192 36.1101 43.714 36.4985 43.3951 36.7803C43.0762 37.0622 42.6655 37.2181 42.2399 37.2191C42.1668 37.219 42.0938 37.2147 42.0212 37.2059C41.7931 37.1775 41.5728 37.1045 41.3729 36.9909C41.1731 36.8774 40.9975 36.7256 40.8563 36.5442C40.7152 36.3628 40.6111 36.1553 40.5501 35.9337C40.4891 35.7121 40.4724 35.4806 40.5009 35.2525C40.7799 33.0028 40.9201 30.7381 40.9209 28.4712C40.9162 25.2238 39.6241 22.1106 37.3278 19.8143C35.0315 17.518 31.9183 16.2259 28.6709 16.2212C28.159 16.221 27.6476 16.2524 27.1396 16.3153C26.6787 16.3733 26.2136 16.2459 25.8466 15.9609C25.4797 15.676 25.2409 15.257 25.1829 14.7961C25.1249 14.3351 25.2523 13.87 25.5373 13.5031C25.8222 13.1361 26.2412 12.8974 26.7021 12.8394C28.9195 12.5635 31.1702 12.762 33.3051 13.4217C35.44 14.0813 37.4103 15.1871 39.0856 16.6657C40.7609 18.1443 42.1029 19.962 43.0227 21.9984C43.9425 24.0347 44.4191 26.2433 44.4209 28.4778C44.4203 30.8881 44.2706 33.296 43.9724 35.6878Z"
                          fill="#BDFF02"
                        />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl text-white mb-2">
                      Get ongoing support
                    </div>
                    <div className="text-[var(--text)]">
                      Your subscription ensures you have continuous access to
                      our design team.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>

          {/* customers story */}
          <Wrapper>
            <div className="flex md:w-[90%] justify-center flex-col md:flex-row">
              <div className="flex flex-col md:p-4 pb-8 md:py-12 justify-between items-center md:items-start md:w-1/2">
                <div className="flex items-center text-xl text-[var(--secondary)] gap-2 mb-4">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_43_9)">
                      <g clipPath="url(#clip1_43_9)">
                        <mask
                          id="mask0_43_9"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="26"
                          height="26"
                        >
                          <path
                            d="M25.5 0.988281H0.5V25.9883H25.5V0.988281Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_43_9)">
                          <path
                            d="M13 3.33203C10.9913 3.33203 9.02768 3.92768 7.35749 5.04367C5.68731 6.15965 4.38556 7.74584 3.61685 9.60165C2.84815 11.4575 2.64702 13.4996 3.0389 15.4697C3.43079 17.4398 4.39807 19.2495 5.81845 20.6699C7.23883 22.0902 9.0485 23.0575 11.0186 23.4494C12.9887 23.8413 15.0308 23.6402 16.8866 22.8715C18.7424 22.1027 20.3286 20.801 21.4446 19.1308C22.5606 17.4606 23.1563 15.497 23.1563 13.4883C23.1534 10.7956 22.0825 8.21392 20.1784 6.30987C18.2744 4.40582 15.6927 3.33487 13 3.33203ZM18.7764 11.8623L14.2695 13.793L17.5049 17.6758C17.6375 17.8351 17.7014 18.0405 17.6825 18.2469C17.6637 18.4533 17.5636 18.6438 17.4043 18.7764C17.245 18.909 17.0396 18.9729 16.8332 18.954C16.6268 18.9352 16.4363 18.8351 16.3037 18.6758L13 14.709L9.69434 18.6758C9.56173 18.8351 9.37128 18.9352 9.16488 18.954C8.95848 18.9729 8.75304 18.909 8.59375 18.7764C8.43447 18.6438 8.33439 18.4533 8.31552 18.2469C8.29666 18.0405 8.36056 17.8351 8.49317 17.6758L11.7305 13.793L7.22364 11.8623C7.1264 11.824 7.03784 11.7665 6.96321 11.6933C6.88859 11.6202 6.8294 11.5327 6.78916 11.4363C6.74893 11.3398 6.72845 11.2363 6.72896 11.1317C6.72947 11.0272 6.75095 10.9238 6.79212 10.8278C6.8333 10.7317 6.89333 10.6449 6.96867 10.5724C7.044 10.5 7.13311 10.4434 7.23072 10.406C7.32833 10.3686 7.43244 10.3511 7.5369 10.3547C7.64137 10.3583 7.74405 10.3828 7.83887 10.4268L12.2188 12.3037V7.82422C12.2188 7.61702 12.3011 7.4183 12.4476 7.27179C12.5941 7.12528 12.7928 7.04297 13 7.04297C13.2072 7.04297 13.4059 7.12528 13.5524 7.27179C13.6989 7.4183 13.7813 7.61702 13.7813 7.82422V12.3037L18.1611 10.4268C18.256 10.3828 18.3586 10.3583 18.4631 10.3547C18.5676 10.3511 18.6717 10.3686 18.7693 10.406C18.8669 10.4434 18.956 10.5 19.0313 10.5724C19.1067 10.6449 19.1667 10.7317 19.2079 10.8278C19.2491 10.9238 19.2705 11.0272 19.271 11.1317C19.2716 11.2363 19.2511 11.3398 19.2108 11.4363C19.1706 11.5327 19.1114 11.6202 19.0368 11.6933C18.9622 11.7665 18.8736 11.824 18.7764 11.8623Z"
                            fill="#E2FF02"
                          />
                        </g>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_43_9">
                        <rect
                          width="25"
                          height="25"
                          fill="white"
                          transform="translate(0.5 0.988281)"
                        />
                      </clipPath>
                      <clipPath id="clip1_43_9">
                        <rect
                          width="25"
                          height="25"
                          fill="white"
                          transform="translate(0.5 0.988281)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Customer story
                </div>
                <div className="md:text-4xl md:text-left text-2xl font-semibold bg-gradient-to-r from-[var(--text)] to-white bg-clip-text text-transparent font-poppins text-center my-4 md:my-0 ">
                  “Our growth no longer necessitates the recruitment and
                  education of additional design professionals”
                </div>
                <div className="flex gap-4 text-[var(--text)]">
                  Read the story
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.97665 15.0201H20.6433M20.6433 15.0201L15.9767 10.3534M20.6433 15.0201L15.9767 19.6868M15.31 28.3534C22.674 28.3534 28.6433 22.3841 28.6433 15.0201C28.6433 7.6561 22.674 1.68677 15.31 1.68677C7.94599 1.68677 1.97665 7.6561 1.97665 15.0201C1.97665 22.3841 7.94599 28.3534 15.31 28.3534Z"
                      stroke="#7A7A7A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex justify-center">
                <img src={laptopPerson} alt="A person using laptop" />
              </div>
            </div>
          </Wrapper>
          {/* reviews */}
          <Wrapper>
            <div id="testimonials" className="flex flex-col gap-20 my-20">
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={1000}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                loop
                modules={[Autoplay, Pagination]}
                className="w-full"
              >
                <SwiperSlide className="flex flex-col  gap-4 items-center">
                  <svg
                    width="112"
                    height="34"
                    viewBox="0 0 112 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_43_600)">
                      <g clipPath="url(#clip1_43_600)">
                        <mask
                          id="mask0_43_600"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="111"
                          height="34"
                        >
                          <path
                            d="M0.498993 0.839844H110.499V33.8398H0.498993V0.839844Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_43_600)">
                          <path
                            d="M33.51 15.6128H23.454L32.162 10.5858L30.435 7.59384L21.725 12.6208L26.753 3.91384L23.761 2.18784L18.733 10.8918V0.839844H15.275V10.8928L10.247 2.18684L7.25499 3.91484L12.282 12.6188L3.57499 7.59384L1.84499 10.5858L10.555 15.6128H0.497986V19.0678H10.553L1.84499 24.0948L3.57199 27.0868L12.282 22.0598L7.25399 30.7668L10.246 32.4938L15.276 23.7878V33.8398H18.732V23.5728L23.852 32.4388L26.658 30.8188L21.537 21.9508L30.432 27.0858L32.16 24.0938L23.453 19.0668H33.508V15.6128H33.51ZM17.005 22.0368C15.9174 22.0383 14.8631 21.6623 14.0218 20.973C13.1806 20.2837 12.6046 19.3239 12.3922 18.2573C12.1798 17.1907 12.3441 16.0834 12.857 15.1244C13.37 14.1654 14.1999 13.4142 15.205 12.9988C16.0635 12.6434 17.008 12.5505 17.9193 12.7317C18.8306 12.9129 19.6678 13.3601 20.325 14.0168C20.9819 14.6738 21.4293 15.5107 21.6106 16.4218C21.792 17.333 21.6991 18.2774 21.3438 19.1358C20.9884 19.9941 20.3866 20.7279 19.6143 21.2443C18.842 21.7606 17.934 22.0365 17.005 22.0368Z"
                            fill="white"
                            fillOpacity="0.4"
                          />
                          <path
                            d="M42.419 29.4099V5.2699H46.849V29.4099H42.419ZM84.915 13.0049H89.145V15.0069C90.045 13.4069 92.145 12.5379 93.944 12.5379C96.177 12.5379 97.976 13.5059 98.808 15.2719C100.106 13.2699 101.84 12.5379 104.006 12.5379C107.037 12.5379 109.935 14.3719 109.935 18.7729V29.4099H105.638V19.6739C105.638 17.9069 104.771 16.5719 102.739 16.5719C100.839 16.5719 99.706 18.0409 99.706 19.8079V29.4109H95.31V19.6739C95.31 17.9069 94.41 16.5719 92.41 16.5719C90.478 16.5719 89.345 18.0079 89.345 19.8079V29.4109H84.915V13.0049ZM56.863 29.8849C51.871 29.8849 48.257 26.1819 48.257 21.2079C48.257 16.3129 51.86 12.5219 56.863 12.5219C61.89 12.5219 65.469 16.3479 65.469 21.2079C65.469 26.1469 61.853 29.8849 56.863 29.8849ZM56.863 16.5369C55.6247 16.5385 54.4377 17.0314 53.5625 17.9073C52.6874 18.7832 52.1955 19.9707 52.195 21.2089C52.196 22.4469 52.6881 23.6339 53.5632 24.5096C54.4383 25.3852 55.625 25.878 56.863 25.8799C58.1008 25.8778 59.2872 25.3849 60.1621 24.5092C61.037 23.6336 61.5289 22.4467 61.53 21.2089C61.5292 19.9709 61.0374 18.7838 60.1625 17.9079C59.2875 17.0321 58.101 16.539 56.863 16.5369ZM74.933 29.8859C69.941 29.8859 66.326 26.1819 66.326 21.2079C66.326 16.3129 69.93 12.5219 74.933 12.5219C79.96 12.5219 83.539 16.3479 83.539 21.2079C83.539 26.1469 79.92 29.8859 74.933 29.8859ZM74.933 16.4809C73.6806 16.4828 72.48 16.9812 71.5946 17.867C70.7093 18.7528 70.2113 19.9535 70.21 21.2059C70.211 22.4585 70.7089 23.6595 71.5943 24.5455C72.4797 25.4314 73.6804 25.93 74.933 25.9319C76.1854 25.9298 77.3858 25.4311 78.271 24.5451C79.1562 23.6592 79.6539 22.4583 79.655 21.2059C79.6536 19.9537 79.1558 18.7531 78.2707 17.8673C77.3855 16.9816 76.1852 16.483 74.933 16.4809Z"
                            fill="white"
                          />
                        </g>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_43_600">
                        <rect
                          width="111"
                          height="33"
                          fill="white"
                          transform="translate(0.164978 0.839844)"
                        />
                      </clipPath>
                      <clipPath id="clip1_43_600">
                        <rect
                          width="111"
                          height="33"
                          fill="white"
                          transform="translate(0.164978 0.839844)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="text-center text-[var(--text)]">
                    Creative, innovative and strategic. We have great
                    achievements made together and looking to more.
                  </div>

                  <div className="flex flex-col items-center">
                    <svg
                      width="118"
                      height="21"
                      viewBox="0 0 118 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_43_616)">
                        <mask
                          id="mask0_43_616"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="21"
                          height="21"
                        >
                          <path
                            d="M20.499 0.409912H0.498962V20.4099H20.499V0.409912Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_43_616)">
                          <path
                            d="M10.0373 2.01989C10.2081 1.60925 10.7898 1.60925 10.9606 2.01989L13.0267 6.98737C13.0987 7.16049 13.2615 7.27878 13.4484 7.29376L18.8112 7.72369C19.2546 7.75923 19.4343 8.31249 19.0966 8.60182L15.0107 12.1018C14.8683 12.2238 14.8061 12.4152 14.8496 12.5975L16.0979 17.8307C16.2011 18.2633 15.7305 18.6053 15.3509 18.3734L10.7596 15.5691C10.5996 15.4714 10.3984 15.4714 10.2384 15.5691L5.64702 18.3734C5.26747 18.6053 4.79685 18.2633 4.90004 17.8307L6.14835 12.5975C6.19185 12.4152 6.12967 12.2238 5.98727 12.1018L1.90138 8.60182C1.56361 8.31249 1.74337 7.75923 2.1867 7.72369L7.54951 7.29376C7.7364 7.27878 7.89921 7.16049 7.97121 6.98737L10.0373 2.01989Z"
                            fill="#F2F4F7"
                          />
                          <mask
                            id="mask1_43_616"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="21"
                            height="21"
                          >
                            <path
                              d="M20.499 0.409912H0.498962V20.4099H20.499V0.409912Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask1_43_616)">
                            <path
                              d="M10.0373 2.01989C10.2081 1.60925 10.7898 1.60925 10.9606 2.01989L13.0267 6.98737C13.0987 7.16049 13.2615 7.27878 13.4484 7.29376L18.8112 7.72369C19.2546 7.75923 19.4343 8.31249 19.0966 8.60182L15.0107 12.1018C14.8683 12.2238 14.8061 12.4152 14.8496 12.5975L16.0979 17.8307C16.2011 18.2633 15.7305 18.6053 15.3509 18.3734L10.7596 15.5691C10.5996 15.4714 10.3984 15.4714 10.2384 15.5691L5.64702 18.3734C5.26747 18.6053 4.79685 18.2633 4.90004 17.8307L6.14835 12.5975C6.19185 12.4152 6.12967 12.2238 5.98727 12.1018L1.90138 8.60182C1.56361 8.31249 1.74337 7.75923 2.1867 7.72369L7.54951 7.29376C7.7364 7.27878 7.89921 7.16049 7.97121 6.98737L10.0373 2.01989Z"
                              fill="#FEC84B"
                            />
                          </g>
                        </g>
                        <mask
                          id="mask2_43_616"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="24"
                          y="0"
                          width="21"
                          height="21"
                        >
                          <path
                            d="M44.499 0.409912H24.499V20.4099H44.499V0.409912Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask2_43_616)">
                          <path
                            d="M34.0373 2.01989C34.2081 1.60925 34.7898 1.60925 34.9606 2.01989L37.0267 6.98737C37.0987 7.16049 37.2615 7.27878 37.4484 7.29376L42.8112 7.72369C43.2546 7.75923 43.4343 8.31249 43.0966 8.60182L39.0107 12.1018C38.8683 12.2238 38.8061 12.4152 38.8496 12.5975L40.0979 17.8307C40.2011 18.2633 39.7305 18.6053 39.3509 18.3734L34.7596 15.5691C34.5996 15.4714 34.3984 15.4714 34.2384 15.5691L29.647 18.3734C29.2675 18.6053 28.7969 18.2633 28.9001 17.8307L30.1484 12.5975C30.1919 12.4152 30.1297 12.2238 29.9873 12.1018L25.9014 8.60182C25.5636 8.31249 25.7434 7.75923 26.1867 7.72369L31.5495 7.29376C31.7364 7.27878 31.8992 7.16049 31.9712 6.98737L34.0373 2.01989Z"
                            fill="#F2F4F7"
                          />
                          <mask
                            id="mask3_43_616"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="24"
                            y="0"
                            width="21"
                            height="21"
                          >
                            <path
                              d="M44.499 0.409912H24.499V20.4099H44.499V0.409912Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask3_43_616)">
                            <path
                              d="M34.0373 2.01989C34.2081 1.60925 34.7898 1.60925 34.9606 2.01989L37.0267 6.98737C37.0987 7.16049 37.2615 7.27878 37.4484 7.29376L42.8112 7.72369C43.2546 7.75923 43.4343 8.31249 43.0966 8.60182L39.0107 12.1018C38.8683 12.2238 38.8061 12.4152 38.8496 12.5975L40.0979 17.8307C40.2011 18.2633 39.7305 18.6053 39.3509 18.3734L34.7596 15.5691C34.5996 15.4714 34.3984 15.4714 34.2384 15.5691L29.647 18.3734C29.2675 18.6053 28.7969 18.2633 28.9001 17.8307L30.1484 12.5975C30.1919 12.4152 30.1297 12.2238 29.9873 12.1018L25.9014 8.60182C25.5636 8.31249 25.7434 7.75923 26.1867 7.72369L31.5495 7.29376C31.7364 7.27878 31.8992 7.16049 31.9712 6.98737L34.0373 2.01989Z"
                              fill="#FEC84B"
                            />
                          </g>
                        </g>
                        <mask
                          id="mask4_43_616"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="48"
                          y="0"
                          width="21"
                          height="21"
                        >
                          <path
                            d="M68.499 0.409912H48.499V20.4099H68.499V0.409912Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask4_43_616)">
                          <path
                            d="M58.0373 2.01989C58.2081 1.60925 58.7898 1.60925 58.9606 2.01989L61.0267 6.98737C61.0987 7.16049 61.2615 7.27878 61.4484 7.29376L66.8112 7.72369C67.2546 7.75923 67.4343 8.31249 67.0966 8.60182L63.0107 12.1018C62.8683 12.2238 62.8061 12.4152 62.8496 12.5975L64.0979 17.8307C64.2011 18.2633 63.7305 18.6053 63.3509 18.3734L58.7596 15.5691C58.5996 15.4714 58.3984 15.4714 58.2384 15.5691L53.647 18.3734C53.2675 18.6053 52.7969 18.2633 52.9001 17.8307L54.1484 12.5975C54.1919 12.4152 54.1297 12.2238 53.9873 12.1018L49.9014 8.60182C49.5636 8.31249 49.7434 7.75923 50.1867 7.72369L55.5495 7.29376C55.7364 7.27878 55.8992 7.16049 55.9712 6.98737L58.0373 2.01989Z"
                            fill="#F2F4F7"
                          />
                          <mask
                            id="mask5_43_616"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="48"
                            y="0"
                            width="21"
                            height="21"
                          >
                            <path
                              d="M68.499 0.409912H48.499V20.4099H68.499V0.409912Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask5_43_616)">
                            <path
                              d="M58.0373 2.01989C58.2081 1.60925 58.7898 1.60925 58.9606 2.01989L61.0267 6.98737C61.0987 7.16049 61.2615 7.27878 61.4484 7.29376L66.8112 7.72369C67.2546 7.75923 67.4343 8.31249 67.0966 8.60182L63.0107 12.1018C62.8683 12.2238 62.8061 12.4152 62.8496 12.5975L64.0979 17.8307C64.2011 18.2633 63.7305 18.6053 63.3509 18.3734L58.7596 15.5691C58.5996 15.4714 58.3984 15.4714 58.2384 15.5691L53.647 18.3734C53.2675 18.6053 52.7969 18.2633 52.9001 17.8307L54.1484 12.5975C54.1919 12.4152 54.1297 12.2238 53.9873 12.1018L49.9014 8.60182C49.5636 8.31249 49.7434 7.75923 50.1867 7.72369L55.5495 7.29376C55.7364 7.27878 55.8992 7.16049 55.9712 6.98737L58.0373 2.01989Z"
                              fill="#FEC84B"
                            />
                          </g>
                        </g>
                        <mask
                          id="mask6_43_616"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="72"
                          y="0"
                          width="21"
                          height="21"
                        >
                          <path
                            d="M92.499 0.409912H72.499V20.4099H92.499V0.409912Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask6_43_616)">
                          <path
                            d="M82.0373 2.01989C82.2081 1.60925 82.7898 1.60925 82.9606 2.01989L85.0267 6.98737C85.0987 7.16049 85.2615 7.27878 85.4484 7.29376L90.8112 7.72369C91.2546 7.75923 91.4343 8.31249 91.0966 8.60182L87.0107 12.1018C86.8683 12.2238 86.8061 12.4152 86.8496 12.5975L88.0979 17.8307C88.2011 18.2633 87.7305 18.6053 87.3509 18.3734L82.7596 15.5691C82.5996 15.4714 82.3984 15.4714 82.2384 15.5691L77.647 18.3734C77.2675 18.6053 76.7969 18.2633 76.9001 17.8307L78.1484 12.5975C78.1919 12.4152 78.1297 12.2238 77.9873 12.1018L73.9014 8.60182C73.5636 8.31249 73.7434 7.75923 74.1867 7.72369L79.5495 7.29376C79.7364 7.27878 79.8992 7.16049 79.9712 6.98737L82.0373 2.01989Z"
                            fill="#F2F4F7"
                          />
                          <mask
                            id="mask7_43_616"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="72"
                            y="0"
                            width="21"
                            height="21"
                          >
                            <path
                              d="M92.499 0.409912H72.499V20.4099H92.499V0.409912Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask7_43_616)">
                            <path
                              d="M82.0373 2.01989C82.2081 1.60925 82.7898 1.60925 82.9606 2.01989L85.0267 6.98737C85.0987 7.16049 85.2615 7.27878 85.4484 7.29376L90.8112 7.72369C91.2546 7.75923 91.4343 8.31249 91.0966 8.60182L87.0107 12.1018C86.8683 12.2238 86.8061 12.4152 86.8496 12.5975L88.0979 17.8307C88.2011 18.2633 87.7305 18.6053 87.3509 18.3734L82.7596 15.5691C82.5996 15.4714 82.3984 15.4714 82.2384 15.5691L77.647 18.3734C77.2675 18.6053 76.7969 18.2633 76.9001 17.8307L78.1484 12.5975C78.1919 12.4152 78.1297 12.2238 77.9873 12.1018L73.9014 8.60182C73.5636 8.31249 73.7434 7.75923 74.1867 7.72369L79.5495 7.29376C79.7364 7.27878 79.8992 7.16049 79.9712 6.98737L82.0373 2.01989Z"
                              fill="#FEC84B"
                            />
                          </g>
                        </g>
                        <mask
                          id="mask8_43_616"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="96"
                          y="0"
                          width="21"
                          height="21"
                        >
                          <path
                            d="M116.499 0.409912H96.499V20.4099H116.499V0.409912Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask8_43_616)">
                          <path
                            d="M106.037 2.01989C106.208 1.60925 106.79 1.60925 106.961 2.01989L109.027 6.98737C109.099 7.16049 109.262 7.27878 109.448 7.29376L114.811 7.72369C115.255 7.75923 115.434 8.31249 115.097 8.60182L111.011 12.1018C110.868 12.2238 110.806 12.4152 110.85 12.5975L112.098 17.8307C112.201 18.2633 111.73 18.6053 111.351 18.3734L106.76 15.5691C106.6 15.4714 106.398 15.4714 106.238 15.5691L101.647 18.3734C101.267 18.6053 100.797 18.2633 100.9 17.8307L102.148 12.5975C102.192 12.4152 102.13 12.2238 101.987 12.1018L97.9014 8.60182C97.5636 8.31249 97.7434 7.75923 98.1867 7.72369L103.55 7.29376C103.736 7.27878 103.899 7.16049 103.971 6.98737L106.037 2.01989Z"
                            fill="#F2F4F7"
                          />
                          <mask
                            id="mask9_43_616"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="96"
                            y="0"
                            width="21"
                            height="21"
                          >
                            <path
                              d="M116.499 0.409912H96.499V20.4099H116.499V0.409912Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask9_43_616)">
                            <path
                              d="M106.037 2.01989C106.208 1.60925 106.79 1.60925 106.961 2.01989L109.027 6.98737C109.099 7.16049 109.262 7.27878 109.448 7.29376L114.811 7.72369C115.255 7.75923 115.434 8.31249 115.097 8.60182L111.011 12.1018C110.868 12.2238 110.806 12.4152 110.85 12.5975L112.098 17.8307C112.201 18.2633 111.73 18.6053 111.351 18.3734L106.76 15.5691C106.6 15.4714 106.398 15.4714 106.238 15.5691L101.647 18.3734C101.267 18.6053 100.797 18.2633 100.9 17.8307L102.148 12.5975C102.192 12.4152 102.13 12.2238 101.987 12.1018L97.9014 8.60182C97.5636 8.31249 97.7434 7.75923 98.1867 7.72369L103.55 7.29376C103.736 7.27878 103.899 7.16049 103.971 6.98737L106.037 2.01989Z"
                              fill="#FEC84B"
                            />
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_43_616">
                          <rect
                            width="117"
                            height="20"
                            fill="white"
                            transform="translate(0.164978 0.409912)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-center mt-2  text-[var(--text)]">
                      Henry Arthur
                    </div>
                    <div className="text-center">Head of Engineering, Loom</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col  gap-4 items-center">
                  <svg
                    width="112"
                    height="34"
                    viewBox="0 0 112 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_43_600)">
                      <g clipPath="url(#clip1_43_600)">
                        <mask
                          id="mask0_43_600"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="111"
                          height="34"
                        >
                          <path
                            d="M0.498993 0.839844H110.499V33.8398H0.498993V0.839844Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_43_600)">
                          <path
                            d="M33.51 15.6128H23.454L32.162 10.5858L30.435 7.59384L21.725 12.6208L26.753 3.91384L23.761 2.18784L18.733 10.8918V0.839844H15.275V10.8928L10.247 2.18684L7.25499 3.91484L12.282 12.6188L3.57499 7.59384L1.84499 10.5858L10.555 15.6128H0.497986V19.0678H10.553L1.84499 24.0948L3.57199 27.0868L12.282 22.0598L7.25399 30.7668L10.246 32.4938L15.276 23.7878V33.8398H18.732V23.5728L23.852 32.4388L26.658 30.8188L21.537 21.9508L30.432 27.0858L32.16 24.0938L23.453 19.0668H33.508V15.6128H33.51ZM17.005 22.0368C15.9174 22.0383 14.8631 21.6623 14.0218 20.973C13.1806 20.2837 12.6046 19.3239 12.3922 18.2573C12.1798 17.1907 12.3441 16.0834 12.857 15.1244C13.37 14.1654 14.1999 13.4142 15.205 12.9988C16.0635 12.6434 17.008 12.5505 17.9193 12.7317C18.8306 12.9129 19.6678 13.3601 20.325 14.0168C20.9819 14.6738 21.4293 15.5107 21.6106 16.4218C21.792 17.333 21.6991 18.2774 21.3438 19.1358C20.9884 19.9941 20.3866 20.7279 19.6143 21.2443C18.842 21.7606 17.934 22.0365 17.005 22.0368Z"
                            fill="white"
                            fillOpacity="0.4"
                          />
                          <path
                            d="M42.419 29.4099V5.2699H46.849V29.4099H42.419ZM84.915 13.0049H89.145V15.0069C90.045 13.4069 92.145 12.5379 93.944 12.5379C96.177 12.5379 97.976 13.5059 98.808 15.2719C100.106 13.2699 101.84 12.5379 104.006 12.5379C107.037 12.5379 109.935 14.3719 109.935 18.7729V29.4099H105.638V19.6739C105.638 17.9069 104.771 16.5719 102.739 16.5719C100.839 16.5719 99.706 18.0409 99.706 19.8079V29.4109H95.31V19.6739C95.31 17.9069 94.41 16.5719 92.41 16.5719C90.478 16.5719 89.345 18.0079 89.345 19.8079V29.4109H84.915V13.0049ZM56.863 29.8849C51.871 29.8849 48.257 26.1819 48.257 21.2079C48.257 16.3129 51.86 12.5219 56.863 12.5219C61.89 12.5219 65.469 16.3479 65.469 21.2079C65.469 26.1469 61.853 29.8849 56.863 29.8849ZM56.863 16.5369C55.6247 16.5385 54.4377 17.0314 53.5625 17.9073C52.6874 18.7832 52.1955 19.9707 52.195 21.2089C52.196 22.4469 52.6881 23.6339 53.5632 24.5096C54.4383 25.3852 55.625 25.878 56.863 25.8799C58.1008 25.8778 59.2872 25.3849 60.1621 24.5092C61.037 23.6336 61.5289 22.4467 61.53 21.2089C61.5292 19.9709 61.0374 18.7838 60.1625 17.9079C59.2875 17.0321 58.101 16.539 56.863 16.5369ZM74.933 29.8859C69.941 29.8859 66.326 26.1819 66.326 21.2079C66.326 16.3129 69.93 12.5219 74.933 12.5219C79.96 12.5219 83.539 16.3479 83.539 21.2079C83.539 26.1469 79.92 29.8859 74.933 29.8859ZM74.933 16.4809C73.6806 16.4828 72.48 16.9812 71.5946 17.867C70.7093 18.7528 70.2113 19.9535 70.21 21.2059C70.211 22.4585 70.7089 23.6595 71.5943 24.5455C72.4797 25.4314 73.6804 25.93 74.933 25.9319C76.1854 25.9298 77.3858 25.4311 78.271 24.5451C79.1562 23.6592 79.6539 22.4583 79.655 21.2059C79.6536 19.9537 79.1558 18.7531 78.2707 17.8673C77.3855 16.9816 76.1852 16.483 74.933 16.4809Z"
                            fill="white"
                          />
                        </g>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_43_600">
                        <rect
                          width="111"
                          height="33"
                          fill="white"
                          transform="translate(0.164978 0.839844)"
                        />
                      </clipPath>
                      <clipPath id="clip1_43_600">
                        <rect
                          width="111"
                          height="33"
                          fill="white"
                          transform="translate(0.164978 0.839844)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="text-center text-[var(--text)]">
                    Creative, innovative and strategic. We have great
                    achievements made together and looking to more.
                  </div>

                  <div className="flex flex-col items-center">
                    <svg
                      width="118"
                      height="21"
                      viewBox="0 0 118 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_43_616)">
                        <mask
                          id="mask0_43_616"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="21"
                          height="21"
                        >
                          <path
                            d="M20.499 0.409912H0.498962V20.4099H20.499V0.409912Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_43_616)">
                          <path
                            d="M10.0373 2.01989C10.2081 1.60925 10.7898 1.60925 10.9606 2.01989L13.0267 6.98737C13.0987 7.16049 13.2615 7.27878 13.4484 7.29376L18.8112 7.72369C19.2546 7.75923 19.4343 8.31249 19.0966 8.60182L15.0107 12.1018C14.8683 12.2238 14.8061 12.4152 14.8496 12.5975L16.0979 17.8307C16.2011 18.2633 15.7305 18.6053 15.3509 18.3734L10.7596 15.5691C10.5996 15.4714 10.3984 15.4714 10.2384 15.5691L5.64702 18.3734C5.26747 18.6053 4.79685 18.2633 4.90004 17.8307L6.14835 12.5975C6.19185 12.4152 6.12967 12.2238 5.98727 12.1018L1.90138 8.60182C1.56361 8.31249 1.74337 7.75923 2.1867 7.72369L7.54951 7.29376C7.7364 7.27878 7.89921 7.16049 7.97121 6.98737L10.0373 2.01989Z"
                            fill="#F2F4F7"
                          />
                          <mask
                            id="mask1_43_616"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="21"
                            height="21"
                          >
                            <path
                              d="M20.499 0.409912H0.498962V20.4099H20.499V0.409912Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask1_43_616)">
                            <path
                              d="M10.0373 2.01989C10.2081 1.60925 10.7898 1.60925 10.9606 2.01989L13.0267 6.98737C13.0987 7.16049 13.2615 7.27878 13.4484 7.29376L18.8112 7.72369C19.2546 7.75923 19.4343 8.31249 19.0966 8.60182L15.0107 12.1018C14.8683 12.2238 14.8061 12.4152 14.8496 12.5975L16.0979 17.8307C16.2011 18.2633 15.7305 18.6053 15.3509 18.3734L10.7596 15.5691C10.5996 15.4714 10.3984 15.4714 10.2384 15.5691L5.64702 18.3734C5.26747 18.6053 4.79685 18.2633 4.90004 17.8307L6.14835 12.5975C6.19185 12.4152 6.12967 12.2238 5.98727 12.1018L1.90138 8.60182C1.56361 8.31249 1.74337 7.75923 2.1867 7.72369L7.54951 7.29376C7.7364 7.27878 7.89921 7.16049 7.97121 6.98737L10.0373 2.01989Z"
                              fill="#FEC84B"
                            />
                          </g>
                        </g>
                        <mask
                          id="mask2_43_616"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="24"
                          y="0"
                          width="21"
                          height="21"
                        >
                          <path
                            d="M44.499 0.409912H24.499V20.4099H44.499V0.409912Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask2_43_616)">
                          <path
                            d="M34.0373 2.01989C34.2081 1.60925 34.7898 1.60925 34.9606 2.01989L37.0267 6.98737C37.0987 7.16049 37.2615 7.27878 37.4484 7.29376L42.8112 7.72369C43.2546 7.75923 43.4343 8.31249 43.0966 8.60182L39.0107 12.1018C38.8683 12.2238 38.8061 12.4152 38.8496 12.5975L40.0979 17.8307C40.2011 18.2633 39.7305 18.6053 39.3509 18.3734L34.7596 15.5691C34.5996 15.4714 34.3984 15.4714 34.2384 15.5691L29.647 18.3734C29.2675 18.6053 28.7969 18.2633 28.9001 17.8307L30.1484 12.5975C30.1919 12.4152 30.1297 12.2238 29.9873 12.1018L25.9014 8.60182C25.5636 8.31249 25.7434 7.75923 26.1867 7.72369L31.5495 7.29376C31.7364 7.27878 31.8992 7.16049 31.9712 6.98737L34.0373 2.01989Z"
                            fill="#F2F4F7"
                          />
                          <mask
                            id="mask3_43_616"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="24"
                            y="0"
                            width="21"
                            height="21"
                          >
                            <path
                              d="M44.499 0.409912H24.499V20.4099H44.499V0.409912Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask3_43_616)">
                            <path
                              d="M34.0373 2.01989C34.2081 1.60925 34.7898 1.60925 34.9606 2.01989L37.0267 6.98737C37.0987 7.16049 37.2615 7.27878 37.4484 7.29376L42.8112 7.72369C43.2546 7.75923 43.4343 8.31249 43.0966 8.60182L39.0107 12.1018C38.8683 12.2238 38.8061 12.4152 38.8496 12.5975L40.0979 17.8307C40.2011 18.2633 39.7305 18.6053 39.3509 18.3734L34.7596 15.5691C34.5996 15.4714 34.3984 15.4714 34.2384 15.5691L29.647 18.3734C29.2675 18.6053 28.7969 18.2633 28.9001 17.8307L30.1484 12.5975C30.1919 12.4152 30.1297 12.2238 29.9873 12.1018L25.9014 8.60182C25.5636 8.31249 25.7434 7.75923 26.1867 7.72369L31.5495 7.29376C31.7364 7.27878 31.8992 7.16049 31.9712 6.98737L34.0373 2.01989Z"
                              fill="#FEC84B"
                            />
                          </g>
                        </g>
                        <mask
                          id="mask4_43_616"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="48"
                          y="0"
                          width="21"
                          height="21"
                        >
                          <path
                            d="M68.499 0.409912H48.499V20.4099H68.499V0.409912Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask4_43_616)">
                          <path
                            d="M58.0373 2.01989C58.2081 1.60925 58.7898 1.60925 58.9606 2.01989L61.0267 6.98737C61.0987 7.16049 61.2615 7.27878 61.4484 7.29376L66.8112 7.72369C67.2546 7.75923 67.4343 8.31249 67.0966 8.60182L63.0107 12.1018C62.8683 12.2238 62.8061 12.4152 62.8496 12.5975L64.0979 17.8307C64.2011 18.2633 63.7305 18.6053 63.3509 18.3734L58.7596 15.5691C58.5996 15.4714 58.3984 15.4714 58.2384 15.5691L53.647 18.3734C53.2675 18.6053 52.7969 18.2633 52.9001 17.8307L54.1484 12.5975C54.1919 12.4152 54.1297 12.2238 53.9873 12.1018L49.9014 8.60182C49.5636 8.31249 49.7434 7.75923 50.1867 7.72369L55.5495 7.29376C55.7364 7.27878 55.8992 7.16049 55.9712 6.98737L58.0373 2.01989Z"
                            fill="#F2F4F7"
                          />
                          <mask
                            id="mask5_43_616"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="48"
                            y="0"
                            width="21"
                            height="21"
                          >
                            <path
                              d="M68.499 0.409912H48.499V20.4099H68.499V0.409912Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask5_43_616)">
                            <path
                              d="M58.0373 2.01989C58.2081 1.60925 58.7898 1.60925 58.9606 2.01989L61.0267 6.98737C61.0987 7.16049 61.2615 7.27878 61.4484 7.29376L66.8112 7.72369C67.2546 7.75923 67.4343 8.31249 67.0966 8.60182L63.0107 12.1018C62.8683 12.2238 62.8061 12.4152 62.8496 12.5975L64.0979 17.8307C64.2011 18.2633 63.7305 18.6053 63.3509 18.3734L58.7596 15.5691C58.5996 15.4714 58.3984 15.4714 58.2384 15.5691L53.647 18.3734C53.2675 18.6053 52.7969 18.2633 52.9001 17.8307L54.1484 12.5975C54.1919 12.4152 54.1297 12.2238 53.9873 12.1018L49.9014 8.60182C49.5636 8.31249 49.7434 7.75923 50.1867 7.72369L55.5495 7.29376C55.7364 7.27878 55.8992 7.16049 55.9712 6.98737L58.0373 2.01989Z"
                              fill="#FEC84B"
                            />
                          </g>
                        </g>
                        <mask
                          id="mask6_43_616"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="72"
                          y="0"
                          width="21"
                          height="21"
                        >
                          <path
                            d="M92.499 0.409912H72.499V20.4099H92.499V0.409912Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask6_43_616)">
                          <path
                            d="M82.0373 2.01989C82.2081 1.60925 82.7898 1.60925 82.9606 2.01989L85.0267 6.98737C85.0987 7.16049 85.2615 7.27878 85.4484 7.29376L90.8112 7.72369C91.2546 7.75923 91.4343 8.31249 91.0966 8.60182L87.0107 12.1018C86.8683 12.2238 86.8061 12.4152 86.8496 12.5975L88.0979 17.8307C88.2011 18.2633 87.7305 18.6053 87.3509 18.3734L82.7596 15.5691C82.5996 15.4714 82.3984 15.4714 82.2384 15.5691L77.647 18.3734C77.2675 18.6053 76.7969 18.2633 76.9001 17.8307L78.1484 12.5975C78.1919 12.4152 78.1297 12.2238 77.9873 12.1018L73.9014 8.60182C73.5636 8.31249 73.7434 7.75923 74.1867 7.72369L79.5495 7.29376C79.7364 7.27878 79.8992 7.16049 79.9712 6.98737L82.0373 2.01989Z"
                            fill="#F2F4F7"
                          />
                          <mask
                            id="mask7_43_616"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="72"
                            y="0"
                            width="21"
                            height="21"
                          >
                            <path
                              d="M92.499 0.409912H72.499V20.4099H92.499V0.409912Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask7_43_616)">
                            <path
                              d="M82.0373 2.01989C82.2081 1.60925 82.7898 1.60925 82.9606 2.01989L85.0267 6.98737C85.0987 7.16049 85.2615 7.27878 85.4484 7.29376L90.8112 7.72369C91.2546 7.75923 91.4343 8.31249 91.0966 8.60182L87.0107 12.1018C86.8683 12.2238 86.8061 12.4152 86.8496 12.5975L88.0979 17.8307C88.2011 18.2633 87.7305 18.6053 87.3509 18.3734L82.7596 15.5691C82.5996 15.4714 82.3984 15.4714 82.2384 15.5691L77.647 18.3734C77.2675 18.6053 76.7969 18.2633 76.9001 17.8307L78.1484 12.5975C78.1919 12.4152 78.1297 12.2238 77.9873 12.1018L73.9014 8.60182C73.5636 8.31249 73.7434 7.75923 74.1867 7.72369L79.5495 7.29376C79.7364 7.27878 79.8992 7.16049 79.9712 6.98737L82.0373 2.01989Z"
                              fill="#FEC84B"
                            />
                          </g>
                        </g>
                        <mask
                          id="mask8_43_616"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="96"
                          y="0"
                          width="21"
                          height="21"
                        >
                          <path
                            d="M116.499 0.409912H96.499V20.4099H116.499V0.409912Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask8_43_616)">
                          <path
                            d="M106.037 2.01989C106.208 1.60925 106.79 1.60925 106.961 2.01989L109.027 6.98737C109.099 7.16049 109.262 7.27878 109.448 7.29376L114.811 7.72369C115.255 7.75923 115.434 8.31249 115.097 8.60182L111.011 12.1018C110.868 12.2238 110.806 12.4152 110.85 12.5975L112.098 17.8307C112.201 18.2633 111.73 18.6053 111.351 18.3734L106.76 15.5691C106.6 15.4714 106.398 15.4714 106.238 15.5691L101.647 18.3734C101.267 18.6053 100.797 18.2633 100.9 17.8307L102.148 12.5975C102.192 12.4152 102.13 12.2238 101.987 12.1018L97.9014 8.60182C97.5636 8.31249 97.7434 7.75923 98.1867 7.72369L103.55 7.29376C103.736 7.27878 103.899 7.16049 103.971 6.98737L106.037 2.01989Z"
                            fill="#F2F4F7"
                          />
                          <mask
                            id="mask9_43_616"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="96"
                            y="0"
                            width="21"
                            height="21"
                          >
                            <path
                              d="M116.499 0.409912H96.499V20.4099H116.499V0.409912Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask9_43_616)">
                            <path
                              d="M106.037 2.01989C106.208 1.60925 106.79 1.60925 106.961 2.01989L109.027 6.98737C109.099 7.16049 109.262 7.27878 109.448 7.29376L114.811 7.72369C115.255 7.75923 115.434 8.31249 115.097 8.60182L111.011 12.1018C110.868 12.2238 110.806 12.4152 110.85 12.5975L112.098 17.8307C112.201 18.2633 111.73 18.6053 111.351 18.3734L106.76 15.5691C106.6 15.4714 106.398 15.4714 106.238 15.5691L101.647 18.3734C101.267 18.6053 100.797 18.2633 100.9 17.8307L102.148 12.5975C102.192 12.4152 102.13 12.2238 101.987 12.1018L97.9014 8.60182C97.5636 8.31249 97.7434 7.75923 98.1867 7.72369L103.55 7.29376C103.736 7.27878 103.899 7.16049 103.971 6.98737L106.037 2.01989Z"
                              fill="#FEC84B"
                            />
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_43_616">
                          <rect
                            width="117"
                            height="20"
                            fill="white"
                            transform="translate(0.164978 0.409912)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-center mt-2  text-[var(--text)]">
                      Henry Arthur
                    </div>
                    <div className="text-center">Head of Engineering, Loom</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col  gap-4 items-center">
                  <svg
                    width="112"
                    height="34"
                    viewBox="0 0 112 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_43_600)">
                      <g clipPath="url(#clip1_43_600)">
                        <mask
                          id="mask0_43_600"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="111"
                          height="34"
                        >
                          <path
                            d="M0.498993 0.839844H110.499V33.8398H0.498993V0.839844Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_43_600)">
                          <path
                            d="M33.51 15.6128H23.454L32.162 10.5858L30.435 7.59384L21.725 12.6208L26.753 3.91384L23.761 2.18784L18.733 10.8918V0.839844H15.275V10.8928L10.247 2.18684L7.25499 3.91484L12.282 12.6188L3.57499 7.59384L1.84499 10.5858L10.555 15.6128H0.497986V19.0678H10.553L1.84499 24.0948L3.57199 27.0868L12.282 22.0598L7.25399 30.7668L10.246 32.4938L15.276 23.7878V33.8398H18.732V23.5728L23.852 32.4388L26.658 30.8188L21.537 21.9508L30.432 27.0858L32.16 24.0938L23.453 19.0668H33.508V15.6128H33.51ZM17.005 22.0368C15.9174 22.0383 14.8631 21.6623 14.0218 20.973C13.1806 20.2837 12.6046 19.3239 12.3922 18.2573C12.1798 17.1907 12.3441 16.0834 12.857 15.1244C13.37 14.1654 14.1999 13.4142 15.205 12.9988C16.0635 12.6434 17.008 12.5505 17.9193 12.7317C18.8306 12.9129 19.6678 13.3601 20.325 14.0168C20.9819 14.6738 21.4293 15.5107 21.6106 16.4218C21.792 17.333 21.6991 18.2774 21.3438 19.1358C20.9884 19.9941 20.3866 20.7279 19.6143 21.2443C18.842 21.7606 17.934 22.0365 17.005 22.0368Z"
                            fill="white"
                            fillOpacity="0.4"
                          />
                          <path
                            d="M42.419 29.4099V5.2699H46.849V29.4099H42.419ZM84.915 13.0049H89.145V15.0069C90.045 13.4069 92.145 12.5379 93.944 12.5379C96.177 12.5379 97.976 13.5059 98.808 15.2719C100.106 13.2699 101.84 12.5379 104.006 12.5379C107.037 12.5379 109.935 14.3719 109.935 18.7729V29.4099H105.638V19.6739C105.638 17.9069 104.771 16.5719 102.739 16.5719C100.839 16.5719 99.706 18.0409 99.706 19.8079V29.4109H95.31V19.6739C95.31 17.9069 94.41 16.5719 92.41 16.5719C90.478 16.5719 89.345 18.0079 89.345 19.8079V29.4109H84.915V13.0049ZM56.863 29.8849C51.871 29.8849 48.257 26.1819 48.257 21.2079C48.257 16.3129 51.86 12.5219 56.863 12.5219C61.89 12.5219 65.469 16.3479 65.469 21.2079C65.469 26.1469 61.853 29.8849 56.863 29.8849ZM56.863 16.5369C55.6247 16.5385 54.4377 17.0314 53.5625 17.9073C52.6874 18.7832 52.1955 19.9707 52.195 21.2089C52.196 22.4469 52.6881 23.6339 53.5632 24.5096C54.4383 25.3852 55.625 25.878 56.863 25.8799C58.1008 25.8778 59.2872 25.3849 60.1621 24.5092C61.037 23.6336 61.5289 22.4467 61.53 21.2089C61.5292 19.9709 61.0374 18.7838 60.1625 17.9079C59.2875 17.0321 58.101 16.539 56.863 16.5369ZM74.933 29.8859C69.941 29.8859 66.326 26.1819 66.326 21.2079C66.326 16.3129 69.93 12.5219 74.933 12.5219C79.96 12.5219 83.539 16.3479 83.539 21.2079C83.539 26.1469 79.92 29.8859 74.933 29.8859ZM74.933 16.4809C73.6806 16.4828 72.48 16.9812 71.5946 17.867C70.7093 18.7528 70.2113 19.9535 70.21 21.2059C70.211 22.4585 70.7089 23.6595 71.5943 24.5455C72.4797 25.4314 73.6804 25.93 74.933 25.9319C76.1854 25.9298 77.3858 25.4311 78.271 24.5451C79.1562 23.6592 79.6539 22.4583 79.655 21.2059C79.6536 19.9537 79.1558 18.7531 78.2707 17.8673C77.3855 16.9816 76.1852 16.483 74.933 16.4809Z"
                            fill="white"
                          />
                        </g>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_43_600">
                        <rect
                          width="111"
                          height="33"
                          fill="white"
                          transform="translate(0.164978 0.839844)"
                        />
                      </clipPath>
                      <clipPath id="clip1_43_600">
                        <rect
                          width="111"
                          height="33"
                          fill="white"
                          transform="translate(0.164978 0.839844)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="text-center text-[var(--text)]">
                    Creative, innovative and strategic. We have great
                    achievements made together and looking to more.
                  </div>

                  <div className="flex flex-col items-center">
                    <svg
                      width="118"
                      height="21"
                      viewBox="0 0 118 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_43_616)">
                        <mask
                          id="mask0_43_616"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="21"
                          height="21"
                        >
                          <path
                            d="M20.499 0.409912H0.498962V20.4099H20.499V0.409912Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_43_616)">
                          <path
                            d="M10.0373 2.01989C10.2081 1.60925 10.7898 1.60925 10.9606 2.01989L13.0267 6.98737C13.0987 7.16049 13.2615 7.27878 13.4484 7.29376L18.8112 7.72369C19.2546 7.75923 19.4343 8.31249 19.0966 8.60182L15.0107 12.1018C14.8683 12.2238 14.8061 12.4152 14.8496 12.5975L16.0979 17.8307C16.2011 18.2633 15.7305 18.6053 15.3509 18.3734L10.7596 15.5691C10.5996 15.4714 10.3984 15.4714 10.2384 15.5691L5.64702 18.3734C5.26747 18.6053 4.79685 18.2633 4.90004 17.8307L6.14835 12.5975C6.19185 12.4152 6.12967 12.2238 5.98727 12.1018L1.90138 8.60182C1.56361 8.31249 1.74337 7.75923 2.1867 7.72369L7.54951 7.29376C7.7364 7.27878 7.89921 7.16049 7.97121 6.98737L10.0373 2.01989Z"
                            fill="#F2F4F7"
                          />
                          <mask
                            id="mask1_43_616"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="21"
                            height="21"
                          >
                            <path
                              d="M20.499 0.409912H0.498962V20.4099H20.499V0.409912Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask1_43_616)">
                            <path
                              d="M10.0373 2.01989C10.2081 1.60925 10.7898 1.60925 10.9606 2.01989L13.0267 6.98737C13.0987 7.16049 13.2615 7.27878 13.4484 7.29376L18.8112 7.72369C19.2546 7.75923 19.4343 8.31249 19.0966 8.60182L15.0107 12.1018C14.8683 12.2238 14.8061 12.4152 14.8496 12.5975L16.0979 17.8307C16.2011 18.2633 15.7305 18.6053 15.3509 18.3734L10.7596 15.5691C10.5996 15.4714 10.3984 15.4714 10.2384 15.5691L5.64702 18.3734C5.26747 18.6053 4.79685 18.2633 4.90004 17.8307L6.14835 12.5975C6.19185 12.4152 6.12967 12.2238 5.98727 12.1018L1.90138 8.60182C1.56361 8.31249 1.74337 7.75923 2.1867 7.72369L7.54951 7.29376C7.7364 7.27878 7.89921 7.16049 7.97121 6.98737L10.0373 2.01989Z"
                              fill="#FEC84B"
                            />
                          </g>
                        </g>
                        <mask
                          id="mask2_43_616"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="24"
                          y="0"
                          width="21"
                          height="21"
                        >
                          <path
                            d="M44.499 0.409912H24.499V20.4099H44.499V0.409912Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask2_43_616)">
                          <path
                            d="M34.0373 2.01989C34.2081 1.60925 34.7898 1.60925 34.9606 2.01989L37.0267 6.98737C37.0987 7.16049 37.2615 7.27878 37.4484 7.29376L42.8112 7.72369C43.2546 7.75923 43.4343 8.31249 43.0966 8.60182L39.0107 12.1018C38.8683 12.2238 38.8061 12.4152 38.8496 12.5975L40.0979 17.8307C40.2011 18.2633 39.7305 18.6053 39.3509 18.3734L34.7596 15.5691C34.5996 15.4714 34.3984 15.4714 34.2384 15.5691L29.647 18.3734C29.2675 18.6053 28.7969 18.2633 28.9001 17.8307L30.1484 12.5975C30.1919 12.4152 30.1297 12.2238 29.9873 12.1018L25.9014 8.60182C25.5636 8.31249 25.7434 7.75923 26.1867 7.72369L31.5495 7.29376C31.7364 7.27878 31.8992 7.16049 31.9712 6.98737L34.0373 2.01989Z"
                            fill="#F2F4F7"
                          />
                          <mask
                            id="mask3_43_616"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="24"
                            y="0"
                            width="21"
                            height="21"
                          >
                            <path
                              d="M44.499 0.409912H24.499V20.4099H44.499V0.409912Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask3_43_616)">
                            <path
                              d="M34.0373 2.01989C34.2081 1.60925 34.7898 1.60925 34.9606 2.01989L37.0267 6.98737C37.0987 7.16049 37.2615 7.27878 37.4484 7.29376L42.8112 7.72369C43.2546 7.75923 43.4343 8.31249 43.0966 8.60182L39.0107 12.1018C38.8683 12.2238 38.8061 12.4152 38.8496 12.5975L40.0979 17.8307C40.2011 18.2633 39.7305 18.6053 39.3509 18.3734L34.7596 15.5691C34.5996 15.4714 34.3984 15.4714 34.2384 15.5691L29.647 18.3734C29.2675 18.6053 28.7969 18.2633 28.9001 17.8307L30.1484 12.5975C30.1919 12.4152 30.1297 12.2238 29.9873 12.1018L25.9014 8.60182C25.5636 8.31249 25.7434 7.75923 26.1867 7.72369L31.5495 7.29376C31.7364 7.27878 31.8992 7.16049 31.9712 6.98737L34.0373 2.01989Z"
                              fill="#FEC84B"
                            />
                          </g>
                        </g>
                        <mask
                          id="mask4_43_616"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="48"
                          y="0"
                          width="21"
                          height="21"
                        >
                          <path
                            d="M68.499 0.409912H48.499V20.4099H68.499V0.409912Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask4_43_616)">
                          <path
                            d="M58.0373 2.01989C58.2081 1.60925 58.7898 1.60925 58.9606 2.01989L61.0267 6.98737C61.0987 7.16049 61.2615 7.27878 61.4484 7.29376L66.8112 7.72369C67.2546 7.75923 67.4343 8.31249 67.0966 8.60182L63.0107 12.1018C62.8683 12.2238 62.8061 12.4152 62.8496 12.5975L64.0979 17.8307C64.2011 18.2633 63.7305 18.6053 63.3509 18.3734L58.7596 15.5691C58.5996 15.4714 58.3984 15.4714 58.2384 15.5691L53.647 18.3734C53.2675 18.6053 52.7969 18.2633 52.9001 17.8307L54.1484 12.5975C54.1919 12.4152 54.1297 12.2238 53.9873 12.1018L49.9014 8.60182C49.5636 8.31249 49.7434 7.75923 50.1867 7.72369L55.5495 7.29376C55.7364 7.27878 55.8992 7.16049 55.9712 6.98737L58.0373 2.01989Z"
                            fill="#F2F4F7"
                          />
                          <mask
                            id="mask5_43_616"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="48"
                            y="0"
                            width="21"
                            height="21"
                          >
                            <path
                              d="M68.499 0.409912H48.499V20.4099H68.499V0.409912Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask5_43_616)">
                            <path
                              d="M58.0373 2.01989C58.2081 1.60925 58.7898 1.60925 58.9606 2.01989L61.0267 6.98737C61.0987 7.16049 61.2615 7.27878 61.4484 7.29376L66.8112 7.72369C67.2546 7.75923 67.4343 8.31249 67.0966 8.60182L63.0107 12.1018C62.8683 12.2238 62.8061 12.4152 62.8496 12.5975L64.0979 17.8307C64.2011 18.2633 63.7305 18.6053 63.3509 18.3734L58.7596 15.5691C58.5996 15.4714 58.3984 15.4714 58.2384 15.5691L53.647 18.3734C53.2675 18.6053 52.7969 18.2633 52.9001 17.8307L54.1484 12.5975C54.1919 12.4152 54.1297 12.2238 53.9873 12.1018L49.9014 8.60182C49.5636 8.31249 49.7434 7.75923 50.1867 7.72369L55.5495 7.29376C55.7364 7.27878 55.8992 7.16049 55.9712 6.98737L58.0373 2.01989Z"
                              fill="#FEC84B"
                            />
                          </g>
                        </g>
                        <mask
                          id="mask6_43_616"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="72"
                          y="0"
                          width="21"
                          height="21"
                        >
                          <path
                            d="M92.499 0.409912H72.499V20.4099H92.499V0.409912Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask6_43_616)">
                          <path
                            d="M82.0373 2.01989C82.2081 1.60925 82.7898 1.60925 82.9606 2.01989L85.0267 6.98737C85.0987 7.16049 85.2615 7.27878 85.4484 7.29376L90.8112 7.72369C91.2546 7.75923 91.4343 8.31249 91.0966 8.60182L87.0107 12.1018C86.8683 12.2238 86.8061 12.4152 86.8496 12.5975L88.0979 17.8307C88.2011 18.2633 87.7305 18.6053 87.3509 18.3734L82.7596 15.5691C82.5996 15.4714 82.3984 15.4714 82.2384 15.5691L77.647 18.3734C77.2675 18.6053 76.7969 18.2633 76.9001 17.8307L78.1484 12.5975C78.1919 12.4152 78.1297 12.2238 77.9873 12.1018L73.9014 8.60182C73.5636 8.31249 73.7434 7.75923 74.1867 7.72369L79.5495 7.29376C79.7364 7.27878 79.8992 7.16049 79.9712 6.98737L82.0373 2.01989Z"
                            fill="#F2F4F7"
                          />
                          <mask
                            id="mask7_43_616"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="72"
                            y="0"
                            width="21"
                            height="21"
                          >
                            <path
                              d="M92.499 0.409912H72.499V20.4099H92.499V0.409912Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask7_43_616)">
                            <path
                              d="M82.0373 2.01989C82.2081 1.60925 82.7898 1.60925 82.9606 2.01989L85.0267 6.98737C85.0987 7.16049 85.2615 7.27878 85.4484 7.29376L90.8112 7.72369C91.2546 7.75923 91.4343 8.31249 91.0966 8.60182L87.0107 12.1018C86.8683 12.2238 86.8061 12.4152 86.8496 12.5975L88.0979 17.8307C88.2011 18.2633 87.7305 18.6053 87.3509 18.3734L82.7596 15.5691C82.5996 15.4714 82.3984 15.4714 82.2384 15.5691L77.647 18.3734C77.2675 18.6053 76.7969 18.2633 76.9001 17.8307L78.1484 12.5975C78.1919 12.4152 78.1297 12.2238 77.9873 12.1018L73.9014 8.60182C73.5636 8.31249 73.7434 7.75923 74.1867 7.72369L79.5495 7.29376C79.7364 7.27878 79.8992 7.16049 79.9712 6.98737L82.0373 2.01989Z"
                              fill="#FEC84B"
                            />
                          </g>
                        </g>
                        <mask
                          id="mask8_43_616"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="96"
                          y="0"
                          width="21"
                          height="21"
                        >
                          <path
                            d="M116.499 0.409912H96.499V20.4099H116.499V0.409912Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask8_43_616)">
                          <path
                            d="M106.037 2.01989C106.208 1.60925 106.79 1.60925 106.961 2.01989L109.027 6.98737C109.099 7.16049 109.262 7.27878 109.448 7.29376L114.811 7.72369C115.255 7.75923 115.434 8.31249 115.097 8.60182L111.011 12.1018C110.868 12.2238 110.806 12.4152 110.85 12.5975L112.098 17.8307C112.201 18.2633 111.73 18.6053 111.351 18.3734L106.76 15.5691C106.6 15.4714 106.398 15.4714 106.238 15.5691L101.647 18.3734C101.267 18.6053 100.797 18.2633 100.9 17.8307L102.148 12.5975C102.192 12.4152 102.13 12.2238 101.987 12.1018L97.9014 8.60182C97.5636 8.31249 97.7434 7.75923 98.1867 7.72369L103.55 7.29376C103.736 7.27878 103.899 7.16049 103.971 6.98737L106.037 2.01989Z"
                            fill="#F2F4F7"
                          />
                          <mask
                            id="mask9_43_616"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="96"
                            y="0"
                            width="21"
                            height="21"
                          >
                            <path
                              d="M116.499 0.409912H96.499V20.4099H116.499V0.409912Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask9_43_616)">
                            <path
                              d="M106.037 2.01989C106.208 1.60925 106.79 1.60925 106.961 2.01989L109.027 6.98737C109.099 7.16049 109.262 7.27878 109.448 7.29376L114.811 7.72369C115.255 7.75923 115.434 8.31249 115.097 8.60182L111.011 12.1018C110.868 12.2238 110.806 12.4152 110.85 12.5975L112.098 17.8307C112.201 18.2633 111.73 18.6053 111.351 18.3734L106.76 15.5691C106.6 15.4714 106.398 15.4714 106.238 15.5691L101.647 18.3734C101.267 18.6053 100.797 18.2633 100.9 17.8307L102.148 12.5975C102.192 12.4152 102.13 12.2238 101.987 12.1018L97.9014 8.60182C97.5636 8.31249 97.7434 7.75923 98.1867 7.72369L103.55 7.29376C103.736 7.27878 103.899 7.16049 103.971 6.98737L106.037 2.01989Z"
                              fill="#FEC84B"
                            />
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_43_616">
                          <rect
                            width="117"
                            height="20"
                            fill="white"
                            transform="translate(0.164978 0.409912)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-center mt-2  text-[var(--text)]">
                      Henry Arthur
                    </div>
                    <div className="text-center">Head of Engineering, Loom</div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="flex w-full gap-4 justify-between sm:w-[70%] sm:mx-auto">
                <div className="text-[var(--text)] w-1/3 flex flex-col items-center text-center text-sm sm:text-base">
                  <div className="md:text-4xl lg:text-6xl text-2xl  bg-gradient-to-r from-[var(--text)] to-white bg-clip-text text-transparent font-poppins">
                    45+
                  </div>
                  Happy Customers
                </div>
                <div className="text-[var(--text)] w-1/3 flex flex-col items-center text-center text-sm sm:text-base">
                  <div className=" md:text-4xl lg:text-6xl text-2xl  bg-gradient-to-r from-[var(--text)] to-white bg-clip-text text-transparent font-poppins">
                    45+
                  </div>
                  Happy Customers
                </div>
                <div className="text-[var(--text)] w-1/3 flex flex-col items-center text-center text-sm sm:text-base">
                  <div className=" md:text-4xl lg:text-6xl text-2xl  bg-gradient-to-r from-[var(--text)] to-white bg-clip-text text-transparent font-poppins">
                    45+
                  </div>
                  Happy Customers
                </div>
              </div>
            </div>
          </Wrapper>
          {/* faqs */}
          <Wrapper>
            <div id="faqs" className="flex items-center flex-col">
              <div className="flex items-center text-xl text-[var(--secondary)] gap-2 mb-4">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_43_9)">
                    <g clipPath="url(#clip1_43_9)">
                      <mask
                        id="mask0_43_9"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="26"
                        height="26"
                      >
                        <path
                          d="M25.5 0.988281H0.5V25.9883H25.5V0.988281Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_43_9)">
                        <path
                          d="M13 3.33203C10.9913 3.33203 9.02768 3.92768 7.35749 5.04367C5.68731 6.15965 4.38556 7.74584 3.61685 9.60165C2.84815 11.4575 2.64702 13.4996 3.0389 15.4697C3.43079 17.4398 4.39807 19.2495 5.81845 20.6699C7.23883 22.0902 9.0485 23.0575 11.0186 23.4494C12.9887 23.8413 15.0308 23.6402 16.8866 22.8715C18.7424 22.1027 20.3286 20.801 21.4446 19.1308C22.5606 17.4606 23.1563 15.497 23.1563 13.4883C23.1534 10.7956 22.0825 8.21392 20.1784 6.30987C18.2744 4.40582 15.6927 3.33487 13 3.33203ZM18.7764 11.8623L14.2695 13.793L17.5049 17.6758C17.6375 17.8351 17.7014 18.0405 17.6825 18.2469C17.6637 18.4533 17.5636 18.6438 17.4043 18.7764C17.245 18.909 17.0396 18.9729 16.8332 18.954C16.6268 18.9352 16.4363 18.8351 16.3037 18.6758L13 14.709L9.69434 18.6758C9.56173 18.8351 9.37128 18.9352 9.16488 18.954C8.95848 18.9729 8.75304 18.909 8.59375 18.7764C8.43447 18.6438 8.33439 18.4533 8.31552 18.2469C8.29666 18.0405 8.36056 17.8351 8.49317 17.6758L11.7305 13.793L7.22364 11.8623C7.1264 11.824 7.03784 11.7665 6.96321 11.6933C6.88859 11.6202 6.8294 11.5327 6.78916 11.4363C6.74893 11.3398 6.72845 11.2363 6.72896 11.1317C6.72947 11.0272 6.75095 10.9238 6.79212 10.8278C6.8333 10.7317 6.89333 10.6449 6.96867 10.5724C7.044 10.5 7.13311 10.4434 7.23072 10.406C7.32833 10.3686 7.43244 10.3511 7.5369 10.3547C7.64137 10.3583 7.74405 10.3828 7.83887 10.4268L12.2188 12.3037V7.82422C12.2188 7.61702 12.3011 7.4183 12.4476 7.27179C12.5941 7.12528 12.7928 7.04297 13 7.04297C13.2072 7.04297 13.4059 7.12528 13.5524 7.27179C13.6989 7.4183 13.7813 7.61702 13.7813 7.82422V12.3037L18.1611 10.4268C18.256 10.3828 18.3586 10.3583 18.4631 10.3547C18.5676 10.3511 18.6717 10.3686 18.7693 10.406C18.8669 10.4434 18.956 10.5 19.0313 10.5724C19.1067 10.6449 19.1667 10.7317 19.2079 10.8278C19.2491 10.9238 19.2705 11.0272 19.271 11.1317C19.2716 11.2363 19.2511 11.3398 19.2108 11.4363C19.1706 11.5327 19.1114 11.6202 19.0368 11.6933C18.9622 11.7665 18.8736 11.824 18.7764 11.8623Z"
                          fill="#E2FF02"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_43_9">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(0.5 0.988281)"
                      />
                    </clipPath>
                    <clipPath id="clip1_43_9">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(0.5 0.988281)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                FAQs
              </div>
              <div className="w-full md:w-1/2 md:text-4xl text-center text-2xl font-semibold bg-gradient-to-r from-[var(--text)] to-white bg-clip-text text-transparent font-poppins">
                We’ve got the answers
              </div>

              <div className="sm:w-[60%] flex flex-col gap-4 my-8">
                {faqs.map((faq) => (
                  <FAQ
                    key={faq.id}
                    answer={faq.answer}
                    question={faq.question}
                  />
                ))}
              </div>
              <div className="text-[var(--text)]">
                Still have more questions? Contact our{" "}
                <a href="#" className="text-white">
                  help center
                </a>
                .
              </div>
            </div>
          </Wrapper>
          {/* elevate the way */}
          <Wrapper>
            <div className="w-full py-12">
              <div className="md:w-[60%] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex flex-col items-center mx-auto p-4 rounded-xl gap-8 h-[300px] justify-center bg__size">
                <div className="sm:w-[50%] text-2xl sm:text-4xl text-center font-poppins">
                  Elevate the way you source design
                </div>
                <div className="text-[var(--text)] w-[70%] sm:w-[50%] text-center">
                  Get ready to start producing stunning, efficient design work
                  without the hassles of hiring. Soon available.
                </div>
              </div>
            </div>
          </Wrapper>

          {/* footer */}
          <Wrapper>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between w-full">
              <svg
                width="50"
                height="51"
                viewBox="0 0 50 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_43_969)">
                  <g clipPath="url(#clip1_43_969)">
                    <path
                      d="M16.666 8.70752C16.666 13.3075 20.3993 17.0408 24.9993 17.0408H41.6659C37.0659 17.0408 33.3326 13.3075 33.3326 8.70752"
                      fill="white"
                      fillOpacity="0.3"
                    />
                    <path
                      d="M33.3203 8.69314V0.359863H16.6538V8.69314H33.3203Z"
                      fill="white"
                      fillOpacity="0.3"
                    />
                    <path
                      d="M33.3338 42.0407C33.3338 37.4408 29.6005 33.7075 25.0005 33.7075H8.33398C12.934 33.7075 16.6673 37.4408 16.6673 42.0407"
                      fill="white"
                      fillOpacity="0.3"
                    />
                    <path
                      d="M16.6797 42.0266V50.3599H33.3462V42.0266H16.6797Z"
                      fill="white"
                      fillOpacity="0.3"
                    />
                    <path
                      d="M41.6673 17.0415C37.0673 17.0415 33.334 20.7748 33.334 25.3748V42.0414C33.334 37.4414 37.0673 33.7081 41.6673 33.7081"
                      fill="white"
                      fillOpacity="0.3"
                    />
                    <path
                      d="M41.6667 33.6783H50V17.0117H41.6667V33.6783Z"
                      fill="white"
                      fillOpacity="0.3"
                    />
                    <path
                      d="M8.33398 33.7074C12.934 33.7074 16.6673 29.9741 16.6673 25.3741V8.70752C16.6673 13.3075 12.934 17.0408 8.33398 17.0408"
                      fill="white"
                      fillOpacity="0.3"
                    />
                    <path
                      d="M8.33328 17.0415H0V33.7081H8.33328V17.0415Z"
                      fill="white"
                      fillOpacity="0.3"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_43_969">
                    <rect
                      width="50"
                      height="50"
                      fill="white"
                      transform="translate(0 0.359863)"
                    />
                  </clipPath>
                  <clipPath id="clip1_43_969">
                    <rect
                      width="50"
                      height="50"
                      fill="white"
                      transform="translate(0 0.359863)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#"
                    className="text-[var(--text)] hover:text-white transition-colors delay-200"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--text)] hover:text-white transition-colors delay-200"
                  >
                    Privacy & Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--text)] hover:text-white transition-colors delay-200"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
              <div>
                Developed by &nbsp;
                <a
                  href="#"
                  className="hover:underline transition-all delay-200"
                >
                  Asim Rasheed
                </a>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  );
}

function TextCard({ text }) {
  return (
    <div className="w-full sm:w-fit bg-[#161616] border border-[#262626] text-[var(--text)] flex items-center p-4 gap-4 rounded-xl">
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_43_315)">
          <g clipPath="url(#clip1_43_315)">
            <mask
              id="mask0_43_315"
              style={{
                maskTtype: "luminance",
              }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="26"
              height="26"
            >
              <path
                d="M25.86 0.790039H0.859985V25.79H25.86V0.790039Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_43_315)">
              <path
                d="M13.36 3.13379C11.3513 3.13379 9.38767 3.72944 7.71748 4.84543C6.0473 5.96141 4.74555 7.5476 3.97684 9.40341C3.20814 11.2592 3.00701 13.3013 3.39889 15.2714C3.79078 17.2415 4.75806 19.0512 6.17844 20.4716C7.59882 21.8919 9.40849 22.8592 11.3786 23.2511C13.3487 23.643 15.3908 23.4419 17.2466 22.6732C19.1024 21.9044 20.6886 20.6027 21.8046 18.9325C22.9206 17.2623 23.5163 15.2987 23.5163 13.29C23.5134 10.5973 22.4425 8.01568 20.5384 6.11163C18.6344 4.20758 16.0527 3.13663 13.36 3.13379ZM19.1364 11.664L14.6295 13.5947L17.8649 17.4775C17.9975 17.6368 18.0614 17.8422 18.0425 18.0486C18.0237 18.255 17.9236 18.4455 17.7643 18.5781C17.605 18.7107 17.3996 18.7746 17.1932 18.7557C16.9868 18.7369 16.7963 18.6368 16.6637 18.4775L13.36 14.5107L10.0543 18.4775C9.92172 18.6368 9.73127 18.7369 9.52487 18.7557C9.31847 18.7746 9.11303 18.7107 8.95374 18.5781C8.79446 18.4455 8.69438 18.255 8.67551 18.0486C8.65665 17.8422 8.72055 17.6368 8.85316 17.4775L12.0905 13.5947L7.58363 11.664C7.48639 11.6257 7.39783 11.5682 7.3232 11.495C7.24858 11.4219 7.18939 11.3344 7.14915 11.238C7.10892 11.1415 7.08844 11.038 7.08895 10.9334C7.08946 10.8289 7.11094 10.7256 7.15211 10.6295C7.19329 10.5334 7.25332 10.4466 7.32866 10.3742C7.40399 10.3017 7.4931 10.2451 7.59071 10.2077C7.68832 10.1703 7.79243 10.1529 7.89689 10.1565C8.00136 10.16 8.10404 10.1845 8.19886 10.2285L12.5788 12.1054V7.62598C12.5788 7.41878 12.6611 7.22006 12.8076 7.07355C12.9541 6.92704 13.1528 6.84473 13.36 6.84473C13.5672 6.84473 13.7659 6.92704 13.9124 7.07355C14.0589 7.22006 14.1413 7.41878 14.1413 7.62598V12.1054L18.5211 10.2285C18.616 10.1845 18.7186 10.16 18.8231 10.1565C18.9276 10.1529 19.0317 10.1703 19.1293 10.2077C19.2269 10.2451 19.316 10.3017 19.3913 10.3742C19.4667 10.4466 19.5267 10.5334 19.5679 10.6295C19.6091 10.7256 19.6305 10.8289 19.631 10.9334C19.6316 11.038 19.6111 11.1415 19.5708 11.238C19.5306 11.3344 19.4714 11.4219 19.3968 11.495C19.3222 11.5682 19.2336 11.6257 19.1364 11.664Z"
                fill="#E2FF02"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_43_315">
            <rect
              width="25"
              height="25"
              fill="white"
              transform="translate(0.859985 0.790039)"
            />
          </clipPath>
          <clipPath id="clip1_43_315">
            <rect
              width="25"
              height="25"
              fill="white"
              transform="translate(0.859985 0.790039)"
            />
          </clipPath>
        </defs>
      </svg>
      {text}
    </div>
  );
}

function FAQ({ question, answer }) {
  return (
    <details className="faq__details w-full  text-xl text-[#CCCCCC]">
      <summary className="faq__summary flex justify-between cursor-pointer hover:bg-[#161616] transition-all delay-200 rounded-xl">
        {question}
        <button className="p-2">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_43_910)">
              <rect y="7.41992" width="16" height="2" rx="1" fill="#7A7A7A" />
              <rect
                x="7"
                y="0.419922"
                width="2"
                height="16"
                rx="1"
                fill="#7A7A7A"
              />
            </g>
            <defs>
              <clipPath id="clip0_43_910">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0 0.419922)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </summary>
      <div>{answer}</div>
    </details>
  );
}
