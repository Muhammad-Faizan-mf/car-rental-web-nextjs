import Image from "next/image";

export default function HeroSection(){
    return(
        <div className="flex flex-wrap justify-center">
        <div className="border w-[640px] h-[360px] mt-8 md:ml-16 rounded-[10px]">
          <Image
            src="/Ads1.png"
            alt="Ads 1"
            height={360}
            width={640}
            className="rounded-[10px]"
          />
        </div>
      
        <div className="w-[640px] h-[360px] mt-8 md:ml-16 rounded-[10px] hidden md:block">
          <Image
            src="/Ads2.png"
            alt="Ads 2"
            height={360}
            width={640}
            className="rounded-[10px]"
          />
        </div>
      </div>
      
    );
}