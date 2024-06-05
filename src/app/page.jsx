import { Box } from "@chakra-ui/react";

import Navbar from "./components/navbar/index.jsx";
import WelcomeHomeTx from "./components/WelcomeHomeTx/index.jsx";

export default function Home() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Navbar />
      <WelcomeHomeTx />
      

    </Box>
  );
}
