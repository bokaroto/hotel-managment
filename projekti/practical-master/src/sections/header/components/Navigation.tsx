import ButtonIconLink from '@/components/shared/ButtonIconLink';
import logo from '../../../assets/logo.png';
import DropDownBtn from './DropDownBtn';
import SearchInput from './SearchInput';

export default function Navigation() {
  return (
    <div className="flex items-center gap-5 py-5 px-28">
      <img src={logo} alt="logo" width={179} height={50} />
      <nav className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center ">
            <DropDownBtn />
          </div>
          <SearchInput />
        </div>
        <div className="flex items-center justify-between gap-3">
          <ButtonIconLink
            text="Prijava"
            link="#"
            iconName="user"
            iconLeft={true}
            backgroundGray={true}
          />
          <ButtonIconLink
            text="Napravi nalog"
            link="#"
            iconName="circlearrow"
          />
        </div>
      </nav>
    </div>
  );
}
