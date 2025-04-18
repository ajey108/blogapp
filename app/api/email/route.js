import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import EmailModel from "@/lib/models/emailModel";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();
export async function POST(request) {
  const formData = await request.formData();
  // get the email from the formData for admin pannel
  const emailData = {
    email: `${formData.get("email")}`,
  };

  //save the email to the database

  await EmailModel.create(emailData);

  return NextResponse.json({
    success: true,
    message: "Email saved successfully",
  });
}

//get all emails for admin pannel

export async function GET(request) {
  const emails = await EmailModel.find({}); //{} get all emails
  return NextResponse.json({
    success: true,
    emails: emails,
  });
}

// delete email for admin pannel

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, message: "email deleted" });
}
