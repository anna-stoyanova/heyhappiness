import styles from "./panas-results.module.css";

type PanasResultsProps = {
  profile: {
    emoji: string;
    name: string;
    description: string;
  };
  scores: {
    pa: number;
    na: number;
  };
  onReset: () => void;
};

export default function PanasResults({ profile, scores, onReset }: PanasResultsProps) {
  return (
    <section className={styles.pageWrap}>
      <header className={styles.header}>
        <p className={styles.kicker}>PANAS резултат</p>
        <h1 className={styles.title}>
          Вашият профил: {profile.emoji} {profile.name}
        </h1>
      </header>

      <article className={styles.resultCard}>
        <p className={styles.description}>{profile.description}</p>

        <div className={styles.scoreGrid}>
          <div className={styles.scoreItem}>
            <p className={styles.scoreLabel}>Положителен афект (PA)</p>
            <p className={styles.scoreValue}>{scores.pa}</p>
          </div>
          <div className={styles.scoreItem}>
            <p className={styles.scoreLabel}>Отрицателен афект (NA)</p>
            <p className={styles.scoreValue}>{scores.na}</p>
          </div>
        </div>
      </article>

      <button type="button" onClick={onReset} className={styles.primaryButton}>
        Направи теста отново
      </button>
    </section>
  );
}

