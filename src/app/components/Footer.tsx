import { Separator } from "@/components/ui/separator"

export default function Footer() {
    return (
       <div>
  <div className="flex flex-wrap w-full h-auto bg-white px-4 sm:px-8 py-10">
    <div className="flex flex-col w-full sm:w-[148px] mb-8 sm:mb-0 mx-auto sm:mx-0 text-center sm:text-left ">
      <p className="text-[#3563E9] font-sans font-bold text-[32px] md:text-2xl leading-[48px]">
        MORENT
      </p>
      <p className="font-sans font-base text-base text-[#13131399] mt-4 ">
        Our vision is to provide convenience and help increase your sales business.
      </p>
    </div>

    <div className="flex flex-col sm:flex-row sm:ml-[40%] w-full sm:w-auto mb-8 sm:mb-0 text-center sm:text-left">
      <div className="sm:mr-12">
        <p className="p-5 font-sans text-xl font-semibold">About</p>
        <p className="p-5 font-sans font-medium text-base text-[#13131399]">How it works</p>
        <p className="p-5 font-sans font-medium text-base text-[#13131399]">Featured</p>
        <p className="p-5 font-sans font-medium text-base text-[#13131399]">Partnership</p>
        <p className="p-5 font-sans font-medium text-base text-[#13131399]">Business Relation</p>
      </div>

      <div className="sm:mr-12">
        <p className="p-5 font-sans text-xl font-semibold">Community</p>
        <p className="p-5 font-sans font-medium text-base text-[#13131399]">Events</p>
        <p className="p-5 font-sans font-medium text-base text-[#13131399]">Blogs</p>
        <p className="p-5 font-sans font-medium text-base text-[#13131399]">Podcast</p>
        <p className="p-5 font-sans font-medium text-base text-[#13131399]">Invite a friend</p>
      </div>

      <div>
        <p className="p-5 font-sans text-xl font-semibold">Socials</p>
        <p className="p-5 font-sans font-medium text-base text-[#13131399]">Discord</p>
        <p className="p-5 font-sans font-medium text-base text-[#13131399]">Instagram</p>
        <p className="p-5 font-sans font-medium text-base text-[#13131399]">Twitter</p>
        <p className="p-5 font-sans font-medium text-base text-[#13131399]">Facebook</p>
      </div>
    </div>
  </div>

  <div className="flex justify-center">
    <div className="border w-[1320px] mt-0 border-[#13131329]"></div>
  </div>

  <div className="mx-[30px] sm:mx-[300px] flex flex-col sm:flex-row justify-between my-10 text-center sm:text-left">
    <div>
      <p className="font-sans text-base font-semibold text-[#1A202C]">©2022 MORENT. All rights reserved</p>
    </div>

    <div className="flex gap-6 justify-center sm:justify-start mt-4 sm:mt-0">
      <div className="font-sans text-base font-semibold text-[#1A202C]">Privacy & Policy</div>
      <div className="font-sans text-base font-semibold text-[#1A202C]">Terms & Conditions</div>
    </div>
  </div>
</div>


    )
}