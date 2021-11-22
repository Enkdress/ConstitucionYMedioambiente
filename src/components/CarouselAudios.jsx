const CarouselImages = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div key={i}>
          <audio controls>
            <source src={`/audio/audio${i}.ogg`} type="audio/ogg" />
          </audio>
        </div>
      ))}
    </>
  )
}

export default CarouselImages;
