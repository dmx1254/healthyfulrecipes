"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { generateCode } from "@/lib/utils";
import {
  createNewArticle,
  createNewCat,
  createNewPost,
} from "@/lib/actions/posts";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  slug: z.string().min(5, {
    message: "Slug must be at least 2 characters.",
  }),
});

export function CategoryForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    // const data = {
    //   ...values,
    //   catId: generateCode(),
    // };
    // console.log(data);

    const catData = {
      title: "News",
      slug: "news",
      catId: generateCode(),
      subcategory: "studies-experts",
    };

    const postData = {
      title: "Parmesan Bubble Cauliflower Has a Perfect Crispy Exterior",
      category: "66e5a083026646bb9e5dbf1f",
      postId: generateCode(),
      postCat: "healthy-recipes",
      slug: "crispy-parmesan-bubble-cauliflower",
      postImage: "",
      nutritions: [
        "No Added Sugar",
        "Sesame-Free",
        "Nut-Free",
        "Soy-Free",
        "Vegetarian",
        "Egg-Free",
        "Gluten-Free",
      ],
      descriptions: [
        "These crispy cauliflower bites were inspired by the viral TikTok trend Bubble Potatoes. This version replaces the potato with cauliflower but sticks to the combination of rice flour and potato starch to ensure a crispy outside and creamy, tender inside. Serve these cauliflower bites with your favorite dipping sauce.",
      ],

      steps: [
        {
          title: "Step1",
          descriptions:
            "Combine cauliflower and ¼ cup water in a large microwave-safe bowl; cover and microwave on High until the florets are easily pierced with a fork, about 5 minutes. Drain.",
          stepImage: "",
        },
        {
          title: "Step2",
          descriptions:
            "Transfer the cauliflower to a food processor; process until very finely chopped and almost smooth, 30 seconds to 1 minute, scraping down sides of bowl as needed. Transfer to a clean kitchen towel and squeeze as dry as possible. Place in a medium bowl. Add ½ cup Parmesan, 2 tablespoons potato starch, 1 tablespoon mochiko, ¾ teaspoon garlic-herb seasoning, ½ teaspoon pepper and ¼ teaspoon paprika; stir until thick and smooth.",
          stepImage: "",
        },
        {
          title: "Step3",
          descriptions:
            "Transfer the mixture to a long sheet of plastic wrap on a cutting board; shape into a 10½-by-1½-inch log; wrap tightly with the plastic wrap. Place on a large baking sheet or plate; freeze until firm but not frozen, about 30 minutes.",
          stepImage: "",
        },
        {
          title: "Step4",
          descriptions:
            "Line a baking sheet with paper towels and place a wire rack on it. Add oil to a depth of 1 inch (about 3 cups) in a Dutch oven or heavy-bottomed pot. Heat the oil over medium heat until it reaches 350°F.",
          stepImage: "",
        },
        {
          title: "Step5",
          descriptions:
            "Cut the cauliflower log into about 16 (½-inch-thick) pieces. Add about one-third of the pieces to the hot oil; cook, stirring once or twice, until browned, 30 seconds to 1 minute. (Be careful, these get dark quickly!) Transfer to the prepared rack. Repeat with the remaining 2 batches of cauliflower pieces. Sprinkle with ⅛ teaspoon salt.",
          stepImage: "",
        },
        {
          title: "Step6",
          descriptions:
            "Transfer cauliflower to a serving plate. Garnish with parsley, if desired.",
          stepImage: "",
        },
      ],
      nutritionFact: [
        { nutriFact: "Calories", amount: 314 },
        { nutriFact: "Fat", amount: 3 },
        // { nutriFact: "Carbs", amount: 33 },
        { nutriFact: "Protein", amount: 7 },
      ],
      perServing: "4 pieces",

      nutritionsImage: [],

      ingredients: [
        {
          qty: "16",
          title: "ounces cauliflower florets (about 4 cups)",
        },
        {
          qty: "1/4",
          title: "cup water",
        },
        {
          qty: "1/2",
          title: "cup grated Parmesan cheese",
        },
        {
          qty: "1",
          title: "tablespoon mochiko (sweet rice flour)",
        },
        {
          qty: "3/4",
          title: "teaspoon salt-free garlic-herb seasoning",
        },
        {
          qty: "1/2",
          title: "teaspoon ground pepper",
        },
        {
          qty: "1/4",
          title: "teaspoon smoked paprika",
        },
        {
          qty: "3",
          title: "cups canola oil, for frying",
        },
        {
          qty: "1/8",
          title: "teaspoon salt",
        },
        {
          qty: "0",
          title: "Chopped fresh flat-leaf parsley for garnish (optional)",
        },
        // {
        //   qty: "1",
        //   title: "small clove garlic, minced",
        // },
        // {
        //   qty: "0",
        //   title:
        //     "Toasted sesame seeds or toasted sliced almonds for garnish (optional)",
        // },
        // {
        //   qty: "1/2",
        //   title: "medium red bell pepper, cut into 1-inch pieces",
        // },
        // {
        //   qty: "1/2",
        //   title: "large avocado, diced",
        // },
        // {
        //   qty: "2",
        //   title: "stalks celery, thinly sliced",
        // },
        // {
        //   qty: "1/2",
        //   title: "cup arugula",
        // },
        // {
        //   qty: "3",
        //   title: "tablespoons unsalted roasted cashews, roughly chopped",
        // },
      ],
      nutritionInformations: [
        {
          nutrition: "Calories",
          amount: "240g",
          percent: 0,
        },
        {
          nutrition: "Fat",
          amount: "18g",
          percent: 0,
        },
        {
          nutrition: "Saturated Fat",
          amount: "3g",
          percent: 0,
        },
        {
          nutrition: "Cholesterol",
          amount: "12mg",
          percent: 0,
        },
        {
          nutrition: "Carbohydrates",
          amount: "15g",
          percent: 0,
        },
        {
          nutrition: "Total Sugars",
          amount: "2g",
          percent: 8,
        },
        {
          nutrition: "Added Sugars",
          amount: "0g",
          percent: 0,
        },
        {
          nutrition: "Protein",
          amount: "6g",
          percent: 0,
        },
        {
          nutrition: "Fiber",
          amount: "2g",
          percent: 0,
        },
        {
          nutrition: "Sodium",
          amount: "364mg",
          percent: 0,
        },
        {
          nutrition: "Potassium",
          amount: "383mg",
          percent: 0,
        },
        // {
        //   nutrition: "Folate",
        //   amount: "49Âµg",
        //   percent: 0,
        // },
        // {
        //   nutrition: "Vitamin K",
        //   amount: "71Âµg",
        //   percent: 0,
        // },
        // {
        //   nutrition: "Sodium",
        //   amount: "351mg",
        //   percent: 15,
        // },
        // {
        //   nutrition: "Calcium",
        //   amount: "59mg",
        //   percent: 5,
        // },

        // {
        //   nutrition: "Iron",
        //   amount: "2mg",
        //   percent: 12,
        // },
        // {
        //   nutrition: "Magnesium",
        //   amount: "88mg",
        //   percent: 21,
        // },
        // {
        //   nutrition: "Potassium",
        //   amount: "494mg",
        //   percent: 11,
        // },
        // {
        //   nutrition: "Zinc",
        //   amount: "2mg",
        //   percent: 15,
        // },
        // {
        //   nutrition: "Zinc",
        //   amount: "2mg",
        //   percent: 0,
        // },
        // {
        //   nutrition: "Omega 3",
        //   amount: "0g",
        //   percent: 0,
        // },
      ],

      activeInfos: [
        {
          prepTime: "",
          activeTime: "20 mins",
          totalTime: "50 mins",
          servings: "4",
          yield: "",
        },
      ],
    };

    const articleData = {
      title: "The #1 Nut for Better Blood Sugar, According to Dietitians",
      desc: "Need some help balancing blood sugar levels? Snack on more of these nuts, which are full of healthy fat.",
      slug: "best-nut-for-better-blood-sugar",
      imageArt:
        "data:image/webp;base64,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",
      subCat: "diabetes-diet-center",
      imageDesc:
        "Foods that contain fiber, protein and healthy fat are known to be a nutrient trifecta that can slow down the rise in blood sugar that occurs after you eat. Nuts happen to have all three. “Nuts are big nutrition in small packages,” says Annette Snyder, M.S., RDN, a registered dietitian with Top Nutrition Coaching.  Managing blood sugar is beneficial for everyone since doing so helps maintain more stable energy levels throughout the day. Snyder notes that one scientific review found that including nuts in your eating pattern may help with steady blood sugar.1 “Nuts are identified as a beneficial piece of the blood sugar puzzle with type 2 diabetes. One particular study in the review included findings of lower fasting blood sugar in those with the highest intake of nuts,” she explains. Additional findings included lower rates of insulin resistance and insulin levels, as well as lower hemoglobin A1C (average blood sugar over a 3-month period) with nut consumption.  But which nut is best? Well, the best nut for you is the one you like and want to eat regularly. If you’re open to suggestions, our dietitians have some great insight. Their number one pick? Pecans. Read on to learn why—plus other blood sugar-friendly nuts to munch on.",
      articleID: generateCode(),
      articlePosts: [
        {
          articleTitle: "The Benefits of Pecans for Blood Sugar",
          subarticleTitle: "",
          articleImage: "",
          articleDesc:
            "“When I consider the nutrition facts of a few different nuts, I would put pecans as least likely to raise blood sugar levels,” says Lenora Vatamaniuck, RD, a registered dietitian based in Saskatchewan, Canada. “Pecans have what I would consider a lower protein and carbohydrate content and higher fat content than several other common nuts,” she explains. Here’s more about what makes them a good pick.",
          articleIngredients: [""],
          articleTotal: "",
          articleSubTitle: [
            {
              title: "Source of Good Fat",
              description:
                "Nuts contain a variety of unsaturated fats, which are considered heart-healthy fats. And pecans have more fat than other nuts—and that can be a good thing. Just 1 ounce of pecans (19 halves) contains 20 grams of total fat.2 Fat is an important nutrient that your body uses to make hormones, absorb certain vitamins and keep your blood sugar stable, among other functions.",
            },
            {
              title: "High in Fiber",
              description:
                "High-fiber foods like pecans can help you maintain steady blood sugar levels as well. Fiber is a type of carbohydrate. Because it isn’t digested by your body, it has a beneficial impact on your blood sugar.4 “Fiber helps slow the breakdown and release of carbohydrates into the blood—helpful in preventing rapid blood sugar spikes,” says Snyder. An ounce of pecans provides just under 3 g of fiber.",
            },
            {
              title: "Supplies Some Protein",
              description:
                "Protein breaks down into amino acids, not glucose, causing a minimal effect on blood sugar levels.Eating an ounce of pecans contains about 2.5 g of protein, making it a good addition to other protein-rich foods in your daily meals. We love them in our Nut & Berry Parfait and Maple Pecan-Rosemary Salmon.",
            },
          ],
        },

        {
          articleTitle: "Other Nuts for Healthy Blood Sugar",
          subarticleTitle: "",
          articleImage: "",
          articleDesc:
            "In addition to pecans, our dietitians recommended several other nuts for their impressive nutrient profiles. If you’re looking for quality whole foods that won’t spike your blood sugar, here are a few more nuts to try:",
          articleIngredients: [""],
          articleTotal: "",
          articleSubTitle: [
            {
              title: "Macadamia nuts",
              description:
                "Vatamaniuk picks macadamias as her second option because these nuts are high in fat and low in carbs, making them a great choice for anyone looking to avoid blood sugar spikes. One ounce (10 to 12 kernels) contains less than 4 g of carbs and over 20 g of healthy fat.",
            },
            {
              title: "Almonds",
              description:
                "Snyder recommends almonds, which are perhaps the most-studied nuts. And research shows that almonds, with their high fat and low carbohydrate content, are associated with healthier blood sugar levels.",
            },
            {
              title: "Brazil nuts",
              description:
                "Brazil nuts are large, and just two contain about 1 g of carbs, which will have minimal effects on your blood sugar response. As a bonus, Brazil nuts are one of the foods highest in selenium, a mineral important for thyroid health.Getting too much selenium can be harmful, so consume no more than three Brazil nuts per day.",
            },
          ],
        },

        {
          articleTitle: "The Bottom Line",
          subarticleTitle: "",
          articleImage: "",
          articleDesc:
            "Nuts are whole foods that have many health benefits, but they are especially helpful for people with metabolic diseases like insulin resistance or type 2 diabetes. Even if you’re not actively monitoring your glucose levels, eating high-fat nuts like pecans during the day can be beneficial in helping keep your blood sugar stable. One word of caution: Nuts, including pecans, are a calorie-dense food. If your goal is weight loss, choose a serving size that fits your eating plan.",
          articleIngredients: [""],
          articleTotal: "",
          articleSubTitle: [
            {
              title: "",
              description: "",
            },
          ],
        },

        // {
        //   articleTitle: "Frozen Corn",
        //   subarticleTitle: "",
        //   articleImage: "",
        //   articleDesc:
        //     "Corn is a perfect side dish because it is both a whole grain and a vegetable. When eaten in moderation, corn kernels are also a low- to moderate-glycemic food, meaning they are less likely to induce sudden spikes in blood sugar.8 You may be surprised that 1 cup of cooked frozen corn has 4 grams of fiber, making it an excellent grain choice to accompany a lean protein of choice.9 Our Skillet Corn recipe makes a tasty and sweet side in 20 minutes.",
        //   articleIngredients: [""],
        //   articleTotal: "",
        // },
        // {
        //   articleTitle: "Frozen Cauliflower Rice",
        //   subarticleTitle: "",
        //   articleImage: "",
        //   articleDesc:
        //     "Cauliflower rice is a great alternative to grains if you are keeping an eye on your blood sugar. Each 3-ounce portion of uncooked cauliflower has 2 grams of fiber and 4 grams of carbs.10 While you can make your own cauliflower rice from scratch, a frozen bag from the store cuts down on prep time if you are in a hurry. These 17 recipe ideas with cauliflower rice can inspire you to make delicious pilafs, fried rice, casseroles, burrito bowls and many more.",
        //   articleIngredients: [""],
        //   articleTotal: "",
        // },
        // {
        //   articleTitle: "Frozen Berries",
        //   subarticleTitle: "",
        //   articleImage: "",
        //   articleDesc:
        //     "Frozen berries—blueberries, raspberries, strawberries, blackberries and mixed berries—are picked and frozen when they are most ripe. Berries are excellent for managing blood sugar because of their fiber content, offering, on average, 3 grams of fiber for every cup.11 Thaw berries as a topping for Multi-Grain Waffles or toss into smoothies, nice cream, yogurt and oatmeal.",
        //   articleIngredients: [""],
        //   articleTotal: "",
        // },
        // {
        //   articleTitle: "Frozen Avocado",
        //   subarticleTitle: "",
        //   articleImage: "",
        //   articleDesc:
        //     "Avocados are packed with unsaturated fats that promote heart health. They are also an excellent fruit because they have little impact on blood sugar levels—1/2 cup of frozen avocado has 4 grams of fiber.12 The downside of fresh whole avocados is that they don't last very long at room temperature before they turn soft and brown. Frozen is a perfect alternative if you would like to cut down on food waste while offering the same delicious taste in your recipes, especially when it comes to smoothies.",
        //   articleIngredients: [""],
        //   articleTotal: "",
        // },
        // {
        //   articleTitle: "Frozen Fish",
        //   subarticleTitle: "",
        //   articleImage: "",
        //   articleDesc:
        //     "Protein helps slow digestion and blunts carb and sugar absorption, stabilizing blood sugar levels. Lean options like fish are excellent to include in a balanced meal pattern. Specifically, plain frozen fish like salmon and cod are full of nutrients. They are also a source of omega-3 fats, and 3 ounces of cooked salmon and cod contain 21 and 17 grams of protein, respectively.1314 Not only that, many frozen fillets are pre-portioned and quick to thaw, saving on meal prep time.",
        //   articleIngredients: [""],
        //   articleTotal: "",
        // },
        // {
        //   articleTitle: "Frozen Fish",
        //   subarticleTitle: "",
        //   articleImage: "",
        //   articleDesc:
        //     "Protein helps slow digestion and blunts carb and sugar absorption, stabilizing blood sugar levels. Lean options like fish are excellent to include in a balanced meal pattern. Specifically, plain frozen fish like salmon and cod are full of nutrients. They are also a source of omega-3 fats, and 3 ounces of cooked salmon and cod contain 21 and 17 grams of protein, respectively.1314 Not only that, many frozen fillets are pre-portioned and quick to thaw, saving on meal prep time.",
        //   articleIngredients: [""],
        //   articleTotal: "",
        // },
        // {
        //   articleTitle: "Frozen Shrimp",
        //   subarticleTitle: "",
        //   articleImage: "",
        //   articleDesc:
        //     "If you love seafood, pick up a bag or two of frozen shrimp on your next grocery run. Shrimps are quick to defrost, and are packed with protein. Three ounces of cooked shrimp has 20 grams of protein.15 Pair shrimp with your favorite whole-grain pasta to make Creamy Lemon Pasta with Shrimp, grill to make shrimp tacos or pair with frozen spinach to make One-Pot Garlicky Shrimp & Spinach.",
        //   articleIngredients: [""],
        //   articleTotal: "",
        // },
        // {
        //   articleTitle: "Frozen Shrimp",
        //   subarticleTitle: "",
        //   articleImage: "",
        //   articleDesc:
        //     "This plant-based protein is an excellent source of protein and fiber, boasting 18 grams of protein and 8 grams of fiber per cup.16 Edamame also has a relatively low glycemic load due to its high fiber and protein content, making it an ideal plant-based protein that won’t drastically raise blood sugar levels. Add edamame to your favorite stir-fry, boil it and toss into salads (try our Cabbage, Tofu & Edamame Salad or boil and blend to make Edamame Hummus.",
        //   articleIngredients: [""],
        //   articleTotal: "",
        // },
        // {
        //   articleTitle: "Afternoon Snack",
        //   subarticleTitle: "Sample Snack:",
        //   articleImage: "",
        //   articleDesc: "",
        //   articleIngredients: [
        //     "1 cup cucumber slices (16 calories)",
        //     "1/4 cup Garlic Hummus (151 calories)"

        //   ],
        //   articleTotal: "TOTAL: 167 calories",
        // },
        // {
        //   articleTitle: "Dinner on a 2,000-Calorie Meal Plan",
        //   subarticleTitle: "Sample Dinner:",
        //   articleImage: "",
        //   articleDesc: "",
        //   articleIngredients: [
        //     "Taco Spaghetti Squash Boats (553 calories)",
        //     "2 cups mixed greens (18 calories)",
        //     "1 Tbsp. Citrus Vinaigrette (65 calories)",

        //   ],
        //   articleTotal: "TOTAL: 636 calories",
        // },
        // {
        //   articleTitle: "Evening Snack",
        //   subarticleTitle: "Sample Snack:",
        //   articleImage: "",
        //   articleDesc: "",
        //   articleIngredients: [
        //     "3/4 cup Strawberry-Mango Nice Cream (70 calories)",

        //   ],
        //   articleTotal: "TOTAL: 70 calories",
        // },
      ],
    };

    // export type Article = {
    //     title: string;
    //     desc: string;
    //     slug: string;
    //     articleID: string;
    //     articlePosts: ISiArticle[];
    //   };

    //   type ISiArticle = {
    //     articleTitle: string;
    //     SubarticleTitle: string;
    //     articleImage: string;
    //     articleDesc: string;
    //     articleIngredients: string[];
    //     articleTotal: string;
    //   };

    // console.log(postData);

    try {
      // const response = await createNewPost(postData);
      //   const response = await createNewCat(catData);
      const response = await createNewArticle(articleData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>title</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display title.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>slug</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display slug.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
