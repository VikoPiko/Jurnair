import Image from "next/image";
import React from "react";
import { SearchBar } from "./SearchBar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CircleQuestionMarkIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const TopNav = () => {
  return (
    <div className="pb-10">
      <div className="flex justify-between items-center p-5">
        <div className="inline-flex gap-x-2 items-center">
          <h1 className="text-3xl font-bold">Jurnair</h1>
          <Image src={"/icon.svg"} width={35} height={35} alt={""} />
        </div>
        <SearchBar />
        <div className="flex items-center gap-x-4">
          <Button
            variant="outline"
            className="hover:bg-stone-200 transition-all duration-300"
          >
            Become a host
          </Button>
          <Button>Sign In</Button>
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex items-center justify-center font-bold text-2xl text-white w-[40px] h-[40px] rounded-full select-none bg-blue-500 shadow-md hover:bg-blue-600 transition-all duration-100">
                V
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-48 mr-6 mt-3 border border-stone-400 flex">
              <div className="flex flex-col items-center gap-y-1">
                <Button
                  variant={"outline"}
                  className="justify-start w-full hover:bg-stone-200 transition-all"
                >
                  <CircleQuestionMarkIcon />
                  <h1>Help Center</h1>
                </Button>
                <Separator />
                <Button
                  variant={"ghost"}
                  className="justify-start w-full hover:bg-stone-200 transition-all"
                >
                  <h1>Refer a host.</h1>
                </Button>
                <Button
                  variant={"ghost"}
                  className="justify-start w-full hover:bg-stone-200 transition-all"
                >
                  <h1>Find a co-host.</h1>
                </Button>
                <Button
                  variant={"ghost"}
                  className="justify-start w-full hover:bg-stone-200 transition-all"
                >
                  <h1>Gift Cards.</h1>
                </Button>
                <Separator />
                <Button
                  variant={"outline"}
                  className="justify-start w-full hover:bg-stone-200 transition-all"
                >
                  <h1>Log in or Sign up.</h1>
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default TopNav;
