import { NextResponse } from "next/server";
import Email from "vercel-email";
export const runtime = "edge";

export const POST = async (request: Request) => {
  try {
    const res = await request.json();

    if (!res.name || !res.email || !res.message) {
      throw new Error("Missing fields");
    }

    await Email.send({
      to: {
        name: "Balázs Fotóz",
        email: process.env.EMAIL_TO ?? "balazs@szalay.me",
      },
      from: {
        email: process.env.EMAIL_FROM ?? "balazsfotoz@szalay.me",
        name: "Balázs Fotóz",
      },
      replyTo: {
        name: res.name,
        email: res.email,
      },
      subject: `[balazsfotoz.com] ${res.subject ?? "Új üzenet"}`,
      text: res.message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
};
