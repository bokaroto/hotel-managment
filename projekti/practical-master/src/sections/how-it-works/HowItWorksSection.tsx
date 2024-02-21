import kakofunkcionise from '../../assets/kakofunkcionise.png';
import CardStep from './components/CardStep';

export default function HowItWorksSection() {
  return (
    <section className="bg-gray-100">
      <div
        className="flex flex-col py-20 rounded-bl-[140px] items-center px-28 gap-5 text-center text-white"
        style={{ backgroundImage: `url(${kakofunkcionise})` }}
      >
        <h2 className="text-4xl font-semibold">
          Kako Practical Master funkcioniše?
        </h2>
        <p className="text-sm">
          There are many variations of passages of Lorem Ipsum available, but
          the majority <br /> have suffered alteration in some form.
        </p>
        <div className="flex items-center justify-between w-full pt-10">
          <CardStep
            title="Step 1"
            iconName="user"
            description="lorem ipsum lorem ipsum odfkes fesof foesj fosej foejsoej fose jf"
          />
          <CardStep
            title="Step 2"
            iconName="heart"
            description="lorem ipsum lorem ipsum odfkes fesof foesj fosej foejsoej fose jf"
          />
          <CardStep
            title="Step 3"
            iconName="heartmsg"
            description="lorem ipsum lorem ipsum odfkes fesof foesj fosej foejsoej fose jf"
          />
        </div>
      </div>
    </section>
  );
}
