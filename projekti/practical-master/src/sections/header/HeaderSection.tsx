import ButtonIconLink from '@/components/shared/ButtonIconLink';
import header from '../../assets/header.png';
import Navigation from './components/Navigation';

function HeaderSection() {
  return (
    <header className="w-full">
      <Navigation />
      <section className="flex justify-center">
        <div className="flex items-center justify-start w-1/2 bg-primary pl-28">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-6xl font-bold text-white uppercase ">
                ostvari svoj cilj
              </h1>
              <h1 className="text-6xl font-bold text-white uppercase ">
                učeći od najboljih.
              </h1>
            </div>
            <h2 className="text-sm font-light text-textGray">
              Budi deo najveće platforme za lični i profesionalni razvoj.
            </h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <div className="flex items-center justify-center h-full py-4 text-sm backdrop-brightness-150 text-secondary rounded-xl">
                Um i telo
              </div>
              <div className="flex items-center justify-center h-full py-4 text-sm backdrop-brightness-150 text-secondary rounded-xl">
                Hrana
              </div>
              <div className="flex items-center justify-center h-full py-4 text-sm backdrop-brightness-150 text-secondary rounded-xl">
                Umetnost i lifestyle
              </div>
              <div className="flex items-center justify-center h-full py-4 text-sm backdrop-brightness-150 text-secondary rounded-xl">
                Biznis i preduzetništvo
              </div>
            </div>
            <div className="flex items-start justify-start">
              <ButtonIconLink
                text="Napravi nalog"
                link="#"
                iconName="circlearrow"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={header}
            alt="header-image"
            width="100%"
            height="auto"
            className="rounded-br-[140px]"
          />
        </div>
      </section>
    </header>
  );
}

export default HeaderSection;
