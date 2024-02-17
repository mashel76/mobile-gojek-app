import { FaCircleQuestion } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { LuPackagePlus, LuPackageCheck } from "react-icons/lu";
import { Divider, Tabs, Tab, Card, CardBody, Button } from "@nextui-org/react";

function order() {
  const proses = [
    {
      status: "Menuju alamat tujuan",
      driver: "Ujang 1",
      plat: "AD 1903 Z",
      tujuan: "Alamat 1",
      resto: "Restoran 1"
    },
    {
      status: "Menuju alamat tujuan",
      driver: "Ujang 2",
      plat: "AD 1903 Z",
      tujuan: "Alamat 2",
      resto: "Restoran 2"
    },
    {
      status: "Menuju alamat tujuan",
      driver: "Ujang 3",
      plat: "AD 1903 Z",
      tujuan: "Alamat 3",
      resto: "Restoran 3"
    },
    {
      status: "Menuju alamat tujuan",
      driver: "Ujang 4",
      plat: "AD 1903 Z",
      tujuan: "Alamat 4",
      resto: "Restoran 4"
    },
    {
      status: "Menuju alamat tujuan",
      driver: "Ujang 5",
      plat: "AD 1903 Z",
      tujuan: "Alamat 5",
      resto: "Restoran 5"
    },
  ];
  return (
    <div className="px-4">
      <div className='text-gray-700 grid grid-cols-2 pt-4'>
        <h1 className="text-2xl">Pesanan</h1>
        <a href="#" className="text-xl flex justify-end items-center">
          <span className="text-blue-500 active:bg-gray-500 p-1 rounded-full">
            <FaCircleQuestion />
          </span>
        </a>
      </div>
      <Divider className="bg-gray-500 my-2" />
        <Tabs className="sticky shadow-none bg-gray-300 top-0 w-full z-10" variant="underlined" aria-label="Options">
          <Tab key="proses" title="Dalam Proses" >
            {proses.map((item, index) => (
              <Card key={index} isPressable className="bg-gray-100 drop-shadow-xl border-blue-500 my-3">
                <CardBody className="w-[90vw]">
                  <div className="flex justify-between">
                    <h1 className="font-semibold">{item.status}</h1>
                    <FaShippingFast className="text-2xl animate-bounce text-blue-600" />
                  </div>
                  <div className="flex gap-1 items-center mb-2 font-light">
                    <p>{item.driver}</p>
                    <Divider orientation="vertical" className="bg-black h-5 w-[0.05rem]"/>                  
                    <p>{item.plat}</p>
                  </div>
                  <div className="flex gap-1 items-center text-lg">
                    <LuPackagePlus className="text-yellow-600" />
                    <p className="font-normal">{item.resto}</p>
                  </div>
                  <Divider className="bg-blue-500" />
                  <div className="flex gap-1 items-center text-lg mb-1">
                    <LuPackageCheck className="text-green-600" />
                    <p className="font-normal">{item.tujuan}</p>
                  </div>
                  <div className="flex gap-2 w-full justify-end">
                    <Button className="bg-blue-500 text-white">Call</Button>
                    <Button className="bg-white text-blue-500 border-2 border-blue-500">Message</Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </Tab>
          <Tab key="selesai" title="Selesai">
            <Card isPressable className="bg-blue-500">
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      <Divider className="bg-gray-500 my-8" />
    </div>
  )
}

export default order