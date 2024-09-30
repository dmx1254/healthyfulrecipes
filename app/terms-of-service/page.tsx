import React from "react";
import { Metadata } from "next";

const PrivacyPolicy = () => {
  return (
    <div
      aria-label="terms of services"
      className="font-poppins w-full max-w-3xl h-full flex flex-col items-center justify-center mx-auto p-4 my-6 md:my-16"
    >
      <div className="flex flex-col items-start">
        <div className="flex flex-col items-center gap-4 md:gap-8">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Terms of Services{" "}
          </h2>
          <p className="text-xl md:text-2xl">Effective Date: 25/09/2024</p>
          <p className="w-full text-base md:text-lg text-justify">
            Welcome to HealthyfulRecipes. By accessing and using our website
            (accessible from{" "}
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
            ), you agree to comply with and be bound by the following terms and
            conditions of use. Please read these Terms of Service carefully
            before using our website. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            1. Acceptance of Terms
          </h3>
          <p className="w-full text-base md:text-lg text-justify">
            By visiting and using HealthyfulRecipes, you agree to these terms
            and conditions, as well as our Privacy Policy. These terms apply to
            all visitors, users, and others who access or use the website
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            2. Use of the Website
          </h3>
          <div className="w-full text-base md:text-lg text-justify">
            You are permitted to:
            <ul className="list-disc my-5 text-base ml-6 marker:text-green-800">
              <li>
                View and read the content provided on HealthyfulRecipes for
                personal, non-commercial use.
              </li>
              <li>
                Share links to our blog posts on social media, provided proper
                credit is given to HealthyfulRecipes.
              </li>
              <ol className="ml-4 list-decimal marker:text-black">
                You are not permitted to:
                <li>
                  Reproduce, distribute, or exploit the content found on this
                  site for commercial purposes without our prior written consent
                </li>
                <li>Use the website for any unlawful or harmful purposes.</li>
                <li>
                  Attempt to interfere with the proper functioning of the site
                  or access it through automated systems such as robots or data
                  mining tools.
                </li>
              </ol>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            3. User Content and Comments
          </h3>
          <p className="w-full text-base md:text-lg text-justify">
            We encourage users to engage with our content by leaving comments
            and sharing their thoughts. However, you are responsible for any
            content you post, and you agree to:
            <br />
            Keep comments respectful, relevant, and free of harmful, defamatory,
            or offensive language. Not post spam or unsolicited promotions,
            advertisements, or any other form of solicitation. We reserve the
            right to moderate, edit, or remove any user comments that violate
            these terms or that we deem inappropriate.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            4. Intellectual Property
          </h3>
          <p className="w-full text-base md:text-lg text-justify">
            All content on HealthyfulRecipes, including but not limited to text,
            images, recipes, graphics, logos, and website design, is the
            intellectual property of HealthyfulRecipes unless otherwise noted.
            This content is protected by copyright, trademark, and other
            intellectual property laws. You may not:
            <br />
            Reproduce, duplicate, copy, or exploit any material on this site for
            commercial purposes without explicit permission.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">5. External Links</h3>
          <p className="w-full text-base md:text-lg text-justify">
            Our website may contain links to third-party websites that are not
            owned or controlled by HealthyfulRecipes. We have no control over
            the content, privacy policies, or practices of any third-party
            sites. We are not responsible for any issues arising from your use
            of third-party websites.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            6. Limitation of Liability
          </h3>
          <p className="w-full text-base md:text-lg text-justify">
            HealthyfulRecipes is provided on an "as-is" basis without any
            warranties, either express or implied. We make no representations or
            warranties in relation to the accuracy, completeness, or
            availability of the content provided on this site.
            <br />
            To the fullest extent permitted by law, HealthyfulRecipes will not
            be liable for any indirect, incidental, consequential, or punitive
            damages arising from your use of or inability to use the website or
            the content provided.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            7. Changes to the Terms
          </h3>
          <p className="w-full text-base md:text-lg text-justify">
            We reserve the right to modify or replace these terms at any time.
            Any changes will be reflected on this page with the updated
            "Effective Date." Your continued use of the website after any
            changes are made constitutes acceptance of the new terms.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">8. Termination</h3>
          <p className="w-full text-base md:text-lg text-justify">
            We reserve the right to suspend or terminate your access to
            HealthyfulRecipes at any time, without notice, for any violation of
            these terms or any other reason at our discretion.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl font-bold">9. Governing Law</h3>
          <p className="w-full text-base md:text-lg text-justify">
            These terms and conditions are governed by and construed in
            accordance with the laws of USA, and you irrevocably submit to the
            exclusive jurisdiction of the courts in that State or location.
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
