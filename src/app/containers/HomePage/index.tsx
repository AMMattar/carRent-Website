import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../compontents/navbar";
import { TopSection } from "./topSection";
import { BookCard } from "../../compontents/bookcard";
import { Marginer } from "../../compontents/marginer";
import { BookingSteps } from "./bookingSteps";
import { AboutUs } from "./aboutUs";
import { TopCars } from "./topCars";
import { Footer } from "../../compontents/footer";

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
        pl-5
    `}
`;

export function HomePage() {
    return <PageContainer>
        <Navbar/>
        <TopSection/>
        <Marginer direction ="vertical" margin='4em'/>
        <BookCard />
        <Marginer direction ="vertical" margin='8em'/>
        <BookingSteps />
        <Marginer direction ="vertical" margin='7em'/>
        <AboutUs />
        <Marginer direction ="vertical" margin='7em'/>
        <TopCars />
        <Footer />
    </PageContainer>
}