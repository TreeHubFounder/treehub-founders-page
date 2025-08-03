
export const imageAssets = {
  hero: 'https://i.imgur.com/dGLoA4e.jpeg',
  worthlessLeads: 'https://i.imgur.com/vHqB5tC.jpeg',
  adminHeadache: 'https://i.imgur.com/UpxpZJc.jpeg',
  raceToBottom: 'https://i.imgur.com/1m6Qz7T.jpeg',
  subcontractorGamble: 'https://i.imgur.com/YpA4yqL.jpeg',
  highValueJobs: 'https://i.imgur.com/1eTndqW.jpeg',
  oneApp: 'https://i.imgur.com/8YgARUt.jpeg',
  verified: 'https://i.imgur.com/R8R8Q6y.jpeg',
  network: 'https://i.imgur.com/wNqyqJc.jpeg',
  founder: 'https://i.imgur.com/J4r4F3P.jpeg',
};

const pageContentData = {
  landingPageContent: [
    {
      section: "1. Hero Section",
      content: {
        headline: "Never Turn Down a Job Again",
        subHeadline: "Get Vetted Crews & Gear On-Demand. Built for the trade, by a tree guy.",
        primaryCTA: "Secure My 50% Lifetime Discount",
      }
    },
    {
      section: "2. Problem Section",
      content: {
        points: [
          {
            headline: "The Plague of Worthless Leads",
            copy: "Tired of paying upwards of $70 for leads that go nowhere? Wasting time and fuel chasing tire-kickers who don't value professional work? It's not you. It's your lead source.",
            image: imageAssets.worthlessLeads
          },
          {
            headline: "The Administrative Headache",
            copy: "Is your truck's dashboard your office? Drowning in texts, voicemails, and invoices? Spending your nights buried in paperwork instead of building your business? Reclaim your time.",
            image: imageAssets.adminHeadache
          },
          {
            headline: "The Race to the Bottom",
            copy: "Constantly battling against uninsured, fly-by-night operators who undercut your prices and devalue the entire trade? Stand out as the verified professional you are.",
            image: imageAssets.raceToBottom
          },
          {
            headline: "The Subcontractor Gamble",
            copy: "Rolling the dice every time you hire a subcontractor? Wasting hours on the phone, only to find out they're unreliable or, worse, uninsured? Eliminate the risk with our vetted network.",
            image: imageAssets.subcontractorGamble
          }
        ]
      }
    },
    {
      section: "3. Solution Section",
      content: {
        points: [
          {
            headline: "Get High-Value, Qualified Jobs",
            copy: "TreeHub connects you with serious clients who need your specific skills, expertise, and equipment. No more price shoppers, just profitable work that fits your schedule.",
            image: imageAssets.highValueJobs
          },
          {
            headline: "Run Your Entire Business From One App",
            copy: "Manage every stage of the job, from initial lead to final payment, all within a single, intuitive platform. Say goodbye to spreadsheets and hello to streamlined efficiency.",
            image: imageAssets.oneApp
          },
          {
            headline: "Stand Out as a Verified Professional",
            copy: "Insurance, license, and certification badges displayed prominently on your profile instantly prove your value and command the prices you deserve. Build trust from the first click.",
            image: imageAssets.verified
          },
          {
            headline: "Build Your Professional Network, Instantly",
            copy: "Tap into a vast network of vetted, insured specialists—crane operators, climbers, ground crews—to find the help you need, exactly when you need it. Expand your capabilities.",
            image: imageAssets.network
          }
        ]
      }
    },
    {
      section: "4. Founder Story Section",
      content: {
        letter: [
          { 
            stage: "Credibility & Empathy",
            copy: "Hey there, I'm Clint Aussprung, founder of TreeHub. For over 15 years, I ran my own tree care business. My office was the cab of a chip truck. I've wrestled with rigging in 90-degree heat and dealt with every challenge this industry throws at you."
          },
          {
            stage: "Shared Frustration",
            copy: "Like you, I got fed up. Tired of generic lead sites sending me junk. Sick of competing with guys who had no business being up a tree. And frustrated by the lack of reliable help when I needed it most."
          },
          {
            stage: "Aha! Moment & Mission",
            copy: "Ikept thinking, Why isn't there a tool built specifically for us – for professional arborists who take pride in their work? I couldn't find one. So, I decided I had to build it myself."
          },
          {
            stage: "Vision & Invitation",
            copy: "This isn't just another app developed by a tech company that doesn't understand our world. This is *our* platform, built by a tree guy, for the trade. The Founder Club is more than just a good deal; it's a chance to get in on the ground floor and help shape the future of our trade. Join me. Let's build this together."
          }
        ],
        name: "Clint Aussprung",
        role: "Founder, TreeHub",
        image: imageAssets.founder
      }
    },
    {
      section: "5. Offer Section",
      content: {
        mainHeadline: "Become a TreeHub Founding Member.",
        subHeadline: "A One-Time Offer, Strictly Limited to the First 100 Industry Professionals.",
        valueStack: [
          "Lifetime Elite Tier Status (A $950/Year Value, Yours Forever)",
          "Permanently Locked-In Founder's Rate (Just $49/month, a 50% discount on the future Elite price)",
          "The Lowest Possible Transaction Fees (5%) on all jobs, forever",
          "Welcome Bonus of 100 Lead Credits (A $300 Value)",
          "Exclusive 'Founding Member' Badge on your public profile",
          "A Direct Line to our Development Team to shape the platform's future"
        ],
        riskReversal: "30-Day, 100% Risk-Free, Money-Back Guarantee. If you're not satisfied, we'll refund your payment in full. No questions asked.",
        finalCTA: "Yes, Lock In My Founder Membership Now",
        microcopy: "Get instant access to all Founder benefits. This offer ends forever once all 100 spots are claimed."
      }
    }
  ]
};

export const {
  heroContent,
  problemContent,
  solutionContent,
  founderContent,
  offerContent
} = {
  heroContent: pageContentData.landingPageContent[0].content,
  problemContent: pageContentData.landingPageContent[1].content,
  solutionContent: pageContentData.landingPageContent[2].content,
  founderContent: pageContentData.landingPageContent[3].content,
  offerContent: pageContentData.landingPageContent[4].content
};