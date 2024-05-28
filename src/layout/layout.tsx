import { Outlet } from "react-router-dom";
import Header from "./header/header";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Icon1 from "@/assets/icons/icon1";
import Icon2 from "@/assets/icons/icon2";
import Icon3 from "@/assets/icons/icon3";
import Icon4 from "@/assets/icons/icon4";
import Icon5 from "@/assets/icons/icon5";
import Icon6 from "@/assets/icons/icon6";
import Icon7 from "@/assets/icons/icon7";
import Icon8 from "@/assets/icons/icon8";
import Icon9 from "@/assets/icons/icon9";
import Icon10 from "@/assets/icons/icon10";

export const MainLayout = () => {
  return (
    <div className="flex gap-[30px] container rounded-xl overflow-hidden w-full ">
      <div className="md:block sm:hidden w-[102px] left-0"></div>
      <div className="lg:w-[102px] md:w-[50px] sm:w-[50px] bg-white  fixed top-0 left-0 bottom-0 ">
        <ul className="flex flex-col  gap-2 lg:p-5 md:p-2 sm:p-2">
          <li>
            <Button variant="default" size={"icon"}>
              <HomeIcon />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size={"icon"}>
              <Icon1 />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size={"icon"}>
              <Icon2 />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size={"icon"}>
              <Icon3 />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size={"icon"}>
              <Icon4 />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size={"icon"}>
              <Icon5 />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size={"icon"}>
              <Icon6 />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size={"icon"}>
              <Icon7 />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size={"icon"}>
              <Icon8 />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size={"icon"}>
              <Icon9 />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size={"icon"}>
              <Icon10 />
            </Button>
          </li>
        </ul>
      </div>
      <div className="pt-[26px] flex-shrink container">
        <header>
          <Header />
        </header>
        <Outlet />
      </div>
    </div>
  );
};
