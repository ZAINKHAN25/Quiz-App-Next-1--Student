import { Box, Heading, Input, Text } from "@chakra-ui/react";

import Navbar from "../components/navbar/index.jsx";
import dummyData from "../DummyData.js";
import ColorThemes from "../Color.js";

export default function Page() {
  return (
    <Box>
      <Navbar />
      <Box
        width={"80vw"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        mx={"auto"}
        my={10}
      >
        <Box
          w={"100%"}
          color={ColorThemes.lightColor.secondColor}
          display={"flex"}
          alignItems={"end"}
          borderBottom={"1px solid rgba(0,0,0,10%)"}
          pb={5}
          mb={2}
        >
          <Heading
            fontWeight={300}
            fontSize={45}
          >
            {dummyData[0].classesOfQuiz[0].subjectName}
          </Heading>
          <Text
            ms={2}
            fontSize={20}
            fontWeight={500}
          >
            ({dummyData[0].classNameOFQuiz})
          </Text>
        </Box>

        <Input
          type={"password"}
          placeholder={"Enter Test Key"}
          border={"1px solid black"}
          borderRadius={0}
          w={"100%"}
          py={2}
          px={4}
          my={2}
          h={"max-content"}
          fontSize={18}
        />
        <Box
          ms={"auto"}
          bg={ColorThemes.lightColor.secondColor}
          color={ColorThemes.lightColor.firstColor}
          width={"max-content"}
          mt={5}
          px={5}
          py={2}
          cursor={"pointer"}
          borderRadius={5}
          _hover={{
            opacity: 0.9
          }}>
          Submit
        </Box>
      </Box>

    </Box>
  )
}