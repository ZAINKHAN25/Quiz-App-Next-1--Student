import React from "react";

import { Box, Heading, Text } from '@chakra-ui/react';


import dummyData from "../../dummyData.js";
import colorThemes from "../../Color.js";

function SubjectsPageComponent() {
    return (
        <Box
            width={"80vw"}
            pt={8}
            pb={5}
            borderBottom={"1px solid rgba( 0, 0, 0, 10%)"}
            mb={3}
        >
            <Box
                display={"flex"}
                alignItems={"end"}
                color={colorThemes.lightColor.secondColor}
            >
                <Heading
                    fontSize={45}
                    fontWeight={300}
                >
                    {dummyData[1].quizName}
                </Heading>
                <Text
                    fontSize={20}
                    fontWeight={500}
                    ms={2}
                >
                    ({dummyData[1].subjects.length} Subjects)
                </Text>
            </Box>
        </Box>

    )
}

export default SubjectsPageComponent;