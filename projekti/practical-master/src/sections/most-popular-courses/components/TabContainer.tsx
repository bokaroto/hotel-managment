import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ChevronRightCircle } from 'lucide-react';
import CourseCard from './CourseCard';

export default function TabContainer() {
  return (
    <Tabs defaultValue="umITelo" className="w-full px-0 mx-0 ">
      <TabsList className="h-20 gap-2 py-5 bg-transparent pl-28">
        <TabsTrigger
          value="umITelo"
          className="flex items-center justify-center gap-2 px-5 py-4 rounded-full w-fit text-primary  data-[state=active]:bg-secondary data-[state=active]:border-transparent border border-primary"
        >
          <ChevronRightCircle className="" size={18} />
          <span className="text-sm font-bold ">Um i telo</span>
        </TabsTrigger>
        <TabsTrigger
          value="umetnostILifestyle"
          className="flex items-center justify-center gap-2 px-5 py-4 rounded-full w-fit text-primary  data-[state=active]:bg-secondary border border-primary data-[state=active]:border-transparent"
        >
          <ChevronRightCircle className="" size={18} />
          <span className="text-sm font-bold ">Umetnost i lifestyle</span>
        </TabsTrigger>
        <TabsTrigger
          value="hrana"
          className="flex items-center justify-center gap-2 px-5 py-4 rounded-full w-fit text-primary  data-[state=active]:bg-secondary border border-primary data-[state=active]:border-transparent"
        >
          <ChevronRightCircle className="" size={18} />
          <span className="text-sm font-bold ">Hrana</span>
        </TabsTrigger>
        <TabsTrigger
          value="biznisIPreduzetnistvo"
          className="flex items-center justify-center gap-2 px-5 py-4 rounded-full w-fit text-primary  data-[state=active]:bg-secondary border border-primary data-[state=active]:border-transparent"
        >
          <ChevronRightCircle className="" size={18} />
          <span className="text-sm font-bold ">Biznis i preduzetništvo</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="umITelo" className="w-full px-0 mx-0 outline-none">
        <Carousel
          className="relative w-full pt-5"
          opts={{
            align: 'center',
            loop: true,
          }}
        >
          <CarouselContent className="-ml-8">
            {Array.from({ length: 20 }).map((_, index) => (
              <CarouselItem key={index} className="pl-8 basis-1/5">
                <div className="">
                  <CourseCard />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute z-10 flex items-center bg-yellow-500 -top-10 right-40">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </TabsContent>
      <TabsContent value="umetnostILifestyle">
        Change your password here.
      </TabsContent>
      <TabsContent value="hrana">Change your password here.</TabsContent>
      <TabsContent value="biznisIPreduzetnistvo">
        Change your password here.
      </TabsContent>
    </Tabs>
  );
}
