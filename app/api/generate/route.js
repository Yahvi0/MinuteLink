import clientPromise from "../../../lib/mongodb";

export async function POST(request) {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("MinuteLink");
    const collections = db.collection("url");

    //if short url exist
    const doc = await collections.findOne({shorturl: body.shorturl})
    if (doc){
        return Response.json({
        success: false,
        error: true,
        message: "Short URL already exists!!"
    });
    }

    const result = await collections.insertOne({
        url: body.url,
        shorturl: body.shorturl
    });

    return Response.json({
        success: true,
        error: false,
        message: "URL Generated Successfully"
    });
}