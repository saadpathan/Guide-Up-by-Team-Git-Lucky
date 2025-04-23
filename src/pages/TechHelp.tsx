
import { Hero } from "@/components/Hero";
import { LargeTextToggle } from "@/components/LargeTextToggle";
import { TextToSpeech } from "@/components/TextToSpeech";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TechHelp = () => {
  return (
    <div>
      <Hero 
        title="Technology Help"
        subtitle="Learn the basics of using computers, smartphones, and the internet with our simple guides."
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-6">
          <LargeTextToggle />
        </div>
        
        <section className="mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-light">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-dark">Technology Basics</h2>
              <TextToSpeech text="Technology Basics. This page provides simple guides to help you learn how to use computers, smartphones, the internet, email, and stay safe online." />
            </div>
            <p className="text-lg text-gray-dark mb-6">
              Technology can seem complicated, but it doesn't have to be. Our simple guides will help you learn the basics at your own pace.
            </p>
          </div>
        </section>
        
        <section className="mb-16">
          <Tabs defaultValue="basics" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="basics" className="text-lg py-3">Computer Basics</TabsTrigger>
              <TabsTrigger value="internet" className="text-lg py-3">Internet Skills</TabsTrigger>
              <TabsTrigger value="email" className="text-lg py-3">Email Help</TabsTrigger>
              <TabsTrigger value="safety" className="text-lg py-3">Online Safety</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basics" className="mt-6">
              <h2 className="text-2xl font-bold text-gray-dark mb-8" id="basics">Computer & Smartphone Basics</h2>
              
              <div className="space-y-8">
                <Card className="border-2 border-gray-light">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-dark mb-4">Using a Computer</h3>
                    <p className="text-gray-dark mb-4">
                      New to computers? Here are some basic skills to help you get started:
                    </p>
                    <ul className="list-disc pl-5 text-gray-dark space-y-3 mb-6">
                      <li>How to turn a computer on and off safely</li>
                      <li>Using a mouse and keyboard</li>
                      <li>Understanding icons and the desktop</li>
                      <li>Opening and closing programs</li>
                      <li>Saving and finding files</li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <Button>Watch Tutorial Video</Button>
                      <TextToSpeech text="Using a Computer. New to computers? Here are some basic skills to help you get started: How to turn a computer on and off safely, Using a mouse and keyboard, Understanding icons and the desktop, Opening and closing programs, Saving and finding files." />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-gray-light">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-dark mb-4">Using a Smartphone or Tablet</h3>
                    <p className="text-gray-dark mb-4">
                      Learn the basics of using touch screen devices:
                    </p>
                    <ul className="list-disc pl-5 text-gray-dark space-y-3 mb-6">
                      <li>Turning your device on and off</li>
                      <li>Using touch gestures (tap, swipe, pinch)</li>
                      <li>Installing and using apps</li>
                      <li>Adjusting settings</li>
                      <li>Taking photos and videos</li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <Button>Watch Tutorial Video</Button>
                      <TextToSpeech text="Using a Smartphone or Tablet. Learn the basics of using touch screen devices: Turning your device on and off, Using touch gestures like tap, swipe, and pinch, Installing and using apps, Adjusting settings, Taking photos and videos." />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="internet" className="mt-6">
              <h2 className="text-2xl font-bold text-gray-dark mb-8" id="internet">Internet Skills</h2>
              
              <div className="space-y-8">
                <Card className="border-2 border-gray-light">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-dark mb-4">Web Browsing</h3>
                    <p className="text-gray-dark mb-4">
                      Learn how to navigate the internet safely and effectively:
                    </p>
                    <ul className="list-disc pl-5 text-gray-dark space-y-3 mb-6">
                      <li>Opening a web browser (like Chrome, Firefox, or Edge)</li>
                      <li>Visiting websites using web addresses</li>
                      <li>Using search engines to find information</li>
                      <li>Understanding browser tabs</li>
                      <li>Bookmarking favorite websites</li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <Button>Watch Tutorial Video</Button>
                      <TextToSpeech text="Web Browsing. Learn how to navigate the internet safely and effectively: Opening a web browser like Chrome, Firefox, or Edge, Visiting websites using web addresses, Using search engines to find information, Understanding browser tabs, Bookmarking favorite websites." />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-gray-light">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-dark mb-4">Finding Information Online</h3>
                    <p className="text-gray-dark mb-4">
                      Tips for finding trustworthy information on the internet:
                    </p>
                    <ul className="list-disc pl-5 text-gray-dark space-y-3 mb-6">
                      <li>Using search engines effectively</li>
                      <li>Evaluating if a website is reliable</li>
                      <li>Finding government and official resources</li>
                      <li>Using Wikipedia and other reference sites</li>
                      <li>Finding information about local services</li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <Button>Search Tips Guide</Button>
                      <TextToSpeech text="Finding Information Online. Tips for finding trustworthy information on the internet: Using search engines effectively, Evaluating if a website is reliable, Finding government and official resources, Using Wikipedia and other reference sites, Finding information about local services." />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="email" className="mt-6">
              <h2 className="text-2xl font-bold text-gray-dark mb-8" id="email">Email Assistance</h2>
              
              <div className="space-y-8">
                <Card className="border-2 border-gray-light">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-dark mb-4">Email Basics</h3>
                    <p className="text-gray-dark mb-4">
                      Learn how to use email to stay connected:
                    </p>
                    <ul className="list-disc pl-5 text-gray-dark space-y-3 mb-6">
                      <li>Creating an email account</li>
                      <li>Sending and receiving emails</li>
                      <li>Adding attachments</li>
                      <li>Managing your inbox</li>
                      <li>Creating and using contacts</li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <Button>Email Tutorial</Button>
                      <TextToSpeech text="Email Basics. Learn how to use email to stay connected: Creating an email account, Sending and receiving emails, Adding attachments, Managing your inbox, Creating and using contacts." />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-gray-light">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-dark mb-4">Video Calling</h3>
                    <p className="text-gray-dark mb-4">
                      Connect face-to-face with family and friends using video calls:
                    </p>
                    <ul className="list-disc pl-5 text-gray-dark space-y-3 mb-6">
                      <li>Setting up video calling apps</li>
                      <li>Making and receiving video calls</li>
                      <li>Group video calls with multiple people</li>
                      <li>Troubleshooting common issues</li>
                      <li>Video calling etiquette</li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <Button>Video Call Guide</Button>
                      <TextToSpeech text="Video Calling. Connect face-to-face with family and friends using video calls: Setting up video calling apps, Making and receiving video calls, Group video calls with multiple people, Troubleshooting common issues, Video calling etiquette." />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="safety" className="mt-6">
              <h2 className="text-2xl font-bold text-gray-dark mb-8" id="safety">Online Safety</h2>
              
              <div className="space-y-8">
                <Card className="border-2 border-gray-light">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-dark mb-4">Internet Safety Basics</h3>
                    <p className="text-gray-dark mb-4">
                      Important tips to stay safe while using the internet:
                    </p>
                    <ul className="list-disc pl-5 text-gray-dark space-y-3 mb-6">
                      <li>Creating strong passwords</li>
                      <li>Recognizing scams and phishing attempts</li>
                      <li>Protecting personal information</li>
                      <li>Safe online shopping</li>
                      <li>Avoiding suspicious websites</li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <Button>Safety Guide</Button>
                      <TextToSpeech text="Internet Safety Basics. Important tips to stay safe while using the internet: Creating strong passwords, Recognizing scams and phishing attempts, Protecting personal information, Safe online shopping, Avoiding suspicious websites." />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-gray-light">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-dark mb-4">Common Scams to Avoid</h3>
                    <p className="text-gray-dark mb-4">
                      Learn to recognize and avoid common internet scams:
                    </p>
                    <ul className="list-disc pl-5 text-gray-dark space-y-3 mb-6">
                      <li>Email and phone scams</li>
                      <li>Fake websites and offers</li>
                      <li>"Tech support" scams</li>
                      <li>Social media scams</li>
                      <li>What to do if you think you've been scammed</li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <Button>Scam Prevention Tips</Button>
                      <TextToSpeech text="Common Scams to Avoid. Learn to recognize and avoid common internet scams: Email and phone scams, Fake websites and offers, Tech support scams, Social media scams, What to do if you think you've been scammed." />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-dark mb-8">In-Person Help</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-gray-light">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-dark mb-4">Technology Workshops</h3>
                <p className="text-gray-dark mb-6">
                  Many libraries and senior centers offer free technology workshops where you can learn:
                </p>
                <ul className="list-disc pl-5 text-gray-dark space-y-2 mb-6">
                  <li>Computer basics for beginners</li>
                  <li>Internet and email skills</li>
                  <li>Smartphone and tablet usage</li>
                  <li>Online safety and privacy</li>
                </ul>
                <Button>Find Local Workshops</Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-gray-light">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-dark mb-4">One-on-One Tech Help</h3>
                <p className="text-gray-dark mb-6">
                  Get personalized technology assistance from trained volunteers who can help with:
                </p>
                <ul className="list-disc pl-5 text-gray-dark space-y-2 mb-6">
                  <li>Setting up new devices</li>
                  <li>Learning specific skills</li>
                  <li>Troubleshooting problems</li>
                  <li>Answering your technology questions</li>
                </ul>
                <Button>Request Tech Help</Button>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="bg-purple-light p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-dark mb-6 max-w-2xl mx-auto">
              Our tech help line is available Monday through Friday from 9:00 AM to 5:00 PM.
            </p>
            <div className="bg-white py-4 px-6 rounded-lg inline-block">
              <p className="text-purple font-bold text-xl">Call: 1-800-555-TECH</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechHelp;
