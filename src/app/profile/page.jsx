import { Box, Heading, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

import Navbar from "../components/navbar/index.jsx";
import colorThemes from "../Color.js";
import { ProfileData, ProfileHeadingArr } from './ProfileData.js';

export default function Page() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Navbar />
      <Box
        width={"85
        
        
        vw"}
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
          Results
        </Heading>

        {/* Table Content */}
        <TableContainer
          my={15}
          border={"transparent"}
        >
          <Table variant='simple' border={"transparent"}>
            <Thead>
              <Tr>
                {
                  ProfileHeadingArr.map((x, i) => {
                    return (
                      <Th
                        key={i}
                        color={colorThemes.lightColor.secondColor}
                        fontSize={15}
                      >
                        {x}
                      </Th>
                    )
                  })
                }
              </Tr>
            </Thead>
            <Tbody>

              {
                ProfileData.map((x, i) => {
                  return (
                    <Tr
                      key={i}
                    >
                      <Th fontSize={14} fontWeight={400}>{i + 1}</Th>
                      <Th fontSize={14} fontWeight={400}>{x.quizdate}</Th>
                      <Th fontSize={14} fontWeight={400}>{x.courseName}</Th>
                      <Th fontSize={14} fontWeight={400}>{x.batch}</Th>
                      <Th fontSize={14} fontWeight={400}>{x.quizsubject}</Th>
                      <Th fontSize={14} fontWeight={400}>{x.quizName}</Th>
                      <Th fontSize={14} fontWeight={400}>{x.quizScore}</Th>
                    </Tr>
                  )
                })
              }
            </Tbody>
          </Table>
        </TableContainer>

      </Box>
    </Box>
  )
}