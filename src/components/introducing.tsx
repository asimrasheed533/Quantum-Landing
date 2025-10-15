import HighlightOnScroll from "../utils/highlight-on-scroll";
import Wrapper from "./wrapper";

export default function Introducing() {
  return (
    <Wrapper>
      <div
        id="introducing"
        className="flex flex-col w-full items-center py-8 h-[300px] md:h-[500px] justify-center"
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
          INTRODUCING BOLT
        </div>
        <div className="w-full md:w-1/2 text-center text-[var(--text)] text-2xl md:text-4xl text-poppins fade-in">
          <span className="text-white">We know what’s going on.</span>
          <HighlightOnScroll
            sectionId="#introducing"
            text="You need top-notch design to stand out in the tech world, but hiring
            in-house designers can be costly and time-consuming. You need top-notch design to stand out in the tech world, but hiring
            in-house designers can be costly and time-consuming."
          />

          <div className="text-white">That’s when Atomic comes in.</div>
        </div>
      </div>
    </Wrapper>
  );
}
