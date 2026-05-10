export type PanasLevel = "low" | "mid" | "high";

const positiveItems = [1, 3, 5, 9, 10, 12, 14, 16, 17, 19];
const negativeItems = [2, 4, 6, 7, 8, 11, 13, 15, 18, 20];

export function calculateScores(answers: number[]) {
  const sum = (items: number[]) => items.reduce((acc, idx) => acc + answers[idx - 1], 0);

  const pa = sum(positiveItems);
  const na = sum(negativeItems);

  const toLevel = (score: number, lowMax: number, midMax: number): PanasLevel => {
    if (score <= lowMax) return "low";
    if (score <= midMax) return "mid";
    return "high";
  };

  return {
    pa,
    na,
    paLevel: toLevel(pa, 25, 35),
    naLevel: toLevel(na, 20, 30),
  };
}

export function profileFor(paLevel: PanasLevel, naLevel: PanasLevel) {
  const pa = paLevel === "mid" ? "low" : paLevel;
  const na = naLevel === "mid" ? "low" : naLevel;
  const key = `${pa}-${na}`;

  const profiles = {
    "high-high": {
      emoji: "🧪",
      name: "Луд учен",
      description:
        "Изразени силни позитивни и негативни състояния. Имате висока енергия, силна мотивация и креативност, но е полезно да въвеждате ритъм и паузи, за да избегнете емоционални крайности.",
    },
    "low-low": {
      emoji: "⚖️",
      name: "Съдия",
      description:
        "По-устойчив и премерен афективен профил. Решавате рационално и спокойно, но понякога може да отлагате рискове и нови възможности, които биха ви донесли растеж.",
    },
    "low-high": {
      emoji: "🎭",
      name: "Поет",
      description:
        "Чувствителен и дълбок емоционален профил с висока емпатия и креативност. Полезно е да добавяте повече зареждащи активности и социални опори в ежедневието.",
    },
    "high-low": {
      emoji: "🎉",
      name: "Мажоретка",
      description:
        "Преобладава положителен афект и оптимизъм. Силна страна е вдъхновяването на другите, а балансът идва чрез реалистичен поглед към трудните сигнали.",
    },
  } as const;

  return profiles[key as keyof typeof profiles];
}

