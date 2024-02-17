import { FaBell } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { Avatar, Card, Divider, Badge, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

function chat() {
  const notif = [
    {
      driver: "Driver 1",
      message: "Pesan 1",
    },
    {
      driver: "Driver 2",
      message: "Pesan 2",
    },
    {
      driver: "Driver 3",
      message: "Pesan 3",
    },
    {
      driver: "Driver 4",
      message: "Pesan 4",
    },
    {
      driver: "Driver 5",
      message: "Pesan 5",
    },
  ];
  // console.log(notif.length);
  const chat = [
    {
      driver: "Driver 1",
      message: "Reprehenderit eiusmod occaecat et quis do ea officia fugiat veniam. 1",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 2",
      message: "Qui elit nulla labore tempor sit quis labore irure aliquip consectetur sit enim. 2",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 3",
      message: "Incididunt excepteur aliqua veniam aliquip officia ipsum aliquip. 3",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 4",
      message: "Enim laboris deserunt reprehenderit pariatur fugiat nostrud sint in nostrud occaecat sunt cupidatat. 4",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 5",
      message: "Dolor et incididunt tempor sit eiusmod voluptate cillum. 5",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 1",
      message: "Reprehenderit eiusmod occaecat et quis do ea officia fugiat veniam. 1",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 2",
      message: "Qui elit nulla labore tempor sit quis labore irure aliquip consectetur sit enim. 2",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 3",
      message: "Incididunt excepteur aliqua veniam aliquip officia ipsum aliquip. 3",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 4",
      message: "Enim laboris deserunt reprehenderit pariatur fugiat nostrud sint in nostrud occaecat sunt cupidatat. 4",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 5",
      message: "Dolor et incididunt tempor sit eiusmod voluptate cillum. 5",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 1",
      message: "Reprehenderit eiusmod occaecat et quis do ea officia fugiat veniam. 1",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 2",
      message: "Qui elit nulla labore tempor sit quis labore irure aliquip consectetur sit enim. 2",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 3",
      message: "Incididunt excepteur aliqua veniam aliquip officia ipsum aliquip. 3",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 4",
      message: "Enim laboris deserunt reprehenderit pariatur fugiat nostrud sint in nostrud occaecat sunt cupidatat. 4",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 5",
      message: "Dolor et incididunt tempor sit eiusmod voluptate cillum. 5",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 1",
      message: "Reprehenderit eiusmod occaecat et quis do ea officia fugiat veniam. 1",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 2",
      message: "Qui elit nulla labore tempor sit quis labore irure aliquip consectetur sit enim. 2",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 3",
      message: "Incididunt excepteur aliqua veniam aliquip officia ipsum aliquip. 3",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 4",
      message: "Enim laboris deserunt reprehenderit pariatur fugiat nostrud sint in nostrud occaecat sunt cupidatat. 4",
      foto: "/driver.png",
      waktu: "15.30"
    },
    {
      driver: "Driver 5",
      message: "Dolor et incididunt tempor sit eiusmod voluptate cillum. 5",
      foto: "/driver.png",
      waktu: "15.30"
    },
  ];
  return (
    <div className="px-4 pt-2">
      <div className='w-full h-12 flex items-center justify-between text-black'>
        <h1 className="text-2xl">Chat</h1>
        <Badge content={notif.length} shape="circle" color="danger">
          <Dropdown className="text-black bg-opacity-90">
            <DropdownTrigger>
              <Button isIconOnly aria-label="Lebih dari 9 pesan" variant="light">
                <FaBell className="text-2xl" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded">
              {notif.map((item, index) => (
                <DropdownItem key={index} startContent={<IoIosMailUnread className="text-3xl text-blue-500" />} description={item.message}>
                  {item.driver}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </Badge>
      </div>
      <Divider className="bg-gray-500 my-2" />
      <div>
        {chat.map((item, index) => (
          <Card key={index} isPressable className=" bg-transparent shadow-none w-full h-20 px-2 flex flex-row items-center">
            <Avatar className="shrink-0" src={item.foto}></Avatar>
            <div className="w-[66vw] mx-2">
              <p className="font-bold text-left ">{item.driver}</p>
              <p className="font-normal font text-left truncate ">{item.message}</p>
            </div>
            <p className="text-sm">{item.waktu}</p>
          </Card>
        ))}
      </div>
      <Divider className="bg-gray-500 my-8" />
    </div>
  )
}

export default chat