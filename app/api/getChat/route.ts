import {
  TogetherAIStream,
  TogetherAIStreamPayload,
} from "@/utils/TogetherAIStream";

export const maxDuration = 60;

export async function POST(request: Request) {
  let { messages } = await request.json();

  try {
    console.log("[getChat] Fetching answer stream from LlamaEdge API");
    const payload: TogetherAIStreamPayload = {
      model: process.env.LLAMAEDGE_MODEL_NAME,
      messages,
      stream: true
    };
    const stream = await TogetherAIStream(payload);

    return new Response(stream, {
      headers: new Headers({
        "Cache-Control": "no-cache",
      }),
    });
  } catch (e) {
    return new Response("Error. Answer stream failed.", { status: 202 });
  }
}
