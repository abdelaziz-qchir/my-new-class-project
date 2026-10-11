import { useState } from "react";


function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [send, setSend] = useState(false)
    function envoyer() {
        setSend(true)
    }

    return (
        <div className="contact">
            <div className="contact-head">
                <h2>contact us</h2>
                <p>Have a quastion ? send message </p>
            </div>
            <div className="contact-form">
                <label htmlFor="name">Name :</label><br />
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" /><br />
                <label htmlFor="mail">Email :</label><br />
                <input type="email" onChange={(e) => setEmail(e.target.value)} name="mail" id="maile" /><br />
                <label htmlFor="subject">Subject :</label><br />
                <input type="text" onChange={(e) => setSubject(e.target.value)} placeholder="what is the subject ?" /><br />
                <label htmlFor="message"> Message :</label><br />
                <textarea name="message" id="message" onChange={(e) => setMessage(e.target.value)} placeholder="write your message here"></textarea><br />
                <input type="button" value="send" onClick={envoyer} />

                {send && (
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Message</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{subject}</td>
                                <td>{message}</td>
                            </tr>
                        </tbody>
                    </table>
                )}

            </div>
        </div>
    )
}

export default Contact;