
import { Resend } from 'resend';

export async function POST(req) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { name, email, subject, message } = body;

    try {
        let adminEmailSuccess = false;
        let userEmailSuccess = false;

        // 1. Email to Owner
        let adminEmailError = null;
        try {
            const data = await resend.emails.send({
                from: 'Guelichweb Form <noreply@guelichweb.online>', // Eviter que de -> à soit identique pour les filtres anti-spam
                to: process.env.CONTACT_EMAIL || 'christ@guelichweb.online',
                reply_to: email, // Permet de répondre directement au client depuis votre boîte mail
                subject: `Nouvelle demande : ${subject || 'Contact'}`,
                html: `
            <h2>Nouveau message de ${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Sujet:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
            });

            if (data.error) {
                console.error('Resend Error (Admin):', data.error);
                adminEmailSuccess = false;
                adminEmailError = data.error.message;
            } else {
                console.log('Admin email sent:', data);
                adminEmailSuccess = true;
            }
        } catch (adminErr) {
            console.error('Failed to send admin email:', adminErr);
            adminEmailError = adminErr.message;
        }

        // 2. Confirmation Email to User (Might fail on free tier if not verified)
        try {
            const data = await resend.emails.send({
                from: 'Guelichweb <christ@guelichweb.online>',
                to: email,
                subject: "Nous avons bien reçu votre demande",
                html: `
            <p>Bonjour ${name},</p>
            <p>Merci pour votre message. Nous l'avons bien reçu.</p>
            <br>
            <p>— L'équipe Guelichweb</p>
          `,
            });

            if (data.error) {
                console.error('Resend Error (User):', data.error);
                userEmailSuccess = false;
            } else {
                console.log('User email sent:', data);
                userEmailSuccess = true;
            }
        } catch (userErr) {
            console.error('Failed to send user confirmation email (likely free tier limit):', userErr);
        }

        // Return error if admin email failed to send (we didn't receive the message)
        if (!adminEmailSuccess) {
            return Response.json({
                success: false,
                error: adminEmailError || "Impossible d'envoyer le message au propriétaire du site."
            }, { status: 500 });
        }

        return Response.json({ success: true, admin: adminEmailSuccess, user: userEmailSuccess });
    } catch (error) {
        console.error('Resend Fatal Error:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
