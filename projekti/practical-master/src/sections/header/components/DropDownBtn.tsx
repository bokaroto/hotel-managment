import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
  ChevronDown,
  ArrowDownWideNarrow,
  ArrowUpNarrowWide,
} from 'lucide-react';

export default function DropDownBtn() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className="flex items-center justify-center gap-1 px-5 py-6 bg-gray-200 text-primary rounded-xl"
        >
          <span>Kursevi</span>
          <ChevronDown size={14} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <ArrowDownWideNarrow className="mr-1 " size={14} />
          A-Z
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ArrowUpNarrowWide className="mr-1 " size={14} />
          Z-A
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
