export interface IQuestion {
  question: string;
  options: IOption[];
}

export interface IOption {
  value: string;
  isRigthAnswer?: boolean;
}

export interface IQuiz {
  questions: IQuestion[];
}
