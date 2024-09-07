import React from "react";

const AboutUsPage = () => {
  return (
    <div className="font-poppins bg-white w-full flex items-center justify-center gap-2 mx-auto p-8 md:p-16 mb-20">
      <div className="relative w-full max-w-3xl flex flex-col items-start gap-6">
        <h2 className="text-3xl font-bold">About Us</h2>
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-2xl font-bold">About Our Website</h3>
            <p>
              Welcome to Healthy Ful recipes , your trusted source for
              delicious, healthy recipes that bring joy to your table and
              wellness to your life. For over five years, we’ve been dedicated
              to transforming everyday ingredients into meals that not only
              satisfy your taste buds but also support your health. Whether
              you’re just starting your journey towards healthier eating or
              you’re looking to expand your culinary skills, our carefully
              curated recipes make it easy and enjoyable to cook nourishing,
              flavorful dishes.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-2xl font-bold">Our Chef's Experience</h3>
            <p>
              At the heart of our kitchen is sophie miller , a passionate chef
              with over five years of experience in crafting healthy,
              full-flavored recipes. Her journey began with a love for good food
              and a desire to make healthy eating accessible to everyone. Over
              the years, she has honed her skills, experimenting with various
              ingredients and techniques to create recipes that are as
              satisfying as they are nutritious.
            </p>
            <p>
              With a deep understanding of how to balance flavors and nutrition,
              SOPHIE Miller has become a trusted voice in the world of healthy
              cooking. Her approach is all about making healthy food
              approachable, whether you’re a seasoned cook or just starting out.
              Through her daily recipe shares and expert tips, she’s here to
              inspire you to create meals that are both good for you and a
              delight to eat.
            </p>
            <p>
              This description emphasizes the chef's expertise and the mission
              of your website, making it clear to visitors that they are in good
              hands when it comes to learning and enjoying healthy,
              full-flavored recipes.
            </p>
          </div>
        </div>
        {/* <h3 className="whitespace-nowrap absolute font-lora text-lg font-bold top-[102%] left-[74%] sm:left-[82%] select-none">
          Sophie Miller
        </h3> */}
      </div>
    </div>
  );
};

export default AboutUsPage;
