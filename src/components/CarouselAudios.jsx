import { Carousel, Image } from 'antd';

const CarouselImages = () => {
  return (
    <Carousel autoplay autoplaySpeed={2000} effect="fade" dotPosition="right" dots easing="ease-out">
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div key={i}>
          <audio src={`audio${i}.ogg`} controls>
            <a href={`audio${i}.ogg`}>Descargar</a>
          </audio>
        </div>
      ))}
    </Carousel>
  )
}

export default CarouselImages;
