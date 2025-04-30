import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import EmailComposer from "../ReplyInSecond/EmailAnimation";
import CategoryCarousel from "./CategouryCarsoul";

export default function FilterOutTheNoiseGrid() {
  return (
    <div className="  text-black rounded-full">
      <Card className="flex flex-col md:w-auto w-fit justify-center items-center  bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl overflow-hidden p-8 md:p-8 shadow-md">
        {/* Top left text */}
        <div className="w-[300px] md:w-[100px] lg:w-[100px] xl:w-[450px]">
          {" "}
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Filter out the noise
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Automatically organize your inbox
          </p>
          <p className="text-gray-500 mb-8">
            Stamp automatically categorizes your emails, so you can effortlessly
            organize your inbox and find what you need, when you need it.
          </p>
        </div>

        <div className="relative w-full    md:h-[393px] h-[370px]">
          <div className="absolute md:right-0 md:-bottom-16 md:left-0 -bottom-14 -left-0 flex items-center justify-center z-20 w-full text-gray-400">
            <CategoryCarousel />
          </div>

          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-indigo-500/20 to-transparent blur-2xl z-10"></div>

          <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </Card>
    </div>
  );
}
