import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const newsItems = [
  {
    title: "New Digital Literacy Program for Seniors",
    description: "Local community centers launch free technology training sessions specifically designed for senior citizens.",
    date: "April 15, 2024",
    source: "Community News"
  },
  {
    title: "Expanded Healthcare Access for Low-Income Families",
    description: "State government announces new initiatives to improve healthcare access and reduce costs for low-income households.",
    date: "April 10, 2024",
    source: "Health Department"
  },
  {
    title: "Digital Inclusion Grants Available",
    description: "Federal program offers grants to help bridge the digital divide in underserved communities.",
    date: "April 5, 2024",
    source: "Government News"
  }
];

export const RecentNews = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-3xl font-bold text-foreground mb-6">Recent News & Updates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {newsItems.map((news, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
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
      <div className="text-center">
        <Button asChild variant="outline" className="text-lg">
          <Link to="/all-news">
            View All News
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}; 