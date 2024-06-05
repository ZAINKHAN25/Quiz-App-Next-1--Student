"use client"

import { Box, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

import { GoTriangleDown } from "react-icons/go";

import QuizLogoImg from "../../assests/quiz-logo.png";
import colorThemes from "../../Color.js";
import NavbarComponent from "./NavbarComponent.jsx"


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
            >
                <Image
                    name={'Your Profile'}
                    src={'https://lh3.googleusercontent.com/a/AEdFTp6IPjbq2OhwvfIvHYz_pEJVVR1nzwt8v2PPFFCE=s96-c'}
                    w={"30px"}
                    h={"30px"}
                    borderRadius={100}
                />
                <Box
                    as='span'
                    ms={2}
                    color={colorThemes.lightColor.secondColor}
                    display={"flex"}
                    alignItems={"center"}
                    cursor={"pointer"}
                    onClick={() => {
                        setProfileBadgeClicked(!profileBadgeClicked)
                    }}
                >
                    <Text
                        me={1}
                        fontSize={17}
                        fontWeight={"600"}
                    >
                        Zain
                    </Text>
                    <GoTriangleDown
                        fontSize={14}
                    />
                </Box>

                <NavbarComponent
                    profileBadgeClicked={profileBadgeClicked}
                />
            </Box>

        </Box>
    )
}

export default Navbar;