import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import dummyData from '../../DummyData.js';
import colorThemes from '../../Color.js';

function HomePageComponent() {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"strecth"}
            flexWrap={"wrap"}
            width={"90vw"}
            my={15}
        >
            {
                dummyData.map((x, i) => {
                    return (
                        <Box
                            key={i}
                            mx={3}
                            p={10}
                            border={"1px solid rgba( 0, 0, 0, 10% )"}
                            width={400}
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"start"}
                            justifyContent={"center"}
                            fontFamily={"Josefin-Sans"}
                        >
                            <Heading
                                fontSize={24}
                                fontWeight={500}
                            >
                                {x.quizName}
                            </Heading>
                            <Text
                                color={"rgba( 0, 0, 0, 60%)"}
                                fontWeight={600}
                                mt={2}
                            >
                                {x.subjects.length} Subjects
                            </Text>

                            <Box
                                width={"100%"}
                                border={`1px solid ${colorThemes.lightColor.secondColor}`}
                                textAlign={"center"}
                                color={colorThemes.lightColor.secondColor}
                                p={1}
                                mt={5}
                                fontSize={18}
                                cursor={"pointer"}
                                fontWeight={"500"}
                                borderRadius={8}
                                transition={"all .3s"}
                                _hover={{
                                    bg: colorThemes.lightColor.secondColor,
                                    color: colorThemes.lightColor.firstColor
                                }}
                            >
                                Join
                            </Box>
                        </Box>
                    )
                })
            }
        </Box>
    )
}

export default HomePageComponent