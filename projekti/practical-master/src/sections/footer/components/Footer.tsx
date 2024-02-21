import ButtonIconLink from '@/components/shared/ButtonIconLink';
import { Link } from 'react-router-dom';

import logofooter from '../../../assets/logofooter.png';
import mastercardlight from '../../../assets/mastercardlight.png';
import american from '../../../assets/american.png';
import visa from '../../../assets/visa.png';
import paypal from '../../../assets/paypal.png';
import maestro from '../../../assets/maestro.png';
import discover from '../../../assets/discover.png';
import facebook from '../../../assets/icons/facebook.png';
import youtube from '../../../assets/icons/youtube.png';
import twitter from '../../../assets/icons/twitter.png';
import instagram from '../../../assets/icons/instagram.png';
import linkedin from '../../../assets/icons/linkedin.png';

export default function Footer() {
  return (
    <footer className="">
      <div className="flex items-start justify-between py-20 px-28 ">
        <div className="flex flex-col items-start w-1/4 gap-6">
          <img src={logofooter} alt="logo" width={179} height={50} />
          <p className="text-sm font-light text-textGray">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            fugiat voluptates consequatur laborum aliquam laudantium aut
            incidunt! Distinctio et
          </p>
          <ButtonIconLink text="Svi kursevi" link="#" iconName="circlearrow" />
        </div>
        <div className="flex flex-col gap-5 text-left text-textWhite">
          <p className="text-sm font-light text-textGray">Navigacija</p>
          <Link to="#" className="text-sm font-light cursor-pointer">
            Početna
          </Link>
          <Link to="#" className="text-sm font-light cursor-pointer">
            Politika privatnosti
          </Link>
          <Link to="#" className="text-sm font-light cursor-pointer">
            Uslovi korišćenja
          </Link>
          <Link to="#" className="text-sm font-light cursor-pointer">
            O nama
          </Link>
          <Link to="#" className="text-sm font-light cursor-pointer">
            Često postavljana pitanja
          </Link>
          <Link to="#" className="text-sm font-light cursor-pointer">
            Blog
          </Link>
          <Link to="#" className="text-sm font-light cursor-pointer">
            Kontakt
          </Link>
        </div>
        <div className="flex flex-col gap-5 text-left text-textWhite">
          <p className="text-sm font-light text-textGray">
            Najpopularniji kursevi
          </p>
          <Link to="#" className="text-sm font-light cursor-pointer">
            Superbrain
          </Link>
          <Link to="#" className="text-sm font-light cursor-pointer">
            Uncompromissed Life
          </Link>
          <Link to="#" className="text-sm font-light cursor-pointer">
            The M Brain
          </Link>
          <Link to="#" className="text-sm font-light cursor-pointer">
            The Silva Ultramind System
          </Link>
          <Link to="#" className="text-sm font-light cursor-pointer">
            Superbrain
          </Link>
          <Link to="#" className="text-sm font-light cursor-pointer">
            Uncompromissed Life
          </Link>
        </div>
        <div className="flex flex-col gap-5 text-left text-textWhite">
          <p className="text-sm font-light text-textGray">
            Najpopularnije kategorije
          </p>
          <Link to="#" className="text-sm font-light cursor-pointer">
            Umetnost i lefestyle
          </Link>
          <Link to="#" className="text-sm font-light cursor-pointer">
            Hrana
          </Link>
          <Link to="#" className="text-sm font-light cursor-pointer">
            Biznis i preduzetništvo
          </Link>
          <Link to="#" className="text-sm font-light cursor-pointer">
            Um i telo
          </Link>
        </div>
        <div className="flex flex-col gap-5 text-left text-textWhite">
          <p className="text-sm font-light text-textGray">Povežimo se</p>
          <Link
            to="#"
            className="flex items-center gap-2 text-sm font-light cursor-pointer"
          >
            <img src={facebook} alt="facebook" width={18} height={18} />

            <span className="">Facebook</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-2 text-sm font-light cursor-pointer"
          >
            <img src={instagram} alt="instagram" width={18} height={18} />

            <span className="">Instagram</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-2 text-sm font-light cursor-pointer"
          >
            <img src={linkedin} alt="linkedin" width={18} height={18} />

            <span className="">LinkedIn</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-2 text-sm font-light cursor-pointer"
          >
            <img src={youtube} alt="youtube" width={18} height={18} />

            <span className="">Youtube</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-2 text-sm font-light cursor-pointer"
          >
            <img src={twitter} alt="twitter" width={18} height={18} />
            <span className="">Twitter</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between py-4 backdrop-brightness-150 px-28">
        <p className="text-xs font-light text-textGray">
          2024 @ Practical Master. Sva prava zadržava.
        </p>
        <div className="flex items-center justify-between gap-3">
          <img
            src={mastercardlight}
            alt="mastercardlight"
            width={36}
            height={24}
          />
          <img src={american} alt="american" width={36} height={24} />
          <img src={visa} alt="visa" width={36} height={24} />
          <img src={paypal} alt="paypal" width={36} height={24} />
          <img src={maestro} alt="maestro" width={36} height={24} />
          <img src={discover} alt="discover" width={36} height={24} />
        </div>
      </div>
    </footer>
  );
}
