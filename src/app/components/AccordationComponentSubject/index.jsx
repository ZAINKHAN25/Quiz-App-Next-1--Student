"use client"

import React, { useState } from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';

import DummyData from "../../DummyData.js";
import ColorThemes from "../../Color.js"

function AccordationComponentSubject() {
    const [activeQuiz, setActiveQuiz] = useState(null);
    const currentQuestion = DummyData[0];

    const handleQuizClick = (quizName) => {
        setActiveQuiz(activeQuiz === quizName ? null : quizName);
    };

    return (
        <Accordion
            allowToggle
            width={"80vw"}
            fontWeight={500}
            my={5}
        >
            {
                currentQuestion.classesOfQuiz.map(
                    (subject, i) => (
                        <AccordionItem
                            key={i}
                            border={"1px solid rgba(0,0,0,10%)"}
                        >
                            <h2>
                                <AccordionButton
                                    bg={"rgba(0, 0, 0, 5%)"}
                                    _hover={{
                                        bg: "rgba(0, 0, 0, 10%)"
                                    }
                                    }
                                >
                                    <Box
                                        as='span'
                                        flex={'1'}
                                        textAlign='left'
                                        p={4}
                                        fontSize={20}
                                    >
                                        {subject.subjectName}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                {
                                    subject.subjects.map(
                                        (quiz, j) => (
                                            <Box
                                                key={j}
                                                border={"1px solid rgba(0,0,0,10%)"}
                                            >
                                                <Box
                                                    onClick={() => handleQuizClick(quiz.quizName)}
                                                    width={"100%"}
                                                    bg={"rgba(0, 0, 0, 5%)"}
                                                    _hover={{
                                                        bg: "rgba(0, 0, 0, 10%)"
                                                    }}
                                                    p={4}
                                                >
                                                    {quiz.quizName}
                                                    <AccordionIcon
                                                        transform={`rotate(${activeQuiz === quiz.quizName ? "180deg" : 0})`}
                                                    />
                                                </Box>

                                                {activeQuiz === quiz.quizName && (
                                                    <Box
                                                        p={4}
                                                    >
                                                        <Box
                                                            borderTop={"1px solid rgba(0, 0, 0, 10%)"}
                                                            py={2}
                                                            px={5}
                                                            display={"flex"}
                                                        >
                                                            <Box
                                                                flex={1}
                                                                fontWeight={"bold"}
                                                                color={ColorThemes.lightColor.secondColor}
                                                            >
                                                                Quiz name
                                                            </Box>
                                                            <Box
                                                                flex={3}
                                                            >
                                                                {quiz.quizName}
                                                            </Box>
                                                        </Box>
                                                        <Box
                                                            borderTop={"1px solid rgba(0, 0, 0, 10%)"}
                                                            py={2}
                                                            px={5}
                                                            display={"flex"}
                                                        >
                                                            <Box
                                                                flex={1}
                                                                fontWeight={"bold"}
                                                            >
                                                                Total questions
                                                            </Box>
                                                            <Box
                                                                flex={3}
                                                            >
                                                                {quiz.quizArr.length}
                                                            </Box>
                                                        </Box>
                                                        <Box
                                                            borderTop={"1px solid rgba(0, 0, 0, 10%)"}
                                                            py={2}
                                                            px={5}
                                                            display={"flex"}
                                                        >
                                                            <Box
                                                                flex={1}
                                                                fontWeight={"bold"}
                                                            >
                                                                Total time
                                                            </Box>
                                                            <Box
                                                                flex={3}
                                                            >
                                                                {quiz.quizTime} min
                                                            </Box>
                                                        </Box>
                                                        <Box
                                                            borderTop={"1px solid rgba(0, 0, 0, 10%)"}
                                                            py={2}
                                                            px={5}
                                                            display={"flex"}
                                                        >
                                                            <Box
                                                                flex={1}
                                                                fontWeight={"bold"}
                                                            >
                                                                Passing score
                                                            </Box>
                                                            <Box
                                                                flex={3}
                                                            >
                                                                {quiz.quizSubjectPassingCourse}%
                                                            </Box>
                                                        </Box>
                                                        {/* Continue Button */}
                                                        <Box
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
                                                            }}
                                                        >
                                                            Continue
                                                        </Box>
                                                    </Box>
                                                )
                                                }
                                            </Box>
                                        ))}
                            </AccordionPanel>
                        </AccordionItem>
                    )
                )
            }
        </Accordion >
    );
}

export default AccordationComponentSubject;
