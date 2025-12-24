import { InferenceClient } from "@huggingface/inference";

const apiKey=process.env.HF_TOKEN
const client = new InferenceClient(apiKey);

export default async function AIResponse(patchFile: string) {
  const chatCompletion = await client.chatCompletion({
  model: "openai/gpt-oss-120b:fastest",
  messages: [
    {
      role: "user",
      content: `Give me some suggestions for this code: ${patchFile}`,
    },
  ],
});

console.log(chatCompletion.choices[0].message.content);
}
