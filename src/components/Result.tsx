import "./../styles/Result.css";

type ResultProps = {
  score: number;
  total: number;
  onRestart: () => void;
};

function Result({ score, total, onRestart }: ResultProps) {
  let feedbackMessage = "";
  const percentage = (score / total) * 100;

  if (percentage === 100) {
    feedbackMessage = "素晴らしい！あなたはReactマスターです！";
  } else if (percentage >= 75) {
    feedbackMessage = "よくできました！もう少し頑張りましょう";
  } else if (percentage >= 50) {
    feedbackMessage = "まだまだこれから！頑張って挑戦しよう！";
  } else {
    feedbackMessage = "もっと練習が必要です！";
  }

  return (
    <div className="result-container">
      <h2>クイズ終了！</h2>
      <p>あなたのスコアは {score} / {total} です。</p>
      <p>{feedbackMessage}</p>
      <button className="restart-button" onClick={onRestart}>もう一度挑戦</button>
    </div>
  );
}

export default Result;
