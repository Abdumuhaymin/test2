import { Outlet } from "react-router-dom";
import Header from "./header/header";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Icon1 from "@/assets/icons/icon1";
import Icon2 from "@/assets/icons/icon2";
import Icon3 from "@/assets/icons/icon3";

export const MainLayout = () => {
  return (
    <div className="flex gap-[30px] container rounded-xl overflow-hidden w-full ">
      <div className="md:block sm:hidden w-[102px] left-0"></div>
      <div className="md:w-[102px] sm:w-[50px] bg-white  fixed top-0 left-0 bottom-0 ">
        <ul className="flex flex-col gap-2 p-5">
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
              <HomeIcon />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size={"icon"}>
              <HomeIcon />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size={"icon"}>
              <HomeIcon />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size={"icon"}>
              <HomeIcon />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size={"icon"}>
              <HomeIcon />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size={"icon"}>
              <HomeIcon />
            </Button>
          </li>
          <li>
            <Button variant="secondary" size={"icon"}>
              <HomeIcon />
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
