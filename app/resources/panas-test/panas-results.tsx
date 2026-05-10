import { calculateScores, getProfile } from './panas-profiles';

type PanasResultsProps = {
  answers: number[];
  onRetake: () => void;
};

const levelLabel: Record<string, string> = {
  low: 'Нисък',
  mid: 'Среден',
  high: 'Висок',
};

export default function PanasResults({ answers, onRetake }: PanasResultsProps) {
  const { pa, na, paLevel, naLevel } = calculateScores(answers);
  const profile = getProfile(paLevel, naLevel);

  return (
    <div className="mx-auto flex max-w-180 flex-col items-center gap-8 pt-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="text-6xl leading-none">{profile.emoji}</span>
        <h2 className="text-3xl sm:text-5xl">{profile.name}</h2>
      </div>

      <div className="grid w-full gap-4 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col gap-2 rounded-xl bg-primary/10 p-4">
          <span className="text-sm font-bold uppercase text-on-surface">
            Положителен афект (PA)
          </span>
          <span className="text-5xl font-extrabold text-on-background">{pa}</span>
          <span className="text-sm font-bold text-primary">
            {levelLabel[paLevel]}
          </span>
          <div className="h-2 w-full overflow-hidden rounded bg-primary/20">
            <div
              className="h-full rounded bg-primary transition-[width] duration-700"
              style={{ width: `${((pa - 10) / 40) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-on-surface">
            <span>10</span>
            <span>50</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl bg-primary/10 p-4">
          <span className="text-sm font-bold uppercase text-on-surface">
            Отрицателен афект (NA)
          </span>
          <span className="text-5xl font-extrabold text-on-background">{na}</span>
          <span className="text-sm font-bold text-primary">
            {levelLabel[naLevel]}
          </span>
          <div className="h-2 w-full overflow-hidden rounded bg-primary/20">
            <div
              className="h-full rounded bg-tertiary transition-[width] duration-700"
              style={{ width: `${((na - 10) / 40) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-on-surface">
            <span>10</span>
            <span>50</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {profile.description.split('\n\n').map((paragraph, i) => (
          <p key={i} className="pb-0 text-on-surface">
            {paragraph}
          </p>
        ))}
      </div>

      <button
        type="button"
        className="rounded-full border border-primary bg-transparent px-5 py-2 font-extrabold text-primary transition-colors hover:bg-primary hover:text-white"
        onClick={onRetake}
      >
        Направи теста отново
      </button>
    </div>
  );
}
