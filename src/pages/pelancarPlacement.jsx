import { useEffect, useRef, useState } from "react";
import axiosInstance from "../axiosInstance";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";


import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { ArrowPathIcon, BookOpenIcon, LockClosedIcon, PauseCircleIcon, PlayCircleIcon, XMarkIcon } from "@heroicons/react/16/solid";
import HTMLReactParser from "html-react-parser/lib/index";
import { doa } from "../constants/pelancarPlacement.constant";
import kerja from "../../public/assets/kerjaKerjaKerja.mp3"
export const PelancarPlacement = () => {
  let randomIndex = Math.floor(Math.random() * doa.length) + 1
  console.log(randomIndex);
  const [surat, setSurat] = useState(doa[randomIndex])
  const audioRef = useRef(null)

  const generateDoa = async () => {
    let randomIndex = Math.floor(Math.random() * doa.length) + 1
    setSurat(doa[randomIndex - 1])
    audioRef.current.play()
  }
  
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(https://img.freepik.com/free-photo/business-man-going-meeting_53876-163206.jpg?ga=GA1.1.336393694.1724476993&semt=ais_hybrid)` }}>
        <audio ref={audioRef} src={kerja}></audio>
      <div className="absolute top-0 opacity-45 min-h-screen min-w-full bg-black z-[1]"></div>
      <Card className="max-w-4xl lg:min-w-[896px] p-2 z-10">
        <CardHeader className="flex flex-wrap justify-between items-center py-4">
          <h1 className="font-bold text-neutral-700 text-2xl">{surat.namaLatin}</h1>
          <div className="flex justify-center items-center gap-2">
            <ModalTafsir surat={surat} />
            <Button onPress={generateDoa} variant="shadow" color="primary" className="font-semibold text-[16px]"><ArrowPathIcon className="w-6 h-6" color="white" /> Generate</Button>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          <div className="my-6">
            <p className="text-right text-neutral-800 font-medium my-2 text-2xl">{surat.ayat.teksArab}</p>
            <p className="text-right text-neutral-600 font-normal my-2 text-sm">{surat.ayat.teksLatin}</p>
          </div>
          <p className="text-justify text-neutral-800 text-lg">"{surat.ayat.teksIndonesia}"</p>
        </CardBody>
      </Card>
    </div>
  )
}


export default function ModalTafsir({ surat }) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="flex flex-col gap-2">
      <Button onPress={onOpen} variant="shadow" color="secondary" className="max-w-fit font-semibold text=[16px]"><BookOpenIcon className="w-6 h-6" /> Detail</Button>
      <Modal 
        isOpen={isOpen} 
        placement={"center"}
        onOpenChange={onOpenChange} 
        size="4xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
          <h1 className="font-bold text-neutral-700 text-2xl">{surat.namaLatin}</h1>
              </ModalHeader>
              <div className="px-4">
                <Divider/>
              </div>
              <ModalBody>
                <div> 
                  {HTMLReactParser(surat.deskripsi)}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="shadow" onPress={onClose}>
                  <XMarkIcon className="w-6 h-6" />
                  Tutup
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
