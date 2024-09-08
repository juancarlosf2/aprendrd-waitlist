import { Icon } from "@iconify/react";

import { subtitle, title } from "@/components/primitives";
import { FlipWords } from "@/components/flip-words";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Spotlight from "@/components/spotlight";

export default function Home() {
  const words = [
    "Interactivo",
    "Personalizado",
    "Involucrador",
    "Innovador",
    "Motivador",
  ];

  return (
    <Spotlight
      as={"section"}
      className="flex w-full flex-col items-center justify-center gap-4 py-8 md:py-10"
    >
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title({ size: "lg" })}>
          <span className="relative text-white/50 [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]">
            Inspira con un
            <br />
            Método&nbsp;
            <FlipWords className={title({ size: "lg" })} words={words} />
          </span>
        </h1>
        <p
          className={subtitle({
            fullWidth: true,
            class:
              "mt-4 relative max-w-lg text-center text-large font-medium text-default-400 [text-shadow:_0_2px_2px_rgb(0_0_0_/_25%)] sm:text-[1.05rem] lg:text-[1.05rem]",
          })}
        >
          Ofrecemos mentoría 1 a 1 que acelera el aprendizaje, empoderando a la
          próxima generación con habilidades clave.
        </p>
      </div>

      <div className="z-20 mt-8 flex w-full flex-col items-center justify-center gap-6 sm:mt-6 sm:flex-row max-w-xl">
        <Input placeholder="Correo Electrónico" size="lg" />
        <Button
          color="primary"
          type="button"
          size="lg"
          endContent={
            <Icon
              className="flex-none outline-none transition-transform group-data-[hover=true]:translate-x-0.5 [&>path]:stroke-[2]"
              icon="solar:arrow-right-linear"
              width={16}
            />
          }
        >
          Únete
        </Button>
      </div>
    </Spotlight>
  );
}
