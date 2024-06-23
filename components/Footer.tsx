import { Section, Container } from '@/components/craft'
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";  
import { BsDiscord, BsTwitterX } from 'react-icons/bs';
import { BiLogoTelegram } from 'react-icons/bi';

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12 text-white">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/">
              <h3 className="sr-only">GEPS Token</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={100}
                height={100}
                className="dark:invert hover:opacity-75 transition-all"
              ></Image>
            </Link>
            <p>
              <Balancer>
                GEPS: Green Energy Power Station
                <br/>Revolutionizing Green Energy & Sustainability
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Link href='\'>Home</Link>
            <Link href="#about-us">About Us</Link>
            <Link href="#roadmap">Roadmap</Link>
            <Link href="#tokenomics">Tokenomics</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Legal</h5>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </Container>
        <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center text-white">
          <div className="flex gap-2">
            <a href='https://t.me/gepstoken'>                    
                <Button variant="outline" size="icon" color='white'>
                <BsTwitterX size={24}/>
                </Button>
            </a>
            <a href='https://discord.com/invite/xg9uDTd6'>
            <Button variant="outline" size="icon" color='white'>
              <BsDiscord size={24}/>
            </Button>
            </a>
            <a href='https://x.com/gepstoken'>
            <Button variant="outline" size="icon" color='white'>
              <BiLogoTelegram size={24}/>
            </Button>
            </a>
          </div>
          <p className="text-muted-foreground">
            © <a href="https://github.com/brijr/components">GEPS: Green Energy Power Station</a>
            . All rights reserved. 2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
