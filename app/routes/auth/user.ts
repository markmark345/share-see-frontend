import { json, LoaderFunction } from "@remix-run/node"; // Import LoaderFunction
import { getSession } from "~/server/session.server";

const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId") || null;

  return json({ userId });
};

export { loader };
