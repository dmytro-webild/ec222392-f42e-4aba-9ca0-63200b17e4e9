"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  const handleCall = () => {
    window.location.href = "tel:0796062450";
  };

  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="grid"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Philosophie", id: "about" },
        { name: "Speisekarte", id: "menu" },
        { name: "Bewertungen", id: "testimonials" },
        { name: "Kundenstimmen", id: "reviews" },
        { name: "Kontakt", id: "contact" },
      ]}
      brandName="Pizza da Vincenzo"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{ variant: "gradient-bars" }}
      title="Pizza da Vincenzo: Echte neapolitanische Pizzakunst in Arbon"
      description="Ihr Takeout-Spezialist in Arbon. Wir backen authentische neapolitanische Pizza mit handgefertigtem, 48 Stunden gereiftem Teig direkt aus dem Holzofen – in nur 10 Minuten für Sie bereit."
      kpis={[
        { value: "5/5", label: "Google Rating" },
        { value: "48h", label: "Teig Reifezeit" },
        { value: "10m", label: "Fertig für Takeout" },
      ]}
      enableKpiAnimation={true}
      buttons={[
        { text: "Jetzt anrufen: 079 606 24 50", onClick: handleCall },
      ]}
      buttonAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/side-view-slice-pizza-wooden-board_176474-120139.jpg"
      imageAlt="Authentische Neapolitanische Pizza"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Authentische neapolitanische Pizza in Arbon"
      description="Bei Pizza da Vincenzo steht Qualität an erster Stelle. Von der Romanshornerstrasse 30 bringen wir echtes italienisches Flair zu Ihnen. Wir verwenden nur die besten Zutaten wie San-Marzano-Tomaten und Fior di Latte für unser Takeout-Konzept, das auf Frische und Handwerk setzt."
      metrics={[
        { value: "100%", title: "Handarbeit" },
        { value: "48h", title: "Teigruhe" },
        { value: "Arbon", title: "Standort" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/chef-white-uniform-prepare-pizzaa_1157-27026.jpg"
      imageAlt="Unser Pizzahandwerk"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split-actions"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", brand: "Top Rated • Authentisch", name: "Margherita D.O.P. - Mit Fior di Latte & San Marzano", price: "18.50 CHF", rating: 5, reviewCount: "120", imageSrc: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop" },
        { id: "p2", brand: "Top Rated • Würzig", name: "Diavola Luxe - Mit pikanter Ventricina-Salami", price: "21.00 CHF", rating: 5, reviewCount: "85", imageSrc: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop" },
        { id: "p3", brand: "Top Rated • Frisch", name: "Verdure Fresche - Mit Grillgemüse & Oliven", price: "19.50 CHF", rating: 5, reviewCount: "92", imageSrc: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=800&auto=format&fit=crop" },
      ]}
      title="Unsere Speisekarte"
      description="Entdecken Sie die Qualität unserer handverlesenen Zutaten. Von feinstem Mehl bis zu den frischesten Tomaten aus Italien – jedes Element ist auf authentischen Geschmack ausgerichtet."
      buttons={[
        { text: "Jetzt anrufen", onClick: handleCall }
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
    <TestimonialCardFive
      title="Was unsere Gäste sagen"
      description="Authentische neapolitanische Pizza begeistert – lesen Sie, warum Kunden Pizza da Vincenzo in Arbon schätzen."
      textboxLayout="split"
      testimonials={[
        { id: "t1", name: "Marco Rossi", date: "Vor 2 Wochen", title: "Unglaublich gut!", quote: "Die beste neapolitanische Pizza, die ich in der Schweiz gegessen habe. Absolut empfehlenswert.", tag: "Top", avatarSrc: "https://i.pravatar.cc/150?u=1" },
        { id: "t2", name: "Sarah Müller", date: "Vor 1 Monat", title: "Wahrer Genuss", quote: "Der Teig ist einfach perfekt – genau wie in Italien. Man merkt die 48 Stunden Ruhezeit.", tag: "Stammgast", avatarSrc: "https://i.pravatar.cc/150?u=2" },
        { id: "t3", name: "Lukas Weber", date: "Vor 3 Tagen", title: "Mein go-to Takeout", quote: "Schnell, freundlich und extrem lecker. Die Diavola ist der Wahnsinn.", tag: "Fan", avatarSrc: "https://i.pravatar.cc/150?u=3" }
      ]}
      useInvertedBackground={true}
    />
  </div>

  <div id="reviews" data-section="reviews">
    <TestimonialCardThirteen
      title="Kundenbilder & Eindrücke"
      description="Einblicke von unseren zufriedenen Kunden, die Pizza da Vincenzo genießen."
      textboxLayout="default"
      showRating={true}
      animationType="slide-up"
      useInvertedBackground={false}
      className="scale-90"
      testimonials={[
        { id: "r1", name: "Julia Weber", handle: "@julia.w", testimonial: "Die Pizza ist ein Kunstwerk!", rating: 5, imageSrc: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=200" },
        { id: "r2", name: "Thomas Koch", handle: "@thomas.k", testimonial: "Frisch, authentisch und schnell.", rating: 5, imageSrc: "https://images.unsplash.com/photo-1628843028303-34e85714314c?q=80&w=200" },
        { id: "r3", name: "Elena Fischer", handle: "@elena.f", testimonial: "Super freundliches Personal.", rating: 5, imageSrc: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=200" }
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "sparkles-gradient" }}
      text="Besuchen Sie uns in der Romanshornerstrasse 30, Arbon. Geöffnet Di–So: 11:00–13:00 & 17:00–21:00. Montags geschlossen. Wir freuen uns auf Ihren Besuch!"
      buttons={[
        { text: "Jetzt anrufen", onClick: handleCall },
        { text: "Wegbeschreibung anzeigen", href: "https://maps.google.com/?q=Romanshornerstrasse+30+Arbon" }
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "Pizza da Vincenzo", items: [{ label: "Romanshornerstrasse 30, Arbon" }] },
        { title: "Öffnungszeiten", items: [
            { label: "Di–So: 11:00–13:00, 17:00–21:00" },
            { label: "Montag: Geschlossen" }
        ] },
        { title: "Kontakt", items: [{ label: "Tel: 079 606 24 50", onClick: handleCall }] },
      ]}
      bottomLeftText="© 2024 Pizza da Vincenzo"
      bottomRightText="Authentische Pizza in Arbon"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}