import Image from "next/image";

export default function CarCard(props: any) {
    return (
        <div className="bg-white h-auto w-full sm:w-[304px] rounded-[10px] p-4 ">
            <div className="flex  items-center justify-between">
                <div>
                    <p className="font-sans text-xl font-bold leading-[30px] text-[#1A202C]">{props.carDetail.name}</p>
                    <p className="font-sans text-2xl font-bold text-[#90A3BF]">{props.carDetail.type}</p>
                </div>
                <div className="ml-auto">
                    <Image src={props.carDetail.wishImage} alt="heart" height={24} width={24} />
                </div>
            </div>

            <div className="flex justify-center items-center mt-4">
                <Image src={props.carDetail.image} alt="car" height={72} width={232} />
            </div>

            <div className="flex justify-between my-4">
                <div className="flex items-center">
                    <Image src="/gas-station.png" alt="fuel" height={24} width={24} />
                    <p className="font-sans font-medium text-sm text-[#90A3BF]">{props.carDetail.fuel}</p>
                </div>
                <div className="flex items-center">
                    <Image src="/CarHandle.png" alt="drive" height={24} width={24} />
                    <p className="font-sans font-medium text-sm text-[#90A3BF]">{props.carDetail.drive}</p>
                </div>
                <div className="flex items-center">
                    <Image src="/profile2user.png" alt="people" height={24} width={24} />
                    <p className="font-sans font-medium text-sm text-[#90A3BF]">{props.carDetail.peopel}</p>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="h-[44px] w-[116px] flex items-center">
                    <p className="font-sans text-xl font-bold text-[#1A202C]">{props.carDetail.rent}/</p>
                    <p className="font-sans text-[14px] font-bold text-[#90A3BF] p-1">day</p>
                </div>
                <div className="h-[44px] w-[116px] flex items-center justify-center bg-[#3563E9] rounded-sm text-white">
                    <button className="text-sm font-semibold">Rent Now</button>
                </div>
            </div>
        </div>

    );
}