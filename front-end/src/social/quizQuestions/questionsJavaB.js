const questions = [
    {
        questionText: 'Cual código en java imprime un "Hola Mundo" ? ',
        answerOptions: [
            { answerText: 'print("Hola Mundo");', isCorrect: false },
            { answerText: 'system.Out.println("Hola Mundo");', isCorrect: false },
            { answerText: 'System.out.println("Hola Mundo");', isCorrect: true },
            { answerText: 'System.out.Println("Hola Mundo");', isCorrect: false },
        ],
    },
    {
        questionText: 'Cual de los siguientes no es una secuencia de escape?',
        answerOptions: [
            { answerText: `\\n`, isCorrect: false },
            { answerText: `\\t`, isCorrect: false},
            { answerText: `\\"`, isCorrect: false },
            { answerText: `/'`, isCorrect: true },
        ],
    },
    {
        questionText: 'Cual de los siguientes no es un tipo de dato primitivo en java?',
        answerOptions: [
            { answerText: 'int', isCorrect: false},
            { answerText: 'char', isCorrect: false },
            { answerText: 'float', isCorrect: false },
            { answerText: 'String', isCorrect: true },
        ],
    },
    {
        questionText: 'int a = 5+(8/3)*2;\n Cual es el valor de a?',
        answerOptions: [
            { answerText: '10', isCorrect: false },
            { answerText: '15.33', isCorrect: false },
            { answerText: '9', isCorrect: true },
            { answerText: '8.66', isCorrect: false },
        ],
    },
];

export default questions;