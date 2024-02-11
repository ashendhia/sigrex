import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CircleUserRound } from "lucide-react";

// import accountSvg from "@/assets/account-svgrepo-com.svg";

const LogIn = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CircleUserRound size={32} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[9999] ">
        <DropdownMenuItem>Se conencter</DropdownMenuItem>
        <DropdownMenuItem>Créer un compte</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Se déconnecter</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Contacter Nous</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LogIn;
