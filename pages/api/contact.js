const nodemailer = require("nodemailer");
let emailID = 'jaydipbhayani105@gmail.com'
let password = 'dskbabmpacawkyuz'
export default (req, res) => {

    const { name, email, phone, message } = req.body;
    console.log(name, email, phone, message);
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: emailID,
            pass: password,
        },
    });

    const mailOption = {
        from: emailID,
        to: emailID,
        subject: `New mail from ${email}`,
        text: `
   Name: ${name}
   Email: ${email}
   Number: ${phone}
   message: ${message}
    `,
    };

    transporter.sendMail(mailOption, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(data)
        }
    });
    res.send("success");
};