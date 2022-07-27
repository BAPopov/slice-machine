import React from "react";
import Image from "next/image";
import { RichText } from "prismic-reactjs";

import Button from "../../components/Button";
import SectionContainer from "../../components/SectionContainer";

const Hero = ({ slice }) => {
  return (
    <SectionContainer
      background={
        slice.primary.background_color ||
        `url${slice.primary?.background_image}`
      }
    >
      <div className="flex flex-row">

        <div className="basis-1/2 flex items-baseline justify-center flex-col gap-5">
          <RichText render={slice.primary.title} />
          <RichText render={slice.primary.subtitle} />
          {slice.primary.button_title && (
            <Button
              style={{ background: slice.primary.button_background }}
              href={slice.primary.button_link.url}
              title={slice.primary.button_title}
            />
          )}
        </div>

        <div className="basis-1/2">
          <Image
            src={slice.primary.image.url}
            alt={slice.primary.image.alt}
            width={600}
            height={360}
            layout="responsive"
            className="flex max-w-full"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;

Hero.displayName = "Hero";
