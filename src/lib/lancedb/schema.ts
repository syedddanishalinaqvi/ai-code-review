import "server-only";
import { Schema, Field, Utf8, Float32, FixedSizeList, Int32 } from "apache-arrow";

export const embeddingSchema = new Schema([
  new Field(
    "id",
    new Utf8(),
    false
  ),

  new Field(
    "vector",
    new FixedSizeList(
      768,
      new Field("item", new Float32())
    ),
    false
  ),

  new Field(
    "owner",
    new Utf8(),
    false
  ),

  new Field(
    "repo",
    new Utf8(),
    false
  ),

  new Field(
    "filePath",
    new Utf8(),
    false
  ),

  new Field(
    "chunkIndex",
    new Int32(),
    false
  ),

  new Field(
    "content",
    new Utf8(),
    false
  ),

  new Field(
    "commitSha",
    new Utf8(),
    false
  ),
]);