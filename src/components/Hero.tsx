
import { Button } from "@/components/ui/button";
import { TextToSpeech } from "@/components/TextToSpeech";

type HeroProps = {
  title: string;
  subtitle: string;
  imageSrc?: string;
};

export function Hero({ title, subtitle, imageSrc }: HeroProps) {
  const heroText = `${title}. ${subtitle}`;
  
  return (
    <section className="bg-purple-light py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-dark mb-4">{title}</h1>
            <p className="text-lg md:text-xl text-gray-dark mb-6">{subtitle}</p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg">
                <a href="#resources">Explore Resources</a>
              </Button>
              <TextToSpeech text={heroText} buttonLabel="Listen to this" />
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            {imageSrc ? (
              <img 
                src={imageSrc} 
                alt="Digital access for everyone" 
                className="max-w-full h-auto rounded-lg shadow-lg"
                style={{ maxHeight: '400px' }}
              />
            ) : (
              <div className="bg-purple/20 w-full max-w-md h-64 rounded-lg flex items-center justify-center">
                <span className="text-purple text-xl">GuideUp</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
