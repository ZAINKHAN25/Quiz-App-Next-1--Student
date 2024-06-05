const dummyData = [
    {
        quizName: "Web and mobile hybrid app develpment",
        subjects: [
            {
                subjectName: "Html 5",
                subjects: [
                    {
                        subSubjectName: "Html Quiz 1",
                        subSubjectsArr: [
                            {
                                question: "Inside which HTML element do we put the JavaScript?",
                                answers: [
                                    "<script>",
                                    "<scripting>",
                                    "<js>",
                                    "<javascript>",
                                ],
                                correctAnswer: 0
                            },
                            {
                                question:
                                    "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
                                answers: [
                                    'document.getElementById("demo").innerHTML = "Hello World!";',
                                    'document.getElement("p").innerHTML = "Hello World!";',
                                    'document.getElementByName("p").innerHTML = "Hello World!";',
                                    '#demo.innerHTML = "Hello World!";',
                                ],
                                correctAnswer: 0
                            },
                        ],
                        subSubjectTime: 30,
                        subSubjectPassingCourse: 70
                    }
                ]
            }
        ]
    },
];

export default dummyData;