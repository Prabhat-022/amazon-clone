import { connectDB } from "@/backend/dbConfig/dbConfig";
import User from "@/backend/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqbody = await request.json();
    const { username, email, password } = reqbody;

    console.log("reqBody", reqbody);

    //checking user that he is registerd or not
    const user = await User.findOne({ email });

    //406- Not acceptable
    if (user) {
      return NextResponse.json(
        {
          error: "user already exists",
        },
        {
          status: 406,
        }
      );
    }

    // converting the password in hash from
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //if user not fond then create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log('savedUser', savedUser);


    return NextResponse.json({
      message: "User registered successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    console.log("singup: ", error);

    // 500 - this error
    return NextResponse.json(
      {
        error: "Server error",
      },
      {
        status: 500,
      }
    );
  }
}
