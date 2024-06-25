import React, { useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Example: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 blur-xl h-[500px] header-bg"></div>
      <div className="relative flex h-[500px] justify-center px-3 py-12">
        <FlyoutLink href="#" FlyoutContent={PricingContent}>
          Pricing
        </FlyoutLink>
      </div>
    </div>
  );
};

interface FlyoutLinkProps {
  children: ReactNode;
  href: string;
  FlyoutContent?: React.FC;
}

const FlyoutLink: React.FC<FlyoutLinkProps> = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white/90 hover:text-white">
        {children}
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-white/30 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {open && FlyoutContent && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-transparent text-white/90"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-zinc-800/10 backdrop-blur" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent: React.FC = () => {
  return (
    <div className="w-64 p-6 rounded-xl text-white/90 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/10 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">For Individuals</h3>
        <a href="#" className="block text-sm hover:text-white">
          Introduction
        </a>
        <a href="#" className="block text-sm hover:text-white">
          Pay as you go
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">For Companies</h3>
        <a href="#" className="block text-sm hover:text-white">
          Startups
        </a>
        <a href="#" className="block text-sm hover:text-white">
          SMBs
        </a>
        <a href="#" className="block text-sm hover:text-white">
          Enterprise
        </a>
      </div>
      <button className="w-full rounded-full px-4 py-2 font-medium text-white/90 hover:text-white transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] transition-colors">
        Contact sales
      </button>
    </div>
  );
};

export default Example;