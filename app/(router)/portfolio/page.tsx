"use client";
import ContainerGlobal from "@/app/components/container";
import { dataPortfolio } from "@/app/components/data";
import CoverParticles from "@/app/components/Particles";
import MotionTransition from "@/app/components/transition-component";

import { Button, Card } from "flowbite-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
    <CoverParticles />
      <ContainerGlobal>
        <MotionTransition
          position="bottom"
          className="bottom-0 left-0 hidden md:inline-block md:absolute"
        >
          <Image
            src={"/avatar-works.png"}
            alt=""
            width={300}
            height={300}
            className="bottom-0 mb-0"
          />
        </MotionTransition>
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5 md:text-start font-bold text-slate-200">
            Algunos de mis proyectos
          </h1>
          <div className=" relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4 mb-10 md:mb-24">
            {dataPortfolio.map((data) => (
              <Card
                key={data.id}
                className="max-w-sm"
                renderImage={() => (
                  <Image
                    width={500}
                    height={500}
                    src={data.image}
                    alt=""
                    className="rounded-t-lg"
                  />
                )}
              >
                <h5 className=" p-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.title}
                </h5>
                <div className=" grid grid-cols-2 p-2 justify-items-center">
                  <Button className=" bg-black">GitHub</Button>
                  <Button className="bg-slate-400">Demo</Button>
                </div>
                <div className="">
                  <span className="flex flex-row justify-around">{data.icons}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </ContainerGlobal>
    </>
  );
}
