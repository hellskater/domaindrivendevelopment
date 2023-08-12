import { queryBuilder } from "@/lib/planetscale";
import ConnectGithub from "./components/connect-github";
import Manifesto from "./components/manifesto";
import {} from "next-auth/next";
import NextAuthProvider from "./components/nextauth-provider";
import AuthSection from "./components/auth-section";
import Entry from "./components/entry";

async function getEntries() {
  const data = await queryBuilder
    .selectFrom("dddEntries")
    .select(["id", "image", "body", "created_by", "updated_at"])
    .orderBy("updated_at", "desc")
    .limit(500)
    .execute();

  return data;
}

export default async function Home() {
  let entries;

  try {
    const entriesRes = await getEntries();

    if (entriesRes && entriesRes[0]) {
      entries = entriesRes;
    } else {
      console.error(entriesRes);
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <h1 className="font-bold text-3xl">
        Domains: The first step to...well something
      </h1>
      <Manifesto />

      <section className="mt-10">
        <h2 className="font-bold text-2xl">The parking lot</h2>
        <NextAuthProvider>
          <AuthSection />
        </NextAuthProvider>

        <section className="mt-10">
          <h3 className="font-bold text-xl">Entries</h3>
          {entries?.map((entry) => (
            <Entry key={entry.id} {...entry} />
          ))}
        </section>
      </section>
    </section>
  );
}
