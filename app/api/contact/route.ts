import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, projectType, service, timeline, company, honeypot } = body;

    // Honeypot spam check
    if (honeypot) {
      return NextResponse.json({ error: "Spam detected." }, { status: 400 });
    }

    // Basic server-side validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json({ error: "Please write a message of at least 10 characters." }, { status: 400 });
    }

    // Isolated Email provider hook (fallback for dev)
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      // Safe development fallback: Log structure to console (server-side only) and return success
      console.log("----------------------------------------");
      console.log("DEVELOPMENT CONTACT INQUIRY RECEIVED:");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Company: ${company || "N/A"}`);
      console.log(`Project Type: ${projectType}`);
      console.log(`Service Needed: ${service}`);
      console.log(`Timeline: ${timeline}`);
      console.log(`Message: ${message}`);
      console.log("----------------------------------------");
      
      return NextResponse.json({
        success: true,
        message: "Development inquiry simulation succeeded (API key not configured)."
      });
    }

    // Resend configuration placeholder for production
    // const resend = new Resend(resendApiKey);
    // await resend.emails.send({ ... });

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received."
    });

  } catch (error) {
    console.error("API Contact Route Error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
