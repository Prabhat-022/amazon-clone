import { connectDB } from "@/backend/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function GET() {

    try {
          const response =   NextResponse.json({
                message:"Logout successful",
                success:true
             })

             response.cookies.set("token", "",{
                httpOnly:true,
                expires:new Date(0)
             })

             return response;

    } catch (error) {
        console.log("logout error: ", error)
        return NextResponse.json(
            {error:"Something went worng"},
            {status:500}
        )
    }
    
}