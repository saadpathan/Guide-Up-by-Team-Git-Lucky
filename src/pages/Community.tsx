
import { Hero } from "@/components/Hero";
import { ResourceCard } from "@/components/ResourceCard";
import { LargeTextToggle } from "@/components/LargeTextToggle";
import { TextToSpeech } from "@/components/TextToSpeech";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Community = () => {
  return (
    <div>
      <Hero 
        title="Community Resources"
        subtitle="Discover local community events, programs, financial assistance, and entertainment options."
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-6">
          <LargeTextToggle />
        </div>
        
        <section className="mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-light">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-dark">Community Connections</h2>
              <TextToSpeech text="Community Connections. This page provides information about local events, programs, financial resources, and entertainment options available in your community." />
            </div>
            <p className="text-lg text-gray-dark mb-6">
              Staying connected to your local community is important. Here you'll find information about local events, programs, financial assistance, and entertainment options.
            </p>
          </div>
        </section>
        
        <section className="mb-16" id="local-events">
          <h2 className="text-2xl font-bold text-gray-dark mb-8">Local Events & Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              title="Senior Centers"
              description="Find activities, meals, and social opportunities at your local senior center."
              linkText="Find a Center"
              linkUrl="#"
            />
            
            <ResourceCard 
              title="Community Classes"
              description="Free or low-cost classes on various topics offered by local organizations."
              linkText="Find Classes"
              linkUrl="#"
            />
            
            <ResourceCard 
              title="Library Events"
              description="Book clubs, computer classes, and other events at your local public library."
              linkText="Library Programs"
              linkUrl="#"
            />
            
            <ResourceCard 
              title="Volunteer Opportunities"
              description="Ways to give back to your community and connect with others through volunteering."
              linkText="Volunteer"
              linkUrl="#"
            />
            
            <ResourceCard 
              title="Fitness Programs"
              description="Free or reduced-cost fitness classes designed for seniors and families."
              linkText="Stay Active"
              linkUrl="#"
            />
            
            <ResourceCard 
              title="Community Gardens"
              description="Join a community garden to grow fresh produce and connect with neighbors."
              linkText="Find Gardens"
              linkUrl="#"
            />
          </div>
        </section>
        
        <section className="mb-16" id="financial">
          <h2 className="text-2xl font-bold text-gray-dark mb-8">Financial Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-gray-light">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-dark mb-4">Money Management</h3>
                <p className="text-gray-dark mb-6">
                  Resources to help you manage your finances effectively:
                </p>
                <ul className="list-disc pl-5 text-gray-dark space-y-2 mb-6">
                  <li>Free budget planning assistance</li>
                  <li>Credit counseling services</li>
                  <li>Debt management programs</li>
                  <li>Financial education workshops</li>
                </ul>
                <div className="flex justify-between items-center">
                  <Button asChild>
                    <a href="#">Financial Help</a>
                  </Button>
                  <TextToSpeech text="Money Management. Resources to help you manage your finances effectively: Free budget planning assistance, Credit counseling services, Debt management programs, and Financial education workshops." />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-gray-light">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-dark mb-4">Assistance Programs</h3>
                <p className="text-gray-dark mb-6">
                  Financial assistance programs that may be available to you:
                </p>
                <ul className="list-disc pl-5 text-gray-dark space-y-2 mb-6">
                  <li>Energy and utility bill assistance</li>
                  <li>Phone and internet discounts</li>
                  <li>Property tax relief for seniors</li>
                  <li>Emergency financial assistance</li>
                </ul>
                <div className="flex justify-between items-center">
                  <Button asChild>
                    <a href="#">Find Programs</a>
                  </Button>
                  <TextToSpeech text="Assistance Programs. Financial assistance programs that may be available to you: Energy and utility bill assistance, Phone and internet discounts, Property tax relief for seniors, and Emergency financial assistance." />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-16" id="entertainment">
          <h2 className="text-2xl font-bold text-gray-dark mb-8">Entertainment & Learning</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResourceCard 
              title="Free Online Books"
              description="Access free e-books and audiobooks through your local library's digital collection."
              linkText="Digital Library"
              linkUrl="#"
            />
            
            <ResourceCard 
              title="Streaming Services"
              description="Information about popular streaming services for movies, TV shows, and music."
              linkText="Streaming Guide"
              linkUrl="#"
            />
            
            <ResourceCard 
              title="Online Learning"
              description="Free courses and learning opportunities available online for all ages."
              linkText="Learn Online"
              linkUrl="#"
            />
            
            <ResourceCard 
              title="Virtual Museum Tours"
              description="Explore museums and cultural institutions from home through virtual tours."
              linkText="Virtual Tours"
              linkUrl="#"
            />
            
            <ResourceCard 
              title="Senior Discounts"
              description="Entertainment venues and attractions that offer discounts for seniors."
              linkText="Find Discounts"
              linkUrl="#"
            />
            
            <ResourceCard 
              title="Community Radio"
              description="Local radio stations and podcasts focused on community news and events."
              linkText="Listen Local"
              linkUrl="#"
            />
          </div>
        </section>
        
        <section className="bg-purple-light p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mb-4">Need Help Accessing Community Resources?</h2>
            <p className="text-lg text-gray-dark mb-6 max-w-2xl mx-auto">
              Many communities have resource navigators who can help connect you with local services.
            </p>
            <Button asChild size="lg">
              <a href="/tech-help">Get Technology Help</a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Community;
