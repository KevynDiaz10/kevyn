import CounterServices from "@/app/components/counter-services";
import CoverParticles from "@/app/components/Particles";
import { TimeLine } from "@/app/components/time-line";
import MotionTransition from "@/app/components/transition-component";
import Image from "next/image";
import React from "react";

const PageAbout = () => {
  return (
    <div className="w-full max-w-6xl px-4 pb-40 mx-auto pt-40 md:pb-0 md:px-6">
      <CoverParticles />
      <div className="">
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl font-bold">
          Mi trayectoria como desarrollador
        </h1>
        </div>
        <MotionTransition
          position="right"
          className="hidden bottom-0 right-0 md:inline-block md:absolute md:mt-10"
        >
          <Image
            src="/avatar-lapto.png"
            alt=""
            height={400}
            width={400}
            className="w-full h-full"
          />
        </MotionTransition>
        <CounterServices />
      <TimeLine />
      </div>
  );
};

export default PageAbout;
