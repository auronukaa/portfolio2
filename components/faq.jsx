import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "./container";

const Faq = () => {
  return (
    <div className="w-full mt-10 sm:mt-20 mb-20 sm:mb-32">
      <Container>
        <div className="mb-14">
          <p className="text-md lg:text-xl text-[#C5C5C5] tracking-tight w-full text-center leading-tight pb-2">
            Frequently Asked Questions
          </p>
          <h2 className="capitalize text-[24px] sm:text-5xl font-bold text-white tracking-tight w-full text-center leading-tight pb-5">
            Your Questions , <span className="text-yellow-400">Answered</span>
          </h2>
        </div>
        <div className="px-4 pb-20 sm:px-0 w-full flex items-center justify-center">
          <Accordion type="single" collapsible className="w-full sm:w-[80%]">
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
            <AccordionItem value="item-4">
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
