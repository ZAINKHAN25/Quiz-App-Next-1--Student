
import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import { RiLogoutCircleRLine } from 'react-icons/ri';
import { VscGraph } from 'react-icons/vsc';
import colorThemes from '../../Color.js';


function NavbarComponent({ profileBadgeClicked }) {

    return (
        <Box
            position={"absolute"}
            display={profileBadgeClicked ? "block" : "none"}
            bg={colorThemes.lightColor.firstColor}
            border={`1px solid rgba(0,0,0,30%)`}
            boxShadow={"1px 1px 10px rgba( 0, 0, 0, 30%)"}
            top={"60px"}
            right={'5vw'}
            fontSize={19}
            py={1}
            px={1}
            transition={"all .5s ease-in"}
        >
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box
                    px={10}
                    display={"flex"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    py={2}
                    cursor={"pointer"}
                    width={"auto"}
                    _hover={{
                        bg: colorThemes.lightColor.secondColor,
                        color: colorThemes.lightColor.firstColor
                    }}
                >
                    <VscGraph />
                    <Text
                        ms={2}
                    >
                        Results
                    </Text>
                </Box>

                <Box
                    px={10}
                    display={"flex"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    py={2}
                    cursor={"pointer"}
                    width={"auto"}
                    _hover={{
                        bg: colorThemes.lightColor.secondColor,
                        color: colorThemes.lightColor.firstColor
                    }}
                >
                    <RiLogoutCircleRLine />
                    <Text
                        ms={2}
                    >
                        Logout
                    </Text>
                </Box>
            </Box>
        </Box>

    );
};

export default NavbarComponent;