"use client";

import { useState } from "react";

import Arrows from "../widgets/arrows";
import SliderItem from "../widgets/slider-item";
import SliderThumbnailItem from "../widgets/slider-thumbnail-item";

export default function SliderCars() {
  const [itemActive, setItemActive] = useState<number>(1);
  const countItems = 5;

  const onNext = () => {
    setItemActive(itemActive + 1);
    if (itemActive >= countItems) {
      setItemActive(1);
    }
  };

  const onPrevius = () => {
    setItemActive(itemActive - 1);
    if (itemActive === 1) {
      setItemActive(5);
    }
  };

  return (
    <div className="relative min-h-[800px]">
      <div>
        <SliderItem
          itemActive={itemActive}
          id={1}
          image="/images/home-1030x650.webp"
          brand="Esquadrias"
          title="alumínio de alto Padrão"
          name="Esquadrias de "
          desTitle="QUALIDADE"
          desc="Descubra a excelência em cada detalhe com nossas esquadrias de alumínio de alto padrão. Oferecemos o melhor em materias e instalação para elevar o nível do seu projeto."
        />
        <SliderItem
          itemActive={itemActive}
          id={2}
          image="/images/bgTwo.webp"
          brand="Sacada"
          title="Sacada"
          name="Envidraçamento de"
          desTitle="Vidro Temperado"
          desc="El Dodge Camaro es un icónico muscle car con líneas agresivas, rendimiento poderoso y una estética moderna que cautiva a los amantes de la velocidad."
        />
        <SliderItem
          itemActive={itemActive}
          id={3}
          image="/images/peliculas.webp"
          brand="Películas"
          title="de Alta Performance"
          name="Películas"
          desTitle="Trabalhamos com as melhores marcas"
          desc="Películas de Proteção Solar, Películas Antivandalismo, Películas Decorativas, Película Alltak Decor, Fumê 20%, NANOCARBONO, Proteção e privacidade."
        />
        <SliderItem
          itemActive={itemActive}
          id={4}
          image="/images/Guarda-corpo.webp"
          brand="Design e sostificação"
          title="Em Proteção e privacidade"
          name="Design e sostificação"
          desTitle="Guarda-Corpo de Vidro"
          desc="Se na construção de sua casa você optou por uma escada, sacada, mezanino ou algo parecido obrigatoriamente se deparou com a etapa de escolha do guarda-corpo para garantir a segurança do local."
        />
        <SliderItem
          itemActive={itemActive}
          id={5}
          image="/images/cobertura.webp"
          brand="Cobertura de vidro"
          title="REFERÊNCIA EM QUALIDADE"
          name="Cobertura"
          desTitle="COBERTURA DE VIDRO"
          desc="As coberturas de vidro são estruturas projetadas para garantir segurança e proteção, trazendo também conforto e elegância. Este tipo de projeto permite que áreas expostas possam estar seguras contra chuvas e queda de objetos, sem perder a visão e iluminação natural."
        />
      </div>
      {/* Buttons arrows */}
      <Arrows onClickPrev={() => onPrevius()} onClickNext={() => onNext()} />
      {/* Thumbnails */}
      <div className="absolute bottom-0 z-10 flex h-[250px] w-full gap-3 overflow-x-auto overflow-y-hidden px-14 sm:justify-end">
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/images/esquadria.webp"
          id={1}
          name="Esquadrias"
          onClick={() => setItemActive(1)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/images/bgTwo.webp"
          id={2}
          name="Sacada"
          onClick={() => setItemActive(2)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/images/peliculas.webp"
          id={3}
          name="Películas"
          onClick={() => setItemActive(3)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/images/Guarda-corpo.webp"
          id={4}
          name="Guarda corpo"
          onClick={() => setItemActive(4)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/images/cobertura.webp"
          id={5}
          name="Cobertura de vidro"
          onClick={() => setItemActive(5)}
        />
      </div>
    </div>
  );
}
