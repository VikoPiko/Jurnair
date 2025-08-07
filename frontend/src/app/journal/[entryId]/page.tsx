import EntryPageClient from "@/components/custom/Dashboard/Journal/Entries/EntryPageClient";
import { getEntry } from "@/lib/actions/serverActions";

type PageProps = {
  params: {
    entryId: string;
  };
};

const EntryPage = async ({
  params,
}: {
  params: Promise<{ entryId: string }>;
}) => {
  const isNewEntry = (await params).entryId === "new";

  let entry = null;

  if (isNewEntry) {
    entry = {
      title: "",
      location: "",
      description: "",
      date: new Date().toISOString().split("T")[0],
      theme: "Personal",
      photos: [],
      visibility: "private",
    };
  } else {
    entry = await getEntry((await params).entryId);
    if (!entry) {
      return <div>No Entry Found...</div>;
    }
  }

  return <EntryPageClient entry={entry} isNewEntry={isNewEntry} />;
};

export default EntryPage;
