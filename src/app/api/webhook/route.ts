// import { prisma } from "../../../lib/prismaClient";
import { installationCreated, installationDeleted } from "./handlers/installation";
import { addedRepositories, removeRepositories } from "./handlers/repositories";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const event = req.headers.get("x-github-event");

    console.log("Event:", event);
    console.log("Payload:", payload);

    if (!payload) {
      console.log("No payload Found" )
      return new Response(JSON.stringify({ message: "No payload Found" }), {
        status: 400,
      });
    }
    switch(event){
        case "installation":
          if(payload.action === "created"){
            try{
              const installation=await installationCreated(payload);
              return new Response(JSON.stringify({message:"Added to database", data:installation}))
            }
            catch(error){
              return new Response(JSON.stringify({message:"not added to database",error:error}))
            }
          }
          if(payload.action==="deleted"){
            try{
              const installation=await installationDeleted(payload);
              return new Response(JSON.stringify({message:"Installation deleted for particular user",data:installation}))
            }
            catch(error){
              return new Response(JSON.stringify({message:"User not deleted",error:error}))
            }
          }
        case "installation_repositories":
          if(payload.action==="added"){
            try{
              if(!payload.repositories_added){
                return new Response(JSON.stringify({message:"No repositories found to added"}))
              }
              const addedRepo=await addedRepositories({repos:payload.repositories_added,installation:payload.installation});
              return new Response(JSON.stringify({message:"new repo added",repos:addedRepo}))

            }
            catch(error){
              return new Response(JSON.stringify({message:"Repo not added",error:error}))
            }
          }
          if(payload.action==="removed"){
            try{
              if(!payload.repositories_removed){
                return new Response(JSON.stringify({message:"No repositories found to remove"}))
              }
              const deletedRepo=await removeRepositories(payload.repositories_removed);
              return new Response(JSON.stringify({message:"no repo removed",repos:deletedRepo}))

            }
            catch(error){
              return new Response(JSON.stringify({message:"Repo not deleted",error:error}))
            }
          }
      }
    console.log("Unhandled event")
    return new Response(JSON.stringify({ message: "Unhandled event, as of for now this event is not being handled by backend" }), {
      status: 200,
    });
  } catch (err) {
    console.error("Webhook error:", err);
    return new Response("Error", { status: 500 });
  }
}
