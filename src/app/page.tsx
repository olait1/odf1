import Features from "@/components/about/Features";
import Hero from "@/components/about/Hero";
import Statistics from "@/components/about/Statistics";
import CallToAction from "@/components/about/CallToAction";

export default async function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Statistics />
      <CallToAction />
    </>
  );
}
