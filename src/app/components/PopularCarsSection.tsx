import Image from "next/image"
import CarCard from "./CarCard"

export default function PopularCarsSection(){
    const carDetails=[{
        id:1,
        name: "Koenigsegg",
        type: "Sport",
        wishImage: "/colorHeart.png",
        image: "/car1.png",
        fuel:"90L",
        drive:"Manual",
        peopel: "2 People",
        rent:"$99.00"
    },
    {
        id:2,
        name: "Nissan GT - R",
        type: "Sport",
        wishImage: "/heart.png",
        image: "/car2.png",
        fuel:"80L",
        drive:"Manual",
        peopel: "2 People",
        rent:"$80.00"
    },
    {
        id:3,
        name: "Rolls - Royce",
        type: "Sedan",
        wishImage: "/colorHeart.png",
        image: "/car3.png",
        fuel:"70L",
        drive:"Manual",
        peopel: "4 People",
        rent:"$96.00"
    },
    {
        id:4,
        name: "Nissan GT - R",
        type: "Sport",
        wishImage: "/heart.png",
        image: "/car4.png",
        fuel:"80L",
        drive:"Manual",
        peopel: "2 People",
        rent:"$80.00"
    },
    

]
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 lg:px-[270px]">
        {
          carDetails.map((carDetail) => (
            <CarCard key={carDetail.id} carDetail={carDetail} />
          ))
        }
      </div>
      
      
    )
}