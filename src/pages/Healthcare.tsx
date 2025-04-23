
import { Hero } from "@/components/Hero";
import { ResourceCard } from "@/components/ResourceCard";
import { LargeTextToggle } from "@/components/LargeTextToggle";
import { TextToSpeech } from "@/components/TextToSpeech";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Healthcare = () => {
  return (
    <div>
      <Hero 
        title="Healthcare Resources"
        subtitle="Find healthcare providers, insurance information, and wellness resources in your area."
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-6">
          <LargeTextToggle />
        </div>
        
        <section className="mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-light">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-dark">Healthcare Access</h2>
              <TextToSpeech text="Healthcare Access. This page provides information about healthcare resources including insurance options, finding local doctors and clinics, prescription assistance, and preventive care." />
            </div>
            <p className="text-lg text-gray-dark mb-6">
              Access to healthcare is important for everyone. Here you'll find resources to help you navigate health insurance, find affordable care, and manage your health needs.
            </p>
          </div>
        </section>
        
        <section className="mb-16" id="insurance">
          <h2 className="text-2xl font-bold text-gray-dark mb-8">Health Insurance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              title="Medicare"
              description="Healthcare coverage for individuals 65 and older or those with certain disabilities."
              linkText="Medicare Information"
              linkUrl="https://www.medicare.gov/"
            />
            
            <ResourceCard 
              title="Medicaid"
              description="Healthcare coverage for individuals and families with limited income and resources."
              linkText="Medicaid Information"
              linkUrl="https://www.medicaid.gov/"
            />
            
            <ResourceCard 
              title="Health Insurance Marketplace"
              description="Find and enroll in affordable health insurance plans that meet your needs."
              linkText="Find Insurance"
              linkUrl="https://www.healthcare.gov/"
            />
          </div>
        </section>
        
        <section className="mb-16" id="providers">
          <h2 className="text-2xl font-bold text-gray-dark mb-8">Finding Care</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-gray-light">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-dark mb-4">Community Health Centers</h3>
                <p className="text-gray-dark mb-6">
                  Community Health Centers provide comprehensive healthcare services regardless of ability to pay. Services may include:
                </p>
                <ul className="list-disc pl-5 text-gray-dark space-y-2 mb-6">
                  <li>Primary care</li>
                  <li>Behavioral health</li>
                  <li>Dental services</li>
                  <li>Prescription medications</li>
                </ul>
                <div className="flex justify-between items-center">
                  <Button asChild>
                    <a href="https://findahealthcenter.hrsa.gov/">Find a Health Center</a>
                  </Button>
                  <TextToSpeech text="Community Health Centers provide comprehensive healthcare services regardless of ability to pay. Services may include primary care, behavioral health, dental services, and prescription medications." />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-gray-light">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-dark mb-4">Find a Doctor</h3>
                <p className="text-gray-dark mb-6">
                  Need help finding a doctor? These resources can help you find healthcare providers in your area:
                </p>
                <ul className="list-disc pl-5 text-gray-dark space-y-2 mb-6">
                  <li>Medicare's Physician Compare</li>
                  <li>Your health insurance provider directory</li>
                  <li>Local hospital referral services</li>
                </ul>
                <div className="flex justify-between items-center">
                  <Button asChild>
                    <a href="https://www.medicare.gov/care-compare/">Medicare Care Compare</a>
                  </Button>
                  <TextToSpeech text="Need help finding a doctor? These resources can help you find healthcare providers in your area: Medicare's Physician Compare, Your health insurance provider directory, and Local hospital referral services." />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-16" id="prescriptions">
          <h2 className="text-2xl font-bold text-gray-dark mb-8">Prescription Assistance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResourceCard 
              title="Medicare Part D"
              description="Medicare prescription drug coverage to help lower prescription drug costs."
              linkText="Part D Information"
              linkUrl="https://www.medicare.gov/drug-coverage-part-d"
            />
            
            <ResourceCard 
              title="GoodRx"
              description="Compare prescription drug prices and find coupons at more than 70,000 pharmacies."
              linkText="Find Drug Prices"
              linkUrl="https://www.goodrx.com/"
            />
            
            <ResourceCard 
              title="Patient Assistance Programs"
              description="Programs offered by pharmaceutical companies to provide free or low-cost medications."
              linkText="Find Programs"
              linkUrl="https://www.needymeds.org/"
            />
          </div>
        </section>
        
        <section className="mb-16" id="preventive">
          <h2 className="text-2xl font-bold text-gray-dark mb-8">Preventive Care</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResourceCard 
              title="Screenings & Vaccinations"
              description="Information about recommended health screenings and vaccinations for adults."
              linkText="Learn More"
              linkUrl="https://health.gov/myhealthfinder"
            />
            
            <ResourceCard 
              title="Mental Health Resources"
              description="Find mental health services and resources in your community."
              linkText="Mental Health Help"
              linkUrl="https://www.samhsa.gov/find-help"
            />
          </div>
        </section>
        
        <section className="bg-purple-light p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mb-4">Need Help Understanding Your Healthcare Options?</h2>
            <p className="text-lg text-gray-dark mb-6 max-w-2xl mx-auto">
              Many communities offer free healthcare navigation services to help you understand your options.
            </p>
            <Button asChild size="lg">
              <a href="/community">Find Local Help</a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Healthcare;
