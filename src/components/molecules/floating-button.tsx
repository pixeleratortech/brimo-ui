"use client";
import { useState } from "react";
import Button from "../atoms/button";
import Image from "next/image";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 z-40 right-6 flex flex-col items-end">
      <Button
  buttonText={"HIDE"}
  onClick={() => setIsOpen(!isOpen)}
  className="bg-accent-orange absolute -left-6 top-6 text-primary-white w-12 h-12 flex items-center justify-center text-sm font-brineue-bold rounded-full shadow-lg transition"
/>
      <Button
        className=""
        buttonText={
          <Image
            src={"/icons/sabrina_floating_menu.svg"}
            width={120}
            height={120}
            alt=""
          />
        }
      />
    </div>
  );
};

export default FloatingMenu;
