"use client";

import { Container } from "@mantine/core";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const Hero = () => {
  return (
    <>
      <section  style={{ position: "relative" }}>
        <Image
          src="https://img.freepik.com/free-photo/modern-apartment-with-comfortable-sofa-decor-generated-by-ai_188544-38495.jpg?w=996&t=st=1705861306~exp=1705861906~hmac=02fbe24d3e087970245c381f93ed5dab168236eea682814d90a30d16150d8ba8"
          alt="Hero Image"
          radius="none"
          width="100%"
          style={{ height: "70vh", objectFit: "cover", margin: "0 auto",zIndex:1 }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            width: "100%",
          }}
        >
          <HeroText />
        </div>
      </section>
    </>
  );
};

const HeroText = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const heroContent = {
    title: "Find Your Dream Home ",
    subtitle: "Explore Stunning Properties in Your Area",
    dynamicText: (
      <TextTransition
        springConfig={presets.wobbly}
        style={{ fontSize: "1.1rem", fontWeight: 600 }}
        className="caret-neutral-900"
      >
        {
          [
            "Imagine stepping into a sunlit living room, Imagine stepping into a sunlit living room, ",
            "Invest in more than just a property. Invest Invest in more than just a property. Invest ",
            "Picture yourself hosting backyard barbecues Picture yourself hosting backyard barbecues ",
          ][index % 3]
        }
      </TextTransition>
    ),
    buttonText: "Our Showhome",
    buttonLink:"/homeredesign"
  };
  return (
    <div
      style={{ maxWidth: "75vw" }}
      className=" md:w-1/2  backdrop-blur-sm p-8 rounded-lg ml-10"
    >
      <h6 className="mb-4.5 font-medium text-white">{heroContent.title}</h6>
      <h1
        className="mb-5 pr-16 text-2xl font-bold text-white xl:text-hero "
      >
        {heroContent.subtitle}
      </h1>

      <h6 className="text-md text-white h-fit">{heroContent.dynamicText}</h6>

      <div className="mt-6">
        <Link href={heroContent.buttonLink}>
        <button
          aria-label="get started button"
          className="flex rounded-md font-bold bg-white px-7.5 py-2.5 text-black duration-300 ease-in-out hover:bg-black hover:text-white"
          >
          {heroContent.buttonText}
        </button>
          </Link>
      </div>
    </div>
  );
};

export default Hero;
