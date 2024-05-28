import Linechart from "@/components/charts/line-chart";
import RadialChart from "@/components/charts/radial-chart";
import UserIcon from "@/assets/icons/user-icon";
import SesionIcon from "@/assets/icons/sesion-icon";
import BonuceIcon from "@/assets/icons/bonuce-icon";
import DurationIcon from "@/assets/icons/duration-icon";
import { Button } from "@/components/ui/button";
import ProgressBar from "react-customizable-progressbar";
import HorizontalBarChart from "@/components/charts/horizontal-bar";

const Home = () => {
  return (
    <div className="pt-5 pb-[30px] flex gap-[30px] md:flex-row md:items-start  sm:items-center sm:flex-col">
      <div className="sm:w-[300px] md:w-[650px]">
        <div className="flex justify-between mb-[15px] items-center">
          <h3 className="text-[#15134B] text-xl font-bold">Performance</h3>
          <p className="text-[#5A5881] font-bold text-sm">Year</p>
        </div>
        <div className="sm:w-[300px]  bg-white px-[30px] pt-5 pb-5 h-[200px] rounded-[10px] md:w-[650px]">
          <h2 className="flex items-center gap-2 text-[#5A5881] font-bold text-sm float-end ">
            <span className="inline-block w-2 h-2 bg-[hsla(248,100%,61%,1)] rounded-full"></span>{" "}
            Current Period
          </h2>
          <Linechart />
        </div>
        <div className="pt-[30px]">
          <ul className="flex sm:flex-col sm:gap-[30px] md:flex-row">
            <li>
              <ul className="flex items-center gap-[30px]">
                <li className="flex flex-col bg-white rounded-[10px] items-start w-[140px] py-5 pl-5">
                  <UserIcon />
                  <p className="pt-[30px] font-bold text-sm text-[#5A5881] ">
                    Users
                  </p>
                  <p className="pt-[10px] font-medium text-2xl text-[#15134B]">
                    72.6k
                  </p>
                  <p className="pt-[10px] font-medium text-sm text-[#5A5881]">
                    +25%
                  </p>
                </li>
                <li className="flex flex-col bg-white rounded-[10px] items-start w-[140px] py-5 pl-5">
                  <SesionIcon />
                  <p className="pt-[30px] font-bold text-sm text-[#5A5881] ">
                    Sessions
                  </p>
                  <p className="pt-[10px] font-medium text-2xl text-[#15134B]">
                    87.2k
                  </p>
                  <p className="pt-[10px] font-medium text-sm text-[#5A5881]">
                    +47%
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex items-center gap-[30px]">
                <li className="flex flex-col bg-white rounded-[10px] items-start w-[140px] py-5 pl-5">
                  <BonuceIcon />
                  <p className="pt-[30px] font-bold text-sm text-[#5A5881] ">
                    Bounce Rate
                  </p>
                  <p className="pt-[10px] font-medium text-2xl text-[#15134B]">
                    26.3%
                  </p>
                  <p className="pt-[10px] font-medium text-sm text-[#5A5881]">
                    -28%
                  </p>
                </li>
                <li className="flex flex-col bg-white rounded-[10px] items-start w-[140px] py-5 pl-5">
                  <DurationIcon />
                  <p className="pt-[30px] font-bold text-sm text-[#5A5881] ">
                    Session Duration
                  </p>
                  <p className="pt-[10px] font-medium text-2xl text-[#15134B]">
                    2m 18s
                  </p>
                  <p className="pt-[10px] font-medium text-sm text-[#5A5881]">
                    +13%
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between items-center pt-[39px] pb-[30px]">
            <h3 className="text-[#15134B] text-xl font-bold ">
              Daily Overview
            </h3>
            <Button variant="secondary">Export</Button>
          </div>
          <ul className="grid md:gap-x-[30px] sm:gap-x-0 sm:gap-y-[30px] md:gap-y-0 md:grid-cols-2 sm:grid-cols-1">
            <li className="flex rounded-[10px]  justify-between items-center py-[43px] px-5 w-[310px] bg-white">
              <div>
                <p className="text-[#15134B] text-xl font-bold">5,461 </p>
                <p className="text-[#5A5881]">Today</p>
              </div>

              <ProgressBar
                radius={30}
                strokeWidth={6}
                progress={70}
                strokeColor="#563BFF"
                strokeLinecap="round"
                trackStrokeWidth={6}
                counterClockwise
                className="bg-[#EFECFF] rounded-full overflow-hidden"
              >
                <div className="flex  justify-center  items-center text-center absolute w-full h-full top-0">
                  <div className="text-[#563BFF] text-[10px] font-medium ">
                    USERS
                  </div>
                </div>
              </ProgressBar>
              <div>
                <p className="text-[#15134B] text-xl font-bold">8,085</p>
                <p className="text-[#5A5881]">Expected</p>
              </div>
            </li>
            <li className="flex rounded-[10px]  justify-between items-center py-[43px] px-5 w-[310px] bg-white">
              <div>
                <p className="text-[#15134B] text-xl font-bold">140</p>
                <p className="text-[#5A5881]">Today</p>
              </div>

              <ProgressBar
                radius={30}
                strokeWidth={6}
                progress={70}
                strokeColor="#FF7049"
                strokeLinecap="round"
                trackStrokeWidth={6}
                counterClockwise
                className="bg-[#FFF3F0] rounded-full overflow-hidden"
              >
                <div className="flex  justify-center  items-center text-center absolute w-full h-full top-0">
                  <div className="text-[#FF7049] text-[10px] font-medium ">
                    GOALS
                  </div>
                </div>
              </ProgressBar>
              <div>
                <p className="text-[#15134B] text-xl font-bold">120</p>
                <p className="text-[#5A5881]">Expected</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="sm:w-[300px] md:w-[514px]">
        <div className="flex justify-between mb-[15px] items-center">
          <h3 className="text-[#15134B] text-xl font-bold">
            Sessions By Device
          </h3>
          <p className="text-[#5A5881] font-bold text-sm">Year</p>
        </div>
        <div className="md:w-[514px] sm:w-[300px] bg-white rounded-[10px]  flex md:gap-[101px] justify-center items-center sm:flex-col md:flex-row">
          <RadialChart />
          <ul className=" flex sm:flex-row sm:gap-2 md:flex-col ">
            <li className=" pb-[10px]">
              <p className="font-bold text-sm text-[#5A5881]">Desktop</p>
              <div className="flex items-center gap-[5px]">
                <h4 className="font-medium text-lg text-[#15134B]">8,085</h4>
                <p className="font-medium text-sm text-[#5A5881]">13%</p>
              </div>
            </li>
            <li className=" pb-[10px]">
              <p className="font-bold text-sm text-[#5A5881]">Mobile</p>
              <div className="flex items-center gap-[5px]">
                <h4 className="font-medium text-lg text-[#15134B]">8,085</h4>
                <p className="font-medium text-sm text-[#5A5881]">30%</p>
              </div>
            </li>
            <li className=" pb-[10px]">
              <p className="font-bold text-sm text-[#5A5881]">Tablets</p>
              <div className="flex items-center gap-[5px]">
                <h4 className="font-medium text-lg text-[#15134B]">8,085</h4>
                <p className="font-medium text-sm text-[#5A5881]">25%</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:w-[514px] sm:w-[300px] mt-[30px] pt-6 bg-white rounded-[10px]  px-[30px] py-[30px]">
          <h3 className="text-[#15134B] mb-6 text-xl font-bold mb-[]25px">
            Sesion By Device
          </h3>
          <div>
            <div className="flex gap-[45px] items-center mb-10">
              <p className="font-bold text-sm text-[#15134B]">Channel</p>
              <p className="font-bold text-sm text-[#15134B]">Traffic (%)</p>
            </div>
          </div>
          <HorizontalBarChart />
        </div>
        <div className="bg-white rounded-[10px] mt-[30px] flex md:flex-row sm:flex-col md:justfy-between sm:justify-center sm:text-center md:text-start md:gap-[140px] sm:gap-5  px-[30px] py-[46px]">
          <div>
            <h3 className="text-[#15134B] mb-[10px] text-xl font-bold mb-[]25px">
              Sesion By Device
            </h3>
            <p className="text-[#A3ABBD] text-medium text-sm">
              Top Region & session
            </p>
          </div>
          <Button>View</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
