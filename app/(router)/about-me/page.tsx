import ContainerGlobal from "@/app/components/container";
import CounterServices from "@/app/components/counter-services";
import CoverParticles from "@/app/components/Particles";
import { TimeLine } from "@/app/components/time-line";
import MotionTransition from "@/app/components/transition-component";
import TransitionPage from "@/app/components/transition-page";
import Image from "next/image";
import React from "react";

const PageAbout = () => {
  return (
    <div>
      <CoverParticles />
      <ContainerGlobal>
      <div className="">
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 font-bold">
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
      </ContainerGlobal>
      <TimeLine />
    </div>
  );
};

export default PageAbout;
