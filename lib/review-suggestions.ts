import type { ReviewStep } from "@/lib/types";

export interface Suggestion {
  id: string;
  text: string;
  type: "short" | "detailed";
}

const googleSuggestions: Suggestion[] = [
  {
    id: "g1",
    type: "short",
    text: "From the estimate to the final walkthrough, everything was exactly as promised. Punctual, professional, and the price matched the quote — no surprises.",
  },
  {
    id: "g2",
    type: "short",
    text: "Quick response, fair price, and quality work. The team was in and out in one day and the yard was completely cleaned up afterward. Would hire again without hesitation.",
  },
  {
    id: "g3",
    type: "detailed",
    text: "We replaced the entire roof after a hail storm. Christopher walked us through every option, the crew finished ahead of schedule, and the cleanup was spotless. The whole process — from the first call to the final walkthrough — was handled professionally. Couldn't ask for a better experience.",
  },
  {
    id: "g4",
    type: "detailed",
    text: "I was nervous about hiring a roofing company after hearing horror stories from neighbors. Hive was different — straightforward pricing, no upselling, and they followed up after the job to make sure everything held up. The crew was respectful of our property, and the project came in exactly on budget.",
  },
  {
    id: "g5",
    type: "detailed",
    text: "We had multiple companies out before choosing Hive. Christopher was the only one who took time to explain what was actually needed versus what could wait. The work was high quality, the crew treated our property with respect, and the whole project wrapped up on time and on budget. Already recommended them to two neighbors.",
  },
  {
    id: "g6",
    type: "short",
    text: "The whole experience felt honest. No pressure, no hidden fees. The crew showed up on time, worked efficiently, and left the property clean. I've already referred them to two family members.",
  },
  {
    id: "g7",
    type: "detailed",
    text: "I put off dealing with my roof for over a year because I dreaded the process. Hive made it genuinely easy. The estimate was detailed and clear, the crew showed up on the day they said they would, and the finished result looks fantastic. My neighbors have already asked who did the work.",
  },
];

const facebookSuggestions: Suggestion[] = [
  {
    id: "f1",
    type: "short",
    text: "Posting this because good contractors are genuinely hard to find. Hive delivered on every promise — on time, on budget, and the quality is excellent. If anyone in the area needs roofing work, I'd send them to Christopher without hesitation.",
  },
  {
    id: "f2",
    type: "short",
    text: "Just had Hive Roofing finish up our project and I'm really impressed. Communication was great from start to finish, and the crew was respectful of our home. Highly recommend!",
  },
  {
    id: "f3",
    type: "detailed",
    text: "We've used a few different contractors over the years and Hive stands out. They were upfront about pricing, realistic about the timeline, and delivered exactly what they said they would. Christopher checked in throughout the project and followed up afterward. Happy to recommend them to anyone in the area.",
  },
  {
    id: "f4",
    type: "short",
    text: "Christopher runs a tight ship. The crew was professional, worked quickly, and the result looks great. Couldn't be happier — sharing this so friends and neighbors know who to call.",
  },
  {
    id: "f5",
    type: "detailed",
    text: "We had a small issue come up mid-project and Christopher handled it immediately, no questions asked. That's the kind of company you want working on your home. The job itself was done well, the price was fair, and the crew treated our property with care. Highly recommend to the community.",
  },
  {
    id: "f6",
    type: "short",
    text: "If you're looking for a roofer who actually answers their phone, shows up when they say they will, and charges what they quoted — Hive is it. Refreshing experience.",
  },
  {
    id: "f7",
    type: "detailed",
    text: "I usually don't write reviews but felt compelled to after this experience. Everything from the initial estimate to the final walkthrough was handled professionally. The crew was courteous, the work was excellent, and the price was fair. If anyone in your network needs roofing work, Hive Roofing is who I'd send them to.",
  },
];

const videoSuggestions: Suggestion[] = [
  {
    id: "v1",
    type: "short",
    text: "Start by sharing why you hired Hive and what you were hoping for in a contractor.",
  },
  {
    id: "v2",
    type: "short",
    text: "Tell us one thing that stood out — maybe how the crew treated your property, how Christopher communicated with you, or how the final result looked.",
  },
  {
    id: "v3",
    type: "short",
    text: "Would you hire Hive again, and would you recommend them to a neighbor? Tell us why in your own words.",
  },
  {
    id: "v4",
    type: "detailed",
    text: "Walk us through the experience from start to finish — from the first estimate to the day the crew finished up. What surprised you? What went exactly as expected? How does the finished project look?",
  },
  {
    id: "v5",
    type: "short",
    text: "Share a moment where Hive went above and beyond what you expected — something you didn't anticipate but really appreciated.",
  },
  {
    id: "v6",
    type: "detailed",
    text: "Talk about what it was like working with Christopher directly — how he communicated, how he handled any questions or concerns, and whether you felt like you were in good hands throughout the project.",
  },
  {
    id: "v7",
    type: "short",
    text: "What would you tell a friend or neighbor who is trying to decide whether to hire Hive Roofing?",
  },
];

