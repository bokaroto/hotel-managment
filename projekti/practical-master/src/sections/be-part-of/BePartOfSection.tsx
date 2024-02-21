import ButtonIconLink from '@/components/shared/ButtonIconLink';
import video from '../../assets/video.png';

export default function BePartOfSection() {
  return (
    <section className="flex items-center py-20 bg-gray-100 px-28">
      <div className="flex items-center justify-center w-1/2">
        <img src={video} alt="video-image" width="100%" height="auto" />
      </div>
      <div className="flex flex-col justify-start w-1/2 gap-4 pb-5 pl-28 text-primary">
        <h2 className="text-4xl font-semibold">
          Budi deo zajednice sličnih tebi
        </h2>
        <p className="text-sm ">
          Svaki program ima svoju privatnu grupu za komunikaciju u kojoj možeš{' '}
          <br />
          razmenjivati iskustva. Međusobna podrška i ohrabrenje u prijatnom i
          sigurnom <br /> okruženju .
        </p>
        <div className="flex items-center justify-start">
          <ButtonIconLink text="Postani član" link="#" iconName="circlearrow" />
        </div>
      </div>
    </section>
  );
}
