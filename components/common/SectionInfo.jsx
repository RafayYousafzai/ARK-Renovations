import { Center } from "@mantine/core";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function SectionInfo({ bg, title, desc, href, btn }) {
  return (
    <Center my={70} className={` ${bg ? "bg-slate-200" : null} py-16`}>
      <div className="lg:w-3/4">
        <h1 className={`text-4xl font-bold mb-4 text-[#6f1d1b]`}>{title}</h1>
        <p className="text-lg text-gray-700 mb-6">{desc}</p>
        <Link href={href}>
          <Button color="warning" variant="shadow">
            {btn}
          </Button>
        </Link>
      </div>
    </Center>
  );
}
