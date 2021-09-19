import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../Typings/car";
import { Car } from "../../compontents/car";
//import Carousel,{ Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
//import "@brainhubeu/react-carousel/lib/style.css";


const TopCarsContainers = styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
    `};
`;

const Title =styled.h2`
    ${tw`
        text-3xl
        lg:text-5xl
        text-black
        font-extrabold
    `};
`;

const CarsContainer =styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `};
`;

export function TopCars(){
    const [current, setCurrent] = useState(0);

    const testCar: ICar = {
        name: "Audi s3 Car",
        mileage: "10K",
        thumbnailSrc:"https://cdn.jdpower.com/Models/640x480/2017-Audi-s3-PremiumPlus.jpg",
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: "Auto",
        gas: "Petrol",
    };

    const testCar2: ICar = {
        name: "HONDA cITY 5 Seater Car",
        mileage: "20K",
        thumbnailSrc:"https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
        dailyPrice: 50,
        monthlyPrice: 1500,
        gearType: "Auto",
        gas: "Petrol",
    };

    return <TopCarsContainers>
        <Title>Explore Our Top Deals</Title>
        <CarsContainer>
            <Car {...testCar} />
            <Car {...testCar2} />
        </CarsContainer>
    </TopCarsContainers>
}