import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import nasipredavaci from '../../assets/nasipredavaci.png';
import ButtonIconLink from '@/components/shared/ButtonIconLink';
import CarouselCard from './components/CarouselCard';

export default function OurTeachersSection() {
  return (
    <section className="bg-gray-100">
      <div
        className="flex pt-20 pb-40 rounded-br-[140px] items-center"
        style={{ backgroundImage: `url(${nasipredavaci})` }}
      >
        <div className="flex flex-col justify-start w-1/2 gap-4 pb-5 pl-28">
          <h2 className="text-4xl font-semibold text-white">Naši predavači</h2>
          <p className="text-sm text-white">
            Uči od najboljeg stručnjaka kroz detaljno osmišljene programe ili{' '}
            <br />
            masterclass-ove.
          </p>
          <div className="flex items-center justify-start">
            <ButtonIconLink
              text="Svi predavači"
              link="#"
              iconName="circlearrow"
            />
          </div>
        </div>
        <div className="w-1/2 ">
          <Carousel
            className="relative w-full"
            opts={{
              align: 'center',
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {Array.from({ length: 20 }).map((_, index) => (
                <CarouselItem key={index} className=" basis-1/3">
                  <div className="pl-4">
                    <CarouselCard />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute z-10 flex items-center bg-yellow-500 left-11 -bottom-10">
              <CarouselPrevious className="text-white bg-transparent border-white" />
              <CarouselNext className="text-white bg-transparent border-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
