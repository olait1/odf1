import Image from "next/image";
import booksImage from "@/assets/images/junior-reis-9ooYPL2Tffg-unsplash.jpg";
import booksImage2 from "@/assets/images/jeff-kweba-kae-dlerBcw-unsplash.jpg";

const Statistics = () => {
  return (
    <section id="statistics">
      <div className="container flex flex-col mt-12 lg:mt-24 xl:mt-48 ">
        <h2 className="text-5xl my-16 text-aligned items-start text-primary">
          What We Do
        </h2>
        <div className="max-w-lg mx-auto">
          <div className="text-center text-text text-lg">
            Over one-third of sex workers in Nigeria are infected with human
            immunodeficiency virus (HIV)
          </div>
          <div className="text-end text-text">
            <i>PubMed</i>
          </div>
        </div>
        <div className="flex flex-row-reverse flex-wrap mt-16 lg:gap-16 md:gap-8 gap-6">
          <Image
            src={booksImage2}
            alt="Books"
            className="object-cover w-72 min-w-lg flex-grow-[2] rounded-md max-h-96 lg:max-h-[480px] border border-gray-100"
          />
          <div className="w-72 flex-grow text-text">
            As observed in our years of transitioning prostitutes, most of the
            ladies who engage in sex work were victims who were either coerced
            or trafficked . Of late ,the in-demand sex workers are within the
            age of 13 - 19 . We discovered this sad truth recently . Catherine,
            one of ODF’s converts confessed that the current average fee for
            “short time” with a prostitute is 1000 nairas in Benin City , sadly
            this is less than a dollar . She is also expected to sleep with 4 to
            10 men everyday exposing them to life threatening risks and STDs.
          </div>
        </div>
        <div className="max-w-lg me-auto mt-16">
          <div className="text-center text-text text-lg">
            There are 103,506 prostitutes in Nigeria alone.
          </div>
          <div className="text-end text-text">
            <i>UNAIDS</i>
          </div>
        </div>
        <div className="max-w-lg ms-auto mt-16 text-text">
          The activities of pimps, underage prostitution and the ownership and
          operation of brothels are penalized under sections 223, 224, and 225
          of the Nigerian Criminal Code. Yet the concerted efforts of the
          government to eradicate commercial sex work has proved abortive over
          the years.
        </div>
        <span id="projects"></span>
        <h2 className="text-5xl mt-16 text-aligned items-start text-primary">
          Projects
        </h2>
        <div className="mt-8 flex flex-col md:justify-between items-stretch gap-2">
          <div className="">
            <span className="text-text"> Over </span>
            <span className="text-green-500">250</span>
            <span className="text-text"> women rescued from prostitution.</span>
          </div>
          <div className=" ">
            <span className="text-text">Our target is </span>
            <span className="text-blue-500">5000</span>
            <span className="text-text">
              {" "}
              female former sex workers across the Globe before{" "}
            </span>
            <span className="text-blue-500">2030.</span>
          </div>
        </div>
        <div className="flex flex-wrap mt-8 w-full lg:gap-16 md:gap-8 gap-6">
          <Image
            src={booksImage}
            alt="Books"
            className="mt-8 object-cover w-72 min-w-lg flex-grow-[2] rounded-md max-h-[50vmax] border border-gray-100"
            style={{
              objectPosition: "50% 75%",
            }}
          />
          <div className="w-72 flex-grow">
            <p className="text-text leading-relaxed text-justify">
              At ODF, we are on a mission to rehabilitate 5000 female former sex
              workers across Africa and the World before 2030. We already
              commenced this mission of rehabilitating prostitutes. Since the
              inception of this movement in 2016. We have rescued over 250 women
              from prostitution in Africa, Women whom we call “our converts”.
              The goal is to make well meaning members of the society and
              dignified women from ex-prostitutes who leave the sex trade for
              good. To attain this lofty goal of rehabilitating former sex
              workers. We hold seasonal outreaches called “Winning Women
              Outreach'' .
            </p>
            <h3 className="text-2xl mt-16 text-aligned items-start text-primary">
              Winning Women Outreach
            </h3>
            <p className="text-text leading-relaxed mt-4">
              Winning women outreach is a project targeted at prostitutes in
              brothels across Nigeria, Africa and the World. With the help of
              our volunteers in other states of Nigeria . We carry out thorough
              “brothel storms” targeted at transforming female prostitutes. ODF
              tactfully carry out these projects through spiritual , evangelical
              and persuasive dialogues . Our volunteer workers are also females
              who are well trained and equipped to partake in the outreaches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
