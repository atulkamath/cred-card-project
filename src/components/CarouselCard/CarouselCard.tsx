import { carouselData } from "./data";

const CarouselCard = () => {
  return (
    <div className="p-8 w-full h-full sm:p-24">
      <p className="font-bold font-serif text-4xl mt-8 leading-8 sm:text-6xl max-w-3/4 lg:max-w-2/6 sm:leading-12 sm:mb-8">
        every touch is pure power.
      </p>
      <div className="flex w-full overflow-x-scroll">
        {carouselData.map((data) => (
          <div className="min-w-80 mr-10" key={data.id}>
            <video className="w-full my-5" muted autoPlay src={data.source} />
            <span>{data.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselCard;
