import { Box } from "@chakra-ui/react";
import styles from "./page.module.css";

import Navbar from "./components/navbar/index.jsx"

export default function Home() {
  return (
    <Box fontSize={50} className={styles.main}>
      <Navbar />
    </Box>
  );
}
