import { AnswerBuilder } from "./AnswerBuilder";
import { QuestionBuilder } from "./QuestionBuilder";
import { QuizBuilder } from "./QuizBuilder";
import { IOption } from "./types";

// helper method to create answers
function createAnswer(value: string, isRigthAnswer: boolean): IOption {
  return new AnswerBuilder()
    .setAnswerValue(value)
    .setIsRigthAnswer(isRigthAnswer)
    .build();
}

const answer1 = createAnswer("Yes", true);
const answer2 = createAnswer("No", false);
const answer3 = createAnswer("Maybe", false);
const answer5 = createAnswer("I don’t know", false);

const answer6 = createAnswer("Definitely", true);
const answer7 = createAnswer("Nope", false);
const answer8 = createAnswer("Could be", false);
const answer10 = createAnswer("Maybe later", false);

// Create questions using the QuestionBuilder
const question1 = new QuestionBuilder()
  .setQuestion("Is TypeScript awesome?")
  .addAnswer(answer1)
  .addAnswer(answer2)
  .addAnswer(answer3)
  .addAnswer(answer5)
  .build();

const question2 = new QuestionBuilder()
  .setQuestion("Do you like coding?")
  .addAnswer(answer6)
  .addAnswer(answer7)
  .addAnswer(answer8)
  .addAnswer(answer10)
  .build();

// Create a quiz with exactly 5 questions
export const initialQuiz = new QuizBuilder()
  .addQuestion(question1)
  .addQuestion(question2)
  .addQuestion(question1)
  .addQuestion(question1)
  .addQuestion(question2)
  .build();
