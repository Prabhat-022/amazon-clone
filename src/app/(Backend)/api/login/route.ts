import {connectDB} from "@/backend/dbConfig/dbConfig";
import User from '@/backend/models/userModel';
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'


connectDB()

export async function POST(request: Request) {

    try{ 
        const reqbody = await request.json()
        const {email, password} = reqbody;

        //check user have or not
        const user = await User.findOne({email})

        // user doesn't exist
        if(!user){
            return NextResponse.json(
                {
                    error:"user doesn't exist"
                },
                {
                    status:401
                }
            )
        }
        //401 -unauthoried 

        //checking the password is right or worng 
        const validatePassword = await  bcrypt.compare(password, user.password)

        if(!validatePassword){
            return NextResponse.json(
                {
                    error:"Invalid password"
                },
                {
                    status:401
                }
            )
        }

        //if password is right then stoke the token in browser

        const tokenData ={
            id:user._id,
            username:user.username,
            email:user.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!,{
            expiresIn:'1d'
        });

        const response = NextResponse.json(
            {
                message:"User login successfully"
            },
            {
                status:201
            }
        )
        response.cookies.set("token", token,{
            httpOnly:true,
        })

        return response
        //
    }catch(error){
        console.log('Login error: ', error)
        return NextResponse.json(
          { error: "Something went wrong" },
          { status: 500 }
        );
      }
    }

