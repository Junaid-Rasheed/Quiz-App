import React, { useEffect, useState } from "react";
import "./App.css";
import { Api } from "./Services/Quiz_services";
import { QuizQuestion } from "./Types/Types";
import { QuestionCard } from "./Components/QuestionCard";

function App() {
  const [quiz, setQuiz] = useState<QuizQuestion[]>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);
const [showResult , setShowResult] =useState(false);

  // SIMPLE FUNCTION

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();
    const currentQuestion = quiz[currentStep];
    if (userAns === currentQuestion.correct_answer) {
      setScore(++score);
    }
    if (currentStep !== quiz.length - 1) setCurrentStep(++currentStep);
    else {
     
      setShowResult(true);
    }
  };



  // USEeFFECT HOOK
  useEffect(() => {
    async function fetchedApi() {
      const question: QuizQuestion[] = await Api(10);
      setQuiz(question);
    }
    fetchedApi();
  }, []);



  if (!quiz.length) return <h2>loading...</h2>;


if (showResult) return(
  <div className="question-container">
    <h2>RESULT</h2>
    <p>You Got {score} out of {quiz.length}</p>
  </div>
)
  return (
    <div className="App">
      <QuestionCard
        options={quiz[currentStep].option}
        question={quiz[currentStep].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
