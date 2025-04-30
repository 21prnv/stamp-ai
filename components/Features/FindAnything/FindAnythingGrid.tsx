import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import EmailCarousel from "./EmailAnimation";

export default function FindAnythingGrid() {
  return (
    <div className=" bg-white text-black rounded-full">
      <div className=" mx-auto">
        <div>
          <Card className="flex md:flex-row flex-col-reverse justify-end items-start   md:h-[500px] h-[600px] bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl overflow-hidden p-6 md:p-8 shadow-md">
            <div className="relative w-full md:h-full  md:max-h-[900px] md:mt-64">
              <div className="absolute md:left-0 md:-top-60 flex items-center justify-center text-gray-400">
                <EmailCarousel />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Find anything, instantly
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Search for emails in plain english
              </p>
              <p className="text-gray-500 mb-8">
                Stamp's semantic search understands the meaning and context of
                your emails, so you can find exactly what you need, even if you
                don't remember exact keywords.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
