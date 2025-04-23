import { Button } from "./ui/button";
import { Phone, MessageSquare, Calendar } from "lucide-react";

export const TalkToRepresentative = () => {
  return (
    <div className="bg-primary/5 p-8 rounded-lg">
      <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Talk to a Representative</h2>
      <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
        Need personalized assistance? Our representatives are here to help you navigate digital resources and answer your questions.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
          <Phone className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-muted-foreground mb-4">Speak to a representative</p>
          <Button className="w-full">1-800-GUIDE-UP</Button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
          <MessageSquare className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
          <p className="text-muted-foreground mb-4">Chat with us online</p>
          <Button className="w-full">Start Chat</Button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
          <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Schedule a Call</h3>
          <p className="text-muted-foreground mb-4">Book a convenient time</p>
          <Button className="w-full">Schedule Now</Button>
        </div>
      </div>
    </div>
  );
}; 