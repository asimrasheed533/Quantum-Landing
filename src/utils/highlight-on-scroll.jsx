import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function HighlightOnScroll({ text, sectionId }) {
  const containerRef = useRef(null);

  useGSAP(
    (context) => {
      const el = containerRef.current;
      if (!el) return;

      const section = document.querySelector(sectionId);
      if (!section) return;

      // Create the split
      let split = SplitText.create(el, { type: "chars" });

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 100px",
          end: "bottom 100px",
          pin: true,
          scrub: 1,
        },
      });

      t1.fromTo(
        split.chars,
        {
          color: "var(--text)",
        },
        {
          color: "#ffffff",
          stagger: 0.25,
        }
      );

      return () => {
        split.revert();
      };
    },
    { scope: containerRef }
  );

  return <div ref={containerRef}>{text}</div>;
}

export default HighlightOnScroll;
