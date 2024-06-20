"use client"

import { Box, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

import { GoTriangleDown } from "react-icons/go";

import QuizLogoImg from "../../assests/quiz-logo.png";
import colorThemes from "../../Color.js";


function Navbar() {

    let [profileBadgeClicked, setProfileBadgeClicked] = useState(false);

    return (
        <Box
            width={"100vw"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg={colorThemes.lightColor.firstColor}
            px={"10vw"}
            py={3}
            boxShadow={"1px 1px 10px rgba( 0, 0, 0, 30%)"}
            position={"relative"}
        >

            <Image
                src={QuizLogoImg.src}
                w={"80px"}
            />

            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                color={colorThemes.lightColor.secondColor}
                fontWeight={600}
                cursor={"pointer"}
            >
                V 0.1 BETA

            </Box>

        </Box >
    )
}

export default Navbar;