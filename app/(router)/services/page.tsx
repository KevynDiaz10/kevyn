'use client'
import {
  ImageCenterLeftServices,
} from "@/app/components/imagw-services";
import SliderServices from "@/app/components/slider-services";
import React from "react";

const page = () => {
  return (
    <div>
      <ImageCenterLeftServices />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 px-20">
        <div className="max-w-[550] ">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl uppercase font-semibold md:mb-5">
            Yo <span className="text-slate-300 font-bold">ofrezco</span>
          </h1>
          <br />
          <p className="z-30">
            Soy un desarrollador de Aplicaciones web entusiasta con habilidades en
            tecnologías como Next.js, MySQL, React, Node.js, Express, Tailwind, Prisma y Bootstrap. Aunque no cuento con experiencia laboral, he
            desarrollado varios proyectos personales que me han permitido
            consolidar mis conocimientos en estas herramientas. Estoy buscando
            oportunidades para aplicar mis habilidades en proyectos reales y
            contribuir al desarrollo de aplicaciones web.
          </p>
        </div>
        <div className="">
          <SliderServices/>
        </div>
      </div>
    </div>
  );
};

export default page;
