import { Ollama } from "ollama";

export default async function ollamallm(prompt:string){

    const llm=new Ollama();

    const response=await llm.chat({
        model:"devstral-small-2:latest",
        messages:[{role:"user",content:prompt}],
        think:"high",
    })

    return response;

}