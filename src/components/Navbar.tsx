import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import LogIn from "./LogIn";

const Navbar = () => {
  return (
    <NavigationMenu className="w-full gap-[36vw] px-16 fixed z-50 border-b-black border-b-[1px] bg-white justify-between flex flex-row">
      <NavigationMenuList>
        <NavigationMenuItem className="font-bold text-4xl h-16 flex items-center">
          <Link to="/">SIGREX</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="flex gap-12">
        <NavigationMenuItem className=" text-lg  w-max h-16 flex items-center">
          <Link to="/">Accueil</Link>
        </NavigationMenuItem>
        <NavigationMenuItem className=" text-lg  w-max h-16 flex items-center">
          <Link to="/formations">Catalogue</Link>
        </NavigationMenuItem>
        <NavigationMenuItem className=" text-lg  w-max h-16 flex items-center">
          <Link to="/formateurs">Formateurs</Link>
        </NavigationMenuItem>

        <NavigationMenuItem className=" text-lg  w-max h-16 flex items-center">
          <Link to="/contact">Contact</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>
            <LogIn />
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
