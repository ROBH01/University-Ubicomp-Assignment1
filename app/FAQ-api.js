// This file contains all the questions and answers for the FAQ screen

const FAQs = [
  {
    id: "0",
    question: "How often is the App updated?",
    answer:
      "As a minimum, the congestion status of each beach is updated three times per day at approximately 9am, 1pm and 5pm. The Seafront Ranger Team will update the congestion statuses throughout the day, with more frequent updates when required. The ‘Last update’ and ‘Next update’ times can be found at the top of the home page under the ‘Notice’ section.",
  },
  {
    id: "1",
    question: "Which beaches are covered by the App?",
    answer:
      "The App covers the whole of the coastal beaches across Bournemouth, Christchurch and Poole only. We have divided them into 24 sections for ease of use; from Sandbanks to Southbourne, Solent Beach to Highcliffe and all other beaches in-between.",
  },
  {
    id: "2",
    question: "Why doesn’t the App cover other beaches and public areas?",
    answer:
      "The App does not cover the inner harbours at Christchurch and Poole, or any other beaches and public areas within Dorset or the UK. For now, the App is heavily reliant on visual observation from our BCP Seafront Ranger Team. Our team do not patrol these areas and so we cannot provide reliable congestion information at this time.",
  },
  {
    id: "3",
    question: "Will the App be extended to cover other beaches in the UK?",
    answer:
      "Not at present, but it could be. Contact your Local Authority and tell them about our BCP Beach Check App. We would be happy to help them.",
  },
  {
    id: "4",
    question: "What does the congestion status tell me?",
    answer:
      "The congestion status reflects how busy each of our 24 sections of beach are. It considers the busyness of the zig zags, footpaths, promenades and the beach itself. We are working to include car park availability also.",
  },
  {
    id: "5",
    question:
      "I have a sight impairment. How can I distinguish the congestion status of each beach?",
    answer:
      "We’re working on that! In the meantime, when you tap on any highlighted section of the beach map, the congestion status is written in words along with other useful information for your selected beach.",
  },
  {
    id: "6",
    question: "Does the App collect my personal details?",
    answer:
      "No, it does not. The App does not ask for any personal details at any time. It does not track your location and does not require any contact details when using the feedback function.",
  },
  {
    id: "7",
    question: "Is the App in real-time?",
    answer:
      "We’re working on that! Currently, the app is manually updated at set times throughout the day with more frequent updates when required. We are working to automate the App so that it can provide real-time congestion updates.",
  },
  {
    id: "8",
    question:
      "Are there any plans to develop the functionality of the App in the future?",
    answer:
      "Yes. We have just secured funding to develop the next evolution of the app. This will allow the App to automatically draw off data from footfall sensors, CCTV footage and weather patterns to provide ‘live’ updates hourly. We also have ambitions to show car park availability and greater levels of information around seafront amenities; from toilet opening/closing times and locations to café and catering outlet details. These developments will take a little time to implement, so please bear with us.",
  },
  {
    id: "9",
    question: "What happens to the in-app feedback I’ve submitted?",
    answer:
      "All in-app feedback is collated and reviewed to identify possible technical faults, required corrections and any suggestions for future development of the App. Unfortunately, we are unable to respond to your feedback, but we really appreciate all your comments and assure you they are all taken on board.",
  },
];

const getFAQs = () => {
  return FAQs;
};

export default getFAQs;
