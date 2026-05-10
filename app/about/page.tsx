import ContentMosaic from "../components/ContentMosaic";
import { getAboutPage } from "@/lib/site-content";

export default function AboutPage() {
  const about = getAboutPage();

  return (
    <div className="py-6 md:py-8">
      {about ? <ContentMosaic items={[about]} reverseOrder /> : null}
    </div>
  );
}

