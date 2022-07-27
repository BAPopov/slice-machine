import React from "react";
import Image from "next/image";
import { RichText } from "prismic-reactjs";
import clsx from "clsx";

import Button from "../../components/Button";

const ReversableSection = ({ slice }) => {
  return (
    <div>
      <RichText render={slice.primary.title} />

      {slice.items.map((item) => (
        <div
          key={`${item.button_link} ${item.button_title}`}
          className={clsx(
            "flex flex-col",
            item.isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
          )}
          style={{ backgroundColor: item.background_color }}
        >
          <div className="basis-1/2 p-6 md:p-8">
            <RichText render={item.title.html} />

            <RichText render={item.content} />

            {item.button_title && slice.variant !== "rowSection" && (
              <Button href={item.button_link} title={item.button_title} />
            )}
          </div>

          <div className="basis-1/2">
            <Image
              src={item.image.url}
              alt={item.image.alt}
              width={900}
              height={400}
              layout="responsive"
              className="flex max-w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReversableSection;
