import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

import QuizLogoImg from "../../assests/quiz-logo.png";
import colorThemes from "../../Color.js";


function Navbar() {
    return (
        <Box
            width={"100vw"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg={colorThemes.lightColor.firstColor}
            px={"10vw"}
            py={4}
            boxShadow={"1px 1px 10px rgba( 0, 0, 0, 30%)"}
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
                <Text
                    fontSize={20}
                    ms={2}
                    
                >
                    Zain
                </Text>
            </Box>
        </Box>
    )
}

export default Navbar;