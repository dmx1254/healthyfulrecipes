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
    //   title: "Meal Plans",
    //   slug: "meal-plans",
    //   catId: generateCode(),
    //   subcategory: "dinner-plans",
    // };

    const postData = {
      title: "Spinach & Artichoke Dip Pasta with Chicken",
      category: "66e44e681aaa31356368db62",
      postId: generateCode(),
      postCat: "dinner-plans",
      slug: "spinach-artichoke-dip-pasta-with-chicken",
      postImage: "",
      nutritions: [
        "Nut-Free",
        "Healthy Pregnancy",
        "Soy-Free",
        "High-Fiber",
        "High-Protein",
        "Egg-Free",
        "Gut Healthy",
        "Mediterranean Diet",
      ],
      descriptions: [
        "If you love warm spinach and artichoke dip, then you'll love that we turned this classic dip into a creamy pasta dish with chicken. And here's what's almost as good as the flavor of this comforting dish: the fact that this healthy dinner takes just 20 minutes to prepare.",
      ],

      steps: [
        {
          title: "Step1",
          descriptions:
            "Bring a large saucepan of water to a boil. Cook pasta according to package directions. Drain.",
          stepImage: "",
        },
        {
          title: "Step2",
          descriptions:
            "Sprinkle chicken with 1/8 teaspoon each salt and pepper. Heat oil in a large skillet over medium heat. Add the chicken and cook, turning once, until browned and an instant-read thermometer inserted into the thickest part registers 165°F. Transfer to a plate.",
          stepImage: "",
        },
        {
          title:
            "Step3",
          descriptions:
            "Combine spinach and water in a large saucepan. Cook over medium heat, stirring occasionally, until just wilted, about 2 minutes. Add cream cheese and milk to the pan; stir until the cream cheese is melted. Add Parmesan, garlic powder and the remaining 1/8 teaspoon each salt and pepper; cook, whisking, until thickened and bubbling. Add artichokes and the cooked pasta; toss to combine.",
          stepImage: "",
        },
        {
          title:
            "Step4",
          descriptions:
            "Divide the pasta mixture among 4 bowls. Thinly slice each chicken breast and arrange on top of the pasta. Sprinkle with additional Parmesan, if desired.",
          stepImage: "",
        },
      ],
      nutritionFact: [
        { nutriFact: "Calories", amount: 527 },
        { nutriFact: "Fat", amount: 14 },
        { nutriFact: "Carbs", amount: 56 },
        { nutriFact: "Protein", amount: 42 },
      ],

      nutritionsImage: [],

      ingredients: [
        {
          qty: "8",
          title: "ounces whole-wheat rotini pasta",
        },
        {
          qty: "4",
          title: "(4 ounce) boneless, skinless chicken breasts",
        },
        {
          qty: "1/4",
          title: "teaspoon kosher salt, divided",
        },
        {
          qty: "1/4",
          title: "teaspoon ground pepper, divided",
        },
        {
          qty: "1",
          title: "tablespoon olive oil",
        },
        {
          qty: "1",
          title:
            "(5 ounce) package baby spinach, roughly chopped",
        },
        {
          qty: "1",
          title: "tablespoon water",
        },
        {
          qty: "4",
          title: "ounces reduced-fat cream cheese, cut into chunks",
        },
        {
          qty: "3/4",
          title: "cup reduced-fat milk",
        },
        {
          qty: "1/2",
          title: "cup grated Parmesan cheese, plus more for garnish",
        },
        {
          qty: "1",
          title: "(14-ounce) can artichoke hearts, rinsed, squeezed dry and chopped (see Tip)",
        },
        // {
        //   qty: "2",
        //   title: "tablespoons lemon juice",
        // },
        // {
        //   qty: "1/4",
        //   title: "cup torn fresh basil leaves plus 2 tablespoons, divided",
        // },
      ],
      nutritionInformations: [
        {
          nutrition: "Total Carbohydrate",
          amount: "56g",
          percent: 20,
        },
        {
          nutrition: "Dietary Fiber",
          amount: "6g",
          percent: 11,
        },
        // {
        //   nutrition: "Total Sugars",
        //   amount: "3g",
        //   percent: 0,
        // },
        {
          nutrition: "Protein",
          amount: "42g",
          percent: 84,
        },
        {
          nutrition: "Total Fat",
          amount: "14g",
          percent: 18,
        },
        {
          nutrition: "Saturated Fat",
          amount: "5g",
          percent: 25,
        },
        {
          nutrition: "Cholesterol",
          amount: "109mg",
          percent: 36,
        },
        {
          nutrition: "Vitamin A",
          amount: "2861IU",
          percent: 57,
        },
        // {
        //   nutrition: "Vitamin C",
        //   amount: "21mg",
        //   percent: 23,
        // },
        // {
        //   nutrition: "Folate",
        //   amount: "25mcg",
        //   percent: 6,
        // },
        {
          nutrition: "Sodium",
          amount: "721mg",
          percent: 31,
        },
        // {
        //   nutrition: "Calcium",
        //   amount: "48mg",
        //   percent: 4,
        // },
        // {
        //   nutrition: "Iron",
        //   amount: "1mg",
        //   percent: 6,
        // },
        // {
        //   nutrition: "Magnesium",
        //   amount: "63mg",
        //   percent: 15,
        // },
        {
          nutrition: "Potassium",
          amount: "776mg",
          percent: 17,
        },
        // {
        //   nutrition: "Magnesium",
        //   amount: "5mg",
        //   percent: 1,
        // },
        // {
        //   nutrition: "Potassium",
        //   amount: "84mg",
        //   percent: 2,
        // },
      ],

      activeInfos: [
        {
          activeTime: "20 mins",
          totalTime: "20 mins",
          servings: "4",
        },
      ],
    };

    const articleData = {
      title: "5 Sneaky Signs You May Have Metabolic Syndrome, According to Experts",
      desc: "It’s not always obvious if you have high blood sugar, hypertension or other conditions that make up metabolic syndrome. These are signs to connect with your doctor.",
      slug: "sneaky-signs-you-have-metabolic-syndrome",
      subCat: "sneaky-signs",
      articleID: generateCode(),
      articlePosts: [
        {
          articleTitle: "",
          subarticleTitle: "",
          articleImage: "",
          articleDesc:
            "Metabolic syndrome is a group of conditions that increase your risk of heart disease, stroke and type 2 diabetes. Some risk factors can be managed through lifestyle changes, as being sedentary, an unhealthy diet, consuming excess calories, inadequate sleep, smoking and alcohol intake all increase the likelihood of developing this group of conditions.1 Metabolic syndrome is categorized by the presence of three of the following: Thing is, unless you’re getting regular blood testing, you may not know if you have a problem with your blood sugar or lipids–and so you may have no clue you have metabolic syndrome at all. While these metrics are used to diagnose metabolic disease, there are sneakier signs that there is a problem. Here’s what to look for—and how to treat it.",
          articleIngredients: [""],
          articleTotal: "",
        },
        {
          articleTitle: "Sneaky Signs You Have Metabolic Syndrome",
          subarticleTitle: "You’re Always Thirsty",
          articleImage: "",
          articleDesc:
            "“One criteria of metabolic syndrome is elevated blood sugar at or above 100 mg/dL, which may indicate insulin resistance,” says Kerry Conlon, RDN, a registered dietitian nutritionist specializing in gastrointestinal diseases and disorders. Excessive thirst and an increased need to urinate are early warning signs that your blood sugar may be hanging out above the normal range.2 If you frequently feel parched and can’t quench your thirst, see your provider to have your blood sugar tested. If you’re consistently drained but unsure why, there may be an underlying health issue at play. There are many reasons you might be tired—poor sleep, eating an unbalanced diet, stress—but if you frequently feel fatigued, it could be a symptom of high blood sugar. “High blood sugar levels signal that your body’s energy regulation needs attention,” explains Andrea Hinojosa, M.S., RDN, founder of Honest Health & Wellness. If you’re tired often—especially if you think you’re getting adequate sleep—it’s worth seeing your doctor. If you’ve noticed any major changes to your skin, it could be a sneaky sign you have metabolic syndrome. Skin tags are little harmless growths that are called acrochordons. While skin tags can develop as a result of aging and other unknown causes, they’re also linked to diabetes and insulin resistance.3 Another sign of metabolic syndrome is dark, velvety patches of skin called acanthosis nigricans. These often develop in the back of the neck, armpits and groin.4 Connect with a dermatologist about any skin concerns. If you’ve been experiencing pain, burning, tingling and numbness of the feet, you could have metabolic syndrome. “Insulin resistance, high blood pressure, elevated blood sugar and abnormal cholesterol levels can damage the nerves and vessels of the lower extremities, leading to peripheral neuropathy and vascular disease,” says doctor of podiatric medicine Adam Hotchkiss, D.P.M. If you’re experiencing any of these prickling or tingling sensations in your feet, schedule a visit with your health care provider.",
          articleIngredients: [""],
          articleTotal: "",
        },
        {
          articleTitle: "How Is Metabolic Syndrome Diagnosed?",
          subarticleTitle: "",
          articleImage: "",
          articleDesc:
            "Your health care provider will order routine blood work, take your blood pressure reading and measure your waist circumference. More specifically, doctors are looking at the following numbers. Having three of the following indicates metabolic syndrome:1 The benefit of knowing your numbers—even if they point to metabolic syndrome—is that you can use that info to benefit your health. “Getting regular lab work done allows you to monitor your levels so you can take action before anything gets out of hand,” says Rhyan Geiger, RDN, a Phoenix-based dietitian.  While a diagnosis can feel alarming, maintaining perspective is helpful. “While metabolic syndrome is diagnosed by these factors, it’s important to remember that no single diagnosis defines you,” says Hinojosa. “Working with a supportive team of health care providers, such as your primary care provider and registered dietitian, can help you explore ways to care for yourself that feel balanced and gentle, without focusing on weight or appearance,” she adds. ",
          articleIngredients: [""],
          articleTotal: "",
        },
        {
          articleTitle: "Strategies to Improve Metabolic Syndrome",
          subarticleTitle: "",
          articleImage: "",
          articleDesc:
            "Changes to nutrition, moving more often and managing stress are effective ways to improve metabolic syndrome: Eat a Mediterranean diet: Hinojosa recommends adopting a Mediterranean diet, which includes fruits, vegetables, whole grains and beans, plus moderate amounts of fish, poultry, dairy products, nuts, eggs and olive oil. “This eating pattern emphasizes a variety of foods and encourages a sustainable approach to eating rather than adhering to strict rules,” she says.  Increase fiber: Eating more fiber may improve your blood sugar and cholesterol levels. “Consuming a variety of fruits and vegetables high in fiber also helps increase satiety, which may help reduce portions naturally,” says Conlon. Get moving regularly: Recommendations are to get 150 minutes of moderate-intensity exercise per week, plus two days of resistance exercise. “Commit to consistent movement you enjoy,” says Lilian Shepherd, RD, CDECS, a diabetes educator and certified personal trainer. Whether it’s walking, bicycling, swimming, dancing, roller skating or something else, daily movement has been shown to promote healthy weight management and improve cardiometabolic health.6,7 One great place to start is with this 7-Day Walking Plan for Metabolic Syndrome, Created by a Certified Trainer. Manage stress: Stress-reduction techniques can help lower blood pressure and improve health. “Practices like mindfulness, connecting with loved ones and enjoying hobbies can help ease stress and bring a sense of peace,” says Hinojosa.",
          articleIngredients: [""],
          articleTotal: "",
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
    //   const response = await createNewPost(postData);
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
