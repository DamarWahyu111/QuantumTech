import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, position, service, rating, message } = body

    // Validasi data
    if (!name || !email || !service || !rating || !message) {
      return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 })
    }

    if (message.length < 50) {
      return NextResponse.json({ error: "Testimonial minimal 50 karakter" }, { status: 400 })
    }

    // Format email body
    const emailBody = `
TESTIMONIAL BARU - QUANTUMTECH
${"=".repeat(50)}

INFORMASI CLIENT
${"-".repeat(50)}
Nama Lengkap    : ${name}
Email           : ${email}
Perusahaan      : ${company || "-"}
Jabatan         : ${position || "-"}
Layanan         : ${service}
Rating          : ${"⭐".repeat(rating)} (${rating}/5)

TESTIMONIAL
${"-".repeat(50)}
${message}

${"=".repeat(50)}
Dikirim pada: ${new Date().toLocaleString("id-ID", {
      dateStyle: "full",
      timeStyle: "short",
    })}

Catatan: Silakan review testimonial ini sebelum dipublikasikan di website.
    `.trim()

    // Kirim email menggunakan Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "QuantumTech Testimonial <onboarding@resend.dev>",
        to: ["damarwah13@gmail.com"],
        subject: `Testimonial Baru dari ${name} - QuantumTech`,
        text: emailBody,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1a1f2e 0%, #26a8a8 50%, #86bc25 100%); padding: 30px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Testimonial Baru - QuantumTech</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
              <h2 style="color: #1f2937; margin-top: 0;">Informasi Client</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Nama Lengkap:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Email:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${email}</td>
                </tr>
                ${
                  company
                    ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Perusahaan:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${company}</td>
                </tr>
                `
                    : ""
                }
                ${
                  position
                    ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Jabatan:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${position}</td>
                </tr>
                `
                    : ""
                }
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Layanan:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Rating:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${"⭐".repeat(rating)} (${rating}/5)</td>
                </tr>
              </table>
              
              <h2 style="color: #1f2937; margin-top: 30px; margin-bottom: 15px;">Testimonial</h2>
              <div style="background: white; padding: 20px; border-left: 4px solid #26a8a8; border-radius: 5px;">
                <p style="color: #1f2937; line-height: 1.6; margin: 0;">${message}</p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
                <p style="margin: 0;">Dikirim pada: ${new Date().toLocaleString("id-ID", {
                  dateStyle: "full",
                  timeStyle: "short",
                })}</p>
                <p style="margin: 10px 0 0 0; font-style: italic;">Catatan: Silakan review testimonial ini sebelum dipublikasikan di website.</p>
              </div>
            </div>
          </div>
        `,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("[v0] Resend API Error:", data)
      return NextResponse.json({ error: "Gagal mengirim email", details: data }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Testimonial berhasil dikirim!",
      emailId: data.id,
    })
  } catch (error) {
    console.error("[v0] Error sending testimonial:", error)
    return NextResponse.json({ error: "Terjadi kesalahan saat mengirim testimonial" }, { status: 500 })
  }
}
