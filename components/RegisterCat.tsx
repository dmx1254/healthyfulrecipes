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

    // const catData = {
    //   title: "Healthy Eating",
    //   slug: "healthy-eating",
    //   catId: generateCode(),
    //   subcategory: "How to eat healthy",
    // };

    const postData = {
      title: "Why September Is the Best Month to Buy Fruit at Costco",
      category: "66f750e808b810a311b00230",
      postId: generateCode(),
      postCat: "healthy-eating",
      slug: "best-costco-fruit-september",
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
        "From blueberries to bananas, fruit is plentiful at Costco right now.",
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
      title: "Is Corn a Vegetable, a Fruit or a Grain? Here's What a Dietitian Has to Say",
      desc: "Corn season is here! The first thing you need to know about this summertime staple is ... well, what it is, anyway. Here, a registered dietitian breaks it all down—and the answer might surprise you.",
      slug: "is-corn-a-vegetable-is-corn-a-fruit-is-corn-gluten-free",
      imageArt:
        "",
      subCat: "healthy-eating",
      imageDesc:
        "Did you know the U.S. is the leading corn consumer worldwide, with an annual corn consumption of more than 12 billion bushels, according to Statistica? While much of that is used for making ethanol or for animal feed, we do eat a lot of it, whether it's in the form of corn on the cob, as popcorn or as an additive, such as high-fructose corn syrup, in processed foods.  Honestly, there's a lot of confusion around corn—namely, what type of food it is. Is corn a vegetable? Is corn a fruit? Is corn a grain? How do you count it in your meals when you're aiming to make a healthy meal?  Keep reading to find out exactly what it is. The answer will probably surprise you.",
      articleID: generateCode(),
      articlePosts: [
        {
          articleTitle: "Is Corn a Fruit, Vegetable or Grain?",
          subarticleTitle: "",
          articleImage: "",
          articleDesc:
            "Spoiler: Corn is a combination of all three—a fruit, a grain and a vegetable.  According to the USDA, though, corn can be considered a vegetable or a grain, depending on a couple of factors. The answer lies within the variety of corn and the time of harvest.  When corn ears of the sweet corn variety are reaped at their young and immature state, they have liquid-filled kernels that are soft and tender. In this case, these sweet corn kernels are considered a starchy vegetable. These are the typical corn varieties that you see in grocery stores and farmers' markets, where they are sold as corn on the cob but are also available as canned and frozen corn kernels.  The longer the harvest is delayed, the kernels mature as they become hard and dry. Popcorn is a corn variety harvested at this mature state and is classified as a grain. Corn at this mature stage can also be milled into cornmeal and used for foods like tortillas or cornbread.",
          articleIngredients: [""],
          articleTotal: "",
          articleSubTitle: [
            // {
            //   title: "Source of Good Fat",
            //   description:
            //     "Nuts contain a variety of unsaturated fats, which are considered heart-healthy fats. And pecans have more fat than other nuts—and that can be a good thing. Just 1 ounce of pecans (19 halves) contains 20 grams of total fat.2 Fat is an important nutrient that your body uses to make hormones, absorb certain vitamins and keep your blood sugar stable, among other functions.",
            // },
            // {
            //   title: "High in Fiber",
            //   description:
            //     "High-fiber foods like pecans can help you maintain steady blood sugar levels as well. Fiber is a type of carbohydrate. Because it isn’t digested by your body, it has a beneficial impact on your blood sugar.4 “Fiber helps slow the breakdown and release of carbohydrates into the blood—helpful in preventing rapid blood sugar spikes,” says Snyder. An ounce of pecans provides just under 3 g of fiber.",
            // },
            // {
            //   title: "Supplies Some Protein",
            //   description:
            //     "Protein breaks down into amino acids, not glucose, causing a minimal effect on blood sugar levels.Eating an ounce of pecans contains about 2.5 g of protein, making it a good addition to other protein-rich foods in your daily meals. We love them in our Nut & Berry Parfait and Maple Pecan-Rosemary Salmon.",
            // },
          ],
        },

        {
          articleTitle: "Is Corn Gluten-Free?",
          subarticleTitle: "",
          articleImage: "",
          articleDesc:
            "If you are avoiding gluten due to gluten sensitivity or have been diagnosed with celiac disease, you may be concerned about the grains you eat. Rest assured that corn in its natural form, such as corn on the cob, corn kernels (fresh and frozen) and popcorn, is gluten-free.  When you purchase processed corn products, such as cornmeal, masa corn, corn flour and cornstarch, read the ingredients list and the packaging. Doing so provides reassurance that the product is gluten-free and is made in a gluten-free facility to avoid cross-contamination from other gluten-containing grains.",
          articleIngredients: [""],
          articleTotal: "",
          articleSubTitle: [
            // {
            //   title: "You May Drink More Caffeine",
            //   description:
            //     "Drinking a pumpkin spice latte every day increases your daily caffeine intake, which can have both positive and negative effects. On the plus side, moderate caffeine consumption has been linked to improved focus, alertness and even a lower risk of certain diseases like Parkinson’s and Alzheimer’s disease.  However, too much caffeine can lead to increased anxiety, digestive issues and disrupted sleep patterns. The 2020-2025 Dietary Guidelines for Americans recommends consuming at most 400 milligrams of caffeine per day, which is about the amount found in 4 cups of drip coffee.  It’s important to monitor how much caffeine you’re consuming to avoid any potentially negative effects.",
            // },
            // {
            //   title: "You May Consume More Added Sugar",
            //   description:
            //     "Pumpkin spice lattes are often high in added sugar, which can significantly contribute to your daily intake. The daily recommended intake for added sugar is 25 grams or less for women and 36 grams or less for men. Excessive added sugar consumption is associated with a range of health issues, including increased risk of type 2 diabetes, higher risk of heart disease and challenges maintaining a healthy weight.4 Just one medium PSL can reach or exceed this daily recommendation. Once in a while, this choice isn’t going to make or break your healthy eating goals. However, we always recommend being mindful of how much added sugar you’re adding to your diet through beverages like this one, especially if you’re already consuming added sugar from other sources. In other words, just think about how it fits in to the rest of your day. ",
            // },
            // {
            //   title: "You May Consume More Anti-Inflammatory Spices",
            //   description:
            //     "One of the hidden perks of drinking a pumpkin spice latte is taking in more anti-inflammatory spices like cinnamon, nutmeg and clove. These spices contain antioxidants and compounds that may help reduce inflammation in the body, support heart health and improve blood sugar regulation.While the amount in a latte might be small, incorporating these spices into your diet more regularly can offer some health benefits. Again, choosing a PSL for the spices alone may not offer the health benefits you’re looking for with its high dose of added sugar. However, if you ask for less (or no) flavored syrup, you can enjoy the flavors while reaping more of the spices’ anti-inflammatory benefits. ",
            // },
            // {
            //   title: "You Might Add More Saturated Fat to Your Day",
            //   description:
            //     "Depending on how your pumpkin spice latte is made, you could be adding a substantial amount of saturated fat to your diet. Ingredients like whole milk and whipped cream contain saturated fats, which may raise LDL (bad) cholesterol levels and increase your risk of heart disease if consumed in excess.Opting for lower-fat or non-dairy milk or skipping the whipped cream can help reduce saturated fat intake while still allowing you to enjoy this seasonal drink in moderation.",
            // },
            // {
            //   title: "Green Peas",
            //   description:
            //     "Green peas are a starchy vegetable rich in both soluble and insoluble fiber, offering 4.5 g per 1/2-cup cooked serving.13 Insoluble fiber promotes healthy digestion by adding bulk to the stool and speeding up transit time, making stools easier to pass. Peas are also rich in soluble fiber, which forms a gel-like material that lowers cholesterol, blood sugar and inflammation. We love this Quinoa with Peas & Lemon recipe that combines two high-fiber foods.",
            // },
            // {
            //   title: "Whole-Wheat Pasta",
            //   description:
            //     "Swapping refined pasta for whole-wheat pasta can help you increase your fiber intake. A 1/2-cup of cooked whole-wheat pasta has slightly more than 2 g of fiber.In addition, whole grains also have more vitamins and minerals than refined grains. Enjoy this pasta warm or in cold pasta salad recipes. Think you’re not a big fan of whole-wheat pasta? Give it another chance with one of these 30-Minute Whole Wheat Pasta Recipes that Actually Taste Good.",
            // },
            // {
            //   title: "Black Beans",
            //   description:
            //     "Legumes are also a good source of fiber, offering more than brown rice per serving. A 1/2-cup of canned black beans has about 9 g of fiber.A balanced diet that includes legumes is associated with a lower risk of hypertension, type 2 diabetes and other inflammatory conditions.Check out our Healthy Black Bean Recipes for ideas on how to add them to your meals.",
            // },
          ],
        },

        {
          articleTitle: "How to Enjoy Corn",
          subarticleTitle: "",
          articleImage: "",
          articleDesc:
            "Corn comes in a wide array of varieties and forms, making it a versatile food that can be part of many delicious recipes.  Corn on the cob is a summertime stable for a reason. Enjoy sweet corn by tossing it on the grill for summer cookouts, as in our Grilled Corn on the Cob or Mexican Street Corn. Add corn kernels to a Fresh Sweet Corn Salad or corn chowder.  Sweet corn also makes a great side dish, like in our Corn Pudding with Bacon & Rosemary or Corn Fritters with Yogurt-Dill Sauce.  You can also use sweet corn in desserts. Sweet Corn Ice Cream is an indulgent treat for the summer.  And don't forget popcorn! Try our Lime & Parmesan Popcorn for afternoon snacking. Or to satisfy a sweet craving, make our Cinnamon-Sugar Microwave Popcorn.  Whole cornmeal can be enjoyed in various ways, too. Use it as a breading in this Cornmeal-Crusted Shrimp with Corn & Okra, or add it to dumplings, biscuits, bread, cakes and waffles. These Healthy Cornmeal Recipes will inspire you with endless creations in the kitchen.",
          articleIngredients: [""],
          articleTotal: "",
          articleSubTitle: [
            // {
            //   title: "",
            //   description: "Choose a smaller size to reduce total calorie, added sugar and saturated fat intake.",
            // },
            // {
            //   title: "",
            //   description: "Opt for non-dairy or low-fat milk alternatives to cut down on saturated fat.",
            // },
            // {
            //   title: "",
            //   description: "Ask for less syrup or fewer pumps of sweetener to decrease added sugars.",
            // },
            // {
            //   title: "",
            //   description: "Skip the whipped cream to lower the added sugar, saturated fat and total calories in the drink.",
            // },
          ],
        },
        {
          articleTitle: "The Bottom Line",
          subarticleTitle: "",
          articleImage: "",
          articleDesc:
            "Corn is a nutritious food with multiple identities. Botanically, it's a fruit but is consumed as both a vegetable and a grain. Check out these Healthy Corn Recipes and Healthy Corn Side Dish Recipes for more ideas and inspiration. Then get ready to embrace corn season.",
          articleIngredients: [""],
          articleTotal: "",
          articleSubTitle: [
            // {
            //   title: "",
            //   description: "Choose a smaller size to reduce total calorie, added sugar and saturated fat intake.",
            // },
           
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
        // const response = await createNewCat(catData);
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
