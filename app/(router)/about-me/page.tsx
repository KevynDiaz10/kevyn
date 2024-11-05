import CounterServices from "@/app/components/counter-services";
import CoverParticles from "@/app/components/Particles";
import { TimeLine } from "@/app/components/time-line";
import Image from "next/image";
import React from "react";

const PageAbout = () => {
  return (
    <div className="w-full max-w-6xl px-4 pb-40 mx-auto pt-40 md:pb-0 md:px-6">
      <CoverParticles />
      <div className="">
        <h1 className="text-2xl leading-tight text-center md:text-center md:text-5xl font-bold">
          Mi trayectoria como desarrollador
        </h1>
        </div>
          <Image
            src="/avatar-lapto.png"
            alt=""
            height={300}
            width={300}
            className="hidden bottom-0 right-0 md:inline-block md:absolute md:mt-10"
          />
        <CounterServices />
      <TimeLine />
      </div>
  );
};

export default PageAbout;
