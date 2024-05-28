import BellIcon from "@/assets/icons/bell-icon";
import EmailIcon from "@/assets/icons/email-icon";
import SearchIcon from "@/assets/icons/search-icon";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <>
      <div className="flex justify-between sm:gap-5  ">
        <div className="flex rounded-[10px] md:w-[334px] sm:w-[300px] pr-10px  overflow-hidden items-center bg-white">
          <label htmlFor="search" className="cursor-text pl-[18px] ">
            <SearchIcon />
          </label>
          <input
            type="text"
            placeholder="Search Anything"
            id="search"
            className="outline-none w-full placeholder:text-[hsl(242,18%,43%,1)] placeholder:text-sm pr-10px placeholder:font-normal pl-[10px] py-[17px]"
          />
        </div>
        <ul className="sm:hidden md:flex gap-5  items-center">
          <li>
            <Link to="/">
              <EmailIcon />
            </Link>
          </li>
          <li>
            <Link to="/">
              <BellIcon />
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center gap-1">
              <Avatar className="w-6 h-6">
                <AvatarImage src="https://pub-7be1d45c4a744f86846c80e90df909eb.r2.dev/student/profile/1adc4b97-9338-4ff8-9725-b283444485b2.jpeg" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
            </Link>
          </li>
        </ul>
        <div className="md:hidden sm:inline-block">
          <Sheet>
            <SheetTrigger>
              <Avatar className="w-6 h-6">
                <AvatarImage src="https://pub-7be1d45c4a744f86846c80e90df909eb.r2.dev/student/profile/1adc4b97-9338-4ff8-9725-b283444485b2.jpeg" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
            </SheetTrigger>
            <SheetContent className="w-[150px] h-[200px]">
              <ul className="flex flex-col gap-5  items-center">
                <li>
                  <Link to="/" className="flex items-center gap-1">
                    <EmailIcon />
                    Email
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex items-center gap-1">
                    <BellIcon />
                    Notifications
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex items-center gap-1">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="https://pub-7be1d45c4a744f86846c80e90df909eb.r2.dev/student/profile/1adc4b97-9338-4ff8-9725-b283444485b2.jpeg" />
                      <AvatarFallback>ME</AvatarFallback>
                    </Avatar>
                    Profile
                  </Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Header;
