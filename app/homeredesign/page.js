import { Container, Image } from "@mantine/core";
import BookShowing from "components/BookShowing";
import VisitHomeRedesign from "components/VisitHomeRedesign";
import GetInspired from "components/GetInspired";

import Comparison from "components/Comparison";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function Page() {
  return (
    <>
      <section className="w-full">
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Home"
            className="rounded-none max-h-[70vh] w-screen object-cover"
            style={{ zIndex: -99 }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-bold mb-4">Our Showhome</h1>
            <Link href={"/contact"}>
              <Button color="warning" variant="shadow">
                Book A Showing
              </Button>
            </Link>
          </div>
        </div>
        <div className="my-4 w-full rounded-md text-center px-2 py-8 bg-gradient-to-br bg-slate-200 ">
          <h1 className="text-4xl font-bold">Showhome Hours</h1>
          <p className="text-lg font-semibold mb-4">Sunday to Saturday</p>
          <p className="mb-4">By Appointment Only</p>
          <div className="flex justify-center">
            <Button color="success" variant="flat" className="mx-2">
              Get Directions
            </Button>
            <Link href={"#Comparison"}>
              <Button color="success" variant="solid" className="mx-2">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <GetInspired/>
        <VisitHomeRedesign/>
      </section>
      <div id="Comparison">
        <Comparison />
      </div>
      <BookShowing />
    </>
  );
}
