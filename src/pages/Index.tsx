import { Hero } from "@/components/Hero";
import { ResourceCard } from "@/components/ResourceCard";
import { LargeTextToggle } from "@/components/LargeTextToggle";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const resources = [
    {
      title: "Government Services",
      description: "Access important government programs, benefits, and services that you may be eligible for.",
      linkText: "View Services",
      linkUrl: "/government",
      imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      title: "Healthcare Resources",
      description: "Find healthcare providers, insurance information, and wellness resources in your area.",
      linkText: "Find Healthcare",
      linkUrl: "/healthcare",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Community Events",
      description: "Discover local community events, programs, and resources available to you and your family.",
      linkText: "See Events",
      linkUrl: "/community",
      imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      title: "Technology Help",
      description: "Learn the basics of using computers, smartphones, and the internet with our simple guides.",
      linkText: "Get Help",
      linkUrl: "/tech-help",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Financial Resources",
      description: "Find information about personal finance, assistance programs, and money management tools.",
      linkText: "Financial Help",
      linkUrl: "/community#financial",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      title: "Entertainment & Learning",
      description: "Discover digital entertainment options and online learning resources for all ages.",
      linkText: "Explore",
      linkUrl: "/community#entertainment",
      imageSrc: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Hero 
        title="Navigate Digital Resources with Confidence"
        subtitle="Your trusted guide to accessing online services and information with ease."
        imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-end mb-8">
          <LargeTextToggle />
        </div>
        
        <section id="welcome" className="mb-16 animate-fade-in">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-3xl font-bold text-foreground mb-6">Welcome to GuideUp</h2>
            <p className="text-lg text-foreground mb-6">
              We understand that navigating the digital world can be challenging. Our mission is to make it easier for everyone to access important online resources and services.
            </p>
            <p className="text-lg text-muted-foreground">
              Use the buttons at the top to find essential information, or explore the categories below. Need help? Click the speaker icon to have the content read aloud to you.
            </p>
          </div>
        </section>
        
        <section id="resources" className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 animate-fade-in">Essential Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={resource.title} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ResourceCard {...resource} />
              </div>
            ))}
          </div>
        </section>
        
        <section id="get-started" className="bg-primary/10 p-8 rounded-lg animate-fade-in">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're here to help you navigate the digital world. Explore our resources or contact us for personalized assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/tech-help">Technology Basics</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <a href="#resources">
                  Explore Resources
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
