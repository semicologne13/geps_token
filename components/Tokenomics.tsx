'use client'
import * as Craft from "@/components/craft";
import Image from "next/image";
import Placeholder from "@/public/images/Doughnut.png";
import HoverDevCards from "./HoverDevCards";


export default function Tokenomics() {
  return (
    <main
        style={{ background: "linear-gradient(143.6deg, rgba(87, 255, 151, 0) 20.79%, rgba(121, 249, 157, 0.26) 40.92%, rgba(189, 238, 171, 0) 94.35%)", }}
        className="w-full min-h-screen flex flex-col items-center justify-center relative"
        id='tokenomics'
    >
      <Craft.Section>
        <Craft.Container className="grid md:grid-cols-2 md:gap-12 items-stretch sm:flex-row">
        <div className="flex flex-col gap-4 py-8 -ml-10 sm:mx-3">
            <h3 className="!my-0 text-8xl font-bold">Tokenomics</h3>
            <HoverDevCards/>
          </div>
          <div className="not-prose relative rounded-lg overflow-hidden mt-10">
            <Image
              src={Placeholder}
              alt="placeholder"
              className="fill object-cover lg:mt-16 md:mt-40 sm:mt-0"
            />
          </div>
        </Craft.Container>
      </Craft.Section>
    </main>
  );
}