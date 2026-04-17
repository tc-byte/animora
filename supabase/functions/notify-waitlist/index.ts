// SETUP REQUIRED:
//  1. Sign up free at resend.com
//  2. Get your API key from resend.com/api-keys
//  3. Add it as a secret named RESEND_API_KEY in your project
//  4. Verify your sending domain OR use Resend's sandbox for testing

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { name, email, created_at } = await req.json()

    const displayName = name || "Anonymous"
    const signupTime = new Date(created_at).toLocaleString('en-KE', {
      timeZone: 'Africa/Nairobi',
      dateStyle: 'full',
      timeStyle: 'short'
    })

    const resendKey = Deno.env.get("RESEND_API_KEY")
    if (!resendKey) {
      return new Response(JSON.stringify({ error: "RESEND_API_KEY not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      })
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendKey}`
      },
      body: JSON.stringify({
        from: "Animora Waitlist <onboarding@resend.dev>",
        to: ["create.formaai@gmail.com"],
        subject: `🎉 New waitlist signup: ${displayName}`,
        html: `
          <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 32px; background: #ffffff; border-radius: 12px; border: 1px solid #E5E7EB;">
            <div style="margin-bottom:24px;">
              <svg width="32" height="32" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle; margin-right:12px;">
                <polygon points="100,22 36,94 100,106" fill="#C4B5FD"/>
                <polygon points="100,22 164,94 100,106" fill="#7C3AED"/>
                <polygon points="36,94 100,178 100,106" fill="#5B21B6"/>
                <polygon points="164,94 100,178 100,106" fill="#2E1065"/>
              </svg>
              <span style="font-size:20px; font-weight:500; color:#111827; vertical-align:middle;">Animora</span>
            </div>
            <h2 style="color:#7C3AED; font-size:22px; margin:0 0 8px 0;">New Waitlist Signup!</h2>
            <p style="color:#6B7280; margin:0 0 24px 0;">Someone just joined the Animora waitlist.</p>
            <table style="width:100%; border-collapse:collapse;">
              <tr>
                <td style="padding:12px 16px; background:#F8F7FF; border-radius:8px 8px 0 0; border:1px solid #EDE9FE;">
                  <span style="font-size:12px; color:#7C3AED; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Name</span><br/>
                  <span style="font-size:16px; color:#111827; font-weight:500;">${displayName}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px; background:#ffffff; border:1px solid #EDE9FE; border-top:none;">
                  <span style="font-size:12px; color:#7C3AED; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Email</span><br/>
                  <span style="font-size:16px; color:#111827; font-weight:500;">${email}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px; background:#F8F7FF; border-radius:0 0 8px 8px; border:1px solid #EDE9FE; border-top:none;">
                  <span style="font-size:12px; color:#7C3AED; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Signed Up</span><br/>
                  <span style="font-size:16px; color:#111827; font-weight:500;">${signupTime} (Nairobi)</span>
                </td>
              </tr>
            </table>
            <p style="margin-top:24px; font-size:12px; color:#9CA3AF; text-align:center;">
              Animora · Built in public from Nairobi, Kenya 🇰🇪
            </p>
          </div>
        `
      })
    })

    const data = await res.json()
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    })
  }
})
