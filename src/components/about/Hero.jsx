import Link from "next/link";
import Image from "next/image";

import illustrationIntro from "@/assets/images/kaeme-rgN-MzrZ5h4-unsplash.jpg";
import { ButtonBase } from "../base/ButtonBase";

const Hero = () => {
  return (
    <section id="hero">
      {/* Flex Container */}
      <div className="relative z-10 container  flex flex-col-reverse md:justify-between items-stretch md:gap-8 space-y-0 md:space-y-0 md:flex-row lg:flex-row-reverse min-h-[calc(100vh-64px)]">
        {/* Left Item */}
        <div
          id="left-item"
          className="bg-white/90 md:-mx-16 md:px-16 flex flex-col lg:py-8 xl:py-16  space-y-8 md:w-1/2 justify-center items-aligned max-md:bg-white max-md:bg-opacity-75 max-md:-mt-40 max-md:rounded-3xl max-md:py-8 max-md:px-4"
        >
          <h1 className="max-w-md text-4xl max-sm:text-left text-aligned md:text-5xl py-2 leading-tight md:leading-tight">
            <span className="max-[300px]:text-wrap text-primary">
              Omovigho Donald Foundation
            </span>
          </h1>
          <p className="max-w-sm max-sm:text-left text-aligned text-text leading-relaxed ">
            The mission of the movement is to transition, rehabilitate and
            empower ex-commercial sex workers . We help women transition out of
            sex work by engaging in one-on-one persuasive evangelistic
            dialogues.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-auto md:inset-0 -z-10 md:absolute max-md:flex max-md:justify-center max-md:flex-grow">
          <Image
            priority
            src={illustrationIntro}
            className="rounded-b-md object-cover ms-auto max-h-full max-md:h-screen md:h-full max-md:max-w-none max-sm:w-screen sm:max-md:w-[calc(100vw-14px)] max-md:flex-shrink-0 max-md:max-h-[50vmax]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
