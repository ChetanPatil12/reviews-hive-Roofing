import type { ReviewStep } from "@/lib/types";

export interface Suggestion {
  id: string;
  text: string;
  type: "one-liner" | "short" | "detailed";
}

const googleSuggestions: Suggestion[] = [
  {
    id: "g1",
    type: "one-liner",
    text: "Honest, fair, and they actually showed up when they said they would — can't ask for more than that.",
  },
  {
    id: "g2",
    type: "one-liner",
    text: "Great price, clean job, no drama — exactly what you want from a contractor.",
  },
  {
    id: "g3",
    type: "one-liner",
    text: "Used Hive for my roof and I'd hire them again without a second thought.",
  },
  {
    id: "g4",
    type: "short",
    text: "From the estimate to the final walkthrough, everything was exactly as promised. Punctual, professional, and the price matched the quote — no surprises.",
  },
  {
    id: "g5",
    type: "short",
    text: "The whole experience felt honest. No pressure, no hidden fees. The crew showed up on time, worked efficiently, and left the property clean.",
  },
  {
    id: "g6",
    type: "detailed",
    text: "We had multiple companies out before choosing Hive. Christopher was the only one who took time to explain what was actually needed versus what could wait. The work was high quality, the crew treated our property with respect, and the whole project wrapped up on time and on budget. Already recommended them to two neighbors.",
  },
  {
    id: "g7",
    type: "detailed",
    text: "I was nervous about hiring a roofing company after hearing horror stories from neighbors. Hive was different — straightforward pricing, no upselling, and they followed up after the job to make sure everything held up. The crew was respectful of our property, and the project came in exactly on budget.",
  },
];

const facebookSuggestions: Suggestion[] = [
  {
    id: "f1",
    type: "one-liner",
    text: "If anyone in the area needs a roofer, Hive is who I'd call — no hesitation.",
  },
  {
    id: "f2",
    type: "one-liner",
    text: "Sharing this because good contractors are rare and Hive is one of them.",
  },
  {
    id: "f3",
    type: "one-liner",
    text: "Christopher and his crew delivered exactly what they promised — on time and on budget.",
  },
  {
    id: "f4",
    type: "short",
    text: "Just had Hive Roofing finish up our project and I'm really impressed. Communication was great from start to finish, and the crew was respectful of our home. Highly recommend!",
  },
  {
    id: "f5",
    type: "short",
    text: "If you're looking for a roofer who actually answers their phone, shows up when they say they will, and charges what they quoted — Hive is it. Refreshing experience.",
  },
  {
    id: "f6",
    type: "detailed",
    text: "We've used a few different contractors over the years and Hive stands out. They were upfront about pricing, realistic about the timeline, and delivered exactly what they said they would. Christopher checked in throughout the project and followed up afterward. Happy to recommend them to anyone in the area.",
  },
  {
    id: "f7",
    type: "detailed",
    text: "We had a small issue come up mid-project and Christopher handled it immediately, no questions asked. That's the kind of company you want working on your home. The job itself was done well, the price was fair, and the crew treated our property with care. Highly recommend to the community.",
  },
];

const videoSuggestions: Suggestion[] = [
  {
    id: "v1",
    type: "one-liner",
    text: "Just say why you hired Hive and whether you'd do it again — that's really all we need.",
  },
  {
    id: "v2",
    type: "one-liner",
    text: "Tell us one thing that stood out — something you'd mention to a neighbor.",
  },
  {
    id: "v3",
    type: "one-liner",
    text: "What was the moment you felt like you made the right choice hiring Hive?",
  },
  {
    id: "v4",
    type: "short",
    text: "Talk about what it was like working with Christopher — how he communicated, how he handled any questions, and whether you felt like you were in good hands.",
  },
  {
    id: "v5",
    type: "short",
    text: "Share a moment where Hive went above and beyond what you expected — something you didn't anticipate but really appreciated.",
  },
  {
    id: "v6",
    type: "detailed",
    text: "Walk us through the experience from start to finish — from the first estimate to the day the crew finished up. What surprised you? What went exactly as expected? How does the finished project look?",
  },
  {
    id: "v7",
    type: "detailed",
    text: "What would you tell a friend or neighbor who is on the fence about hiring Hive? Be honest — what made the difference for you?",
  },
];

