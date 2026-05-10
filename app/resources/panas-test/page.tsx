'use client';

import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faArrowRight,
  faArrowLeft,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import PanasResults from './panas-results';
import PageLayout from '@/app/components/PageLayout';

const questions = [
  'Колко често се чувствате заинтересувани?',
  'Колко често се чувствате разстроени?',
  'Колко често се чувствате развълнувани?',
  'Колко често се чувствате притеснени?',
  'Колко често се чувствате силни?',
  'Колко често се чувствате виновни?',
  'Колко често се чувствате изплашени?',
  'Колко често се чувствате враждебни?',
  'Колко често се чувствате ентусиазирани?',
  'Колко често се гордеете със себе си?',
  'Колко често се чувствате раздразнени?',
  'Колко често се чувствате нащрек?',
  'Колко често се чувствате засрамени?',
  'Колко често се чувствате вдъхновени?',
  'Колко често се чувствате нервни?',
  'Колко често се чувствате решителни?',
  'Колко често се чувствате внимателни?',
  'Колко често се чувствате напрегнати?',
  'Колко често се чувствате активни?',
  'Колко често се чувствате уплашени?',
];

const answerLabels = ['Почти никога', 'Малко', 'Средно', 'Доста', 'Много'];

export default function PanasTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const progress = Math.round(
    (answers.filter((a) => a !== null).length / questions.length) * 100
  );

  const handleAnswer = (value: number) => {
    const updated = [...answers];
    updated[currentQuestion] = value;
    setAnswers(updated);
  };

  const goNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (answers.every((a) => a !== null)) {
      setShowResults(true);
    }
  };

  const goPrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRetake = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const questionLabelClasses =
    'text-center text-xs font-bold uppercase text-on-surface sm:text-sm';

  return (
    <PageLayout>
      <section className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="flex flex-col gap-6">
        <h1>Тест за афективния аспект на щастието</h1>
        <div>
          <p>
            Тестът PANAS (Positive and Negative Affect Schedule) е кратък
            психологически въпросник, създаден за измерване на текущото
            емоционално състояние чрез две основни скали: положителен и
            отрицателен афект. Той оценява доколко човек изпитва различни емоции
            в даден момент или за определен период от време.
          </p>
          <p>
            Въз основа на отговорите ви ще откриете вашия PANAS профил, който ще
            ви разкрие силните и слабите ви страни, както и няколко ресурса,
            които да ви помогнат да градите щастието си, всеки ден малко повече.
          </p>
        </div>
      </div>

      {showResults ? (
        <PanasResults answers={answers as number[]} onRetake={handleRetake}/>
      ) : (
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <div className="flex flex-col gap-2 rounded-lg bg-primary/10 px-4 py-3">
              <div className="flex items-center justify-between text-xs font-bold uppercase text-primary sm:text-sm">
                <span>
                  Въпрос {currentQuestion + 1} от {questions.length}
                </span>
                <span>{progress}% завършени</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded bg-primary/20">
                <div
                  className="h-full rounded bg-primary transition-[width] duration-300"
                  style={{width: `${progress}%`}}
                />
              </div>
            </div>

            <div
              className="flex flex-col items-center gap-8 rounded-xl border border-black/10 px-4 py-8 md:px-8 md:py-10">
              <h2 className="max-w-120 text-center text-2xl sm:text-[1.75rem]">
                {currentQuestion + 1}. {questions[currentQuestion]}
              </h2>

              <div className="flex justify-center gap-4 md:gap-8">
                {answerLabels.map((label, index) => (
                  <button
                    key={index}
                    type="button"
                    className="group flex cursor-pointer flex-col items-center gap-2 bg-transparent p-0"
                    onClick={() => handleAnswer(index + 1)}
                  >
                    <span
                      className={`flex size-11 items-center justify-center rounded-full border-2 bg-background transition-all md:size-13 ${
                        answers[currentQuestion] === index + 1
                          ? 'border-primary'
                          : 'border-black/15 group-hover:border-primary'
                      }`}
                    >
                      <span
                        className={`rounded-full bg-primary transition-all ${
                          answers[currentQuestion] === index + 1
                            ? 'size-5 md:size-6'
                            : 'size-0'
                        }`}
                      />
                    </span>
                    <span
                      className={`${questionLabelClasses} ${
                        answers[currentQuestion] === index + 1
                          ? 'text-primary'
                          : 'text-on-surface'
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex justify-center gap-3">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-full border border-black/15 bg-transparent px-5 py-2 font-extrabold text-on-surface transition-colors enabled:hover:border-primary enabled:hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                  onClick={goPrev}
                  disabled={currentQuestion === 0}
                >
                  <FontAwesomeIcon icon={faArrowLeft}/>
                  Назад
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 font-extrabold text-white transition enabled:hover:opacity-90 enabled:hover:shadow-[0_4px_12px_rgba(151,81,52,0.35)] disabled:cursor-not-allowed disabled:opacity-40"
                  onClick={goNext}
                  disabled={answers[currentQuestion] === null}
                >
                  {currentQuestion === questions.length - 1
                    ? 'Виж резултата'
                    : 'Напред'}
                  <FontAwesomeIcon icon={faArrowRight}/>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:w-[300px] lg:shrink-0">
            <div className="rounded-xl bg-secondary/25 p-4 md:p-6">
              <div className="flex items-center gap-2 pb-3 text-xl font-bold">
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="text-xl"
                />
                Как да попълните теста?
              </div>
              <p className="pb-3 text-sm text-on-surface">
                Посочете степента, в която се чувствате по описания начин в
                ежедневието си.
              </p>
              <ol className="flex flex-col gap-3">
                <li className="flex items-start gap-3 list-none">
                  <span
                    className="flex size-6 min-w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    1
                  </span>
                  <span className="text-sm text-on-surface">
                    Бъдете искрени със себе си. Няма правилни или грешни
                    отговори.
                  </span>
                </li>
                <li className="flex items-start gap-3 list-none">
                  <span
                    className="flex size-6 min-w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    2
                  </span>
                  <span className="text-sm text-on-surface">
                    Отговаряйте на база на преживяванията си през последната
                    седмица.
                  </span>
                </li>
                <li className="flex items-start gap-3 list-none">
                  <span
                    className="flex size-6 min-w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    3
                  </span>
                  <span className="text-sm text-on-surface">
                    Първият импулс често е най-верният.
                  </span>
                </li>
              </ol>
            </div>

            <div className="rounded-xl bg-tertiary/20 p-4 md:p-6">
              <div className="pb-3 text-xl font-bold">Научен контекст</div>
              <p className="pb-2 text-sm text-on-surface">
                Скалата PANAS е един от най-използваните инструменти в
                позитивната психология за измерване на емоционалния баланс.
              </p>
              <div className="flex items-center gap-2 pt-2 text-xs tracking-[1px] text-on-surface uppercase">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-primary"
                />
                PEER REVIEWED
              </div>
            </div>
          </div>
        </div>
      )}
      </section>
    </PageLayout>
  );
}
