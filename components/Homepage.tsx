'use client'

import React from "react"

import { HeroParallax } from "./ui/heroparallax"

export function HomeScreen() {
    return <HeroParallax images={images}/>
}

export const images = [
    {
      title: "Moonbeam",
      thumbnail:
          '/images/gep-1.jpeg',
    },
    {
      title: "Cursor",
      thumbnail:
          '/images/gep-2.jpeg',
    },
    {
      title: "Rogue",
      thumbnail:
          '/images/gep-3.jpg'
    },
  
    {
      title: "Editorially",
      thumbnail:
          '/images/gep-4.jpg'
    },
    {
      title: "Editrix AI",
      thumbnail:
          '/images/gep-5.jpg'
    },
    {
      title: "Pixel Perfect",
      thumbnail:
          '/images/gep-6.jpeg'
    },
  
    {
      title: "Algochurn",
      thumbnail:
          '/images/gep-7.jpeg'
    },
    {
      title: "Aceternity UI",
      thumbnail:
          '/images/gep-8.jpeg'
    },
    {
      title: "Tailwind Master Kit",
      thumbnail:
          '/images/gep-9.jpeg'
    },
    {
      title: "SmartBridge",
      thumbnail:
          '/images/gep-10.jpeg'
    },
];