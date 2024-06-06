import  { useRef } from "react";
import { useGSAP } from "@gsap/react";
import TiltWrapper from "./Util/TiltWrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Header = () => {
  const navRef = useRef();
  const navContentsRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let anime = gsap.to(navRef.current, {
      yPercent: -200,
      opacity: 0.4,
      scrollTrigger: {
        trigger: navRef.current,
        duration: 0.2,
        ease: "power2.inOut",
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          if (self.direction === 1) {
            anime.play();
          } else {
            anime.reverse();
          }
        },
      },
    });
  });
  return (
    <TiltWrapper xTilt={2} yTilt={2}>
      <nav
        ref={navRef}
        className="hidden md:flex w-full h-8 sticky top-6 z-50 items-center justify-center my-6 "
      >
        <ul className=" glass flex flex-row h-auto w-4/6 items-center justify-center rounded-xl rounded-tl-none rounded-tr-none ml-10 py-0 px-8">
          <li>
            <span
              ref={navContentsRef}
              className="
              
        block
        w-full
        text-h3
        md:text-h2
        font-rubix
        text-accent
        text-center
        rounded-4xl"
            >
              Toni Baglien
            </span>
          </li>
        </ul>
      </nav>
    </TiltWrapper>
  );
};
