import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      aria-label="privacy policy"
      className="font-poppins w-full max-w-3xl h-full flex flex-col items-center justify-center mx-auto p-4 my-6 md:my-16"
    >
      <div className="flex flex-col items-start">
        <div className="flex flex-col items-center gap-4 md:gap-8">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Privacy Policy{" "}
          </h2>
          <p className="text-xl md:text-2xl">Effective Date: 25/09/2024</p>
          <p className="w-full text-base md:text-lg text-justify">
            At HealthyfulRecipes, accessible from{" "}
            <strong>
              <a
                href="https://healthyfulrecipes.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                website
              </a>
            </strong>
            , we are committed to protecting your privacy and ensuring the
            security of your personal information. This Privacy Policy document
            outlines the types of information that is collected and recorded by
            HealthyfulRecipes and how we use it.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            1. Information We Collect
          </h3>
          <p className="w-full text-base md:text-lg text-justify">
            Personal Information: This includes your name, email address, and
            any other information you provide voluntarily when you subscribe to
            our newsletter, leave comments, or contact us directly at{" "}
            <a
              href="mailto:contact@healthyfulrecipes.com"
              className="text-green-800 font-bold"
            >
              contact@healthyfulrecipes.com
            </a>{" "}
            Non-Personal Information: We collect data such as your IP address,
            browser type, referring/exit pages, and timestamps when you access
            the site. This information is collected via cookies and is used to
            analyze trends and improve our site.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            2. How We Use Your Information
          </h3>
          <div className="w-full text-base md:text-lg text-justify">
            We may use the information we collect in the following ways:
            <ul className="list-disc my-5 text-base ml-6 marker:text-green-800">
              <li>
                To improve, maintain, and personalize your experience on our
                website.
              </li>
              <li>
                To send periodic emails about updates, promotions, or new
                recipes if you have subscribed to our newsletter.
              </li>
              <li>
                To respond to your inquiries and provide customer support.
              </li>
              <li>
                To analyze usage patterns and website traffic in order to
                enhance website performance.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">3. Cookies</h3>
          <p className="w-full text-base md:text-lg text-justify">
            HealthyfulRecipes uses cookies to store information about visitors'
            preferences and to optimize your user experience based on your
            browser type and other information. You have the option to disable
            cookies through your browser settings, but doing so may limit some
            functionality of the website.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            4. Third-Party Services
          </h3>
          <p className="w-full text-base md:text-lg text-justify">
            We may use third-party services such as Google Analytics to monitor
            and analyze website traffic. These services may collect information
            sent by your browser, including cookies. We do not sell, trade, or
            transfer your personal information to outside parties unless
            required by law.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            5. Email Communication
          </h3>
          <p className="w-full text-base md:text-lg text-justify">
            If you subscribe to our newsletter, we may occasionally send you
            updates, promotions, or new recipes. You can opt-out of receiving
            these emails at any time by clicking the "unsubscribe" link at the
            bottom of our emails or by contacting us at{" "}
            <a
              href="mailto:contact@healthyfulrecipes.com"
              className="text-green-800 font-bold"
            >
              contact@healthyfulrecipes.com
            </a>{" "}
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">6. Security</h3>
          <p className="w-full text-base md:text-lg text-justify">
            We are committed to protecting your personal information. While we
            take reasonable measures to safeguard your data, no transmission
            over the internet is 100% secure. We encourage you to take
            additional steps to protect your information online.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            7. Links to Other Websites
          </h3>
          <p className="w-full text-base md:text-lg text-justify">
            Our website may contain links to third-party websites. We are not
            responsible for the content or privacy practices of these external
            sites. We encourage you to review the privacy policies of those
            websites before sharing any personal information.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">8. Your Rights</h3>
          <p className="w-full text-base md:text-lg text-justify">
            You have the right to access, correct, or delete your personal
            information that we hold. If you would like to make any changes or
            request the deletion of your data, please contact us at{" "}
            <a
              href="mailto:contact@healthyfulrecipes.com"
              className="text-green-800 font-bold"
            >
              contact@healthyfulrecipes.com
            </a>{" "}
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            9. Changes to This Privacy Policy
          </h3>
          <p className="w-full text-base md:text-lg text-justify">
            We reserve the right to update or change this Privacy Policy at any
            time. Any changes will be reflected on this page with the updated
            "Effective Date." We encourage you to review this policy
            periodically.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">10. Contact Us</h3>
          <div className="flex flex-col items-start gap-2">
            If you have any questions about these Terms of Service, please
            contact us at:
            <br />
            <p>HealthyfulRecipes</p>
            <p>
              Email:{" "}
              <a
                href="mailto:contact@healthyfulrecipes.com"
                className="text-green-800 font-bold"
              >
                contact@healthyfulrecipes.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
