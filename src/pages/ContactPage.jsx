// usenavigate when submitting form
function ContactPage() {
    return (
        <main>
        <section class='contact' id="contact">
            <div class="container container-center contact__container">
                <h1>Get in touch.</h1>
                <p>Think we'd work well together? Feel free to shoot me a message.</p>
                    
                    <form class="contact__form">
                        <p class="hidden">
                            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                        </p>
                        <input class='name' type="text" name="name" placeholder="Name" required></input>
                        <input class='email' type="email" name="email" placeholder="Email" required></input>
                        <textarea id='textarea' name="textarea" placeholder="I'd like to chat about..." required></textarea>
                        <button onclick='shake()' type="submit" class='btn btn--primary'>Send Message <i class="fas fa-paper-plane"></i></button>
                    </form>

                    
                    <p class="">If you'd prefer, you can email me directly at <span class=" underline-white">cole [at] caccamedia [dot] com</span></p>
            </div>
        </section>
    </main>
    )
}

export default ContactPage
