import { NextResponse } from "next/server";

export async function GET(request: Request) {
    /* 
message:hello api
request:url
*/
    return NextResponse.json({
        count: 100,
        url: request.url,
        method: request.method,
    });
}
