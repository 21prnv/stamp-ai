import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import EmailComposer from "./EmailAnimation";

export default function ReplyInSecondBentoGrid() {
  return (
    <div className=" bg-white max-w-7xl text-black rounded-full">
      <div className="mx-auto">
        <div>
          <Card className="flex flex-col  bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl overflow-hidden p-6 md:p-8 shadow-md">
            {/* Top left text */}
            <div className="w-[300px] md:w-[100px] lg:w-[100px] xl:w-[450px]">
              {" "}
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Reply in seconds
              </h2>
              <p className="text-xl font-extralight text-gray-600 mb-6">
                Generate contextualized replies in your voice
              </p>
              <p className="text-gray-500 mb-8">
                Stamp crafts perfect replies in your personal voice and style,
                with global context from your mailbox.
              </p>
            </div>

            <div className="relative w-full h-full  md:max-h-[500px] md:mt-50 mt-[23rem]">
              <div className="absolute md:right-0 md:-bottom-16 -bottom-44 flex items-center justify-center text-gray-400">
                <EmailComposer />
              </div>

              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent blur-2xl"></div>
              <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-indigo-500/20 to-transparent blur-2xl z-10"></div>

              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
