"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

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
        {
          name: "Home",          id: "hero"},
        {
          name: "Philosophy",          id: "about"},
        {
          name: "Menu",          id: "menu"},
        {
          name: "Reviews",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Pizza da Vincenzo"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars"}}
      title="Pizza da Vincenzo: Authentisch Neapolitanisch in Arbon"
      description="Erleben Sie echte neapolitanische Pizzakunst. Handgefertigter Teig, 48 Stunden gereift, aus dem Holzofen – direkt zu Ihnen nach Hause in 10 Minuten."
      kpis={[
        {
          value: "4.9/5",          label: "Google Rating"},
        {
          value: "48h",          label: "Teig Reifezeit"},
        {
          value: "10m",          label: "Bereit für Sie"},
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Jetzt Bestellen",          href: "#contact"},
        {
          text: "Speisekarte",          href: "#menu"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-slice-pizza-wooden-board_176474-120139.jpg"
      imageAlt="Authentische Neapolitanische Pizza"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/arrangement-tasty-pizza-making_23-2148921361.jpg",          alt: "Kunde 1"},
        {
          src: "http://img.b2bpic.net/free-photo/top-view-sliced-pizza-with-parmesan-cutter_23-2148753762.jpg",          alt: "Kunde 2"},
        {
          src: "http://img.b2bpic.net/free-photo/smoked-salmon-pizza_1339-1002.jpg",          alt: "Kunde 3"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-hand-holding-sauce-bottle_23-2148773532.jpg",          alt: "Kunde 4"},
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-pizza-breakfast_23-2148858494.jpg",          alt: "Kunde 5"},
      ]}
      avatarText="Über 1.000 begeisterte Gäste aus Arbon"
      marqueeItems={[
        {
          type: "text",          text: "Frische Zutaten"},
        {
          type: "text",          text: "Original Neapolitanisch"},
        {
          type: "text",          text: "48h Teigruhe"},
        {
          type: "text",          text: "Holzofen-gebacken"},
        {
          type: "text",          text: "Regionale Partner"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Unsere Philosophie"
      description="Bei Vincenzo ist Pizza kein schnelles Fast-Food, sondern ein Handwerk. Wir nutzen importierte San-Marzano-Tomaten, Fior di Latte und viel Liebe, um ein Stück Neapel nach Arbon zu bringen."
      metrics={[
        {
          value: "100%",          title: "Authentizität"},
        {
          value: "24h",          title: "Frische-Garantie"},
        {
          value: "10+",          title: "Jahre Erfahrung"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/chef-white-uniform-prepare-pizzaa_1157-27026.jpg"
      imageAlt="Traditionelles Pizzahandwerk"
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
        {
          id: "p1",          brand: "Klassiker",          name: "Margherita D.O.P.",          price: "18.50 CHF",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-mushroom-pizza-with-cheese-olives-seasonings-dark-desk-dough-food-pizza-meal-italian_140725-101767.jpg"},
        {
          id: "p2",          brand: "Spezialität",          name: "Diavola Luxe",          price: "21.00 CHF",          rating: 5,
          reviewCount: "85",          imageSrc: "http://img.b2bpic.net/free-photo/cheese-plate-with-glass-cup-smoked-cheese-middle_140725-230.jpg"},
        {
          id: "p3",          brand: "Vegetarisch",          name: "Verdure Fresche",          price: "19.50 CHF",          rating: 5,
          reviewCount: "92",          imageSrc: "http://img.b2bpic.net/free-photo/pasta-ingredients-composition_23-2147849731.jpg"},
        {
          id: "p4",          brand: "Feinschmecker",          name: "Tartufo Bianco",          price: "24.00 CHF",          rating: 5,
          reviewCount: "67",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-sliced-mushroom-pizza-delicious-dough-with-fresh-vegetables-dark-surface-dough-meal-food-italian-bake_140725-102074.jpg"},
        {
          id: "p5",          brand: "Klassiker",          name: "Prosciutto e Funghi",          price: "20.50 CHF",          rating: 5,
          reviewCount: "105",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-pepperoni-pizza-with-sausage-tomato-sauce-cheese-herb-sprinkles_140725-652.jpg"},
        {
          id: "p6",          brand: "Traditionell",          name: "Capricciosa",          price: "21.50 CHF",          rating: 5,
          reviewCount: "78",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-raw-pasta-with-rice-red-tomatoes-dark-surface-pasta-dough-raw_140725-82556.jpg"},
      ]}
      title="Unsere Meisterwerke"
      description="Eine sorgfältige Auswahl unserer beliebtesten Kreationen, von klassisch bis luxuriös."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          title: "San Marzano Tomaten",          description: "Importiert aus der Region um den Vesuv für ein perfekt balanciertes Aroma.",          tag: "Herkunft",          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-tagliatelle-with-basil-vegetables_23-2148567102.jpg"},
        {
          id: "f2",          title: "48h Reifezeit",          description: "Unser Teig darf lange ruhen, für höchste Bekömmlichkeit und Geschmack.",          tag: "Handwerk",          imageSrc: "http://img.b2bpic.net/free-photo/fresh-burrata-cheese-with-cherry-tomatoes-herbs-slate_84443-82461.jpg"},
        {
          id: "f3",          title: "Holzofen-Hitze",          description: "Über 400°C für die typische neapolitanische Kruste in wenigen Minuten.",          tag: "Tradition",          imageSrc: "http://img.b2bpic.net/free-photo/fresh-italian-salad-antipasto-called-caprese-with-buffalo-mozzarella-sliced-tomatoes-basil-with-olive-oil-ingredients-vegetarian-caprese-salad-italian-food-top-view-rustic-style_1150-44799.jpg"},
      ]}
      title="Warum Vincenzo?"
      description="Wir setzen auf kompromisslose Qualität in jedem Schritt."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="split-description"
      useInvertedBackground={false}
      names={[
        "Latteria Arbon",        "Bäckerei Gold",        "Frutta Nazionale",        "Toscana Weine",        "Gastronomie Arbon",        "Regional Verband",        "Swiss Quality"]}
      title="Unsere Partner & Zertifikate"
      description="Wir arbeiten nur mit den Besten der Region zusammen."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Marco Rossi",          role: "Stammgast",          company: "Arbon",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-young-woman-hands-holds-two-burgers-blurred-background_169016-43765.jpg"},
        {
          id: "2",          name: "Julia M.",          role: "Feinschmeckerin",          company: "Arbon",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/asian-friends-couple-eating-pizza-party-pizzeria-happy-indian-people-having-fun-together-eating-italian-food-sitting-couch_627829-1247.jpg"},
        {
          id: "3",          name: "Lukas B.",          role: "Pizza-Fan",          company: "Arbon",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/elegantly-dressed-couple-handsome-stylish-male-charming-brunette-woman-sitting-together-luxury-restaurant_613910-18589.jpg"},
        {
          id: "4",          name: "Elena K.",          role: "Kundin",          company: "Arbon",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/caesar-pizza-table_140725-6527.jpg"},
        {
          id: "5",          name: "Thomas Z.",          role: "Kunde",          company: "Arbon",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/aged-middle-expression-calling-business_1262-2838.jpg"},
        {
          id: "6",          name: "Sarah P.",          role: "Besucherin",          company: "St. Gallen",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-pizza-table_23-2150307015.jpg"},
      ]}
      kpiItems={[
        {
          value: "5.0",          label: "Qualität"},
        {
          value: "98%",          label: "Zufriedenheit"},
        {
          value: "1.2k+",          label: "Pizzen/Monat"},
      ]}
      title="Was Arbon sagt"
      description="Kundenstimmen, die uns antreiben."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      text="Hungrig? Rufen Sie uns jetzt an oder besuchen Sie uns in Arbon. Wir freuen uns darauf, Sie zu bekochen!"
      buttons={[
        {
          text: "Jetzt anrufen: 079 606 24 50",          href: "tel:0796062450"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Pizza da Vincenzo",          items: [
            {
              label: "Hauptstrasse 1, 9320 Arbon",              href: "#"},
          ],
        },
        {
          title: "Öffnungszeiten",          items: [
            {
              label: "Mo–So: 11:30–21:30",              href: "#"},
          ],
        },
        {
          title: "Rechtliches",          items: [
            {
              label: "Impressum",              href: "#"},
            {
              label: "Datenschutz",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Pizza da Vincenzo"
      bottomRightText="Neapolitanische Pizzakunst in Arbon"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}