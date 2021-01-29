import { Quiz, QuizQuestion } from "./../Types/Types";

const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const Api = async (total: number): Promise<QuizQuestion[]> => {
  const res = await fetch(`https://opentdb.com/api.php?amount=${total}`);
  const { results } = await res.json();

  const quiz: QuizQuestion[] = results.map((obj: Quiz) => {
    return {
      question: obj.question,
      answer: obj.correct_answer,
      correct_answer: obj.correct_answer,
      option: shuffleArray(obj.incorrect_answers.concat(obj.correct_answer)),
    };
  });
  return quiz;
};
