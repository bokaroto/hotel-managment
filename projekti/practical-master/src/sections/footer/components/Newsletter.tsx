import ButtonIconLink from '@/components/shared/ButtonIconLink';
import { Input } from '@/components/ui/input';

export default function Newsletter() {
  return (
    <div className="flex items-center justify-between py-20 text-white px-28 backdrop-brightness-150">
      <div>
        <h2 className="text-3xl">
          Posalji mi besplatan primer PracticalMaster kurseva.
        </h2>
        <p className="mt-5 text-sm">
          Unesite svoju e-poštu i poslaćemo vam neke uzorke naših omiljenih
          časova.
        </p>
      </div>
      <div className="flex items-baseline w-1/2 gap-5">
        <Input
          type="text"
          className="w-full px-5 py-6 text-white bg-transparent placeholder-primary rounded-xl"
          placeholder="Email adresa"
        />
        <ButtonIconLink text="Prijavi se" link="#" iconName="circlearrow" />
      </div>
    </div>
  );
}
