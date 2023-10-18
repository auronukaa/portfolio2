import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "./container";

const Faq = () => {
  return (
    <div className="text-[#c5c5c5]">
      <Container>
        <div className="px-2 sm:px-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How will my website drive more business for my home remodeling
                company?
              </AccordionTrigger>
              <AccordionContent>
                Your website will become a 24/7 sales ally, attracting clients
                who resonate with your vision. We specialize in crafting
                emotional connections that convert visitors into loyal
                customers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How quickly can I see my new website in action?
              </AccordionTrigger>
              <AccordionContent>
                Your dream website is just around the corner! We work
                efficiently to bring your vision to life. The timeline depends
                on your unique needs, and we&apos;ll guide you every step of the
                way.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What&apos;s the investment for your web design services?
              </AccordionTrigger>
              <AccordionContent>
                Your investment is as unique as your home remodeling projects.
                Let&apos;s discuss your goals, and we&apos;ll provide a tailored
                plan that ensures your website exceeds your expectations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
