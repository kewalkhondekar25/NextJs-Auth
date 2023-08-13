import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

connect();

export const POST = async (request:NextRequest)=>{
    try {
        const reqBody = await request.json();
        const {username, email, password} = reqBody;

        console.log(reqBody);

        //check if user already exist
        const user = await User.findOne({email});
        //console.log(user);
        if(user){
            return NextResponse.json({msg:'User already exists'},{status:400});
        }
        
        //hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPwd = await bcryptjs.hash(password, salt);

        //creating new user
        const newUser = new User({
            username,
            email,
            password:hashedPwd
        });

        const savedUser = await newUser.save();

        return NextResponse.json({
            msg:'User created successfully',
            success:true,
            savedUser    
        })

    } catch (error:any) {
        return NextResponse.json({msg:error},{status:500});
    }
}
