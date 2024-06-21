import { Box, Heading, Img, Text } from "@chakra-ui/react";

import SignUpNavbar from "../components/SignUpNavbar/index.jsx";
import colorThemes from "../Color.js";
import Link from "next/link.js";


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
        py={18}
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
        <Text
          my={2}
          fontWeight={500}
          fontSize={20}
        >
          Start your exam here:
        </Text>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={"#fff"}
          p={2}
          my={10}
          boxShadow={"1px 1px 10px rgba(0,0,0,30%)"}
        >
          <Img
            w={"50px"}
            src={"https://s3-alpha.figma.com/hub/file/2729744958/2a5758d6-4edb-4047-87bb-e6b94dbbbab0-cover.png"} />
          Continue With Google
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        py={"10vh"}
        fontSize={20}
      >

        DEVELOPED BY -
        
        <Link
          href={"https://github.com/zainkhan25"}>
          <Text
            color={colorThemes.lightColor.secondColor}
            mx={2}
          >
            ZAIN KHAN
          </Text>
        </Link>

      </Box>
    </Box>
  )
}