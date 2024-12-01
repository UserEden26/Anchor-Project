import { IQuestion } from "./types";

export class QuizBuilder {
  private questions: IQuestion[] = [];

  addQuestion(question: IQuestion): this {
    if (this.questions.length >= 5) {
      throw new Error("A quiz can only have 5 questions.");
    }
    this.questions.push(question);
    return this;
  }

  build() {
    if (this.questions.length !== 5) {
      throw new Error("A quiz must have exactly 5 questions.");
    }
    return {
      questions: this.questions,
    };
  }
}
