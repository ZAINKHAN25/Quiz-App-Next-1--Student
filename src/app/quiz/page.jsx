"use client"

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import dummyData from "../DummyData.js";
import { useState, useEffect } from "react";

export default function Page() {
  const initialQuizTime = dummyData[0].classesOfQuiz[0].subjects[0].quizTime;
  const [quizSeconds, setQuizSeconds] = useState(initialQuizTime * 60);

  useEffect(() => {

    const interval = setInterval(() => {
      if (quizSeconds > 0) {
        setQuizSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(interval);
      }



    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(quizSeconds / 60);
  const seconds = quizSeconds % 60;

  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <Box>
      <Box>
        <Text>{dummyData[0].classesOfQuiz[0].subjects[0].quizName}</Text>
        <Text>{formattedTime}</Text>
      </Box>
      <Box>
        <Heading>{dummyData[0].classesOfQuiz[0].subjects[0].quizArr[0].question}</Heading>
        {
          dummyData[0].classesOfQuiz[0].subjects[0].quizArr[0].answers.map((x, i) => {
            return (
              <Text
                key={i}
              >
                {
                  console.log(x)
                }
                {
                  x
                }
              </Text>
            )
          })
        }
      </Box>
      <Button>
        Submit
      </Button>
    </Box>
  );
}
