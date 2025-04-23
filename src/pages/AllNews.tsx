import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const allNewsItems = [
  {
    title: "New Digital Literacy Program for Seniors",
    description: "Local community centers launch free technology training sessions specifically designed for senior citizens.",
    date: "April 15, 2024",
    source: "Community News",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  },
  {
    title: "Expanded Healthcare Access for Low-Income Families",
    description: "State government announces new initiatives to improve healthcare access and reduce costs for low-income households.",
    date: "April 10, 2024",
    source: "Health Department",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    title: "Digital Inclusion Grants Available",
    description: "Federal program offers grants to help bridge the digital divide in underserved communities.",
    date: "April 5, 2024",
    source: "Government News",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    title: "Senior Tech Support Hotline Launched",
    description: "New 24/7 helpline provides technical support specifically for senior citizens.",
    date: "March 28, 2024",
    source: "Tech News",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    title: "Community Internet Access Initiative",
    description: "Local libraries expand free internet access and device lending programs.",
    date: "March 20, 2024",
    source: "Community News",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    title: "Digital Skills Training for Caregivers",
    description: "New program helps caregivers learn essential digital skills to assist their loved ones.",
    date: "March 15, 2024",
    source: "Health Department",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  }
];

export const AllNews = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Button asChild variant="outline" className="mb-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-4xl font-bold text-foreground">All News & Updates</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allNewsItems.map((news, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <CardTitle className="text-xl">{news.title}</CardTitle>
              <CardDescription>
                <span className="text-sm text-muted-foreground">{news.date}</span>
                <span className="mx-2">•</span>
                <span className="text-sm text-muted-foreground">{news.source}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{news.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}; 