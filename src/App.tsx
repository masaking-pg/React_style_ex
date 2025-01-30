import { useState } from "react";
import { quizData } from "./quizData";
import Question from "./components/Question";
import Result from "./components/Result";
import "./styles/App.css";  // CSS を適用

function App() {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === quizData[currentQuizIndex].answer) {
      setScore((prev) => prev + 1);
    }
    const nextIndex = currentQuizIndex + 1;
    if (nextIndex < quizData.length) {
      setCurrentQuizIndex(nextIndex);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuizIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="app-container">
      <h1>Reactクイズアプリ</h1>
      {isFinished ? (
        <Result score={score} total={quizData.length} onRestart={restartQuiz} />
      ) : (
        <Question
          quiz={quizData[currentQuizIndex]}
          onAnswer={handleAnswer}
          currentIndex={currentQuizIndex + 1}
          total={quizData.length}
        />
      )}
    </div>
  );
}

export default App;
