import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import mozak from '../../../assets/mozak.png';

export default function CarouselCard() {
  return (
    <Card className="p-0 bg-transparent border-none shadow-none">
      <CardHeader className="p-0">
        <img src={mozak} alt="mozak-image" width="100%" height="auto" />
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-2 px-0 py-4 aspect-auto">
        <CardTitle className="font-semibold text-md text-textWhite">
          Stevo Karapandža
        </CardTitle>
        <p className="text-sm font-light text-textGray">Kuvar</p>
      </CardContent>
    </Card>
  );
}
