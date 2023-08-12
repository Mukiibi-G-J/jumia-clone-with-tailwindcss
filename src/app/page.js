"use client";
import NavBar from "@/components/NavBar";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import {
  Checkroom,
  ChildCare,
  FitnessCenter,
  HomeWork,
  Laptop,
  LiveTv,
  MoreHoriz,
  PhoneIphone,
  SportsEsports,
} from "@mui/icons-material";
// import ReactPlayer from "react-player";
import { sliders } from "@/data";
import ReactPlayer from "react-player";
const gif = [
  "https://ug.jumia.is/cms/UG_WK28_Samsung_SmallBanner_218X184_NEW.gif",
  "/video/jumia.gif",
];
function SideBar({ Icon, title }) {
  // const classes = useStyles();
  return (
    <div className="flex align-center hover:text-[#E4811C]">
      <Icon className="mr-2 ml-2 mb-3" />
      <span className="text-[12px]">{title}</span>
    </div>
  );
}
export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-9 xl:grid-cols-12 py-8 px-8 gap-3">
        <div className="bg-white shadow-md rounded-md hidden md:block md:col-span-3 h-auto xl:col-span-3 ">
          <SideBar Icon={PhoneIphone} title="Phone $ Tablets" />
          <SideBar Icon={HomeWork} title="Home & Office" />
          <SideBar Icon={LiveTv} title="Electronics" />
          <SideBar Icon={Checkroom} title="Fashion" />
          <SideBar Icon={Laptop} title="Computing" />
          <SideBar Icon={FitnessCenter} title="Sporting Goods" />
          <SideBar Icon={ChildCare} title="Baby Products" />
          <SideBar Icon={SportsEsports} title="Gaming" />
          {/* <SideBar Icon={Yard}  title=""/> */}
          <SideBar Icon={MoreHoriz} title="Others" />
        </div>
        <div className="bg-white shadow-md rounded-md md:col-span-5 xl:col-span-6">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]} // Include Autoplay module
            className="h-auto bg-white shadow-md rounded-md "
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {sliders.map((slider, index) => (
              <SwiperSlide className="" key={index}>
                <img
                  className="xl:h-[354px] object-contain  bg-white shadow- rounded-md"
                  src={slider}
                ></img>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper> */}
        </div>
        {/* <div className="col-span-1"></div> */}
        <div className="md:col-span-2 xl:col-span-3 hidden xl:block">
          <div className="bg-white shadow-xl rounded-md w-[200px] ">
            <div className="flex  p-2 algin-center">
              <img
                className="object-contain"
                height={30}
                width={30}
                src="/logos/help_center.png"
                alt=""
              />
              <div className="flex ml-2 flex-col">
                <span className="md:text-[12px] lg:text-[14px] ">
                  HELP CENTER
                </span>
                <span className="md:text-[10px] lg:text-[12px] ">
                  Guide to customer Care
                </span>
              </div>
            </div>

            <div className="flex  p-2 algin-center">
              <img
                className="object-contain"
                height={30}
                width={30}
                src="/logos/returns-refunds.png"
                alt=""
              />
              <div className="flex ml-2 flex-col algin-center">
                <span className="md:text-[12px] lg:text-[14px]">
                  EASY RETURN
                </span>
                <span className="sm:text-[10px] lg:text-[12px] ">
                  Quick Refund
                </span>
              </div>
            </div>
            <div className="flex  p-2 algin-center">
              <img
                className="object-contain"
                height={30}
                width={30}
                src="/logos/sell-on-jumia.png"
                alt=""
              />
              <div className="flex ml-2 flex-col">
                <span className="md:text-[12px] lg:text-[14px] ">SELL</span>
                <span className="sm:text-[10px] lg:text-[12px]  flex-inline">
                  Millions of Customers
                </span>
              </div>
            </div>
            {/* <ReactPlayer
            playing={true}
            muted
            loop={true}
            width={320}
            height={20}
            url={["/video/jumia.mp4", "/video/ad.mp4"]}
            type="video/mp4"
          /> */}
          </div>
          <div className="bg-white shadow-xl rounded-md w-[200px] h-[173px] mt-2 ">
            <img
              className=" object-cover bg-white shadow-xl rounded-md  w-[100%]"
              src="https://ug.jumia.is/cms/UG_WK28_Samsung_SmallBanner_218X184_NEW.gif"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
