import { useEffect, useRef, useState } from "react";
import axiosInstance from "../axiosInstance";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";


import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { ArrowPathIcon, BookOpenIcon, LockClosedIcon, PauseCircleIcon, PlayCircleIcon, XMarkIcon } from "@heroicons/react/16/solid";
import HTMLReactParser from "html-react-parser/lib/index";

export const GenerateAyat = () => {
  const [surat, setSurat] = useState({
    namaLatin: "",
    deskripsi: "",
    arti: "",
    audio: "",
    nomor: null,
    ayat: {
      nomorAyat: null,
      teksArab: "",
      teksIndonesia: "",
      teksLatin: ""
    }
  })

  const baseUrl = "https://equran.id/api/v2/surat"
  let randomSurat = Math.floor(Math.random() * 114) + 1;
  console.log(randomSurat);

  const generateAyat = async () => {
    const res = await axiosInstance.get(`${baseUrl}/${randomSurat}`)
    const resData = res.data.data
    console.log(resData);
    const { namaLatin, deskripsi, arti, nomor, ayat } = resData
    const randomAyat = Math.floor(Math.random() * resData.ayat.length) + 1;
    const { nomorAyat, teksArab, teksIndonesia, teksLatin } = ayat[randomAyat]
    setSurat({ namaLatin, deskripsi, arti, audio: resData.audioFull["01"], nomor, ayat: { nomorAyat, teksArab, teksIndonesia, teksLatin } })    
  }

  useEffect(() => {
    generateAyat()
  }, [])
  
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(https://img.freepik.com/free-vector/mandala-illustration_53876-75289.jpg?ga=GA1.1.336393694.1724476993&semt=ais_hybrid)` }}>
      <div className="absolute top-0 opacity-45 min-h-screen min-w-full bg-black z-[1]"></div>
      <Card className="max-w-4xl lg:min-w-[896px] p-2 z-10">
        <CardHeader className="flex flex-wrap justify-between items-center py-4">
          <h1 className="font-bold text-neutral-700 text-2xl">{surat.namaLatin} ({surat.nomor} : {surat.ayat.nomorAyat})</h1>
          <div className="flex justify-center items-center gap-2">
            <ModalTafsir surat={surat} />
            <Button onPress={generateAyat} variant="shadow" color="primary" className="font-semibold text-[16px]"><ArrowPathIcon className="w-6 h-6" color="white" /> Generate</Button>
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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null)

  const handlePlay = () => {
    if(isPlaying) audioRef.current.pause()
    else audioRef.current.play()

    setIsPlaying(!isPlaying)
  }

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
          <h1 className="font-bold text-neutral-700 text-2xl">{surat.namaLatin} / {surat.arti}</h1>
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
                <audio ref={audioRef} src={surat.audio}/> 
                <Button color="secondary" variant="shadow" onClick={handlePlay}>{isPlaying ? (
                  <>
                  <PauseCircleIcon className="w-6 h-6"/>
                  Pause
                  </>
                ) : (
                  <>
                  <PlayCircleIcon className="w-6 h-6"/>
                  Play
                  </>
                )}</Button>
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
