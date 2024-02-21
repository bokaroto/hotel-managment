import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import mozak from '../../../assets/mozak.png';
import play from '../../../assets/icons/play.png';
import clock from '../../../assets/icons/clock.png';
import arrowright from '../../../assets/icons/arrowright.png';

export default function CourseCard() {
  return (
    <Card className="p-0 bg-transparent border-none shadow-none">
      <CardHeader className="p-0">
        <img src={mozak} alt="mozak-image" width="100%" height="auto" />
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-2 px-0 py-4 aspect-auto text-primary">
        <CardTitle className="font-semibold text-md ">
          Uncompromised Life
        </CardTitle>
        <p className="text-sm font-light ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div className="flex items-center justify-center gap-1 text-sm font-bold">
          <img src={play} alt="play" width={18} height={18} />

          <p>20 lekcija</p>
        </div>
        <div className="flex items-center justify-center gap-1 text-sm font-bold">
          <img src={clock} alt="clock" width={18} height={18} />

          <p>3 sata i 27 minuta</p>
        </div>
        <Link to="#" className="flex items-center justify-center text-primary">
          <span className="text-sm font-bold ">Saznaj više</span>
          <img src={arrowright} alt="clock" width={18} height={18} />
        </Link>
      </CardContent>
    </Card>
  );
}
