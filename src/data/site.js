// All copy for the landing page lives here so wording changes never mean
// touching layout code.

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'What we do', href: '#services' },
  { label: 'Team', href: '#about' },
]

export const hero = {
  eyebrow: 'Your AI team',
  headline: ['You bring the problem.', 'We build the'],
  headlineMark: 'AI.',
  pitch:
    'We help companies turn AI ideas and business problems into real products and systems.',
  primaryCta: 'Book a technical call',
  secondaryCta: "See what we've built",
  tags: ['AI agents', 'Voice AI', 'Document intelligence', 'Automation'],
  cards: [
    {
      position: 'top',
      icon: '↗',
      tone: 'green',
      title: 'AI experts',
      sub: 'experienced from idea to production',
    },
    {
      position: 'bottom',
      icon: '◇',
      tone: 'blue',
      title: 'Built to ship',
      sub: 'from idea to production',
    },
  ],
}

export const services = {
  kicker: 'How we work',
  title: 'Three ways to work with us',
  sub: 'Some need hands. Some need one capability built properly. Some need the whole thing.',
  cards: [
    {
      id: 'embed',
      tone: 'blue',
      art: 'embed',
      title: 'AI Technical Arm',
      points: [
        'AI expertise injected directly into your team.',
        'Architecture, models, evaluation & technical guidance.',
      ],
      link: 'Talk about injecting →',
      engagement: 'AI Technical Arm',
    },
    {
      id: 'build',
      tone: 'pink',
      art: 'build',
      title: 'Ready AI Service',
      points: [
        'A focused AI capability built into your existing product.',
        'Integrated, deployed, and ready to use.',
      ],
      link: 'Talk about a build →',
      engagement: 'Ready AI Service',
    },
    {
      id: 'product',
      tone: 'warm',
      art: 'ship',
      title: 'End-to-End Product',
      points: [
        'From AI idea to a production-ready product.',
        'We handle discovery, development, deployment & evaluation.',
      ],
      link: 'Talk about building it →',
      engagement: 'End-to-End Product',
    },
  ],
}

export const work = {
  kicker: 'Selected work',
  title: 'Proof, not promises',
  sub: 'Three systems that show how we work.',
  cases: [
    {
      id: 'dcap',
      tag: 'Document intelligence',
      accent: 'blue',
      title: 'DCAP — turning curricula into career intelligence',
      art: 'dcap',
      flip: false,
      points: [
        'An agent that searches and filters live job opportunities from bayt, wazzuf, and LinkedIn.',
        'Structured extraction of courses and fields from curricula and regulations.',
        'Gap analysis between what is taught and what the market hires for.',
        'An interactive spreadsheet workflow the team actually uses.',
        'Extraction that adapts to new document formats without rewriting rules.',
        'Per-program recommendations for closing the gap.',
      ],
    },
    {
      id: 'voice',
      tag: 'Voice AI',
      accent: 'green',
      title: 'Voice assistants that hold a real conversation',
      art: 'voice',
      flip: true,
      points: [
        'Answers, qualifies and resolves customer calls end to end.',
        'Follow-up questions and context, not a scripted phone menu.',
        'Handles after-hours and peak volume without extra headcount.',
        'Hands off to a human with the full context attached.',
        'Multi-language support for regional customer bases.',
        'Call summaries and outcomes written straight into your CRM.',
        'The same assistant answers over chat, not just voice.',
      ],
    },
    {
      id: 'automation',
      tag: 'AI automation',
      accent: 'plum',
      title: 'Agents that run the process, not just suggest it',
      art: 'flow',
      flip: false,
      points: [
        'Describe the process in plain language and the workflow gets built from it.',
        'Wired into the systems you already run — store, ERP, CRM, email, Slack.',
        'Branching and thresholds pulled straight out of the description.',
        'Change the description and only the affected steps are rebuilt.',
        'Human approval before anything goes live.',
        'Every run logged step by step, so you can see what happened and why.',
      ],
    },
  ],
}


export const about = {
  kicker: 'How we work with you',
  title: 'Your AI team, without the hiring',
  pitch:
    'We take on the AI side of your product or process — framing the problem, building the system, and running it in production. You work directly with the people building it.',
  pin: { value: 'Cairo, EG', label: 'working worldwide' },
  // No photos and no headcount — the visual shows how you work with the team
  // instead of how many people are in it.
  link: {
    label: 'Working with us',
    from: { title: 'You', sub: 'your team' },
    to: { title: 'Phi.AI', sub: 'the engineers building it' },
    note: 'A direct line — no account managers, no hand-offs in between.',
  },
  principles: [
    {
      num: '01',
      title: 'What we own',
      body: 'Architecture, models, evaluation, deployment and the monitoring after launch.',
    },
    {
      num: '02',
      title: 'How we work',
      body: 'Small team, direct line, working software every week instead of status reports.',
    },
    {
      num: '03',
      title: 'Why Phi.AI',
      body: 'Named after the golden ratio — right-sized systems, nothing over-engineered.',
    },
  ],
}


export const contact = {
  kicker: "Let's talk",
  title: "Tell us the problem. We'll tell you how we'd build it.",
  sub: 'Thirty minutes with the engineers who would do the work.',
  email: 'info@phi-ai.co',
  replyNote: 'Reply within one working day',
  submitLabel: 'Book a technical call',
}
