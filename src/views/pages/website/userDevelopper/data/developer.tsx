// data.js

import React from "react";
import img2 from "src/assets/developerimg1.png";
import img3 from "src/assets/developerimg2.png";
import img4 from "src/assets/sec2img.png";
import bgText from "src/assets/userbannertext.png";
import primaryProblemsSrc from "src/assets/btn2.png";
import secondaryProblemsSrc from "src/assets/userbannertext.png";
import { SolutionProps } from "../elements/Solution";
import { UserDeveloperProps } from "../UserDeveloper";
import { Audience } from "../../../../Audience";
import devBg from "src/assets/developer-bg.png";
import img1 from "src/assets/source.png";

const audience = Audience.DEVELOPER;
const solution1: SolutionProps = {
  audience,
  image: img2,
  starPosition: "top-[135px] left-[240px] w-[80px]",
  title: "Get Paid",
  subTitle: "Earn, Don’t Burn",
  text: (
    <>
      <p className="sm:mt-[35px] mt-6">
        Gain tokens for your involvement. <br /> Get a stake in your project's success
      </p>
    </>
  ),
  comming: undefined,
};

const solution2: SolutionProps = {
  audience,
  image: img3,
  starPosition: "top-[120px] left-[230px] w-[80px]",
  title: "Have a Say",
  subTitle: "Forget the Far West!",
  text: (
    <>
      <p className="xl:py-[96px] lg:py-14 sm:py-8 pt-8">
        The deeper your insights, the stronger your <br /> influence.
      </p>
    </>
  ),
  comming: undefined,
};

const solution3: SolutionProps = {
  audience,
  image: img4,
  starPosition: "top-[180px] left-[122px] w-[70px]",
  title: "Fund Your Future",
  subTitle: "Stop begging for donations!",
  text: (
    <>
      <ul className="px-10 2xl:mt-[46px] mt-6">
        <li className="list-disc">Easily set up new revenue streams. </li>
        <li className="list-disc">Attract financial backers.</li>
      </ul>
      <h2 className="xl:py-[51px] lg:py-10 py-6">And bring your vision to life!</h2>
    </>
  ),
  comming: undefined,
};

export const developerProps: UserDeveloperProps = {
  audience,
  problemTitle: (
    <>
      As an open source dev
      <br />
      are you experiencing....
    </>
  ),
  subtittle1: (
    <p className="bg-[#FF7E4B] lg:!p-[15px] mx:p-2 p-1 rounded-[10px] max-w-[319px] w-full">
      No availability <br className="mx:block hidden" /> for community
    </p>
  ),
  subtittle2: (
    <p className="bg-[#FF7E4B] lg:!p-[15px] mx:p-2 p-1 rounded-[10px] max-w-[319px] w-full">
      Others profiting
      <br className="mx:block hidden" />
      off your work
    </p>
  ),
  subtittle3: (
    <p className="bg-[#FF7E4B] lg:!p-[15px] mx:p-2 p-1 rounded-[10px] max-w-[319px] w-full">
      Project struggling
      <br className="mx:block hidden" />
      to survive
    </p>
  ),
  bgTextImg: bgText,
  mainBg: devBg,
  cartoonImg: img1,
  primaryProblemsSrc: primaryProblemsSrc,
  secondaryProblemsSrc: secondaryProblemsSrc,
  solutions: [solution1, solution2, solution3],
};
