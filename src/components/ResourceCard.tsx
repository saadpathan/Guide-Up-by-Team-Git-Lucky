
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TextToSpeech } from "@/components/TextToSpeech";

type ResourceCardProps = {
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  icon?: React.ReactNode;
  imageSrc?: string;
};

export function ResourceCard({ 
  title, 
  description, 
  linkText = "Learn More", 
  linkUrl = "#",
  icon,
  imageSrc
}: ResourceCardProps) {
  const cardText = `${title}. ${description}`;
  
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-secondary/20">
      {imageSrc && (
        <div className="relative h-48 overflow-hidden rounded-t-md">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      )}
      <CardHeader className="flex flex-row items-start space-x-4">
        {icon && <div className="text-primary">{icon}</div>}
        <div>
          <CardTitle className="text-xl text-foreground">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-foreground/80 text-base min-h-[80px]">
          {description}
        </CardDescription>
        <div className="flex items-center justify-between pt-2">
          <Button 
            asChild 
            variant="default"
            className="transition-all duration-300 hover:translate-x-2"
          >
            <a href={linkUrl} className="text-base">{linkText}</a>
          </Button>
          <TextToSpeech text={cardText} buttonLabel="Listen" />
        </div>
      </CardContent>
    </Card>
  );
}

