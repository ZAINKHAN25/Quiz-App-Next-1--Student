"use client"

import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, Text } from "@chakra-ui/react";

import Navbar from "../components/navbar/index.jsx";
import SubjectsPageComponent from "../components/subjectPageComponent/index.jsx"
import dummyData from "../DummyData.js";

export default function Page() {

  let subjectsDe = dummyData[1].classesOfQuiz;

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Navbar />
      <SubjectsPageComponent />

      <Accordion
        allowToggle
        width={"80vw"}
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
                {
                  x.subjects.map((x, i) => {
                    return (
                      <AccordionPanel
                        pb={4}
                        key={i}
                      >
                        {x.subSubjectName}
                      </AccordionPanel>
                    )
                  })
                }
              </AccordionItem>
            )
          })
        }
      </Accordion>

    </Box>
  )
};