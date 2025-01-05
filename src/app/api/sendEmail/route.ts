import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { TemplateEmail } from '@/components/TemplateEmail';

const resend = new Resend(process.env.RESEND_APIKEY);

export async function POST(req: NextRequest){

    try {

        const dataUser = await req.json();
        const mailAsha = 'info@ashaayurveda.com.ar';
        // const mailAsha = 'federicocampi95@gmail.com';
        const email = dataUser.email;
        const message = dataUser.message;

        const data = await resend.emails.send({
            from: `Asha ayurveda <noreply@ashaayurveda.com.ar>`,
            to: [mailAsha],
            subject: 'Asha ayurveda',
            react: TemplateEmail({ 
                email: email,
                message: message,
            }),
            text: 'Hello'
        });
        console.log("Respuesta de Resend:", data);
        if (!data || data.error) {
            throw new Error(data.error?.message || "Error desconocido al enviar el correo");
        }
        
        return NextResponse.json(
            {message: "Email sent"},
            {status: 200}
        )
    } catch (error) {
        return NextResponse.json(
            {message: "Error"},
            {status: 400}
        )
    }  
}