import * as lancedb from '@lancedb/lancedb'

export default async function connectdb(uri:string){

    const db=await lancedb.connect(uri);
    return db;
}

