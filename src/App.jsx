import "./app.css";
import { useEffect, useState, useMemo } from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";



function App() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of Harry Potter in the movies?",
      answers: [
        {
          text: "Johnny Depp",
          correct: false,
        },
        {
          text: "Leonardo DiCaprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Radcliffe",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What is the capital of France?",
      answers: [
        {
          text: "London",
          correct: false,
        },
        {
          text: "Paris",
          correct: true,
        },
        {
          text: "Berlin",
          correct: false,
        },
        {
          text: "Rome",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which planet is known as the Red Planet?",
      answers: [
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Jupiter",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the chemical symbol for water?",
      answers: [
        {
          text: "O2",
          correct: false,
        },
        {
          text: "CO2",
          correct: false,
        },
        {
          text: "H2O",
          correct: true,
        },
        {
          text: "H2O2",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who wrote 'To Kill a Mockingbird'?",
      answers: [
        {
          text: "Harper Lee",
          correct: true,
        },
        {
          text: "J.K. Rowling",
          correct: false,
        },
        {
          text: "Stephen King",
          correct: false,
        },
        {
          text: "Ernest Hemingway",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is the tallest mountain in the world?",
      answers: [
        {
          text: "K2",
          correct: false,
        },
        {
          text: "Mount Kilimanjaro",
          correct: false,
        },
        {
          text: "Mount Everest",
          correct: true,
        },
        {
          text: "Mount Fuji",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the chemical symbol for gold?",
      answers: [
        {
          text: "Au",
          correct: true,
        },
        {
          text: "Ag",
          correct: false,
        },
        {
          text: "Fe",
          correct: false,
        },
        {
          text: "Pb",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who painted the Mona Lisa?",
      answers: [
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Claude Monet",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "What is the smallest country in the world?",
      answers: [
        {
          text: "Monaco",
          correct: false,
        },
        {
          text: "Nauru",
          correct: false,
        },
        {
          text: "Vatican City",
          correct: true,
        },
        {
          text: "San Marino",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What is the main ingredient in guacamole?",
      answers: [
        {
          text: "Tomatoes",
          correct: false,
        },
        {
          text: "Avocado",
          correct: true,
        },
        {
          text: "Onions",
          correct: false,
        },
        {
          text: "Peppers",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Who was the first person to step on the moon?",
      answers: [
        {
          text: "Neil Armstrong",
          correct: true,
        },
        {
          text: "Buzz Aldrin",
          correct: false,
        },
        {
          text: "Yuri Gagarin",
          correct: false,
        },
        {
          text: "John Glenn",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which country is commonly referred to as the 'Land of the Rising Sun'?",
      answers: [
        {
          text: "China",
          correct: false,
        },
        {
          text: "Japan",
          correct: true,
        },
        {
          text: "South Korea",
          correct: false,
        },
        {
          text: "Vietnam",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What is the chemical symbol for iron?",
      answers: [
        {
          text: "Fe",
          correct: true,
        },
        {
          text: "Au",
          correct: false,
        },
        {
          text: "Ag",
          correct: false,
        },
        {
          text: "Pb",
          correct: false,
        },
      ],
    },
  ];
  

  const moneyPyramid = useMemo(() =>

    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1.000" },
      { id: 6, amount: "$ 2.000" },
      { id: 7, amount: "$ 4.000" },
      { id: 8, amount: "$ 8.000" },
      { id: 9, amount: "$ 16.000" },
      { id: 10, amount: "$ 32.000" },
      { id: 11, amount: "$ 64.000" },
      { id: 12, amount: "$ 125.000" },
      { id: 13, amount: "$ 250.000" },
      { id: 14, amount: "$ 500.000" },
      { id: 15, amount: "$ 1.000.000" },
    ].reverse(),

    []);

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber])

  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <h1 className="endText">You earned: {earned} </h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">

                <Timer setStop={setStop} questionNumber={questionNumber} />

              </div>
            </div>
            <div className="bottom">

              <Trivia
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />

            </div>
          </>
        )}
      </div>

      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={

                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"

              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
