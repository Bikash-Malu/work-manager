import { NextResponse } from "next/server"

export const getResponse=(msg,status,successText)=>{
return NextResponse.json({
    message:msg,
    success:successText
},{
    status:status
})
}