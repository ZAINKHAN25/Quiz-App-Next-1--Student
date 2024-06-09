"use client"

import { Box, Heading, Table, TableContainer, Tbody, Th, Thead, Tr, Td } from "@chakra-ui/react";

import Navbar from "../components/navbar/index.jsx";
import colorThemes from "../Color.js";
import { ProfileData, ProfileHeadingArr, ArrOfProfileSub } from './ProfileData.js';

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
        width={"85vw"}
        pt={8}
        pb={5}
        mb={3}
      >
        <Heading
          color={colorThemes.lightColor.secondColor}
          fontWeight={300}
          borderBottom={"1px solid rgba( 0, 0, 0, 10%)"}
          fontSize={45}
          pb={5}
          mb={3}
        >
          Results
        </Heading>

        {/* Table Content */}
        <TableContainer
          my={15}
        >
          <Table>
            <Thead
              borderY={"2px solid rgba(0,0,0, 10%)"}
            >
              <Tr>
                {
                  ProfileHeadingArr.map((heading, index) => (
                    <Th
                      key={index}
                      textTransform={"capitalize"}
                      color={colorThemes.lightColor.secondColor}
                      fontSize={16}
                    >
                      {heading}
                    </Th>
                  ))
                }
              </Tr>
            </Thead>
            <Tbody>
              {
                ProfileData.map((profile, index) => (
                  <Tr key={index} textTransform={"capitalize"}>
                    <Td>{index + 1}</Td>
                    {ArrOfProfileSub.map((key, i) => (
                      <Td key={i}>{profile[key]}</Td>
                    ))}
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box >
  );
};