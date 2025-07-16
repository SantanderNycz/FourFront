import { Button } from "@/components/ui/button.jsx";
import {
  ArrowRight,
  Play,
  Target,
  Zap,
  Eye,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

function HomePage({ t, language, setLanguage }) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-background py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-sm font-medium text-foreground/70 uppercase tracking-wide">
                  {t.weAre}
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6">
                {t.digitalAgency}
              </h1>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                {t.heroDescription1}
              </p>
              <p className="text-lg text-foreground/70 mb-8">
                {t.heroDescription2}
              </p>
              <p className="text-lg text-foreground/70 mb-8">
                {t.heroDescription3}
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg">
                {t.knowOurTeam}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-foreground/70">Four Front</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t.digitalStrategies}
            </h2>
            <p className="text-xl text-foreground/80">{t.fastIntelligent}</p>
            <p className="text-lg text-foreground/70 mt-2">{t.resultsDriven}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {t.resultsApproach}
              </h3>
              <p className="text-foreground/70">{t.resultsDescription}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {t.fastGrowth}
              </h3>
              <p className="text-foreground/70">{t.fastGrowthDescription}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {t.vision360}
              </h3>
              <p className="text-foreground/70">{t.vision360Description}</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg mr-4">
              {t.seePortfolio}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-border text-foreground hover:bg-secondary px-8 py-3 text-lg"
            >
              {t.scheduleMeeting}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            {t.achieveGoals}
          </h2>

          <div className="bg-secondary rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {t.talkWithUs}
            </h3>
            <p className="text-foreground/70 mb-6">{t.dontLikeForms}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <input
                type="text"
                placeholder={t.yourName}
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground"
              />
              <input
                type="email"
                placeholder={t.yourEmail}
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground"
              />
            </div>

            <textarea
              placeholder={t.tellProject}
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground mb-6"
            />

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg">
              {t.imReady}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-xs text-foreground/70 mt-4">{t.agreeTerms}</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-secondary py-16">
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
                <p>Rua do Relógio, nº 75</p>
                <p>4200-226 Porto</p>
                <p>Portugal</p>
                <p className="mt-3">+351 *** *** ***</p>
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

export default HomePage;
