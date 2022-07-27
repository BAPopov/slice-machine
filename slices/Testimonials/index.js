import React from "react";
import Image from "next/image";
import { RichText } from "prismic-reactjs";
import Carousel from "../../components/Carousel/Carousel";

const Testimonials = ({ slice }) => {
  return (
    <div className="flex flex-col items-center justify-center px-">
      {slice.primary.title && <RichText render={slice.primary.title} />}
      {slice.primary.description && (
        <RichText render={slice.primary.description} />
      )}
      {/* <div className="max-w-lg"> */}
      <Carousel>
        {slice?.items?.length &&
          slice?.items.map((item) => (
            <div key={item.avatar.url} className='max-w-md m-auto'>
              <RichText render={item.title} />
              <RichText render={item.subtitle} />
              <Image
                src={item.avatar.url}
                alt={item.avatar.alt}
                width={240}
                height={240}
              />
              <p>{item.name}</p>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
