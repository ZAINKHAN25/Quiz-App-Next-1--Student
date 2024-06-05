import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import colorThemes from '../../Color.js';

function WelcomeHomeTx() {
    return (
        <Box
            width={"90vw"}
            pt={8}
            pb={5}
            borderBottom={"1px solid rgba( 0, 0, 0, 10%)"}
            mb={3}
        >
            <Heading
                color={colorThemes.lightColor.secondColor}
                fontWeight={300}
                fontSize={45}
            >
                Hy, ZAIN ARFEEN  👋
            </Heading>
            <Text
                mt={2}
                fontFamily={"Roboto Slab"}
                fontSize={16}
                letterSpacing={1.1}
                fontWeight={540}
            >
                Welcome to the quiz portal. Select your course below to take a quiz.
            </Text>
        </Box>

    )
}

export default WelcomeHomeTx;