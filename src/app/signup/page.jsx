import { Box, Heading, Text } from "@chakra-ui/react";

import SignUpNavbar from "../components/SignUpNavbar/index.jsx";
import colorThemes from "../Color.js";


export default function Page() {
  return (
    <Box>
      <SignUpNavbar />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bg={"#e9ecef"}
        px={5}
        py={20}
      >
        <Heading
          color={colorThemes.lightColor.secondColor}
          fontWeight={300}
          fontSize={60}
          my={2}
        >
          Quiz Application
        </Heading>
        <Heading
          fontWeight={200}
          fontSize={40}
        >
          Lorem ipsum dolor sit amet consectetur.
        </Heading>

        <Text
          my={"25px"}
          fontWeight={300}
          fontSize={19}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, quibusdam. Ratione doloremque dignissimos sit voluptates!
        </Text>

        <Text
          my={"25px"}
          fontWeight={300}
          fontSize={19}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatum doloribus deserunt nemo magni nihil dolor distinctio ex laudantium natus!
        </Text>
      </Box>
    </Box>
  )
}