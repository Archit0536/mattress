import ContactForm from '@/components/ContactForm';

export default function BottomContactSection() {
  return (
    <section className="bottom-contact" aria-label="contact section">
      <div className="container bottom-contact-grid">
        <div className="contact-card">
          <h3>Contact Us</h3>
          <p>
            Springdoo Sleep Studio
            <br />
            48 Restwell Avenue, Downtown
            <br />
            +1 (555) 320-9800
            <br />
            hello@springdoo.com
          </p>
          <p>Open daily: 9:00 AM – 8:00 PM for demos and sleep consultations.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
