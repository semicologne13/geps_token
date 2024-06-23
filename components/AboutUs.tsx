'use client'

import React from 'react'
import { motion } from "framer-motion"
import { AuroraBackground } from './ui/aurora-background'
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import Placeholder from "@/public/images/about-us.jpeg";

export function AboutUs() {
  return (
    <section id='about-us'>
        <main
            style=
                {
                    {
                        background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
                    }
                }
            className="w-full min-h-screen flex flex-col items-center justify-center sm:px-4 relative"
        >
            <Craft.Section>
                <Craft.Container className="grid md:grid-cols-2 md:gap-12 items-stretch">
                    <div className="flex flex-col gap-6 pt-8 pb-8">
                        <h3 className="text-3xl md:text-7xl font-bold dark:text-white">About Us</h3>
                        <p className="font-extralight text-base md:text-4xl dark:text-neutral-200 pb-4 pt-0">
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <div className="not-prose flex items-center gap-2">
                            <Button className="w-fit" asChild>
                                <Link href="#">Get Started</Link>
                            </Button>
                            <Button className="w-fit" variant="link" asChild>
                                <Link href="#">Learn More {"->"}</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="not-prose border relative rounded-lg overflow-hidden flex h-96">
                        <Image
                            src={Placeholder}
                            alt="placeholder"
                            className="fill object-cover"
                        />
                    </div>
                </Craft.Container>
            </Craft.Section>
        </main>
    </section>
  )
}