import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-row w-full bg-black justify-between pb-9">
      <div className="flex flex-col w-1/3 pl-11 pr-5 py-10">
        <NavigationMenuItem className="font-bold text-4xl h-16 flex items-center text-white ">
          <Link to="/">SIGREX</Link>
          </NavigationMenuItem>


          {/* here is the search bar */}
          <div class=" flex flex-col mt-4">
            <h2 class="text-3xl font-bold tracking-tight text-white ">
              Subscribe to our Website
            </h2>
            <div class="mt-6 flex ">
              
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Subscribe
              </button>
            </div>
          </div>
        
        <div className="flex flex-row text-white items-cente w-full mt-7 ">
          <h2 className=" text-lg mr-6">Follow us : </h2>
          <div className="text-3xl mr-6">
            {" "}
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div className="text-3xl mr-6">
            {" "}
            <i class="fa-brands fa-facebook"></i>
          </div>
          <div className="text-3xl mr-6">
            {" "}
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div className="text-3xl mr-6">
            {" "}
            <i class="fa-brands fa-linkedin"></i>
          </div>

          {/* <FontAwesomeIcon icon="fa-solid fa-envelope" /> */}
        </div>
      </div>
      <div className="flex flex-col text-white py-10  w-1/3 ml-5 ">
        <h2 className=" text-2xl mr-6 font-bold">Informations </h2>
        <NavigationMenuItem className=" ml-3 text-lg my-1 flex items-center text-white">
          <Link to="/contact">Contact us</Link>
        </NavigationMenuItem>
        <NavigationMenuItem className=" ml-3 text-lg my-1 flex items-center text-white">
          <Link to="/">A propos</Link>
        </NavigationMenuItem>
        <NavigationMenuItem className=" ml-3 text-lg my-1 flex items-center text-white">
          <Link to="/contact">Souhaitez etre Formateur?</Link>
        </NavigationMenuItem>
        <NavigationMenuItem className=" ml-3 text-lg my-1 flex items-center text-white">
          <Link to="/contact">Souhaitez etre partenaire?</Link>
        </NavigationMenuItem>
      </div>
      <div className="flex flex-col text-white my-10 w-1/3 ">
        <h2 className=" text-2xl  font-bold">Contact info </h2>

        <div className="text-2xl flex flex-row mt-5">
          <i class="fa-solid fa-location-pin"></i>{" "}
          <p className="text-lg ml-3 ">
            Ecole nationale superieur d'informatique ESI{" "}
          </p>
        </div>
        <div className="text-2xl flex flex-row mt-5">
          <i class="fa-solid fa-phone"></i>
          <p className="text-lg ml-3 ">06983429234</p>
        </div>
        <div className="text-2xl flex flex-row mt-5">
          <i class="fa-regular fa-envelope"></i>{" "}
          <p className="text-lg ml-3 ">
            jw_boudissa@esi.dz , jh_loukkaf@esi.dz
          </p>
        </div>
        <div className="text-2xl flex flex-row mt-5">
          <i class="fa-regular fa-clock"></i>
          <p className="text-lg ml-3 ">Mon-Sat 9:00 am - 5:00 pm Sun:Closed</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
