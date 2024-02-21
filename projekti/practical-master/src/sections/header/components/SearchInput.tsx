import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function SearchInput() {
  return (
    <div className="relative w-[480px]">
      <Search className="absolute left-4 top-4" size={14} />

      <Input
        type="text"
        className="py-6 pl-10 placeholder-primary text-primary bg-muted rounded-xl"
        placeholder="Pretražite..."
      />
    </div>
  );
}
