import React from "react";

export type Quiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuizQuestion = {
  question: string;
  answer: string;
  option: string[];
  correct_answer: string;
};

export type propsType = {
  question: string;
  options: string[];
  callback: (e: React.FormEvent<EventTarget>, ans: string) => void;
};
