import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, propertyInterest } = body;

    // Validation des champs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Email de base
    const emailContent = `
Nouveau message de contact depuis Ener Immo 92

------------------------------------------
INFORMATIONS DU CONTACT
------------------------------------------

Nom : ${name}
Email : ${email}
Téléphone : ${phone || "Non renseigné"}
${propertyInterest ? `Bien concerné : ${propertyInterest}` : ""}

------------------------------------------
MESSAGE
------------------------------------------

${message}

------------------------------------------

Ce message a été envoyé depuis le formulaire de contact du site https://ener-immo92.fr
    `.trim();

    // Envoi de l'email via Resend
    const data = await resend.emails.send({
      from: "Contact Ener Immo 92 <onboarding@resend.dev>", // Adresse d'envoi par défaut Resend
      to: [process.env.CONTACT_EMAIL || "contact@exp-mont-valerien.fr"], // Email de destination
      replyTo: email, // L'email du client pour pouvoir répondre directement
      subject: `Nouveau contact : ${name} - ${
        propertyInterest || "Demande générale"
      }`,
      text: emailContent,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Votre message a été envoyé avec succès",
        messageId: data.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);

    return NextResponse.json(
      {
        error: "Une erreur est survenue lors de l'envoi du message",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

