"use client";
import ContainerGlobal from "@/app/components/container";
import { dataPortfolio } from "@/app/components/data";
import CoverParticles from "@/app/components/Particles";
import MotionTransition from "@/app/components/transition-component";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
          <div className=" relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 lg:grid-cols-4 mb-10 md:mb-24 sm:grid-cols-2">
            {dataPortfolio.map((data) => (
              <Card
                key={data.id}
                className="max-w-sm backdrop-blur-sm bg-white/5"
              >
                <Image
                  width={500}
                  height={500}
                  src={data.image}
                  alt=""
                  className="rounded-t-lg"
                />
                <h5 className=" p-2 text-2xl font-bold tracking-tight">
                  {data.title}
                </h5>
                <div className=" grid grid-cols-2 p-2 justify-items-center">
                  <Button className=" bg-black" href={data.urlGithub}>
                    GitHub
                  </Button>
                  <Button className="bg-slate-400" href={data.urlDemo}>
                    Demo
                  </Button>
                </div>
                <div className="">
                  <span className="flex flex-row justify-around pb-2">
                    <Carousel
                      className="w-full max-w-xs"
                      plugins={[Autoplay({ delay: 3000 })]}
                    >
                      <CarouselContent className="gap-1">
                        {data.icons.map((data, index) => (
                          <CarouselItem
                            key={index}
                            className="basis-1/4 items-center justify-center"
                          >
                            {data}
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </ContainerGlobal>
    </>
  );
}
