import "server-only";
import path from "node:path";
import {connectdb} from "../lancedb/lancedb";
import { embeddingSchema } from "../lancedb/schema";

export async function callLancedb() {
  const dbPath = path.join(process.cwd(), "data", "sample-lancedb");
  const db = await connectdb(dbPath);
  if (!db) {
    return "Connection to db failed";
  }
  const tables = await db.tableNames();
  const table=tables.includes("embeddings")?await db.openTable("embeddings"):await db.createTable("embeddings", [], { schema: embeddingSchema });
  return table
}
