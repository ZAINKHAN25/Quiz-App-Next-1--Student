import React from 'react';
import { Box } from "@chakra-ui/react";

import Navbar from "../components/navbar/index.jsx";
import SubjectsPageComponent from "../components/subjectPageComponent/index.jsx"
import AccordationComponentSubject from "../components/AccordationComponentSubject/index.jsx"

const Page = () => {

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Navbar />
      <SubjectsPageComponent />
      <AccordationComponentSubject />
      
    </Box>
  );
};

export default Page;
