import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactForm {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

export async function POST(req: Request) {
    const client = new MongoClient(process.env.MONGO_URL as string);

    try {
        const form: ContactForm = await req.json();

        await client.connect();

        const db = client.db("BJYMStartup");
        const messages = db.collection<ContactForm>("Messages");

        await messages.insertOne({
            ...form,
        });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        });

        // Email to user
        await transporter.sendMail({
            from: `"BJYM Startup Cell" <${process.env.USER}>`,
            to: form.email,
            subject: "We received your message",
            text: `Hello ${form.firstName},

Thank you for contacting BJYM Startup Cell.

We received your message regarding:
"${form.subject}"

Our team will get back to you soon.

Regards,
BJYM Startup Cell`,
        });

        // Email to admin
        await transporter.sendMail({
            from: `"BJYM Startup Cell" <${process.env.USER}>`,
            to: "pibi.devloperhouse@gmail.com",
            subject: "New Contact Form Message",
            text: `New message received

Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Subject: ${form.subject}

Message:
${form.message}`,
        });

        return NextResponse.json(
            { message: "Success" },
            { status: 200 }
        );

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Error" },
            { status: 500 }
        );
    } finally {
        await client.close();
    }
}
