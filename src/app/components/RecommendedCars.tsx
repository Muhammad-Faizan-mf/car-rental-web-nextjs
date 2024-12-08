import CarCard from "./CarCard"

export default function RecommendedCars() {
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

    ]
    return (
        <div>
        <div className="flex items-center justify-between w-full max-w-[1356px] mx-auto mt-10 px-4 sm:px-8">
          <div className="h-11">
            <p className="font-sans font-semibold text-base text-[#90A3BF] p-2">Recommendation Car</p>
          </div>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 sm:mx-[270px]">
          {carDetails.map((carDetail) => (
            <CarCard key={carDetail.id} carDetail={carDetail} />
          ))}
        </div>
      
        <div className="flex items-center justify-center mt-10 mb-20 px-4 sm:px-8">
          <div className="bg-[#3563E9] text-white w-[156px] h-[44px] flex items-center justify-center rounded-sm">
            <button>Show more car</button>
          </div>
        </div>
      </div>
      

    )
}