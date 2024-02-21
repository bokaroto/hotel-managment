import ButtonIconLink from '@/components/shared/ButtonIconLink';
import TabContainer from './components/TabContainer';

export default function MostPopularCoursesSection() {
  return (
    <section className="overflow-x-hidden bg-gray-100 py-28">
      <div className="flex flex-col justify-start gap-4 pb-5 px-28">
        <h2 className="text-4xl font-semibold text-primary">
          Najpopularniji kursevi
        </h2>
        <p className="text-sm text-primary">
          Video lekcije koja te vode korak po korak do željenog rezultata.
        </p>
      </div>
      <div className="w-full px-0 overflow-hidden">
        <TabContainer />
        <div className="flex items-center justify-center pt-10">
          <ButtonIconLink
            text="Napravi nalog"
            link="#"
            iconName="circlearrow"
          />
        </div>
      </div>
    </section>
  );
}
