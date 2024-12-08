import Image from "next/image";


export default function Header() {
    return (
        <div className="border border-[#C3D4E966] w-full h-auto flex flex-wrap items-center justify-between px-4 md:px-8 lg:px-12">
            <div className="mt-4 md:mt-0 w-auto">
                <p className="text-[#3563E9] font-sans font-bold text-xl md:text-2xl leading-[48px]">
                    MORENT
                </p>
            </div>

            <div className="relative w-full md:w-[492px] h-11 mt-4 md:mt-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="search"
                    className="border border-[#C3D4E966] w-full h-full pl-12 pr-5 rounded-[70px] outline-none"
                    placeholder="Search something here"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>

            <div className="flex justify-end mt-4 md:mt-0 gap-2">
                <Image src="/Like.png" alt="Like" height={44} width={44} className="h-10 w-10" />
                <Image src="/Notification.png" alt="Notification" height={44} width={44} className="h-10 w-10" />
                <Image src="/Settings.png" alt="Settings" height={44} width={44} className="h-10 w-10" />
                <Image src="/Image.png" alt="Profile" height={44} width={44} className="h-10 w-10" />
            </div>
        </div>

    )
}