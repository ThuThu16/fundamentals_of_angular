import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-or-api',
  standalone: true,
  templateUrl: './quiz-or-api.html',
  styleUrls: ['./quiz-or-api.css'],
  imports: [NgFor, NgIf, FormsModule]
})
export class QuizOrApi {
  questions = [
    {
      text: 'What is the capital of Finland?',
      options: ['Stockholm', 'Oslo', 'Helsinki'],
      correct: 'Helsinki'
    },
    {
      text: 'Which language is used with Angular?',
      options: ['Java', 'TypeScript', 'Python'],
      correct: 'TypeScript'
    },
    {
      text: 'How many legs does a dog have?',
      options: ['2', '4', '6'],
      correct: '4'
    }
  ];

  userAnswers: string[] = [];
  correctCount = 0;
  resultShown = false;
  feedback: { correct: boolean; correctAnswer: string }[] = [];

  submitQuiz() {
    this.correctCount = 0;
    this.feedback = [];
    this.questions.forEach((q, i) => {
      const isCorrect = this.userAnswers[i] === q.correct;
      if (isCorrect) this.correctCount++;
      this.feedback.push({
        correct: isCorrect,
        correctAnswer: q.correct
      });
    });
    this.resultShown = true;
  }
}
