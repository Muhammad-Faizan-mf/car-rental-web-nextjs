import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator"




export default function Selections() {
    return (
        <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="w-full max-w-[582px] bg-white h-auto rounded-[10px] p-5">
                <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <p className="font-sans font-semibold text-base">Pick - Up</p>
                    </div>
                </RadioGroup>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div>
                        <p className="font-sans font-bold text-base">Locations</p>
                        <Select>
                            <SelectTrigger className="w-full border-0">
                                <SelectValue placeholder="Select your city" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Karachi">Karachi</SelectItem>
                                <SelectItem value="Islamabad">Islamabad</SelectItem>
                                <SelectItem value="Lahore">Lahore</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <p className="font-sans font-bold text-base">Date</p>
                        <Select>
                            <SelectTrigger className="w-full border-0">
                                <SelectValue placeholder="Select your date" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <p className="font-sans font-bold text-base">Time</p>
                        <Select>
                            <SelectTrigger className="w-full border-0">
                                <SelectValue placeholder="Select your time" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="01:00">01:00</SelectItem>
                                <SelectItem value="02:00">02:00</SelectItem>
                                <SelectItem value="05:00">05:00</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <div className="w-[60px] h-[60px] flex justify-center items-center my-auto">
                <Image src="/Switch.png" alt="Switch" height={60} width={60} className="h-[60px] w-[60px] rounded-full" />
            </div>

            <div className="w-full max-w-[582px] bg-white h-auto rounded-[10px] p-5">
                <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <p className="font-sans font-semibold text-base">Drop - Off</p>
                    </div>
                </RadioGroup>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div>
                        <p className="font-sans font-bold text-base">Locations</p>
                        <Select>
                            <SelectTrigger className="w-full border-0">
                                <SelectValue placeholder="Select your city" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Karachi">Karachi</SelectItem>
                                <SelectItem value="Islamabad">Islamabad</SelectItem>
                                <SelectItem value="Lahore">Lahore</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <p className="font-sans font-bold text-base">Date</p>
                        <Select>
                            <SelectTrigger className="w-full border-0">
                                <SelectValue placeholder="Select your date" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <p className="font-sans font-bold text-base">Time</p>
                        <Select>
                            <SelectTrigger className="w-full border-0">
                                <SelectValue placeholder="Select your time" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="01:00">01:00</SelectItem>
                                <SelectItem value="02:00">02:00</SelectItem>
                                <SelectItem value="05:00">05:00</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
        </div>


    );
}