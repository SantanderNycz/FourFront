import { Button } from "@/components/ui/button.jsx";
import { ArrowRight, Facebook, Linkedin, Instagram } from "lucide-react";

// Import portfolio images
import saphety from "./assets/aMdntszP1QNo.webp";
import yeatman from "./assets/SiQIYeBUT41K.webp";
import beyondBeauty from "./assets/JtWmCqtjsRLK.webp";
import espacoVisual from "./assets/MzXN9QuigCOe.webp";
import mcoutinho from "./assets/RNDleeVKppjX.webp";
import onwine from "./assets/plDAZUsvW1hB.webp";
import jscrambler from "./assets/sCOzYuO2n06g.jpg";
import creditoTaxa from "./assets/G0OlIH0ArYyW.webp";
import bikcraft from "./assets/bikcraft.webp";

function PortfolioPage({ t, language, setLanguage }) {
  const portfolioItems = [
    {
      id: 1,
      title: "Saphety",
      category: "Desenvolvimento Web",
      image: saphety,
      tags: ["UX/UI Design", "Development", "Branding"],
    },
    {
      id: 2,
      title: "The Yeatman",
      category: "Desenvolvimento Web",
      image: yeatman,
      tags: ["Development", "SEO", "Mobile"],
    },
    {
      id: 3,
      title: "Beyond Beauty",
      category: "UX/UI Design",
      image: beyondBeauty,
      tags: ["Design", "Branding", "E-commerce"],
    },
    {
      id: 4,
      title: "Espaço Visual",
      category: "Rebranding",
      image: espacoVisual,
      tags: ["Branding", "Design", "Identity"],
    },
    {
      id: 5,
      title: "MCoutinho",
      category: "Desenvolvimento Web",
      image: mcoutinho,
      tags: ["Development", "Responsive", "SEO"],
    },
    {
      id: 6,
      title: "OnWine",
      category: "E-commerce",
      image: onwine,
      tags: ["E-commerce", "UX/UI", "Development"],
    },
    {
      id: 7,
      title: "JScrambler",
      category: "Desenvolvimento Web",
      image: jscrambler,
      tags: ["Development", "Security", "Tech"],
    },
    {
      id: 8,
      title: "Crédito Taxa",
      category: "Desenvolvimento Web",
      image: creditoTaxa,
      tags: ["Fintech", "Development", "Mobile"],
    },
    {
      id: 9,
      title: "Bikcraft",
      category: "Desenvolvimento Web",
      image: bikcraft,
      tags: ["Fintech", "Development", "Mobile"],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <div className="inline-block bg-secondary text-secondary-foreground border border-border rounded-full px-4 py-2 text-sm font-medium mb-4">
              REBRANDING | UX/UI DESIGN | DEVELOPMENT | SEO
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {t.portfolio}
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 mb-4 max-w-4xl mx-auto">
            {t.portfolioDescription1}
          </p>
          <p className="text-lg md:text-xl text-foreground/90 max-w-4xl mx-auto">
            {t.portfolioDescription2}
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t.growBusiness}
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            {t.newsletterDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder={t.stayUpdated}
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3">
              {t.subscribe}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-foreground/70 mt-4">{t.agreeTerms}</p>
        </div>
      </section>

      {/* Services & Industries */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">{t.services}</h3>
              <ul className="space-y-2 text-sm">
                {t.servicesList.map((service, index) => (
                  <li
                    key={index}
                    className="hover:text-primary-foreground/80 cursor-pointer transition-colors"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t.industries}</h3>
              <ul className="space-y-2 text-sm">
                {t.industriesList.map((industry, index) => (
                  <li
                    key={index}
                    className="hover:text-primary-foreground/80 cursor-pointer transition-colors"
                  >
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t.letsWork}</h3>
              <p className="text-sm mb-2">info@fourfront.com</p>
              <h4 className="font-semibold mb-2 mt-4">{t.joinUs}</h4>
              <p className="text-sm">rh@fourfront.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t.portoCenter}</h3>
              <div className="text-sm space-y-1">
                <p>Rua das Andresas, nº 326</p>
                <p>4100-051 Porto</p>
                <p>Portugal</p>
                <p className="mt-3">+351 22 938 87 06</p>
                <p>info@fourfront.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-foreground hover:text-foreground/80">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground hover:text-foreground/80">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground hover:text-foreground/80">
                <Instagram size={20} />
              </a>
            </div>
            <div className="flex items-center space-x-6 text-sm text-foreground">
              <a href="#" className="hover:text-foreground/80">
                {t.privacyPolicy}
              </a>
            </div>
          </div>
          <div className="border-t border-border mt-6 pt-6 text-center text-sm text-foreground">
            <p>{t.copyrights}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default PortfolioPage;
