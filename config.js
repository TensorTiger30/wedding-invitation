/**
 * EDIT THIS FILE to update the invitation.
 * Most visual/content changes should now be possible without editing index.html.
 */
window.WEDDING_CONFIG = {
  couple: {
    groom: "Shubhojeet Roy",
    bride: "Tanushree Ghosh",
  },

  family: {
    groomFather: "Shri. Subol Chandra Roy",
    groomMother: "Late Dr. Kabita Roy",
    brideFather: "Shri. Gautam Ghosh",
    brideMother: "Smt. Tusti Ghosh",
    brideGrandFather: "Late Shri. B.B. Ghosh",
    brideGrandMother: "Late Smt. Reba Ghosh",
    groom: "Shubhojeet Roy",
    bride: "Tanushree Ghosh",
  },

  wedding: {
    isoDateTime: "2026-11-21T19:00:00+05:30",
    date: "21 November 2026",
    day: "Saturday",
    time: "7:00 PM onwards",
    venue: "Habib Garden",
    address: "Marris Road, Civil Lines, Aligarh, Uttar Pradesh 202001",

    // Optional: paste the exact Google Maps share URL here.
    // Leave blank to automatically search Maps using venue + address.
    mapUrl: "",
  },

  rsvp: {
    // Add or remove names here. Only name + relation are displayed; no contact details.
    people: [
      {
        name: "Partho Ghosh",
        relation: "(Brother)",
        phone: "+919412563666",
      },
      {
        name: "Neil Banerjee",
        relation: "(Brother)",
        phone: "+91XXXXXXXXXX",
      },
      {
        name: "Akash Banerjee",
        relation: "(Brother)",
        phone: "+91XXXXXXXXXX",
      },
      {
        name: "Sushmita Dey",
        relation: "(Sister)",
        phone: "+91XXXXXXXXXX",
      },
      {
        name: "Aditi Bhattacharya",
        relation: "(Sister)",
        phone: "+91XXXXXXXXXX",
      },
      {
        name: "Tanushree Sinha",
        relation: "(Sister)",
        phone: "+91XXXXXXXXXX",
      },
      {
        name: "Rishabh Dey",
        relation: "(Brother)",
        phone: "+91XXXXXXXXXX",
      },
      {
        name: "Anupriya Ghosh",
        relation: "(Sister)",
        phone: "+91XXXXXXXXXX",
      },
      {
        name: "Aditya Bhattacharya",
        relation: "(Brother)",
        phone: "+91XXXXXXXXXX",
      },
      {
        name: "Harshvardhan Ghosh",
        relation: "(Brother)",
        phone: "+91XXXXXXXXXX",
      },
      {
        name: "Akash Basu",
        relation: "(Brother)",
        phone: "+91XXXXXXXXXX",
      },
    ],

    message: "Kindly confirm your presence with the family.",
  },

  mantra: {
    bengali: [
      "ওঁ সহনাববতু সহ নৌ ভুনক্তু",
      "সহ বীর্যং করবাবহৈ",
      "তেজস্বিনাবধীতমস্তু মা বিদ্বিষাবহৈ",
      "ওঁ শান্তিঃ শান্তিঃ শান্তিঃ",
    ],
    english: [
      "ॐ सह नाववतु ।",
      "सह नौ भुनक्तु ।",
      "सह वीर्यं करवावहै ।",
      "तेजस्विनावधीतमस्तु मा विद्विषावहै ॥",
      "ॐ शान्तिः शान्तिः शान्तिः ॥",
    ],
  },

  /*
   * COLOR THEME
   * Change only these hex values to restyle the invitation.
   * The values below reproduce the current baseline design.
   */
  theme: {
    vermillion: "#8a1f21",
    red: "#a62b2d",
    deep: "#431416",
    gold: "#b48a45",
    cream: "#fff8ea",
    paper: "#f7eddb",
    ink: "#3e2b24",
    muted: "#766159",

    bodyTop: "#f4e7d1",
    bodyMiddle: "#fffaf0",
    bodyBottom: "#f0e1c7",

    heroBase: "#3b1715",
    footerBackground: "#ead8b8",
  },

  /*
   * IMAGE SETTINGS
   * To change the opening image:
   * 1. Put the new image inside the assets folder.
   * 2. Change heroBackground below, e.g. "assets/my-background.jpg".
   * Position values control how the image is cropped on desktop/mobile.
   */
  images: {
    heroBackground: "assets/couple.jpeg",
    couplePhoto: "assets/couple.jpeg",
    // Same focal point on all screen sizes
    heroPositionDesktop: "50% 35%",
    heroPositionMobile: "50% 35%",

    // Decorative icons displayed around the Om symbol on the prayer/mantra card.
    prayerIcons: {
      left: "assets/traditional_icon.png",
      right: "assets/swastika.svg",
      sizeDesktop: 46,
      sizeMobile: 38,
      opacity: 0.95,
    },
  },

  /*
   * HERO IMAGE DARKNESS
   * 0 = transparent, 1 = fully dark.
   * Increase heroOverlayBottom when text needs more contrast over a bright photo.
   */
  appearance: {
    heroImageOpacity: 0.65,
    heroOverlayTop: 0.1,
    heroOverlayMiddle: 0.14,
    heroOverlayBottom: 1,
  },

  share: {
    // After hosting, paste the public URL here for best WhatsApp/social sharing.
    publicUrl: "",
    message:
      "You are warmly invited to the wedding of Shubhojeet Roy & Tanushree Ghosh on 21 November 2026 at Habib Garden, Aligarh.",
  },

  // Legacy fallback retained so older versions of index.html still work.
  photo: "assets/couple.jpeg",

  music: {
    enabled: true,
    src: "assets/music.mp3",
    autoplay: true,
    loop: true,
    volume: 0.7,
  },
};
