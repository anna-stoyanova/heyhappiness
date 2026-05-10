import ContentMosaic from "../components/ContentMosaic";
import SectionHeading from "../components/SectionHeading";
import { getServicesByCategory } from "@/lib/site-content";

const categoryOptions = {
  "art-therapy": "АРТ ТЕРАПИЯ",
  "child-trauma-art-therapy": "ТЕРАПИЯ НА ДЕТСКИ ТРАВМИ",
  "family-business-constellations": "СЕМЕЙНИ И БИЗНЕС КОНСТЕЛАЦИИ",
  "happiness-architecture": "АРХИТЕКТУРА НА ЩАСТИЕТО",
} as const;

export default function ServicesPage() {
  const hero = getServicesByCategory("individual-sessions");
  const sections = [
    "art-therapy",
    "child-trauma-art-therapy",
    "family-business-constellations",
    "happiness-architecture",
  ] as const;

  return (
    <div className="space-y-16 py-6 md:py-8">
      <section className="mx-auto max-w-7xl px-4 md:px-8">
        {hero.length ? <ContentMosaic items={hero} reverseOrder /> : null}
      </section>

      {sections.map((category) => {
        const items = getServicesByCategory(category);
        const reverseOrder = category === "family-business-constellations";

        return (
          <div key={category} className="space-y-10">
            <section className="mx-auto max-w-7xl px-4 md:px-8">
              <SectionHeading title={categoryOptions[category]} />
            </section>
            <ContentMosaic items={items} reverseOrder={reverseOrder} />
          </div>
        );
      })}
    </div>
  );
}

