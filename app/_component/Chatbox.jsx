import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AtomIcon, Cpu, Globe, SearchCheck, Paperclip, AudioLines, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AIModelsOption } from "@/services/Shared";
const Chatbox = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Image
        src={"/logo2.png"}
        alt="logo"
        width={200}
        height={200}
        className="mb-2"
      />
      <div className="w-full bg-white p-4 rounded-2xl max-w-2xl shadow-lg border">

        <div className="flex  justify-between items-end" >
          <Tabs defaultValue="Search" className="w-[400px]">
            <TabsContent value="Search"  > <input
              type="text"
              placeholder="Ask Anything"
              className="w-full outline-none p-4"
            /> </TabsContent >
            <TabsContent value="Research"> <input type="text" placeholder="Research Anything" className="w-full outline-none p-4"
            /> </TabsContent>
            <TabsList>
              <TabsTrigger value="Search" className={"text-primary"}> <SearchCheck />Search</TabsTrigger>
              <TabsTrigger value="Research" className={"text-primary"}><AtomIcon />Research</TabsTrigger>
            </TabsList>

          </Tabs>
          <div className="flex gap-2 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost" className="rounded-lg">
                  <Cpu className="text-gray-500 h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
               
                {AIModelsOption.map((model,index)=>(
                  <DropdownMenuItem key={index}>
                    <div className="mb-1">
                      <h2 className="text-sm">{model.name}</h2>
                      <p className="text-xs">{model.desc}</p>
                    </div>
                  </DropdownMenuItem>
                ))}
                
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" className="rounded-lg">
              <Globe className="text-gray-500 h-5 w-5" />
            </Button>
            <Button variant="ghost" className="rounded-lg">
              <Paperclip className="text-gray-500 h-5 w-5" />
            </Button>
            <Button variant="ghost" className="rounded-lg">
              <Mic className="text-gray-500 h-5 w-5" />
            </Button>
            <Button>
              <AudioLines className="text-white h-5 w-5" />
            </Button>

          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
