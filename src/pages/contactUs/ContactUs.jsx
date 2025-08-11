import Hero from '../../components/common/Hero'
import ContactSection from '../../components/contactUs/ContactSection'
import Meeting from '../../components/contactUs/Meeting'

function ContactUs() {
    return (
        <>
            <Hero title={'Contact Us'} />
            <Meeting />
            <ContactSection />
        </>
    )
}

export default ContactUs