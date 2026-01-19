import { callLancedb } from "@/lib/embeddings/storeembeddings";
import ollama from "@/lib/ollama/ollamaEmbedd";

export async function GET() {
  const table = await callLancedb();
  const query = "ssl error handling in node"; 
  const emb = await ollama(query);


  const results = await table
    .search(emb.embedding)
    .limit(5)
    .toArray();

  console.log("Top matches:");
  for (const r of results) {
    console.log({
      score: r._distance, 
      filePath: r.filePath,
      chunkIndex: r.chunkIndex,
      preview: r.content?.slice(0, 120),
    });
  }

  return new Response(JSON.stringify({"results":results.length}))
}
