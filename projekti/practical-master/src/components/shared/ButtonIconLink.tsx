import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import user from '../../assets/icons/user.png';
import circlearrow from '../../assets/icons/circlearrow.png';

type ButtonIconLinkProps = {
  text: string;
  iconName: string;
  link: string;
  iconLeft?: boolean;
  backgroundGray?: boolean;
};

const icons: { [key: string]: string } = {
  circlearrow: circlearrow,
  user: user,
};

export default function ButtonIconLink({
  text,
  link,
  iconName,
  iconLeft = false,
  backgroundGray = false,
}: ButtonIconLinkProps) {
  const icon = icons[iconName] || circlearrow;

  return (
    <Button
      variant="secondary"
      className={`flex items-center justify-center px-5 py-6  rounded-xl ${
        backgroundGray ? 'bg-gray-200' : ''
      }`}
    >
      <Link
        to={link}
        className={`flex gap-2 items-center text-primary ${
          iconLeft ? 'flex-row-reverse' : ''
        }`}
      >
        <span className="text-sm font-semibold">{text}</span>
        <img src={icon} alt={icon} width={18} height={18} />
      </Link>
    </Button>
  );
}
