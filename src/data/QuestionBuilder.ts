import { IOption, IQuestion } from "./types";

export class QuestionBuilder {
  private question: string = "";
  private answers: IOption[] = [];

  setQuestion(question: string): this {
    if (this.answers.length !== 0) {
      throw new Error(
        "You must add exactly 4 answers before setting a new question."
      );
    }
    this.question = question;
    return this;
  }

  addAnswer(answer: IOption): this {
    if (this.answers.length >= 4) {
      throw new Error("Each question must have exactly 4 answers.");
    }
    this.answers.push(answer);
    return this;
  }

  build(): IQuestion {
    if (this.answers.length !== 4) {
      throw new Error("Each question must have exactly 4 answers.");
    }
    if (this.answers.filter((answer) => answer.isRigthAnswer).length !== 1) {
      throw new Error("Each question must have exactly one right answer.");
    }
    return {
      question: this.question,
      options: this.answers,
    };
  }
}
