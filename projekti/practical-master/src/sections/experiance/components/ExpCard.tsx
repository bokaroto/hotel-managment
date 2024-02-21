import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import star from '../../assets/star.png';
import quote from '../../assets/quote.png';

export default function ExpCard() {
  return (
    <Card className=" basis-square">
      <CardHeader className="">
        <img src={quote} alt="quote" width={20} height={20} />
        <CardTitle className="text-md text-primary">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          pariatur, fugit maiores natus labore
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-2 text-primary aspect-auto">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          pariatur, fugit maiores natus labore voluptates aliquam. Expedita unde
          doloremque repudiandae, omnis adipisci excepturi obcaecati, non at,
          minus voluptatibus illo tempora.
        </p>
      </CardContent>
      <CardFooter className="flex items-start gap-3 text-sm font-bold text-primary">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <div className="flex flex-col items-start justify-center gap-1">
          <p>Andjela Pantić</p>
          <div className="flex items-start gap-1">
            <img src={star} alt="star" width={12} height={12} />
            <img src={star} alt="star" width={12} height={12} />
            <img src={star} alt="star" width={12} height={12} />
            <img src={star} alt="star" width={12} height={12} />
            <img src={star} alt="star" width={12} height={12} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
