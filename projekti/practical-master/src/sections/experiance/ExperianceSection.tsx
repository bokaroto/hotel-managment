// in this section you can use ExpCard component fore rendering cards

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import star from '../../assets/star.png';
import quote from '../../assets/quote.png';
import ButtonIconLink from '@/components/shared/ButtonIconLink';

export default function ExperianceSection() {
  return (
    <section className="flex flex-col items-center gap-16 py-20 bg-gray-100 px-28">
      <h2 className="text-4xl font-semibold text-primary">
        Iskustva naših polaznika
      </h2>
      <div className="flex justify-start gap-5">
        <div className="flex flex-col items-start w-1/3 gap-5 ">
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
                pariatur, fugit maiores natus labore voluptates aliquam.
                Expedita unde doloremque repudiandae, omnis adipisci excepturi
                obcaecati, non at, minus voluptatibus illo tempora.
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
                pariatur, fugit maiores natus labore voluptates aliquam.
                Expedita unde doloremque repudiandae, omnis adipisci excepturi
                obcaecati, non at, minus voluptatibus illo tempora.
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
        </div>
        <div className="flex flex-col items-start w-1/3 gap-5 ">
          <Card className=" basis-square">
            <CardHeader className="">
              <img src={quote} alt="quote" width={20} height={20} />
              <CardTitle className="text-md text-primary">
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                pariatur, fugit maiores natus labore Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolorem pariatur, fugit maiores
                natus labore
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-2 text-primary aspect-auto">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                pariatur, fugit maiores natus labore voluptates aliquam.
                Expedita unde doloremque repudiandae, omnis adipisci excepturi
                obcaecati, non at, minus voluptatibus illo tempora.
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
          <Card className=" basis-square">
            <CardHeader className="">
              <img src={quote} alt="quote" width={20} height={20} />
              <CardTitle className="text-md text-primary">
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-2 text-primary aspect-auto">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                pariatur, fugit maiores natus labore voluptates aliquam.
                Expedita unde doloremque repudiandae, omnis adipisci excepturi
                obcaecati, non at, minus voluptatibus illo tempora.
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
        </div>
        <div className="flex flex-col items-start w-1/3 gap-5 ">
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
                pariatur, fugit maiores natus labore voluptates aliquam.
                Expedita unde doloremque repudiandae, omnis adipisci excepturi
                obcaecati, non at, minus voluptatibus illo tempora. Dolorem
                pariatur, fugit maiores natus labore voluptates aliquam.
                Expedita unde doloremque repudiandae, omnis adipisci excepturi
                obcaecati, non at, minus voluptatibus illo tempora.
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
                pariatur, fugit maiores natus labore voluptates aliquam.
                Expedita unde doloremque repudiandae, omnis adipisci excepturi
                obcaecati, non at, minus voluptatibus illo tempora.
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
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ButtonIconLink text="Sve recenzije" link="#" iconName="circlearrow" />
      </div>
    </section>
  );
}
