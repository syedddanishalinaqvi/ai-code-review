import {Ollama} from "ollama";




export default async function test(prompt:string){

const ollama = new Ollama();

const response = await ollama.embeddings({
  model: "nomic-embed-text:latest",
  prompt,
});
console.log(response)
}