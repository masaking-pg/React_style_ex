import "./../styles/Question.css";

type QuestionProps = {
  quiz: {
    question: string;
    options: string[];
    answer: string;
    difficulty: string;
  };
  onAnswer: (answer: string) => void;
  currentIndex: number;
  total: number;
};

function Question({ quiz, onAnswer, currentIndex, total }: QuestionProps) {
  const shuffledOptions = [...quiz.options].sort(() => Math.random() - 0.5);

  return (
    <div className="question-container">
      <h2>問題 {currentIndex} / {total} - 難易度: {quiz.difficulty}</h2>
      <h3>{quiz.question}</h3>
      <div className="options"> 
        {shuffledOptions.map((option, index) => (
          <button key={index} className="option-button" onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
