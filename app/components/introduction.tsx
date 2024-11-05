"use client";
import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="z-20 w-full">
      <div className="z-20 grid h-full items-center px-6 py-20 md:py-0 md:grid-cols-2">
        <Image src="/home-4.png" priority alt="" width="400" height="400" />
        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10 font-bold text-slate-200">
            El límite está en tu imaginación
          </h1>
          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
            Soy Kevyn Diaz, un estudiante apasionado por la tecnología y la
            creación de soluciones digitales. Estoy inmerso en el emocionante
            mundo del desarrollo full-stack. En este espacio, compartiré mis
            aprendizajes, proyectos y reflexiones sobre el camino hacia
            convertirme en un desarrollador web completo."
          </p>
          <div className="flex items-center justify-center gap-5">
            <Link
              href="/projects"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:bg-slate-400"
            >
              Ver proyectos
            </Link>
            <Link
              href="/contac"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:bg-slate-400"
            >
              Contacta conmigo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
