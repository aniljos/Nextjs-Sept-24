import { NextResponse } from "next/server";
import { suppliers } from "./data";



export function GET(request: Request) {

    try {
        console.log("suppliers GET request", request.url);
        const url = new URL(request.url);
        const name = url.searchParams.get("name");

        // access the database, any server-side resouce
        if (name) {
            const filteredResults
                = suppliers.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
            return NextResponse.json(filteredResults, { status: 200 });

        }

       
        return NextResponse.json(suppliers, { status: 200 });
    }
    catch {
        return NextResponse.error();
    }
}