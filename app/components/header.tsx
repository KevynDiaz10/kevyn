import React from "react";
import MotionTransition from "./transition-component";
import Link from "next/link";
import { socialNetworks } from "./data";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10 px-20"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <Link href="/" className="transition duration-500 hover:text-slate-500">
            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
              Kevyn <span className=" text-slate-300">Dev</span>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link 
              key={id} 
              href={src}
              target="blank"
              className="transition-all duration-500 hover:text-slate-400">
              {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
