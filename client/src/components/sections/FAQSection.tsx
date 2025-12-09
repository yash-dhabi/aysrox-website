import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you write my thesis or paper for me from scratch?",
    answer: "No. We support structure, clarity, editing, and research communication. You remain responsible for the research, data, and core ideas."
  },
  {
    question: "Can you work with teams outside my country?",
    answer: "Yes. We collaborate with universities, startups, corporates, NGOs, and research teams across many regions and adapt to their needs."
  },
  {
    question: "Do you use AI tools in your work?",
    answer: "Yes. We use AI responsibly for structuring and acceleration while all reasoning and final decisions remain human-led."
  },
  {
    question: "How do you price your services?",
    answer: "Pricing depends on complexity and timelines. After a discovery call you receive a fixed fee quote with a clear scope and no hidden charges."
  },
  {
    question: "What kinds of projects do you not take?",
    answer: "We do not assist with ghostwriting of theses or any fabrication of data. We work only with real and ethical research."
  },
  {
    question: "Who is the team behind AysRox Solutions?",
    answer: "Our team includes researchers and domain experts with backgrounds from institutions such as the University of Waterloo, Polytechnique Montréal, Iowa State University, Louisiana Tech University, IIT Roorkee, and BITS Pilani."
  },
  {
    question: "What makes AysRox different from regular writing services?",
    answer: "We focus on research outcomes, reviewer expectations, structured communication, and academic integrity rather than generic writing support."
  },
  {
    question: "How do you maintain confidentiality?",
    answer: "All documents and communication remain private. We do not share, reuse, or expose any client material under any condition."
  },
  {
    question: "What fields of research do you support?",
    answer: "We support engineering, AI, health, science, human factors, policy, environmental studies, and interdisciplinary research areas."
  },
  {
    question: "Do you support urgent deadlines?",
    answer: "Yes. We take priority projects with accelerated timelines while maintaining clarity and quality."
  },
  {
    question: "How do revisions work?",
    answer: "Revisions within the agreed scope are included until the document reaches the required clarity and readiness."
  },
  {
    question: "What if reviewers request changes?",
    answer: "We offer reviewer response support including refinement of sections and clear point-by-point replies."
  },
  {
    question: "Do you guarantee funding or publication?",
    answer: "No organization can guarantee outcomes. We strengthen clarity, logic, and structure to improve competitiveness."
  },
  {
    question: "Do you support long-term collaborations?",
    answer: "Yes. We work with labs, startups, NGOs, and institutes across multiple grant cycles and publication pipelines."
  },
  {
    question: "Can you help convert a thesis into a publication?",
    answer: "Yes. We help transform completed thesis chapters into manuscripts suitable for journals or conferences."
  },
  {
    question: "How do contracts and payments work?",
    answer: "Each project begins with a clear scope, fixed fee, and timeline so expectations remain transparent and predictable."
  }
];

export function FAQSection() {
  return (
    <section id="faqs" className="section-padding bg-white">
      <div className="container-width max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-50/50 border border-gray-200 rounded-lg px-6 hover:bg-gray-50 transition"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-center text-gray-600 mt-12 text-sm">
          Still have questions?{" "}
          <a href="#contact" className="font-medium text-primary underline-offset-4 hover:underline">
            Book a free call
          </a>{" "}
          — we’re happy to help.
        </p>
      </div>
    </section>
  );
}