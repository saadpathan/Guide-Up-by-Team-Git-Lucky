import { useRef, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const feedbacks = [
  {
    name: "Sarah Johnson",
    role: "Senior Citizen",
    feedback: "GuideUp helped me understand how to access my Medicare benefits online. The step-by-step guides made it so easy!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  },
  {
    name: "Michael Chen",
    role: "Low-Income Family",
    feedback: "Thanks to GuideUp, I found out about several assistance programs I was eligible for. It's been a lifesaver for my family.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Emma Rodriguez",
    role: "Caregiver",
    feedback: "The technology help section made it possible for me to teach my grandmother how to video call her grandchildren.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "James Wilson",
    role: "Senior Citizen",
    feedback: "I was able to find local community events through GuideUp that helped me stay active and connected.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    name: "Linda Thompson",
    role: "Low-Income Family",
    feedback: "The financial resources section helped me find assistance programs I didn't know existed. It's made a huge difference in our lives.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
  }
];

export const FeedbackSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    slidesToScroll: 3,
    containScroll: "trimSnaps"
  });
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const onPrevButtonClick = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const onNextButtonClick = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="flex-[0_0_33.333%] min-w-0 p-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-full">
                <div className="flex items-center mb-4">
                  <img
                    src={feedback.image}
                    alt={feedback.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{feedback.name}</h3>
                    <p className="text-muted-foreground">{feedback.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{feedback.feedback}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        ref={prevButtonRef}
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4"
        onClick={onPrevButtonClick}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        ref={nextButtonRef}
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4"
        onClick={onNextButtonClick}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}; 