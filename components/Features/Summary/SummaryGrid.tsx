import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AnimatedDemoRequest from "./SummaryBento";

export default function SummaryGrid() {
  return (
    <div className=" text-black  md:w-2xl rounded-full">
      <div className="mx-auto">
        <div className="w-full">
          <Card className="flex md:w-auto w-fit flex-col justify-center items-center p-0  bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl overflow-hidden   shadow-md">
            <div className="relative w-full z-0    h-[400px]">
              <div className="absolute right-0 -top-12 flex items-center justify-center w-full text-gray-400">
                <AnimatedDemoRequest />
              </div>

              <div className="absolute top-0 z-0 left-0 right-0 h-full w-20 bg-gradient-to-l from-indigo-500/20 to-transparent blur-2xl "></div>
            </div>
            <div className="relative z-20 bg-white   p-8 pb-9 pt-10 rounded-b-md">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Never miss a detail
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Summaries and action items for every thread
              </p>
              <p className="text-gray-500 mb-8">
                Stamp summarizes all email threads and automatically extracts
                key action items, ensuring you stay on top of critical
                information and never miss a deadline.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
