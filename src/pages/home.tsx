import { FaWallet, FaMotorcycle, FaCar, FaHospital, FaBroadcastTower } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { GiPoliceOfficerHead, GiFruitBowl } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { Carousel } from "@material-tailwind/react";
import { Card, CardBody,Divider, CardFooter, Image } from "@nextui-org/react";
import { Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

function home() {
  const list = [
    {
      title: "Makanan 1",
      img: "/1.jpg",
      price: "Rp 5.500"
    },
    {
      title: "Makanan 2",
      img: "/1.jpg",
      price: "Rp 3.000"
    },
    {
      title: "Makanan 3",
      img: "/1.jpg",
      price: "Rp 10.000",
    },
    {
      title: "Makanan 4",
      img: "/1.jpg",
      price: "Rp 5.300"
    },
    {
      title: "Avocado",
      img: "/1.jpg",
      price: "Rp 15.000",
    },
    {
      title: "Makanan 4",
      img: "/1.jpg",
      price: "Rp 8.000"
    },
    {
      title: "Banana",
      img: "/1.jpg",
      price: "Rp 7.500"
    },
    {
      title: "Makanan 5",
      img: "/1.jpg",
      price: "Rp 12.000",
    },
    {
      title: "Makanan 5",
      img: "/1.jpg",
      price: "Rp 12.000",
    },
    {
      title: "Makanan 5",
      img: "/1.jpg",
      price: "Rp 12.000",
    },
    {
      title: "Makanan 5",
      img: "/1.jpg",
      price: "Rp 12.000",
    },
    {
      title: "Makanan 5",
      img: "/1.jpg",
      price: "Rp 12.000",
    },
    {
      title: "Makanan 5",
      img: "/1.jpg",
      price: "Rp 12.000",
    },
    {
      title: "Makanan 5",
      img: "/1.jpg",
      price: "Rp 12.000",
    },
    {
      title: "Makanan 5",
      img: "/1.jpg",
      price: "Rp 12.000",
    },
  ];
  const promo = [
    {
      title: "Promo 1",
      img: "/promo.png",
      tulisan: "Qui proident anim sunt adipisicing labore.",
    },
    {
      title: "Promo 2",
      img: "/promo.png",
      tulisan: "Qui proident anim sunt adipisicing labore.",
    },
    {
      title: "Promo 3",
      img: "/promo.png",
      tulisan: "Qui proident anim sunt adipisicing labore.",
    },
    {
      title: "Promo 4",
      img: "/promo.png",
      tulisan: "Qui proident anim sunt adipisicing labore.",
    },
    {
      title: "Promo 5",
      img: "/promo.png",
      tulisan: "Qui proident anim sunt adipisicing labore.",
    },
  ];
  const menu = [
    {
      title: "Menu 1",
      icon: <FaMotorcycle className="w-12 h-12 text-blue-600 p-1 active:bg-gray-400 rounded-lg" />,
    },
    {
      title: "Menu 2",
      icon: <FaCar className="w-12 h-12 text-blue-600 p-1 active:bg-gray-400 rounded-lg" />,
    },
    {
      title: "Menu 3",
      icon: <FaHospital className="w-12 h-12 text-blue-600 p-1 active:bg-gray-400 rounded-lg" />,
    },
    {
      title: "Menu 4",
      icon: <GiPoliceOfficerHead className="w-12 h-12 text-blue-600 p-1 active:bg-gray-400 rounded-lg" />,
    },
    {
      title: "Menu 5",
      icon: <GiFruitBowl className="w-12 h-12 text-blue-600 p-1 active:bg-gray-400 rounded-lg" />,
    },
    {
      title: "Menu 6",
      icon: <IoFastFoodSharp className="w-12 h-12 text-blue-600 p-1 active:bg-gray-400 rounded-lg" />,
    },
    {
      title: "Menu 7",
      icon: <FaBroadcastTower className="w-12 h-12 text-blue-600 p-1 active:bg-gray-400 rounded-lg" />,
    },
  ];
  const wallet = "100.000";

  return (
    <div>
      <div className='bg-blue-500 fixed top-0 z-20 drop-shadow-xl rounded-b-xl w-full h-16 flex justify-between items-center px-2'>
        <input type="text" className="text-black h-10 w-[18rem] pr-8 pl-5 bg-white rounded-full z-0 focus:shadow focus:outline-none" placeholder="Pencarian..."></input>
        <Dropdown placement="bottom-end" className="text-black">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem href="/settings" key="settings">Settings</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="bg-white h-12 mx-4 px-4 rounded-xl flex items-center justify-between mt-20">
        <a href="#" className="flex items-center gap-1">
          <FaWallet className="text-blue-400 text-lg" />
          <span className="text-black text-[0.85rem]">Rp {wallet}</span>
        </a>
        <div className="text-blue-500 gap-6 flex">
          <a href="#" className="flex flex-col justify-center active:bg-gray-300 rounded-lg p-1 items-center">
            <FiPlusCircle className="text-xl" />
            <p className="text-xs text-black">Top Up</p>
          </a>
          <a href="#" className="flex flex-col justify-center active:bg-gray-300 rounded-lg p-1 items-center">
            <MdOutlinePayment className="text-xl" />
            <p className="text-xs text-black">Bayar</p>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-4 px-4 gap-x-12 gap-y-4 text-black text-xs my-2">
        {menu.map((item, index) => (
          <a key={index} href="#" className="justify-center flex flex-col items-center">{item.icon}
            <p className="text-center">{item.title}</p>
          </a>
        ))}
        <a href="#" className="justify-center flex flex-col items-center"><CgMenuGridO className="w-12 h-12 text-blue-600 p-1 active:bg-gray-400 rounded-lg" />
          <p className="text-center">Lainnya</p>
        </a>
      </div>
      <div className="mx-4 rounded-xl overflow-hidden h-36">
        <Carousel
        placeholder={undefined}
          className="dropshadow-lg z-0"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="promo 1"
              className="h-full w-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="promo 2"
              className="h-full w-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="promo 3"
              className="h-full w-full object-cover"
            />
          </a>
        </Carousel>
      </div>
      <div className="gap-2 flex flex-nowrap overflow-auto h-48 mx-4 my-4">
        {list.map((item, index) => (
          <Card className="shrink-0" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-hidden p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex flex-col px-4 py-2 gap-4">
        {promo.map((item, index) => (
          <Card className="shrink-0" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-hidden p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.tulisan}</p>
            </CardFooter>
          </Card>
        ))}
        <Divider className="bg-gray-500 my-8" />
      </div>
    </div>
  )
}

export default home