// import { prisma } from "../../../lib/prismaClient";
import { installationCreated, installationDeleted } from "./handlers/installation";

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
        case "pull_request":
          try{

          }
          catch{

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
