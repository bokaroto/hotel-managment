import ButtonIconLink from '@/components/shared/ButtonIconLink';
import postaniclan from '../../assets/postaniclan.png';

export default function BecomeMemberSection() {
  return (
    <section>
      <div
        className="flex items-start gap-5 py-64 text-left"
        style={{ backgroundImage: `url(${postaniclan})` }}
      >
        <div className="flex flex-col justify-start w-1/2 gap-4 pl-28">
          <h2 className="text-4xl font-semibold text-textWhite">
            Postani član veċ danas
          </h2>
          <p className="text-sm text-textGray">
            Svaki program ima svoju privatnu grupu za komunikaciju u kojoj možeš{' '}
            <br />
            razmenjivati iskustva. Međusobna podrška i ohrabrenje u prijatnom i
            sigurnom <br /> okruženju .
            <br />
            <br />
            razmenjivati iskustva. Međusobna podrška i ohrabrenje u prijatnom
          </p>
          <div className="flex items-center justify-start">
            <ButtonIconLink
              text="Napravi nalog"
              link="#"
              iconName="circlearrow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