const bbbSuggestions: Suggestion[] = [
  {
    id: "b1",
    type: "detailed",
    text: "I hired Hive Roofing after researching several contractors in the area. From the initial estimate to project completion, every aspect of the experience was professional and transparent. Pricing was clearly explained upfront with no unexpected charges at the end. The work was high quality and delivered on time. I would confidently recommend Hive to any homeowner.",
  },
  {
    id: "b2",
    type: "detailed",
    text: "Hive Roofing demonstrated integrity throughout our project. The crew was skilled, courteous, and left our property completely clean. Christopher was responsive to every question and checked in after the job was finished to make sure we were satisfied. This is a company that does what it says it will do.",
  },
  {
    id: "b3",
    type: "short",
    text: "As a homeowner, hiring contractors always involves trust. Hive earned that trust from the first visit. Christopher was straightforward about what was needed, the crew worked professionally, and the project came in exactly as quoted. No surprises, no games.",
  },
  {
    id: "b4",
    type: "detailed",
    text: "We had a significant roofing project and chose Hive based on a neighbor's recommendation. Christopher was responsive, the crew arrived on schedule, and the quality of materials and workmanship was evident. What impressed me most was the follow-through — Christopher checked in after the job was done to make sure everything was holding up. That kind of post-project care is rare.",
  },
  {
    id: "b5",
    type: "short",
    text: "Hive Roofing exceeded my expectations. The estimate was detailed, the timeline was accurate, and the finished work looks excellent. I particularly appreciated how well the crew cleaned up afterward — you'd never know they were there.",
  },
  {
    id: "b6",
    type: "detailed",
    text: "From scheduling to final inspection, working with Hive was a smooth and professional experience. They were respectful of our property, communicated proactively when questions came up, and delivered quality work on time. I'm happy to recommend them to other families in the area who are looking for a contractor they can trust.",
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
    type: "short",
    text: "Attaching a few photos so others can see the quality of the finished work. The difference from before to after is significant — happy I documented it throughout the project.",
  },
  {
    id: "gp2",
    type: "short",
    text: "Adding photos because I think it helps other homeowners see what a well-done roofing job actually looks like. Hive did great work and it shows in every detail.",
  },
  {
    id: "gp3",
    type: "detailed",
    text: "I took before-and-after shots throughout the project. The transformation is remarkable — the finished roof looks better than I expected. Uploading these so other homeowners can see the quality of the materials and craftsmanship before making their own decision.",
  },
  {
    id: "gp4",
    type: "short",
    text: "Posted photos of the completed project. The crew did a clean, meticulous job and I wanted people to be able to see the quality for themselves rather than just read about it.",
  },
  {
    id: "gp5",
    type: "detailed",
    text: "Uploaded before-and-after photos from the job. Christopher's team was careful and precise, and the visual difference speaks for itself. If you're comparing contractors and want to see what quality roofing work actually looks like, these pictures should help you decide.",
  },
  {
    id: "gp6",
    type: "short",
    text: "A picture is worth a thousand words. Sharing these photos so other homeowners in the area can see what Hive's finished work looks like up close. Really happy with how it turned out.",
  },
  {
    id: "gp7",
    type: "detailed",
    text: "Words only say so much, which is why I'm including photos. The crew was meticulous — the lines are clean, the materials look great, and the cleanup was thorough. I specifically wanted other families to be able to see the finished result before making their own decision about who to hire.",
  },
];

const yelpSuggestions: Suggestion[] = [
  {
    id: "y1",
    type: "short",
    text: "Honest review: I was skeptical going in because I've had mixed experiences with contractors. Hive changed that. Showed up on time, did the work right, and charged what they quoted. That combination is rare.",
  },
  {
    id: "y2",
    type: "detailed",
    text: "Had Hive out for a full roof replacement. The process was smoother than I expected — no high-pressure sales tactics, no surprise costs at the end, and the crew worked hard and cleaned up completely. Christopher followed up a few weeks later to make sure everything was holding up. Would definitely use them again.",
  },
  {
    id: "y3",
    type: "short",
    text: "Looking for a roofer in this area? Hive is the one. Christopher is responsive, the crew is professional, and the quality is solid. I've already pointed two neighbors in their direction.",
  },
  {
    id: "y4",
    type: "detailed",
    text: "We've lived in our house for over a decade and this was the first major roofing work we'd ever had done. I wasn't sure what to expect. Hive made the whole experience low-stress — Christopher explained everything in plain terms, the crew worked efficiently and respectfully, and we love how it turned out. Happy to give them five stars.",
  },
  {
    id: "y5",
    type: "short",
    text: "Straightforward, honest, and skilled. Those are the three words I'd use for Hive Roofing. They quoted a fair price, showed up when they said they would, and delivered quality work. My roof looks great.",
  },
  {
    id: "y6",
    type: "detailed",
    text: "I put off getting the roof fixed for longer than I should have because I wasn't sure who to trust. A neighbor recommended Hive and I'm really glad they did. The estimate was clear, the crew was professional, and the finished work is excellent. Christopher even reached out afterward to confirm everything looked right. That kind of follow-through matters.",
  },
  {
    id: "y7",
    type: "short",
    text: "Five stars because Hive earned it. Quick quote, no runaround, job done right the first time. The kind of contractor who actually cares about their reputation.",
  },
];

export function getSuggestions(step: ReviewStep): Suggestion[] {
  switch (step) {
    case 2:
      return facebookSuggestions;
    case 3:
      return videoSuggestions;
    case 4:
      return bbbSuggestions;
    case 5:
      return googlePhotosSuggestions;
    case 6:
      return yelpSuggestions;
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
