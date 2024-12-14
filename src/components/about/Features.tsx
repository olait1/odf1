import React, { ReactNode } from "react";
import Image from "next/image";
import booksImage from "@/assets/images/christina-wocintechchat-com-rg1y72eKw6o-unsplash.jpg";
import { ButtonBase } from "../base/ButtonBase";
import { Link as LinkIcon } from "iconsax-react";

const Features = () => {
  return (
    <>
      <section id="features">
        {/* Flex Container */}
        <div className="container flex flex-col mt-4 lg:mt-16 xl:mt-40 ">
          <span id="who-we-are"></span>
          {/* What's Different */}

          <h2 className="text-5xl mt-8 text-aligned items-start text-primary">
            Who We Are
          </h2>
          <p className="max-w-sm text-text text-aligned"></p>
          <div className="flex flex-wrap mt-16 w-full lg:gap-16 md:gap-8 gap-6">
            <Image
              src={booksImage}
              alt="Books"
              className="object-cover w-72 min-w-lg flex-grow-[2] rounded-md"
            />
            <div className="w-72 flex-grow">
              <p className="text-text text-justify leading-relaxed">
                The Omovigho Donald Foundation (ODF) formerly known as God’s Own
                Center is an organization that has been in operation since 2016
                . In April 2024, we formally registered as an NGO under the
                Corporate Affairs Commission of Nigeria. . The movement which
                started in Nigeria is focused on touching the lives of
                ex-commercial sex workers women across the world.
              </p>
              <ButtonBase
                className="text-primary mt-12 text-center flex items-center justify-center gap-2"
                as="a"
                href={"/team"}
              >
                Meet our team
                <LinkIcon color="white" size={20} />
              </ButtonBase>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap container mt-16">
          <div className="bg-primary text-white flex-grow w-48 container ">
            <h2 className="text-2xl mt-8 mb-4 text-center items-start ">
              Mission
            </h2>
            <p className="text-center pb-8">
              The mission of the movement is to transition, rehabilitate and
              empower ex-commercial sex workers . We help women transition out
              of sex work by engaging in one-on-one persuasive evangelistic
              dialogues.
            </p>
          </div>
          <div className="border-primary border text-primary flex-grow w-48 container">
            <h2 className="text-2xl mt-8 mb-4 text-center items-start text-primary  ">
              Vision
            </h2>
            <p className="text-center pb-8 text-text">
              Our vision is to transition, rehabilitate and empower 5000{" "}
              <span className="text-nowrap">ex- prostitutes</span> before 2030.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
