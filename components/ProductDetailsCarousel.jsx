import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <Image alt="product image" src="/p2.png" />
        <Image alt="product image" src="/p3.png" />
        <Image alt="product image" src="/p4.png" />
        <Image alt="product image" src="/p5.png" />
        <Image alt="product image" src="/p6.png" />
        <Image alt="product image" src="/p7.png" />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
