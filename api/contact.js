export default async function handler(req, res) {
    console.log(req.body);
    if (req.method !== 'POST') {
        res.json('error');
    } else {
        // get data from req
        // make call to nodemailer
        // res.json(did it work yes or no);
        try {
            // code to run
            res.json('it worked')
        } catch(error) {
            // if code in try block fails, run this code instead
        }
    }
}

/*
import axios from "axios"
import * as nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  // Plug in Breaking Barriers service email
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case "GET":
      res.send("HELLO!")
      break
    case "POST":
      // Sending token to get verified
      let data
      try {
        data = await axios.post(
          `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${req.body.token}`
        )

        if (!data.data.success) {
          console.log("didn't work")
          throw new Error("request went through but was invalid")
        }
      } catch (err) {
        console.log({err, data: data.data})
        res.send({
          message:
            "Could not verify reCAPTCHA with Google; please try again in a few moments.",
        })
        return
      }
      console.log("user's score:", data.data.score)

      const mailOptions = {
        from: `${req.body.Name} [${req.body.email}] <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_RECEIVER,
        subject: `${req.body.subject} from ${req.body.Name}`,
        text: `Use an HTML enabled client to view this email.`,
        replyTo: req.body.email,
      }

      let message = req.body.message.split("\n")
      message = message.map((msg) => `<p>${msg}</p>`)

      if (data.score <= 0.3) {
        // end
        res.status(406).send({
          message:
            "reCAPTCHA could not be verified, score too low; if you are a human, try submitting again.",
        })
        return
      } else if (data.score <= 0.7) {
        // send with disclaimer
        mailOptions.html = [
          `<h3>Warning: Potential spam (user got low reCAPTCHA score)</h3>`,
          ...message,
        ].join("\n")

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error)
            res.send({
              message: "Couldn't send email; try again in a few moments.",
            })
            return
          } else {
            console.log("sent " + info.response)
            res.send({ message: "Email sent!" })
          }
        })
      } else {
        // 0.7+
        mailOptions.html = [...message].join("\n")

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error)
            res.send({
              message: "Couldn't send email; try again in a few moments.",
            })
          } else {
            console.log("sent " + info.response)
            res.send({ message: "Email sent!" })
          }
        })
      }
      break
    default:
      res.setHeader("Allow", ["POST"])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
*/