"use client";
import Image from "next/image";
import React from "react";
import MotionTransition from "./transition-component";

export const ImageBottomRightServices = () => {
  return (
    <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
      <MotionTransition position="bottom">
        <Image src="/avatar-1.png" width={300} height={300} alt=" " />
      </MotionTransition>
    </div>
  )
};

export const ImageCenterLeftServices = () => {
  return (
    <div className="hidden md:inline-block md:absolute bottom-0 left-0">
      <MotionTransition position="bottom">
        <Image src="/services.png" priority width={300} height={300} alt=" " className="w-[290px] h-full"/>
      </MotionTransition>
    </div>
  )
};
