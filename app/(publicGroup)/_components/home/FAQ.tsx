import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "What is Prisma Press?",
    answer:
      "Prisma Press is a modern technology blog where developers can learn Next.js, React, Prisma ORM, PostgreSQL, TypeScript, AI Integration, Backend Development, and other software engineering topics through practical articles.",
  },
  {
    question: "Are all articles free to read?",
    answer:
      "No. We provide both free and premium articles. Premium articles require an active subscription to access exclusive tutorials and in-depth guides.",
  },
  {
    question: "How can I become a premium member?",
    answer:
      "Simply visit the Premium page, choose a subscription plan, complete the payment process, and you'll instantly unlock all premium content.",
  },
  {
    question: "Can I publish my own articles?",
    answer:
      "Yes. Registered authors can create, edit, and publish articles through the Author Dashboard after receiving the necessary permissions.",
  },
  {
    question: "What technologies are covered?",
    answer:
      "Our articles cover Next.js, React, TypeScript, Node.js, Express.js, Prisma ORM, PostgreSQL, MongoDB, Tailwind CSS, AI, Authentication, Deployment, and much more.",
  },
  {
    question: "How often is new content published?",
    answer:
      "We regularly publish new tutorials, project guides, and technology updates to keep developers informed with the latest trends.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Badge className="mb-4">FAQ</Badge>

          <h2 className="text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-muted-foreground">
            Everything you need to know about Prisma Press, memberships,
            articles, and publishing.
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-3 shadow-sm">
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground leading-7">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}