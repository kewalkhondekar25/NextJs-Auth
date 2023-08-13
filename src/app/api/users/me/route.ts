import { getDataFromToken } from "@/helpers/getDaraFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
connect();
export const GET = async (request:NextRequest)=>{
    try {
        const details = await getDataFromToken(request);
        const userDetails = await User.findOne({username:details}).select('-password');
        return NextResponse.json({
            message:'User Found',
            data: userDetails
        })
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:400});
    }
}
User
