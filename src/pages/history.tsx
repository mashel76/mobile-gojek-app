import { FaCircleQuestion } from "react-icons/fa6";
import { Divider, Card, CardBody, Button, Textarea, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { FaBoxOpen, FaCheckCircle } from "react-icons/fa";

function History() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const history = [
    {
      tanggal: "12 Desember 2024",
      harga: "Rp 10.000",
      status: "Pesanan telah diterima",
      alamat: "Alamat 1",
    },
    {
      tanggal: "12 Desember 2024",
      harga: "Rp 10.000",
      status: "Pesanan telah diterima",
      alamat: "Alamat 2",
    },
    {
      tanggal: "12 Desember 2024",
      harga: "Rp 10.000",
      status: "Pesanan telah diterima",
      alamat: "Alamat 3",
    },
    {
      tanggal: "12 Desember 2024",
      harga: "Rp 10.000",
      status: "Pesanan telah diterima",
      alamat: "Alamat 4",
    },
    {
      tanggal: "12 Desember 2024",
      harga: "Rp 10.000",
      status: "Pesanan telah diterima",
      alamat: "Alamat 5",
    },
    {
      tanggal: "12 Desember 2024",
      harga: "Rp 10.000",
      status: "Pesanan telah diterima",
      alamat: "Alamat 6",
    },
  ];
  return (
    <div className='px-4'>
      <div className='text-gray-700 grid grid-cols-2 pt-4'>
        <h1 className="text-2xl">Riwayat</h1>
        <a href="#" className="text-xl flex justify-end items-center">
          <span className="text-blue-500 active:bg-gray-500 p-1 rounded-full">
            <FaCircleQuestion />
          </span>
        </a>
      </div>
      <Divider className="bg-gray-500 my-2" />
      {history.map((item, index) => (
        <Card key={index} isPressable className="bg-gray-100 drop-shadow-xl border-blue-500 my-3">
          <CardBody className="w-[90vw]">
            <p className="font-normal">{item.tanggal}</p>
            <div className="flex justify-between items-center gap-2">
              <FaBoxOpen className="w-16 h-16 shrink-0 text-blue-600" />
              <div className="w-full justify-center flex flex-col gap-1">
                <p className="font-bold truncate">{item.alamat}</p>
                <div className="flex gap-1">
                  <FaCheckCircle className="m-1 text-sm text-green-500 items-baseline" />
                  <p className="font-normal text-sm">{item.status}</p>
                </div>
              </div>
              <div className="shrink-0 gap-1 flex flex-col items-center">
                <p>{item.harga}</p>
                <Button onPress={onOpen} color="danger" className="text-white text-xs w-1/2 h-8">Komplain</Button>
                <Button color="success" className="text-white text-xs w-1/2 h-8">Pesan Lagi</Button>
                <Modal className="bg-blue-500 bg-opacity-30" backdrop="transparent" isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">Komplain</ModalHeader>
                        <ModalBody className="text-black">
                          <Textarea
                            label="Description"
                            placeholder="Tuliskan keluhan anda"
                            className="max-w-xl"
                          />
                        </ModalBody>
                        <ModalFooter>
                          <Button color="danger"  onPress={onClose}>
                            Tutup
                          </Button>
                          <Button color="primary" onPress={onClose}>
                            Kirim
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
      <Divider className="bg-gray-500 my-8" />
    </div>
  )
}

export default History