import CarCard from "./CarCard"
export default function PopularCars() {
    const carDetails = [{
        id: 1,
        name: "Koenigsegg",
        type: "Sport",
        wishImage: "/colorHeart.png",
        image: "/car1.png",
        fuel: "90L",
        drive: "Manual",
        peopel: "2 People",
        rent: "$99.00"
    },
    {
        id: 2,
        name: "Nissan GT - R",
        type: "Sport",
        wishImage: "/heart.png",
        image: "/car2.png",
        fuel: "80L",
        drive: "Manual",
        peopel: "2 People",
        rent: "$80.00"
    },
    {
        id: 3,
        name: "Rolls - Royce",
        type: "Sedan",
        wishImage: "/colorHeart.png",
        image: "/car3.png",
        fuel: "70L",
        drive: "Manual",
        peopel: "4 People",
        rent: "$96.00"
    },
    {
        id: 4,
        name: "Nissan GT - R",
        type: "Sport",
        wishImage: "/heart.png",
        image: "/car4.png",
        fuel: "80L",
        drive: "Manual",
        peopel: "2 People",
        rent: "$80.00"
    },

    ]
    return (
        <div>
            <div className="flex items-center justify-between px-4 sm:px-10 lg:px-[310px] mt-10">
                <div className="h-11">
                    <p className="font-sans font-semibold text-base text-[#90A3BF] p-2">Popular Car</p>
                </div>
                <div>
                    <button className="font-sans font-semibold text-[#3563E9] text-base px-4 py-2 rounded">
                        View All
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 px-4 sm:px-10 lg:px-[270px]">
                {
                    carDetails.map((carDetail) => (
                        <CarCard key={carDetail.id} carDetail={carDetail} />
                    ))
                }
            </div>
        </div>

    )
}