import user from '../../../assets/icons/user.png';
import heart from '../../../assets/icons/heart.png';
import heartmsg from '../../../assets/icons/heartmsg.png';

type CardStepProps = {
  title: string;
  iconName: string;
  description: string;
};

const icons: { [key: string]: string } = {
  user: user,
  heart: heart,
  heartmsg: heartmsg,
};

export default function CardStep({
  iconName,
  title,
  description,
}: CardStepProps) {
  const icon = icons[iconName] || user;

  return (
    <div className="flex flex-col items-center justify-center gap-3 text-center">
      <div className="w-[72px] h-[72px] rounded-xl flex justify-center items-center bg-secondary">
        <img src={icon} alt={icon} width={30} height={30} />
      </div>
      <h5 className="text-lg">{title}</h5>
      <p className="text-sm font-light text-textGray">{description}</p>
    </div>
  );
}
