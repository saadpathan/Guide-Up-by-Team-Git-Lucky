
import { Hero } from "@/components/Hero";
import { ResourceCard } from "@/components/ResourceCard";
import { LargeTextToggle } from "@/components/LargeTextToggle";
import { TextToSpeech } from "@/components/TextToSpeech";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GovernmentServices = () => {
  return (
    <div>
      <Hero 
        title="Government Services"
        subtitle="Access essential government resources and programs that you may be eligible for."
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-6">
          <LargeTextToggle />
        </div>
        
        <section className="mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-light">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-dark">Important Government Resources</h2>
              <TextToSpeech text="Important Government Resources. This page provides information about essential government services including social security, Medicare, and tax assistance. You'll find simple descriptions of each service and links to access them." />
            </div>
            <p className="text-lg text-gray-dark mb-6">
              These services are provided by various government agencies to help citizens access benefits, financial assistance, and important information.
            </p>
          </div>
        </section>
        
        <section className="mb-16" id="benefits">
          <h2 className="text-2xl font-bold text-gray-dark mb-8">Benefits & Assistance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              title="Social Security"
              description="Apply for retirement, disability, and Medicare benefits, or check the status of an application."
              linkText="Access Social Security"
              linkUrl="https://www.ssa.gov/"
            />
            
            <ResourceCard 
              title="Medicare & Medicaid"
              description="Find information about healthcare coverage through Medicare and Medicaid programs."
              linkText="Healthcare Coverage"
              linkUrl="https://www.medicare.gov/"
            />
            
            <ResourceCard 
              title="Veterans Benefits"
              description="Access resources and benefits available to veterans and their families."
              linkText="Veterans Services"
              linkUrl="https://www.va.gov/"
            />
            
            <ResourceCard 
              title="Housing Assistance"
              description="Learn about affordable housing programs, rental assistance, and home ownership resources."
              linkText="Housing Help"
              linkUrl="https://www.hud.gov/"
            />
            
            <ResourceCard 
              title="Food Assistance"
              description="Information about SNAP benefits, food banks, and nutrition assistance programs."
              linkText="Food Resources"
              linkUrl="https://www.fns.usda.gov/snap/supplemental-nutrition-assistance-program"
            />
            
            <ResourceCard 
              title="Utility Assistance"
              description="Programs to help with heating, cooling, and other utility bills."
              linkText="Utility Help"
              linkUrl="https://www.benefits.gov/categories/Housing%20and%20Public%20Utilities"
            />
          </div>
        </section>
        
        <section className="mb-16" id="taxes">
          <h2 className="text-2xl font-bold text-gray-dark mb-8">Tax Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-gray-light">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-dark mb-4">Tax Filing Assistance</h3>
                <p className="text-gray-dark mb-6">
                  Free tax preparation help is available for seniors, low-income individuals, and people with disabilities through various programs:
                </p>
                <ul className="list-disc pl-5 text-gray-dark space-y-2 mb-6">
                  <li>Volunteer Income Tax Assistance (VITA)</li>
                  <li>Tax Counseling for the Elderly (TCE)</li>
                  <li>AARP Foundation Tax-Aide</li>
                </ul>
                <div className="flex justify-between items-center">
                  <Button asChild>
                    <a href="https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers">Find Help Near You</a>
                  </Button>
                  <TextToSpeech text="Tax Filing Assistance. Free tax preparation help is available for seniors, low-income individuals, and people with disabilities through various programs including: Volunteer Income Tax Assistance (VITA), Tax Counseling for the Elderly (TCE), and AARP Foundation Tax-Aide." />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-gray-light">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-dark mb-4">Tax Credits</h3>
                <p className="text-gray-dark mb-6">
                  You may be eligible for tax credits that can reduce your taxes or increase your refund:
                </p>
                <ul className="list-disc pl-5 text-gray-dark space-y-2 mb-6">
                  <li>Earned Income Tax Credit</li>
                  <li>Child Tax Credit</li>
                  <li>Credit for the Elderly or Disabled</li>
                  <li>Premium Tax Credit for health insurance</li>
                </ul>
                <div className="flex justify-between items-center">
                  <Button asChild>
                    <a href="https://www.irs.gov/credits-deductions-for-individuals">Learn About Tax Credits</a>
                  </Button>
                  <TextToSpeech text="Tax Credits. You may be eligible for tax credits that can reduce your taxes or increase your refund, including: Earned Income Tax Credit, Child Tax Credit, Credit for the Elderly or Disabled, and Premium Tax Credit for health insurance." />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-16" id="documents">
          <h2 className="text-2xl font-bold text-gray-dark mb-8">Important Documents</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResourceCard 
              title="Birth Certificates"
              description="Information on how to obtain or replace a birth certificate."
              linkText="Get Birth Certificate"
              linkUrl="https://www.usa.gov/replace-vital-documents"
            />
            
            <ResourceCard 
              title="Social Security Cards"
              description="Learn how to replace a lost or stolen Social Security card."
              linkText="Replace Card"
              linkUrl="https://www.ssa.gov/ssnumber/"
            />
            
            <ResourceCard 
              title="ID & Driver's License"
              description="Information about obtaining or renewing state IDs and driver's licenses."
              linkText="ID Information"
              linkUrl="https://www.usa.gov/motor-vehicle-services"
            />
          </div>
        </section>
        
        <section className="bg-purple-light p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mb-4">Need Personal Assistance?</h2>
            <p className="text-lg text-gray-dark mb-6 max-w-2xl mx-auto">
              Local community centers often have staff who can help you navigate government services in person.
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

export default GovernmentServices;
