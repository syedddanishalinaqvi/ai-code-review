// import {Ollama} from "ollama";

import connectdb  from "../vector/lancedb.ts";



// async function test(){

// const ollama = new Ollama();

// const response = await ollama.embeddings({
//   model: "nomic-embed-text:latest",
//   prompt:"hello danish here just checkin gif it is working?"
// });
// console.log(response)
// }

// test();

const db=await connectdb('/path/to/database');
const tables=await db.tableNames()
console.log(tables)
