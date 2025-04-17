import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import EmailModel from "@/lib/models/emailModel";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();
export async function POST(request) {
  const formData = await request.formData();
  // get the email from the formData
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
