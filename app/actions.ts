"use server";

import { queryBuilder } from "@/lib/planetscale";
import { revalidatePath } from "next/cache";

export async function saveDDDEntry(
  formData: FormData,
  user: {
    email: string;
    name: string;
    image: string;
  }
) {
  const email = user?.email as string;
  const created_by = user?.name as string;
  const image = (user?.image as string) || "";
  const entry = formData.get("entry")?.toString() || "";
  const body = entry.slice(0, 500);
  const updated_at = new Date().toISOString().slice(0, 19).replace("T", " ");

  await queryBuilder
    .insertInto("dddEntries")
    .values({ email, body, created_by, image, updated_at })
    .execute();

  revalidatePath("/");

  // send message to discord channel through webhook
  const webhook = process.env.DISCORD_WEBHOOK as string;

  await fetch(webhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: `${created_by} (${email})`,
      embeds: [
        {
          description: body,
          color: 0x00ff00,
        },
      ],
    }),
  });
}
