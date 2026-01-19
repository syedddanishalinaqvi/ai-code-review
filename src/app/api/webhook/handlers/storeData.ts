import { callLancedb } from "@/lib/embeddings/storeembeddings";
import ollama from "@/lib/ollama/ollamaEmbedd";

interface repoData {
  path: string;
  content: string;
  language: string | undefined;
  commitSha:string
}

function chunkText(text: string, chunkSize = 2000, overlap = 200) {
  const chunks: string[] = [];
  for (let i = 0; i < text.length; i += chunkSize - overlap) {
    chunks.push(text.slice(i, i + chunkSize));
  }
  return chunks;
}

export default async function storeData(
  contents: repoData[],
  owner: string,
  installationId: number,
  repo: string,
) {
  const embeddingTable=await callLancedb();
  const rows = [];
  for (const content of contents) {
    const chunks = chunkText(content.content);
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      const embedding = await ollama(chunk);
      rows.push({
        id: `${installationId}:${owner}/${repo}:${content.path}:${content.commitSha}:${i}`,
        vector: embedding.embedding,
        owner: owner,
        repo: repo,
        filePath: content.path,
        content: chunk,
        chunkIndex: i,
        commitSha: content.commitSha,
      });
    }
  }
  console.log("rows lenght", rows.length)
  const data=await embeddingTable.add(rows)
  console.log(data)
  return  data;
}
