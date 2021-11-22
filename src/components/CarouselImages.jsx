import "../styles/carouselimages.css";
import { Carousel, Image } from 'antd';

const CarouselImages = () => {
  return (
    <Carousel className="carousel__container" autoplay autoplaySpeed={2000} effect="fade" dotPosition="right" dots easing="ease-out">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25].map((i) => (
        <div key={i} className="carousel__image">
          <Image src={`/img/evidencia-${i}.jpeg`} width={450} height={350} />
          <br />
        </div>
      ))}
    </Carousel>
  )
}

export default CarouselImages;
