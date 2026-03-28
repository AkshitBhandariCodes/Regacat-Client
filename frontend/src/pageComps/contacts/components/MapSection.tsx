const MapSection = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
          <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-accent/20 to-secondary/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.424679402144!2d77.07884207549588!3d28.496867975739146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05a20e154897%3A0xbb157d32401d4a32!2sRegacats%20Solutions%20%7C%20CDSCO%20%26%20FSSAI%20Consultant%20in%20India!5e0!3m2!1sen!2sin!4v1761735885280!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter contrast-110 saturate-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
