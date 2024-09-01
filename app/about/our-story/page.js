import { Center, Container, Image } from "@mantine/core";
import { Button } from "@nextui-org/react";
import BookShowing from "components/BookShowing";
import Comparison from "components/Comparison";
import VisitHomeRedesign from "components/VisitHomeRedesign";
import SectionInfo from "components/common/SectionInfo";
import FaqWithHeader from "components/Faq";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Home"
          className="rounded-none max-h-[70vh] w-screen object-cover"
          style={{ zIndex: -99 }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-bold mb-4 ml-2">
            A Proven Approach to Home Renovations in Calgary & Edmonton
          </h1>
          <Link href={"/contact"}>
            <Button color="warning" variant="shadow">
              Book A Showing
            </Button>
          </Link>
        </div>
      </div>

      <br />
      <br />
      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
            <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full md:mx-0 focus:outline-none"></button>
            <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
            <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
            <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
          </div>

          <div className="max-w-lg md:mx-12 md:order-2">
            <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
              Our Story
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Ultimate Renovations has been around for more than 40 years. We
              function on a commitment to quality, integrity, and, most
              importantly, peace of mind for our customers. Our recognition as a
              13-time “Renovator of the Year” brings the expectation of elite
              craftsmanship and superior customer service, and we take pride in
              consistently delivering on those expectations. At Ultimate
              Renovations, our goal is simple: Bring your dream home to life.
            </p>
          </div>
        </div>


      </div>

      <SectionInfo
        bg={false}
        title="     Already Have Your Designs Done?"
        desc=" No problem! We’re happy to put your existing design plans into
              place. Whether you’re an interior designer in Calgary or Edmonton,
              or a homeowner armed with plans, we’re here to bring your
              renovation dreams to life."
        btn="Book A Showing"
        href="/contact"
      />

      <FaqWithHeader />
      <VisitHomeRedesign />
      <Comparison />

      <SectionInfo
        bg={true}
        title="Our Renovation Process"
        desc=" Our approach to home renovations is preferred by customers across
            the province. Not only are we Alberta’s most awarded renovator,
            we’re a proud partner of the Alberta Renovation Warranty Program, a
            RenoMark certified contractor, and, a member of the BBB. We are big
            believers that a properly planned project will go faster, smoother,
            and easier on everyone which is why we’ve honed our renovation
            process. To minimize the inconvenience of living through a
            renovation, we can even provide alternative temporary accommodations
            for you and your family during the construction phase in Calgary."
        btn="Book A Showing"
        href="/contact"
      />
      <BookShowing />
    </>
  );
}
