// usenavigate when submitting form
function ContactPage() {
    return (
        <main>
        <section className='contact' id="contact">
            <div className="container container-center contact__container">
                <h1>Get in touch.</h1>
                <p>Think we'd work well together? Feel free to shoot me a message.</p>
                    
                    <form className="contact__form">
                        <p className="hidden">
                            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                        </p>
                        <input className='name' type="text" name="name" placeholder="Name" required></input>
                        <input className='email' type="email" name="email" placeholder="Email" required></input>
                        <textarea id='textarea' name="textarea" placeholder="I'd like to chat about..." required></textarea>
                        <button onclick='shake()' type="submit" className='btn btn--primary'>Send Message <i className="fas fa-paper-plane"></i></button>
                    </form>

                    
                    <p className="">If you'd prefer, you can email me directly at <span className=" underline-white">cole [at] caccamedia [dot] com</span></p>
            </div>
        </section>
    </main>
    )
}

export default ContactPage
