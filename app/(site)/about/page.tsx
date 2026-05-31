import ContentMosaic from "../../components/ContentMosaic";
import PageLayout from "../../components/PageLayout";
import { getAboutPage } from "@/lib/site-content";

export default function AboutPage() {
  const about = getAboutPage();

  return (
    <PageLayout>
      {about ? <ContentMosaic items={[about]} reverseOrder /> : null}
    </PageLayout>
  );
}

