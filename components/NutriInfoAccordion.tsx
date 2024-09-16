"use client";

import React, { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NutritionFact, NutritionInformation } from "@/lib/type";

const NutriInfoAccordion = ({
  nutriInfo,
  nutriFact,
  perServing,
}: {
  nutriInfo: NutritionInformation[];
  nutriFact: NutritionFact[];
  perServing: string;
}) => {
  const checkIsItemExist = (itemSearch: string) => {
    const itemExist = nutriFact.find((item) => item.nutriFact === itemSearch);
    return itemExist;
  };
  const [nutritionOpen, setNutritionOpen] = useState(false);
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full shadow-none"
      onValueChange={(value) => setNutritionOpen(value === "item-1")}
    >
      <AccordionItem value="item-1" className="w-full border-none">
        <AccordionTrigger className="text-base" showIcon={false}>
          {nutritionOpen ? "Hide" : "Show"} Full Nutrition Label
        </AccordionTrigger>
        <AccordionContent className="border border-zinc-400 p-6">
          <div className="flex flex-col items-start gap-2">
            <p className="text-lg font-bold">Nutrition Facts</p>
            <div className="flex flex-col items-start gap-1 text-base mb-4">
              {perServing && <span>Per Serving: {perServing}</span>}
              <span>Protein: {checkIsItemExist("Protein")?.amount}</span>
              <span>Calories: {checkIsItemExist("Calories")?.amount}</span>
            </div>
          </div>
          <div className="text-base w-full flex flex-col items-start gap-3">
            <div className="w-full my-2 py-2 flex items-end justify-end border-b border-t border-gray-200">
              % Daily Value *
            </div>
            {nutriInfo.map((item) => (
              <div
                key={item._id}
                className="w-full text-base border-b pb-2 border-gray-200 flex items-center justify-between"
              >
                <span>
                  <strong>{item.nutrition}</strong>: {item.amount}
                </span>
                <span>{item.percent}%</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start gap-2 mt-4">
            <p className="text-sm/7 text-zinc-500">
              Nutrition information is calculated by a registered dietitian
              using an ingredient database but should be considered an estimate.
            </p>
            <p className="text-sm/7 text-zinc-500">
              * Daily Values (DVs) are the recommended amounts of nutrients to
              consume each day. Percent Daily Value (%DV) found on nutrition
              labels tells you how much a serving of a particular food or recipe
              contributes to each of those total recommended amounts. Per the
              Food and Drug Administration (FDA), the daily value is based on a
              standard 2,000 calorie diet. Depending on your calorie needs or if
              you have a health condition, you may need more or less of
              particular nutrients. (For example, it’s recommended that people
              following a heart-healthy diet eat less sodium on a daily basis
              compared to those following a standard diet.)
            </p>
            <p className="text-sm/7 text-zinc-500">
              (-) Information is not currently available for this nutrient. If
              you are following a special diet for medical reasons, be sure to
              consult with your primary care provider or a registered dietitian
              to better understand your personal nutrition needs.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default NutriInfoAccordion;
