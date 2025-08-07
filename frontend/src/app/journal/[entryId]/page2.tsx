// import EntryPageClient from "@/components/custom/Dashboard/Journal/Entries/EntryPageClient";
// import { getEntry } from "@/lib/actions/serverActions";
// import React from "react";

// const EntryPage = async ({
//   params,
// }: {
//   params: Promise<{ entryId: string }>;
// }) => {
//   const isNewEntry = (params).entryId === "new";
//   let entry = null;
//   if (isNewEntry) {
//     entry = {
//       entryId: "",
//       title: "",
//       location: "",
//       entryContent: "",
//       date: new Date().toISOString().split("T")[0],
//       theme: "Personal",
//       photos: [],
//       visibility: "private",
//     };
//   } else {
//     entry = await getEntry((await params).entryId);
//     if (!entry) {
//       return <div>No Entry Found...</div>;
//     }
//   }

//   return <EntryPageClient entry={entry!} isNewEntry={isNewEntry} />;
// };

// export default EntryPage;
