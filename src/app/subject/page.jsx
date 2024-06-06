import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, Text } from "@chakra-ui/react";

import Navbar from "../components/navbar/index.jsx";
import subjectsPageComponent from "../components/subjectPageComponent/index.jsx"
import dummyData from "../DummyData.js";

export default function Page() {

  let subjectsDe = dummyData[1].subjects;

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Navbar />
      <subjectsPageComponent />

      <Accordion
        allowToggle
      >
        {
          subjectsDe.map((x, i) => {

            return (

              <AccordionItem
                key={i}
              >
                <h2>
                  <AccordionButton>
                    <Box
                      as='span'
                      flex='1'
                      textAlign='left'
                    >
                      {x.subjectName}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            )
          })
        }
      </Accordion>

    </Box>
  )
};