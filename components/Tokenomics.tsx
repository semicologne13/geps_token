'use client'
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Placeholder from "@/public/images/Doughnut.png";
import HoverDevCards from "./HoverDevCards";


export default function Tokenomics() {
    const data = [
        20000000, 2500000, 2500000, 5000000, 5000000, 2500000, 5000000, 2500000, 5000000
    ]

    const labels = [
        "Presale", "R&D", "Marketing", "Treasury", "Team", "Partnership & Legal Compliance", "Liquidity", "Charity", "Reserve"
    ]
    
    const backgroundColor = [
        '#40d149', '#60e869', '#80ff88', '#ffbffb', '#ffa0f9', '#ff80f7', '#f7ff80', '#fbf540', '#ffea00'
    ]
  return (
    <main
        style={{ background: "linear-gradient(143.6deg, rgba(87, 255, 151, 0) 20.79%, rgba(121, 249, 157, 0.26) 40.92%, rgba(189, 238, 171, 0) 94.35%)", }}
        className="w-full min-h-screen flex flex-col items-center justify-center relative"
    >
      <Craft.Section>
        <Craft.Container className="grid md:grid-cols-2 md:gap-12 items-stretch">
        <div className="flex flex-col gap-4 py-8 -ml-10">
            <h3 className="!my-0 text-8xl font-bold">Tokenomics</h3>
            <HoverDevCards/>
          </div>
          <div className="not-prose relative rounded-lg overflow-hidden mt-10">
            <Image
              src={Placeholder}
              alt="placeholder"
              className="fill object-cover"
            />
          </div>
        </Craft.Container>
      </Craft.Section>
    </main>
  );
}