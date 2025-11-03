

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const event=req.headers.get("x-github-event")
    console.log(event)
    console.log(payload)

    return new Response("OK");
  } catch (err) {
    console.error("Error parsing webhook:", err);
    return new Response("Error");
  }
}
