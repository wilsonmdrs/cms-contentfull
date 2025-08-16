import { draftMode } from "next/headers";

export async function GET(request: Request) {
  const draft = await draftMode();
  if (!draft.isEnabled) {
    return new Response("Draft mode is already disabled", { status: 400 });
  } else {
    draft.disable();
  }
  return new Response("Draft mode is disabled");
}
