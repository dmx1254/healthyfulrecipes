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
      title: "The High-Protein Dip Formula That Will Help You Eat More Produce",
      category: "66e5a083026646bb9e5dbf1f",
      postId: generateCode(),
      postCat: "diabetes-diet-center",
      slug: "high-protein-dip-formula",
      postImage: "",
      nutritions: [
        "No Added Sugar",
        "Sesame-Free",
        "Weight Loss",
        "Diabetes-Friendly",
        "Soy-Free",
        "Vegetarian",
        "High-Protein",
        "Egg-Free",
        "Gluten-Free",
      ],
      descriptions: [
        "These high-protein cottage cheese dips are easy to whip up and pair perfectly with your favorite fruits and veggies. Whether you’re in the mood for something sweet or savory, these recipes will keep you full and energized while squeezing in an extra serving of veggies.",
      ],

      steps: [
        {
          title: "Step1",
          descriptions:
            "Combine 2 cups cottage cheese, 3 tablespoons pesto and 2 tablespoons Parmesan in a food processor. Process until smooth, about 5 seconds. Serve with 3 cups peppers.",
          stepImage: "",
        },
        // {
        //   title: "Step2",
        //   descriptions:
        //     "Heat oil in a large ovenproof skillet over medium heat. Add broccoli, bell pepper and scallions; cook, stirring, until softened, 3 to 5 minutes. Combine teriyaki sauce, water, cornstarch and garlic in a measuring cup. Add to the pan along with chicken and rice. Stir to combine well.",
        //   stepImage: "",
        // },
        // {
        //   title: "Step3",
        //   descriptions:
        //     "Transfer to the oven and bake until the vegetables are tender and warmed through, about 15 minutes. Serve sprinkled with sesame seeds (or almonds), if desired.",
        //   stepImage: "",
        // },
        // {
        //   title: "Step4",
        //   descriptions:
        //     "Divide the pasta mixture among 4 bowls. Thinly slice each chicken breast and arrange on top of the pasta. Sprinkle with additional Parmesan, if desired.",
        //   stepImage: "",
        // },
      ],
      nutritionFact: [
        { nutriFact: "Calories", amount: 314 },
        { nutriFact: "Fat", amount: 3 },
        // { nutriFact: "Carbs", amount: 33 },
        { nutriFact: "Protein", amount: 7 },
      ],
      perServing: "0",

      nutritionsImage: [],

      ingredients: [
        {
          qty: "2",
          title: "cups nonfat cottage cheese",
        },
        {
          qty: "3",
          title: "tablespoons pesto",
        },
        {
          qty: "2",
          title: "tablespoons grated Parmesan cheese",
        },
        {
          qty: "3",
          title: "cups mini bell peppers or sliced bell peppers",
        },
        // {
        //   qty: "1/3",
        //   title: "cup low-sodium teriyaki sauce",
        // },
        // {
        //   qty: "1/4",
        //   title: "cup water",
        // },
        // {
        //   qty: "2",
        //   title: "tablespoons cornstarch",
        // },
        // {
        //   qty: "2",
        //   title: "cloves garlic, grated",
        // },
        // {
        //   qty: "3",
        //   title: "cups sliced cooked chicken",
        // },
        // {
        //   qty: "3",
        //   title: "cups cooked brown rice",
        // },
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
          amount: "75g",
          percent: 0,
        },
        {
          nutrition: "Fat",
          amount: "3g",
          percent: 0,
        },
        {
          nutrition: "Saturated Fat",
          amount: "1g",
          percent: 0,
        },
        {
          nutrition: "Cholesterol",
          amount: "4mg",
          percent: 0,
        },
        {
          nutrition: "Carbohydrates",
          amount: "5g",
          percent: 0,
        },
        {
          nutrition: "Total Sugars",
          amount: "4g",
          percent: 8,
        },
        {
          nutrition: "Added Sugars",
          amount: "0g",
          percent: 0,
        },
        {
          nutrition: "Protein",
          amount: "7g",
          percent: 0,
        },
        {
          nutrition: "Fiber",
          amount: "1g",
          percent: 0,
        },
        {
          nutrition: "Sodium",
          amount: "286mg",
          percent: 0,
        },
        {
          nutrition: "Potassium",
          amount: "87mg",
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
          activeTime: "5 mins",
          totalTime: "5 mins",
          servings: "8",
          yield: "",
        },
      ],
    };

    const articleData = {
      title:
        "Jennifer Garner Just Gave Us a Peek Inside Her Bag—and We Love the Snacks She Always Has on Hand",
      desc: "See what the actress and #PretendCookingShow host keeps in her bag in a hilarious Instagram post.",
      slug: "snacks-jennifer-garner-keeps-in-her-bag",
      imageArt:
        "data:image/webp;base64,UklGRgg/AABXRUJQVlA4IPw+AAAwtAGdASruAvoBPm02l0ikIyKmItOZmMANiWduz2ZXh4Eq93yl4qnN0gFAVbqMB061l/+u/zu51kX6p/C/MP3IcG/suUPTb7K/SOfL0+/2r1F/1k6fvmF/a/9sPde/Ln3x/4X1B/7X1U3oZec16w39o/6n7k+1FqnXB3RO1Xss9yf65xh8dfzoWdy+/n9oCPIeGU34VZeDt/kHXI0Mk6a0MjnMK6FA/HO30Pv1NevJCYdSl6CYVKO1x6CYjpzBLUkIyDBrSC5Pn218cdmO9iYpn8tHjJ4dFojBMFX3QoH452+h9+qaAd0EwqPyTGrwPbOfSEBCtlcODCuhQPxz9ctlibZZv5If/eD/8g////99RDidUb///3CoN6ySINL3e3sDGjrj9i1OhvCOd0l0vgRixA/8ln//Lf9kCsyP/zP//c/y8+HNvNYPT//3v//iVnRpP/////////0HPqu6hpfpRPv2yoyPNQYgmgoQ8XtYRt08aTN2GExyFxwDB1YP/QiYv////8v/////////62X8g///1f//a/////////zde7NTyVG3hcN0OjcoSsmvM8XSp/KDr2BB6pTuIxRj85gHPl2xdnGZvWqa/KxpQd0yF7dp19plLzqX/////a//if//////D8OQD//2l/8vof/LbUb5JXXypa5um11BiHx0rGqvTpt1dHXJSmgfOuKhyxlG5pBZzT7AG/O+Z5mWrNZukVZbpzzXQrttnR7wG1D/5HZGzV5TYllbmmM0B481WBtevhEmPT//////////////pwI7pQ3V2iJJY2EYmvYpxZZszJhBC6bB5w/nsH/Qv8QwBgyo9Lv6zm9zoltLWPLiHuOVTfrcyCSKoOoCsdRHaBJMAHbOU+0berhBb2U3/S/3H////////+m3Z4////////1xdij//+7J7Ty4jkNLeRWMqCiYF4JBUzlHP1H7dSwfj6AIS/SkcoM87Q6/kfkEwyZMf9D6PuHmmp5e7p2z02a2aHB/yYHKKBmEQx1+YS4ktvTXoRzGTWu6Z8EJtHf+T/////////1OoB9aDAx/yAM0aFZXTLBFkagzpcp5ClevIHB4TJ/iVBuS3cN7h9XF1be/COVMzwN6HIbi+HYRJpuKmIM4Hsy1NtxvcEYa029Y08wNeZ1zuOeY1967FDKo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",
      subCat: "news",
      imageDesc:
        "Plopped down on her kitchen floor in adorable red overalls and a white T-shirt, Jennifer Garner decides she’s going to allow followers a peek into her bag in one of her Instagram posts.  I’m a little bit nervous but it feels appropriate to do What’s in my bag?quips the actress and co-founder of the Once Upon a Farm brand, referring to the popular social media challenge where people empty out their bags to show what’s in them.  Out of a large black backpack, Garner proceeds to pull out a notebook and two-sided glasses case, noting,If you’re over 50 you understand.  She continues by producing a pen pouch (“because pens are life”), her iPad, some sort of package (looks like maybe a book wrapped in brown paper), two books she’s reading with her 14- and 11-year-old children, three RxBars—two peanut butter and one chocolate chip—and a bag of Mini Tony’s Chocolonely chocolate, to which Garner exclaims, Lucky day! It’s my lucky day!  She’s not done yet (it’s a big bag!). She pulls out an empty package of SmartSweets Sweet Fish while making a sad face and says, “Gah. Sad,” as she noshes on the chocolate.  Her datebook is next to reveal itself, and a “little, tiny bag of nuts,” which is a few leftover nuts settled into the corner of a bag that had already been mostly eaten.  “Better keep these,” jokes Garner as she pretends to put them back in her bag. “Just kidding!”  Next comes a bag of candy, to which Garner says, “Mmm a bag of candy! Gotta have your candy handy.”  She also pulls out tea, several pairs of glasses and more candy—this time a bag of SmartSweets Sourmelon Bites.  Here’s where it really gets comical as Garner proceeds to pull one container of nuts after another out of her bag until she’s laughing hysterically. “I’m so scared I’m not going to have any nuts,” she says, red-faced and choking on her words in a fit of laughter. In the end, she counts eight packages of nuts and takes a deep breath to compose herself. “OK,” she says with her classic dimpled Garner smile.  “You are adorable,” commented Courteney Cox with a heart emoji on Garner’s post  We love that Garner had a variety of snacks in her bag—every one of which is good for a quick on-the-go pick-me-up. Yes, even the candy. Life—and food—are to be enjoyed, and candy can be a part of that enjoyment, especially when you eat a varied, well-balanced diet like Garner does.  Combine the chocolate with the nuts and you’ve got some protein to sustain that energy boost (bonus: dark chocolate and nuts also can help lower inflammation!). And if you want to make your own RxBar knockoffs, we’ve got plenty of recipes to choose from that are also easily portable.  Just a word of caution: Be sure you don’t leave your bag filled with chocolate in a hot car or in direct sunlight. Melted chocolate seeping through everything in your bag ruins the chocolate.",
      articleID: generateCode(),
      articlePosts: [
        {
          articleTitle: "",
          subarticleTitle: "",
          articleImage: "",
          articleDesc: "",
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
        //   articleTitle: "The Best Tea for Insulin Resistance",
        //   subarticleTitle: "",
        //   articleImage: "",
        //   articleDesc:
        //     "Next time you are craving a cup of tea, reach for green tea. It’s our top pick for the best tea to combat insulin resistance. Green tea is made from Camellia sinensis, the tea plant that black, white and oolong teas are also made from. While those other teas are also associated with positive health benefits, green tea has the most clinical data to support its role in combating insulin resistance.  Researchers suspect that green tea helps reduce your risk of insulin resistance in several ways, including lowering oxidative stress, improving glucose metabolism and blocking absorption of carbohydrates.2 Together, this can lead to small improvements in your blood sugar. For example, a recent meta-analysis found that drinking green tea may help lower fasting blood sugar levels, an indicator of insulin resistance.  So, how might the brew boost blood sugar management? Inflammation and insulin resistance often coexist, so if you can tamp down inflammation you may also see improvements in insulin resistance. “Green tea is high in polyphenols, which are naturally occurring compounds in foods that have antioxidant and anti-inflammatory effects,” says Pacheco. “Green tea is particularly high in a polyphenol and catechin called epigallocatechin gallate. EGCG plays an important role as an antioxidant and may help to lower inflammation, which can contribute to insulin resistance,” she explains.  These mighty polyphenols in green tea may also have a positive influence on your gut microbiome, says Lisa Andrews, M.Ed., RD, owner of Sound Bites Nutrition. We know that the composition of the types of bacteria in your gut can play a role in your risk for developing insulin resistance, as well as supporting your overall health.",
        //   articleIngredients: [""],
        //   articleTotal: "",
        //   articleSubTitle: [
        //     {
        //       title: "",
        //       description: "",
        //     },

        //   ],
        // },

        // {
        //   articleTitle: "How to Enjoy Green Tea",
        //   subarticleTitle: "",
        //   articleImage: "",
        //   articleDesc:
        //     "For the best-tasting green tea, you’ll want to steep it right so that it retains its mild flavor without becoming bitter. Steep bagged or loose-leaf green tea in hot water (170 to 185°F is ideal) for 3 minutes. Enjoy a warm mug or chill it in the refrigerator and serve over ice.  To add more flavor to your green tea, pair it with citrus, mint or ginger. For example, this Orange-Ginger Tea is made with green tea steeped with fresh ginger and flavored with a splash of orange juice. Mint is also a refreshing addition to iced green tea. We like to cool off with a glass of this Iced Mint Green Tea. Green tea is also stellar in a Matcha Green Tea Latte or a Green Tea-Fruit Smoothie.",
        //     articleIngredients: [""],
        //   articleTotal: "",
        //   articleSubTitle: [
        //     {
        //       title: "",
        //       description: "",
        //     },

        //   ],
        // },

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
      //   const response = await createNewPost(postData);
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
