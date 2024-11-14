import React, { ReactNode, useEffect, useState, useRef } from "react";
import bg from "src/assets/bg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { PageWrapper } from "../../PageWrapper";
import { Solution, SolutionProps } from "./elements/Solution";
import { Problem } from "./elements/Problem";
import { Audience } from "../../../Audience";
import { InterestForm } from "src/views/pages/website/userDevelopper/elements/InterestForm";
import rotate1 from "../../../../assets/rotate-bg-1.png";
import rotate2 from "../../../../assets/rotate-bg-2.png";
import bgMain from "../../../../assets/sec1bg.png";
import { UserCondition } from "./elements/UserCondition";
import { useLocation } from "react-router-dom";

export interface UserDeveloperProps {
  audience: Audience;
  problemTitle: string | ReactNode;
  subtittle1: string | ReactNode;
  subtittle2: string | ReactNode;
  subtittle3: string | ReactNode;
  bgTextImg: string;
  mainBg: string;
  cartoonImg: string;
  primaryProblemsSrc: string;
  secondaryProblemsSrc: string;
  solutions: SolutionProps[];
  maxWidth?: string | number;
}

export function UserDeveloper(props: UserDeveloperProps) {
  const [bgSize, setBgSize] = useState("70%");
  const location = useLocation();
  const isDeveloperPath = location.pathname === "/developer";

  // Refs for animations
  const solutionHeadingRef = useRef(null);
  const solutionsContainerRef = useRef(null);
  const finalHeadingRef = useRef(null);
  const formContainerRef = useRef(null);
  const bgMainRef = useRef(null);
  const rotate1Ref = useRef(null);
  const rotate2Ref = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
      easing: "ease-in-out",
    });

    // Initial animations
    gsap.set([solutionHeadingRef.current, solutionsContainerRef.current, finalHeadingRef.current, formContainerRef.current], {
      opacity: 0,
      y: 50
    });

    gsap.set([rotate1Ref.current, rotate2Ref.current], {
      opacity: 0,
      scale: 0.8
    });

    // Solution heading animation
    gsap.to(solutionHeadingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: solutionHeadingRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Solutions container animation
    gsap.to(solutionsContainerRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: solutionsContainerRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });

    // Background main image animation
    gsap.fromTo(
      bgMainRef.current,
      { opacity: 0, x: "-20%" },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: solutionsContainerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Final section animations
    gsap.to(finalHeadingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: finalHeadingRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.to(formContainerRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: finalHeadingRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Rotating backgrounds animation
    gsap.to([rotate1Ref.current, rotate2Ref.current], {
      opacity: 0.3,
      scale: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: finalHeadingRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 2500 && window.innerWidth <= 7000) {
        setBgSize("30%");
      } else {
        setBgSize("60%");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PageWrapper>
      <div className="w-full mx-auto">
        <div className="flex flex-col 2xl:!mb-[269px] xl:mb-[200px] lg:mb-32 md:mb-24 sm:mb-28 lg:mt-20 2xl:mt-[111px] mb-20 my-8 items-center justify-center text-center !px-4 ">
          {isDeveloperPath ? (
            <Problem
              title={props.problemTitle}
              subtittle1={props.subtittle1}
              subtittle2={props.subtittle2}
              subtittle3={props.subtittle3}
              bgTextImg={props.bgTextImg}
              mainBg={props.mainBg}
              cartoonImg={props.cartoonImg}
              primarySrc={props.primaryProblemsSrc}
              secondarySrc={props.secondaryProblemsSrc}
            />
          ) : (
            <UserCondition
              title={props.problemTitle}
              subtittle1={props.subtittle1}
              subtittle2={props.subtittle2}
              subtittle3={props.subtittle3}
              bgTextImg={props.bgTextImg}
              mainBg={props.mainBg}
              cartoonImg={props.cartoonImg}
              primarySrc={props.primaryProblemsSrc}
              secondarySrc={props.secondaryProblemsSrc}
            />
          )}
        </div>

        <div className="bg-no-repeat">
          <div className="2xl:px-20 lg:px-52 container">
            <h1 
              ref={solutionHeadingRef}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-[70px] 2xl:text-[74px] xl:leading-[104.054%] ff_michroma"
            >
              No BS. <br />
              <span className="text-lg md:text-xl lg:text-2xl xl:text-[45px] 2xl:text-[54px]">
                Here's our solution.
              </span>
            </h1>
          </div>

          <div>
            <div className="bg-no-repeat">
              <div 
                ref={solutionsContainerRef}
                className="px-4 mt-12 2xl:mt-[141px] flex flex-col justify-center items-center max-w-full relative"
              >
                <img 
                  ref={bgMainRef}
                  className="absolute pointer-events-none z-[-10] -left-[40%] xl:top-[-20%] top-[-5%]" 
                  src={bgMain} 
                  alt="" 
                />
                {props.solutions.map((solution, index) => (
                  <Solution key={index} {...solution} />
                ))}
              </div>
            </div>
          </div>

          <div className="2xl:pt-[240px] mt-10 sm:mt-0 xl:pb-[228px] lg:pb-[170px] md:pb-[120px] sm:pb-20 pb-14 relative">
            <img
              ref={rotate1Ref}
              className="absolute pointer-events-none z-[-10] max-h-[260px] xs:max-h-[450px] sm:max-h-[600px] md:max-h-[998px] h-full bottom-[80%] xs:bottom-[70%] sm:bottom-[60%] md:bottom-[48%] opacity-[0.3] animate-subtleRotateMove"
              src={rotate1}
              alt=""
            />
            <img
              ref={rotate2Ref}
              className="absolute pointer-events-none z-[-10] max-h-[260px] xs:max-h-[450px] sm:max-h-[600px] md:max-h-[998px] h-full bottom-[80%] xs:bottom-[70%] sm:bottom-[60%] md:bottom-[48%] left-[10%] opacity-[0.3] animate-subtleRotateMove2"
              src={rotate2}
              alt=""
            />
            <h1 
              ref={finalHeadingRef}
              className="text-2xl md:text-[32px] lg:text-4xl xl:text-5xl 3xl:text-[61px] ff_michroma !leading-normal text-center px-3 md:px-0"
            >
              The future of open source is here <br className="hidden md:block" /> JOIN THE MOVEMENT.
            </h1>
            <div ref={formContainerRef}>
              <InterestForm />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}