"use client";

import { useMemo, useState } from "react";
import { calculateScores, profileFor } from "./profiles";
import PanasResults from "@/app/resources/panas-test/panas-results";
import styles from "./page.module.css";

const questions = [
  "Колко често се чувствате заинтересувани?",
  "Колко често се чувствате разстроени?",
  "Колко често се чувствате развълнувани?",
  "Колко често се чувствате притеснени?",
  "Колко често се чувствате силни?",
  "Колко често се чувствате виновни?",
  "Колко често се чувствате изплашени?",
  "Колко често се чувствате враждебни?",
  "Колко често се чувствате ентусиазирани?",
  "Колко често се гордеете със себе си?",
  "Колко често се чувствате раздразнени?",
  "Колко често се чувствате нащрек?",
  "Колко често се чувствате засрамени?",
  "Колко често се чувствате вдъхновени?",
  "Колко често се чувствате нервни?",
  "Колко често се чувствате решителни?",
  "Колко често се чувствате внимателни?",
  "Колко често се чувствате напрегнати?",
  "Колко често се чувствате активни?",
  "Колко често се чувствате уплашени?",
];

const options = ["Почти никога", "Малко", "Средно", "Доста", "Много"];

export default function PanasTestPage() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const progress = useMemo(
    () => Math.round((answers.filter((item) => item !== null).length / questions.length) * 100),
    [answers],
  );

  const onPick = (value: number) => {
    const next = [...answers];
    next[index] = value;
    setAnswers(next);
  };

  const onNext = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
      return;
    }
    if (answers.every((item) => item !== null)) {
      setSubmitted(true);
    }
  };

  const onReset = () => {
    setIndex(0);
    setAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
  };

  if (submitted) {
    const numericAnswers = answers.map((item) => item ?? 1);
    const scores = calculateScores(numericAnswers);
    const profile = profileFor(scores.paLevel, scores.naLevel);

    return (
      <PanasResults profile={profile} scores={scores} onReset={onReset} />
    );
  }

  const canGoPrev = index > 0;
  const canGoNext = answers[index] !== null;

  return (
    <section className={styles.pageWrap}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          ТЕСТ ЗА АФЕКТИВЕН АСПЕКТ ЩАСТИЕ
        </h1>
        <p className={styles.intro}>
          Разбери своята естествена комбинация от щастие и използвай силните си страни.
          Направи този тест, за да откриеш своя PANAS профил. Профилите са модел за разбиране,
          не диагноза. Вашият резултат може да се променя според период, среда и емоционалното ви
          състояние.
        </p>
      </header>

      <div className={styles.layout}>
        {/* Main column */}
        <div className={styles.mainColumn}>
          {/* Progress block */}
          <div className={styles.progressCard}>
            <div className={styles.progressMeta}>
              <span className={styles.progressLabel}>
                ВЪПРОС {index + 1} ОТ {questions.length}
              </span>
              <span className={styles.progressPercent}>{progress}% завършени</span>
            </div>
            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question card */}
          <div className={styles.questionCard}>
            <h2 className={styles.question}>
              {index + 1}. {questions[index]}
            </h2>

            {/* Bubble options */}
            <div className={styles.bubblesRow}>
              {options.map((label, optionIndex) => {
                const value = optionIndex + 1;
                const active = answers[index] === value;

                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => onPick(value)}
                    className={`${styles.bubbleOption} ${active ? styles.bubbleOptionActive : ""}`}
                  >
                    <span className={`${styles.bubbleCircle} ${active ? styles.bubbleCircleActive : ""}`}>
                      <span className={`${styles.bubbleDot} ${active ? styles.bubbleDotActive : ""}`} />
                    </span>
                    <span className={`${styles.bubbleLabel} ${active ? styles.bubbleLabelActive : ""}`}>
                      {label.toUpperCase()}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className={styles.controls}>
              {canGoPrev && (
                <button
                  type="button"
                  onClick={() => setIndex(Math.max(0, index - 1))}
                  className={styles.secondaryButton}
                >
                  Назад
                </button>
              )}
              <button
                type="button"
                onClick={onNext}
                disabled={!canGoNext}
                className={styles.primaryButton}
              >
                {index === questions.length - 1 ? "Виж резултата" : "Напред"}
                <span className={styles.arrowIcon} aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Side column */}
        <aside className={styles.sideColumn}>
          <div className={styles.instructionsCard}>
            <div className={styles.instructionsHeader}>
              <span className={styles.instructionsIcon} aria-hidden="true">💡</span>
              <h3 className={styles.instructionsTitle}>Как да попълните теста?</h3>
            </div>
            <p className={styles.instructionsBody}>
              Посочете степента, в която се чувствате по описания начин в ежедневието си.
            </p>
            <ol className={styles.instructionsList}>
              <li className={styles.instructionsItem}>
                <span className={styles.instructionsNum}>1</span>
                <span>Бъдете искрени със себе си. Няма правилни или грешни отговори.</span>
              </li>
              <li className={styles.instructionsItem}>
                <span className={styles.instructionsNum}>2</span>
                <span>Отговаряйте на база на преживяванията си през последната седмица.</span>
              </li>
              <li className={styles.instructionsItem}>
                <span className={styles.instructionsNum}>3</span>
                <span>Първият импулс често е най-верният.</span>
              </li>
            </ol>
          </div>

          <div className={styles.scienceCard}>
            <h4 className={styles.scienceTitle}>Научен контекст</h4>
            <p className={styles.scienceBody}>
              Скелата PANAS е един от най-използваните инструменти в позитивната психология за
              измерване на емоционалния баланс.
            </p>
            <div className={styles.scienceBadge}>
              <span aria-hidden="true">✓</span>
              <span>Peer Reviewed</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
