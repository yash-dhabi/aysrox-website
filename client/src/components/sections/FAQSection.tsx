import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you write the research for us?",
    answer: "No. We are not a ghostwriting service for unearned credentials. We work with your raw data, drafts, and ideas to structure, refine, and articulate them professionally. You remain the author and subject matter expert."
  },
  {
    question: "Which disciplines do you support?",
    answer: "We have experience across Life Sciences, Engineering, AI/Data Science, Social Sciences, and Public Health. Our team matches subject matter expertise to your project."
  },
  {
    question: "How do you handle confidentiality?",
    answer: "We sign strict NDAs with all clients. Your data and intellectual property are never shared or used for other purposes."
  },
  {
    question: "Can you help with funding in India?",
    answer: "Yes, we have specialized knowledge of the Indian R&D ecosystem (DST, DBT, BIRAC, etc.) as well as global funding bodies (NIH, Horizon Europe, Gates Foundation)."
  }
];

export function FAQSection() {
  return (
    <section id="faqs" className="section-padding bg-white">
      <div className="container-width max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
