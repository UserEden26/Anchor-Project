import { IOption } from "./types";

export class AnswerBuilder {
  private answerValue: string = "";
  private isRigthAnswerExsist: boolean | undefined;

  setAnswerValue(value: string): this {
    this.answerValue = value;
    return this;
  }

  setIsRigthAnswer(isRigthAnswer: boolean): this {
    if (this.isRigthAnswerExsist !== undefined) {
      throw new Error("Only one answer can be the correct answer.");
    }
    this.isRigthAnswerExsist = isRigthAnswer;
    return this;
  }

  build(): IOption {
    return {
      value: this.answerValue,
      isRigthAnswer: this.isRigthAnswerExsist,
    };
  }
}
