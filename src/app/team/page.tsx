import Footer from "@/components/about/Footer";
import Navbar from "@/components/about/Navbar";
import Image from "next/image";
import donatusImage from "@/assets/images/donatus.png";
import julietImage from "@/assets/images/juliet.png";
import hannahImage from "@/assets/images/francis.png";
import elizabethImage from "@/assets/images/elizabeth.png";

import { ButtonBase } from "@/components/base/ButtonBase";
import { Link1 as LinkIcon } from "iconsax-react";

export default function Home() {
  const teamMembers = [
    {
      id: 1,
      name: "Donatus Iruefo Omovigho",
      role: "Founder/President",
      image: donatusImage,
      description: ``,
      linkText: "Facebook",
      link: "https://www.facebook.com/omovigho.bazunu.7?mibextid=ZbWKwL",
      link2Text: "Instagram",
      link2:
        "https://www.instagram.com/omovighodonaldfoundation?igsh=MXI0YnA3MDNmaGZ3aw==",
    },
    {
      id: 1,
      name: "Oluchi Juliet Ekwonwa",
      role: "Secretary General",
      image: julietImage,
      description: ``,
      linkText: "LinkedIn",
      link: "https://www.linkedin.com/in/oluchi-juliet-ekwonwa-887535188?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      link2Text: "Facebook",
      link2: "https://www.facebook.com/oluchijuliet93?mibextid=ZbWKwL",
    },
    {
      id: 2,
      name: "Akran Hannah",
      role: "Trustee Member",
      image: hannahImage,
      description: ``,
      linkText: "Facebook",
      link: "https://www.facebook.com/francis.hanny.1?mibextid=ZbWKwL",
    },
    {
      id: 3,
      name: "Ikejima Elizabeth",
      role: "Trustee Member",
      image: elizabethImage,
      description: ``,
      linkText: "LinkedIn",
      link: "https://www.facebook.com/lizi.scholar.5",
    },
  ];
  return (
    <>
      <div className="container">
        <h1 className="text-primary text-center text-3xl capitalize mt-16">
          Board Of Directors
        </h1>
        <p className="text-center text-darkBlue mt-4">
          Meet the people that made this possible.
        </p>
        <div className="mb-32">
          {teamMembers.map((member) => {
            return (
              <div
                className="flex even:flex-row-reverse gap-x-32 gap-y-8 flex-wrap justify-center mt-32 items-center"
                key={member.id}
              >
                <Image
                  src={member.image}
                  width={960}
                  height={960}
                  alt={"image for " + member.name}
                  className="max-w-full w-[480px] aspect-square object-cover object-top  rounded-full border border-darkBlue/25"
                />
                <div className="flex flex-col w-[480px] max-w-full py-2">
                  <h2 className="text-2xl">{member.name}</h2>
                  <h3 className="text-lg text-darkGrayishBlue -order-1">
                    {member.role}
                  </h3>
                  <p className="mt-8 text-darkGrayishBlue whitespace-pre-line">
                    {member.description}
                  </p>
                  <div className=" flex w-full gap-4 flex-wrap flex-grow">
                    {member.link && (
                      <ButtonBase
                        className="text-primary mt-12 text-center flex items-center justify-center gap-2"
                        as="a"
                        href={member.link}
                        target="_blank"
                      >
                        {member.linkText}
                        <LinkIcon color="white" size={20} />
                      </ButtonBase>
                    )}
                    {member.link2 && (
                      <ButtonBase
                        className="text-primary mt-12 text-center flex items-center justify-center gap-2"
                        as="a"
                        href={member.link2}
                        target="_blank"
                      >
                        {member.link2Text}
                        <LinkIcon color="white" size={20} />
                      </ButtonBase>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
