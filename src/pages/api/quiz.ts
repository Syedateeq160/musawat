import type { NextApiRequest, NextApiResponse } from 'next';
import { TQuiz, TQuizResponse } from '../../types/quiz';

const questionsAndAnswers: TQuiz[] = [
  {
    id: 1,
    question: "What is the primary objective of the Protection Against Harassment of Women at the Workplace Act, 2010?",
    options: [
      "To safeguard workplace property",
      "To ensure gender-based equality and prevent harassment",
      "To regulate employee benefits",
      "To promote industrial growth"
    ],
    answer: "To ensure gender-based equality and prevent harassment"
  },
  {
    id: 2,
    question: "How does the Act define workplace harassment?",
    options: [
      "Disagreement between employees",
      "Unwelcome sexual advance and discrimination on the basis of gender",
      "Friendly communication between colleagues",
      "Workplace competition"
    ],
    answer: "Unwelcome sexual advance and discrimination on the basis of gender"
  },
  {
    id: 3,
    question: "Who is primarily protected under the Act?",
    options: [
      "Only female employees",
      "All employees regardless of gender",
      "Male employees only",
      "Female employees and interns"
    ],
    answer: "All employees regardless of gender"
  },
  {
    id: 4,
    question: "According to the Act, what must every organization establish to address complaints?",
    options: [
      "A grievance cell",
      "A workplace monitoring committee",
      "An Inquiry Committee",
      "A human resources division"
    ],
    answer: "An Inquiry Committee"
  },
  {
    id: 5,
    question: "What is the minimum number of members required in an Inquiry Committee as per the Act?",
    options: ["1", "2", "3", "5"],
    answer: "3"
  },
  {
    id: 6,
    question: "What proportion of the Inquiry Committee must consist of women?",
    options: ["None", "At least one-third", "Exactly half", "All members"],
    answer: "At least one-third"
  },
  {
    id: 7,
    question: "Under the 2022 amendment, who can file a complaint of harassment?",
    options: [
      "Only the victim",
      "Victim or a representative",
      "Only the employer",
      "Any member of the public"
    ],
    answer: "Victim or a representative"
  },
  {
    id: 8,
    question: "Within how many days must a harassment complaint be filed according to the Act?",
    options: ["7 days", "15 days", "30 days", "90 days"],
    answer: "30 days"
  },
  {
    id: 9,
    question: "What actions can be considered workplace harassment under the Act?",
    options: [
      "Unwelcome sexual advances",
      "Demeaning comments about a person's gender",
      "Stalking or intimidating behavior at work",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    id: 10,
    question: "What is the maximum penalty that can be imposed on a perpetrator under the Act?",
    options: [
      "Verbal warning",
      "Salary deduction",
      "Termination of employment",
      "Any or all of the above depending on severity"
    ],
    answer: "Any or all of the above depending on severity"
  },
  {
    id: 11,
    question: "How long does the Inquiry Committee have to complete its investigation?",
    options: ["7 days", "15 days", "30 days", "60 days"],
    answer: "60 days"
  },
  {
    id: 12,
    question: "Under the 2022 amendment, which provision was enhanced to ensure protection for complainants?",
    options: [
      "Anonymity of the complainant",
      "Increased fines for false allegations",
      "Mandatory counseling for victims",
      "Enhanced reporting channels"
    ],
    answer: "Anonymity of the complainant"
  },
  {
    id: 13,
    question: "What can the complainant do if dissatisfied with the Inquiry Committee’s decision?",
    options: [
      "Resign from their position",
      "Appeal to the Ombudsman",
      "File a lawsuit in civil court",
      "Retaliate against the accused"
    ],
    answer: "Appeal to the Ombudsman"
  },
  {
    id: 14,
    question: "What is the role of the Ombudsman under the Act?",
    options: [
      "Investigate workplace accidents",
      "Monitor workplace performance",
      "Hear appeals and ensure compliance with the Act",
      "Issue workplace safety certificates"
    ],
    answer: "Hear appeals and ensure compliance with the Act"
  },
  {
    id: 15,
    question: "Which behavior is NOT considered harassment under the Act?",
    options: [
      "Constructive feedback on work performance",
      "Unwelcome physical contact",
      "Threats based on gender",
      "Persistent unwelcome communication"
    ],
    answer: "Constructive feedback on work performance"
  },
  {
    id: 16,
    question: "If a person is dissatisfied with the decision of the Ombudsman, what can they do?",
    options: [
      "Appeal to the President or Governor",
      "Ombudsman is the final decision-maker",
      "Appeal to the High Court",
      "Appeal to the Supreme Court"
    ],
    answer: "Appeal to the President or Governor"
  }
];

interface Params {
  page: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TQuizResponse>
) {
  try {
    let { page } = req.query as unknown as Params;

    // If the page is not applied in query.
    if (!page) {
      res.send(questionsAndAnswers);
    }

    let pageToNum = parseInt(page);

    const quiz = questionsAndAnswers[pageToNum];
    const lastPage = questionsAndAnswers.length - 1;
    const numOfQuestion = questionsAndAnswers.length;

    if (pageToNum === 0) {
      res.send({
        prev: false,
        next: true,
        page,
        quiz,
        total: numOfQuestion
      });
    } else if (pageToNum === lastPage) {
      res.send({
        prev: true,
        next: false,
        page,
        quiz,
        total: numOfQuestion
      });
    } else {
      res.send({
        prev: true,
        next: true,
        page,
        quiz,
        total: numOfQuestion
      });
    }
  } catch (error) {
    res.status(500);
  }
}
