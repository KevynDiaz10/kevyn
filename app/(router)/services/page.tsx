'use client'
import {
  ImageBottomRightServices,
  ImageCenterLeftServices,
} from "@/app/components/imagw-services";
import SliderServices from "@/app/components/slider-services";
import React from "react";

const page = () => {
  return (
    <div>
      <ImageBottomRightServices />
      <ImageCenterLeftServices />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 px-20">
        <div className="max-w-[550] ">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl uppercase font-semibold md:mb-5">
            Yo <span className="text-slate-300 font-bold">ofrezco</span>
          </h1>
          <br />
          <p className="z-30">
            Soy un desarrollador web full-stack entusiasta con habilidades en
            tecnol ogías como Next.js, MySQL, React, Node.js, Express, Tailwind
            CSS y Bootstrap. Aunque no cuento con experiencia profesional, he
            desarrollado varios proyectos personales que me han permitido
            consolidar mis conocimientos en estas herramientas. Estoy buscando
            oportun idades para aplicar mis habilidades en proyectos reales y
            contribuir al desarrollo de aplicaciones web innovadoras.
          </p>
          <div className="grid justify-items-center">
            <button className="px-3 py-2 rounded-lg hover:shadow-xl hover:bg-slate-400 border-2 mt-5">
              Contacta conmigo
            </button>
          </div>
        </div>
        <div className="">
          <SliderServices/>
        </div>
      </div>
    </div>
  );
};

export default page;
