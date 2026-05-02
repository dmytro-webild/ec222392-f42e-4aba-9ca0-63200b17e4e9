"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';

export default function LandingPage() {
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
        { text: "Jetzt bestellen", href: "#contact" },
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
      textboxLayout="split-description"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", brand: "Authentisch", name: "Margherita D.O.P. - Mit echtem Fior di Latte & San Marzano", price: "18.50 CHF", rating: 5, reviewCount: "120", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DAtkWOWBa86HVvKFKzqRK21Dwe/uploaded-1777747868609-hv0ylcu8.png" },
        { id: "p2", brand: "Spezialität", name: "Diavola Luxe - Mit pikanter Ventricina-Salami", price: "21.00 CHF", rating: 5, reviewCount: "85", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DAtkWOWBa86HVvKFKzqRK21Dwe/uploaded-1777747868609-hv0ylcu8.png" },
        { id: "p3", brand: "Vegetarisch", name: "Verdure Fresche - Mit Grillgemüse & Oliven", price: "19.50 CHF", rating: 5, reviewCount: "92", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DAtkWOWBa86HVvKFKzqRK21Dwe/uploaded-1777747868609-hv0ylcu8.png" },
      ]}
      title="Unsere Speisekarte"
      description="Entdecken Sie die Qualität unserer handverlesenen Zutaten. Von feinstem Mehl bis zu den frischesten Tomaten aus Italien – jedes Element ist auf authentischen Geschmack ausgerichtet."
      buttons={[
        { text: "Jetzt bestellen", href: "#contact" }
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "sparkles-gradient" }}
      text="Besuchen Sie uns in der Romanshornerstrasse 30, Arbon. Geöffnet Di–So: 11:00–13:00 & 17:00–21:00. Montags geschlossen. Wir freuen uns auf Ihren Besuch!"
      buttons={[
        { text: "Jetzt anrufen", href: "tel:0796062450" },
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
        { title: "Kontakt", items: [{ label: "Tel: 079 606 24 50" }] },
      ]}
      bottomLeftText="© 2024 Pizza da Vincenzo"
      bottomRightText="Authentische Pizza in Arbon"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}