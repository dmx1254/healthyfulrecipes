import React from "react";
import { NavUrls, SubCatUrl } from "@/lib/type";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MobileAccordion = ({ nav }: { nav: NavUrls<SubCatUrl> }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="text-base" showIcon={false}>{nav.title}</AccordionTrigger>
        {/* <div className="flex flex-col items-start gap-2">
          {nav.subcategory.map((subcat) => (
            <AccordionContent key={subcat.subCatId}>
              {subcat.name}
            </AccordionContent>
          ))}
        </div> */}
      </AccordionItem>
    </Accordion>
  );
};

export default MobileAccordion;
