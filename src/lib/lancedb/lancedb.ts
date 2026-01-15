import "server-only";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

export async function connectdb(uri:string){
    try{
    const lancedb = require("@lancedb/lancedb") as typeof import("@lancedb/lancedb");
    const db=await lancedb.connect(uri);
    return db;
    }
    catch(err){
        console.log("Error connecting to LanceDB",err)
    }
}