const bbbSuggestions: Suggestion[] = [
  {
    id: "b1",
    type: "one-liner",
    text: "A contractor who charges what they quoted and shows up when they said — Hive does both.",
  },
  {
    id: "b2",
    type: "one-liner",
    text: "Transparent pricing, professional crew, quality work — exactly what you hope for and rarely get.",
  },
  {
    id: "b3",
    type: "one-liner",
    text: "Hive Roofing earned my trust on day one and backed it up through the entire project.",
  },
  {
    id: "b4",
    type: "short",
    text: "As a homeowner, hiring contractors always involves trust. Hive earned that trust from the first visit. Christopher was straightforward about what was needed, the crew worked professionally, and the project came in exactly as quoted. No surprises, no games.",
  },
  {
    id: "b5",
    type: "short",
    text: "Hive Roofing exceeded my expectations. The estimate was detailed, the timeline was accurate, and the finished work looks excellent. I particularly appreciated how well the crew cleaned up — you'd never know they were there.",
  },
  {
    id: "b6",
    type: "detailed",
    text: "I hired Hive Roofing after researching several contractors in the area. From the initial estimate to project completion, every aspect of the experience was professional and transparent. Pricing was clearly explained upfront with no unexpected charges at the end. The work was high quality and delivered on time. I would confidently recommend Hive to any homeowner.",
  },
  {
    id: "b7",
    type: "detailed",
    text: "After getting three bids, we chose Hive because Christopher was the most upfront about what the project required and what it would cost. He didn't oversell or pressure us. The crew followed through on every commitment, and the result speaks for itself. A contractor worth recommending.",
  },
];

const googlePhotosSuggestions: Suggestion[] = [
  {
    id: "gp1",
    type: "one-liner",
    text: "Posted a few photos — the finished work speaks for itself.",
  },
  {
    id: "gp2",
    type: "one-liner",
    text: "Adding photos because words only go so far — the before-and-after says everything.",
  },
  {
    id: "gp3",
    type: "one-liner",
    text: "Uploading some shots so other homeowners can see what quality roofing actually looks like.",
  },
  {
    id: "gp4",
    type: "short",
    text: "Attaching a few photos so others can see the quality of the finished work. The difference from before to after is significant — happy I documented it throughout the project.",
  },
  {
    id: "gp5",
    type: "short",
    text: "Posted photos of the completed project. The crew did a clean, meticulous job and I wanted people to see the quality for themselves rather than just read about it.",
  },
  {
    id: "gp6",
    type: "detailed",
    text: "I took before-and-after shots throughout the project. The transformation is remarkable — the finished roof looks better than I expected. Uploading these so other homeowners can see the quality of the materials and craftsmanship before making their own decision.",
  },
  {
    id: "gp7",
    type: "detailed",
    text: "Uploaded before-and-after photos from the job. Christopher's team was careful and precise, and the visual difference speaks for itself. If you're comparing contractors and want to see what quality roofing work actually looks like, these pictures should help you decide.",
  },
];

const yelpSuggestions: Suggestion[] = [
  {
    id: "y1",
    type: "one-liner",
    text: "Five stars because Hive earned it — fair price, quality work, no runaround.",
  },
  {
    id: "y2",
    type: "one-liner",
    text: "Honest review: showed up on time, did the work right, charged what they quoted — rare combination.",
  },
  {
    id: "y3",
    type: "one-liner",
    text: "If you're on the fence about hiring Hive, don't be — they're the real deal.",
  },
  {
    id: "y4",
    type: "short",
    text: "Straightforward, honest, and skilled. They quoted a fair price, showed up when they said they would, and delivered quality work. My roof looks great.",
  },
  {
    id: "y5",
    type: "short",
    text: "Looking for a roofer in this area? Hive is the one. Christopher is responsive, the crew is professional, and the quality is solid. I've already pointed two neighbors their way.",
  },
  {
    id: "y6",
    type: "detailed",
    text: "Had Hive out for a full roof replacement. The process was smoother than I expected — no high-pressure sales tactics, no surprise costs at the end, and the crew worked hard and cleaned up completely. Christopher followed up a few weeks later to make sure everything was holding up. Would definitely use them again.",
  },
  {
    id: "y7",
    type: "detailed",
    text: "We've lived in our house for over a decade and this was the first major roofing work we'd ever had done. Hive made the whole experience low-stress — Christopher explained everything in plain terms, the crew worked efficiently and respectfully, and we love how it turned out.",
  },
];

export function getSuggestions(step: ReviewStep): Suggestion[] {
  switch (step) {
    case 2:
      return yelpSuggestions;
    case 3:
      return facebookSuggestions;
    case 4:
      return videoSuggestions;
    case 5:
      return bbbSuggestions;
    case 6:
      return googlePhotosSuggestions;
    default:
      return googleSuggestions;
  }
}

export function getSuggestionsLabel(step: ReviewStep): string {
  if (step === 3) return "Not sure what to say? Here are some talking points:";
  return "Not sure what to write? Here are some ideas:";
}

export function getCopyLabel(step: ReviewStep): string {
  return step === 3 ? "Copy talking point" : "Copy suggestion";
}
