import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can GuideUp help me access government services?",
    answer: "GuideUp provides step-by-step guides to help you navigate various government websites and applications. We break down complex processes into simple, easy-to-follow instructions, making it easier to access services like Medicare, Social Security, and other government benefits."
  },
  {
    question: "Is GuideUp free to use?",
    answer: "Yes, GuideUp is completely free to use. Our mission is to make digital resources accessible to everyone, especially senior citizens and low-income families. We don't charge any fees for our services."
  },
  {
    question: "How can I get help with technology?",
    answer: "Our Technology Help section provides easy-to-understand guides for using computers, smartphones, and the internet. You can also find local tech support resources and community programs that offer in-person assistance."
  },
  {
    question: "What kind of healthcare resources can I find on GuideUp?",
    answer: "GuideUp helps you find healthcare providers, understand insurance options, and access wellness resources. We provide information about Medicare, Medicaid, and other healthcare assistance programs available in your area."
  },
  {
    question: "How can I stay updated with new resources and features?",
    answer: "We regularly update our content with new resources and features. You can check back often, or sign up for our newsletter to receive updates about new guides, resources, and community events."
  }
];

export const FAQ = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border rounded-lg px-4 sm:px-6"
          >
            <AccordionTrigger className="text-base sm:text-lg py-3 sm:py-4 hover:no-underline text-center justify-center">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-3 sm:pb-4 text-center">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}; 