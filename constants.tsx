import { LinkedInProfile, Project } from './types';

export const LINKEDIN_PROFILE: LinkedInProfile = {
  url: 'https://www.linkedin.com/in/samson-m-a1332a174',
  status: 'Public profile link; individual posts are intentionally not fabricated while LinkedIn is behind an auth wall.'
};

export const PROJECTS: Project[] = [
  {
    id: 'motor-buddies-connect',
    number: '01',
    title: 'Motor Buddies Connect',
    liveBrand: 'Mechanic Mtaani',
    label: 'Mobility marketplace',
    url: 'https://motor-buddies-connect.lovable.app/',
    category: 'Mobility',
    summary: 'A Kenya-first marketplace that connects vehicle owners with trusted local mechanics for urgent and scheduled repairs.',
    problem: 'Vehicle owners often lose time searching for a reliable mechanic, explaining a fault repeatedly, and coordinating a repair without clear visibility into arrival, price, or payment.',
    solution: 'The product brings discovery, booking, service selection, live progress, communication, and payment into one customer journey while giving mechanics a practical way to present services and manage demand.',
    stack: ['React', 'TypeScript', 'GPS workflows', 'M-Pesa-ready payments', 'Marketplace UX'],
    accent: '#f97316',
    icon: 'wrench',
    article: {
      standfirst: 'Motor Buddies Connect is the product concept; the current public application is branded Mechanic Mtaani. Its strongest idea is not simply finding a mechanic—it is turning a stressful roadside event into a predictable service workflow.',
      sections: [
        {
          heading: 'The operational problem',
          paragraphs: [
            'Breakdowns are high-pressure moments. A driver needs a qualified person nearby, a clear description of the service, and confidence that the person who accepts the job will actually arrive. A conventional directory solves only discovery; it does not coordinate the transaction that follows.',
            'For mechanics, the opposite problem exists. Independent technicians need a reliable source of local demand, a way to make their expertise visible, and a lightweight operating surface that does not force them to behave like a large workshop.'
          ]
        },
        {
          heading: 'The product response',
          paragraphs: [
            'The public experience is organised around a simple sequence: search nearby, book instantly or schedule later, track the job, then pay and rate the service. The landing page also exposes service categories such as electrical repairs, engine service, brakes, suspension, oil changes, body work, and emergency assistance.',
            'That sequence is valuable because each step reduces uncertainty for the next one. Location narrows the supply pool, structured service categories improve the request, tracking reduces anxiety, and post-job ratings create a trust signal for the next customer.'
          ]
        },
        {
          heading: 'Systems thinking behind the build',
          paragraphs: [
            'The core design challenge is state management across two sides of a marketplace. A booking must move from request to acceptance to arrival to work completion without losing the customer, mechanic, or payment context. The interface therefore benefits from explicit status transitions and clear exception handling rather than a loose collection of forms.',
            'A scalable version would separate the customer journey, mechanic availability, dispatch events, payments, and reviews into auditable domains. That keeps the experience simple while preserving room for fleet accounts, repeat maintenance, and service-level reporting.'
          ]
        }
      ],
      takeaway: 'The build demonstrates how a local service marketplace can use workflow design—not just listings—to create trust, speed, and accountability.',
      publicSurface: 'The public page currently presents Mechanic Mtaani with booking, GPS tracking, mechanic onboarding, service categories, M-Pesa/card payment language, and fleet-oriented support.'
    }
  },
  {
    id: 'starlight-order-flow',
    number: '02',
    title: 'Starlight Order Flow',
    liveBrand: 'Starlight Order Flow',
    label: 'Restaurant operations',
    url: 'https://starlight-order-flow.base44.app',
    category: 'Commerce',
    summary: 'An order-management workspace designed to turn social-media interest into confirmed WhatsApp orders for a restaurant operation.',
    problem: 'Restaurant teams can lose revenue when customer messages, menu updates, branch coordination, and employee handoffs live in disconnected channels.',
    solution: 'The product creates a shared operational surface for menu management, branches, employees, WhatsApp previews, settings, and order-related administration.',
    stack: ['React', 'TypeScript', 'WhatsApp order flows', 'Role-based workspaces', 'Operations UI'],
    accent: '#f59e0b',
    icon: 'message',
    article: {
      standfirst: 'Starlight Order Flow is a practical example of converting a marketing channel into an operating channel. The public application frames the restaurant as a system where messages, menus, branches, and staff need to stay aligned.',
      sections: [
        {
          heading: 'The operational problem',
          paragraphs: [
            'A social post can generate attention in seconds, but a restaurant still needs to answer the customer, confirm the menu item, route the order to the right branch, and make sure a team member can fulfil it. When those handoffs happen in personal inboxes, errors become difficult to see and even harder to audit.',
            'The problem is therefore less about adding another storefront. It is about giving the team a reliable bridge from conversation to confirmed order.'
          ]
        },
        {
          heading: 'The product response',
          paragraphs: [
            'The public route map exposes an Admin area alongside Menu Manager, Branch Manager, Employee Manager, WhatsApp Preview, Settings, Employee Login, and Employee Dashboard. That structure makes the product feel like an operations console rather than a static restaurant website.',
            'The WhatsApp preview is especially important because it lets the team inspect the customer-facing handoff before it becomes a live conversation. The result is a tighter relationship between brand voice, menu accuracy, and order capture.'
          ]
        },
        {
          heading: 'Systems thinking behind the build',
          paragraphs: [
            'The critical design decision is to treat an order as a record with ownership and status. A useful implementation would track the source message, selected items, branch, responsible employee, confirmation state, and fulfilment state as separate but connected data points.',
            'That model also creates a foundation for analytics: response time, abandoned conversations, branch load, frequently ordered items, and staff throughput become measurable without forcing managers to reconcile chat screenshots manually.'
          ]
        }
      ],
      takeaway: 'The build demonstrates how a focused internal tool can make an existing customer channel more reliable without asking a business to replace the channel its customers already use.',
      publicSurface: 'The public Base44 page describes an automated lead-capture and order-management platform for Starlight Restaurant and exposes admin, menu, branch, employee, WhatsApp, login, and dashboard areas.'
    }
  },
  {
    id: 'gd-pharmaceuticals',
    number: '03',
    title: 'GD Pharmaceuticals',
    liveBrand: 'AfyaConnect',
    label: 'Digital health marketplace',
    url: 'https://gdpharmacuticals.base44.app/',
    category: 'Health & media',
    summary: 'A healthcare operations concept whose current public surface brings pharmacy, prescriptions, consultations, diagnostics, records, and billing into one marketplace.',
    problem: 'Patients, pharmacies, clinicians, and administrators often work across separate systems, making it difficult to move from consultation to prescription, fulfilment, records, and payment with continuity.',
    solution: 'The current live product presents a broad digital-health workspace with role selection, consultations, prescriptions, inventory, marketplace, medical records, billing, compliance, pharmacy profiles, and facility directories.',
    stack: ['React', 'TypeScript', 'Healthcare workflows', 'Inventory concepts', 'Role-based navigation'],
    accent: '#2dd4bf',
    icon: 'cross',
    article: {
      standfirst: 'The URL supplied as GD Pharmaceuticals currently presents as AfyaConnect. That mismatch is useful context: the live surface has evolved into a wider digital-health marketplace, so this article describes what is visible today instead of repeating an older wholesale-pharmacy narrative.',
      sections: [
        {
          heading: 'The operational problem',
          paragraphs: [
            'Healthcare journeys rarely stop at a single transaction. A consultation can lead to a prescription, a pharmacy order, a lab result, a follow-up, an insurance claim, or a record update. When each step sits in a separate workflow, the patient experiences friction and the organisation loses context.',
            'A pharmacy-focused system also has to treat access, auditability, and identity as first-class concerns. The product cannot optimise convenience by making sensitive information visible to the wrong role.'
          ]
        },
        {
          heading: 'The product response',
          paragraphs: [
            'The public page exposes a wide set of healthcare journeys: teleconsultations, prescriptions, prescription history, inventory, audit logs, referrals, marketplace, lab results, health records, orders, notifications, billing, analytics, compliance, insurance billing, pharmacy profiles, medical records, and facility directories.',
            'That breadth suggests a platform strategy rather than a single-purpose catalogue. The value is in linking the entities—patient, provider, pharmacy, prescription, order, record, and payment—while retaining clear boundaries between them.'
          ]
        },
        {
          heading: 'Systems thinking behind the build',
          paragraphs: [
            'A robust architecture would use role-aware access, immutable audit events, explicit consent, and carefully scoped data views. A pharmacy employee should see what is needed to fulfil a prescription, while a patient should see a coherent history without receiving internal operational controls.',
            'The next product decision is not simply which feature to add. It is which care pathway to make dependable first—consultation to prescription, pharmacy fulfilment, or records and billing—then how to measure safety and completion at each transition.'
          ]
        }
      ],
      takeaway: 'The build demonstrates the value of mapping a healthcare ecosystem around real handoffs rather than treating each feature as an isolated screen.',
      publicSurface: 'The live URL currently presents AfyaConnect and exposes digital-health routes including consultations, prescriptions, inventory, marketplace, records, billing, analytics, compliance, and pharmacy operations.'
    }
  },
  {
    id: 'gianet-microfinance',
    number: '04',
    title: 'Gianet Microfinance',
    liveBrand: 'Gianet Micro Finance',
    label: 'SME lending workflow',
    url: 'https://gianetmirofinance.base44.app',
    category: 'Finance',
    summary: 'A Kenya-focused lending experience for working-capital applications, AI-assisted review, borrower status, and transparent repayment journeys.',
    problem: 'Small businesses need access to working capital, but paper-heavy applications, unclear status, and slow handoffs can make financing feel inaccessible.',
    solution: 'The product presents an online application that moves through business details, owner details, loan request, documents, and review, with borrower login, status checking, WhatsApp contact, and human loan-officer involvement.',
    stack: ['React', 'TypeScript', 'Loan application flow', 'AI-assisted review', 'Borrower portal'],
    accent: '#a855f7',
    icon: 'coins',
    article: {
      standfirst: 'Gianet Microfinance turns a lending proposition into a visible, staged application journey. The important design move is to combine speed with a human decision point instead of presenting automation as a substitute for responsible underwriting.',
      sections: [
        {
          heading: 'The operational problem',
          paragraphs: [
            'For an SME borrower, the most frustrating part of a loan application is often not the form itself. It is uncertainty: whether the application was received, what is missing, who is reviewing it, and when a decision can be expected.',
            'For the lender, the risk is the reverse. A fast application experience can create incomplete records, weak documentation, and an underwriting queue that is difficult to prioritise.'
          ]
        },
        {
          heading: 'The product response',
          paragraphs: [
            'The live experience explains a three-step path: apply online, move through an AI-assisted review with a loan officer making the final call, and receive funding with a clear repayment schedule. The form is structured around business identity, owner identity, county, sector, and supporting documents.',
            'Borrower login and application-status routes close the loop after submission. WhatsApp contact provides a familiar escalation path for applicants who need help, which is particularly important when the product serves a broad small-business audience.'
          ]
        },
        {
          heading: 'Systems thinking behind the build',
          paragraphs: [
            'The application should be treated as a case file with controlled transitions, not a single submission blob. Each stage can carry validation, document requirements, reviewer ownership, and an audit event so the borrower and lender see the same underlying state.',
            'A responsible next layer would include decision explanations, exception queues, repayment reminders, and clear retention rules for identity and financial data. Those controls create trust around the AI-assisted portion of the workflow.'
          ]
        }
      ],
      takeaway: 'The build demonstrates how lending software can make the borrower journey clearer while keeping credit responsibility with accountable people and processes.',
      publicSurface: 'The live page currently presents Gianet Micro Finance, a working-capital lending application with borrower status, portal access, WhatsApp support, and a staged application form.'
    }
  },
  {
    id: 'county-waste-management',
    number: '05',
    title: 'County Waste Management System',
    liveBrand: 'EcoTrack Nakuru County',
    label: 'Civic operations',
    url: 'https://county-waste-management-system.base44.app/',
    category: 'Public systems',
    summary: 'A civic participation and collection-tracking concept that connects households, youth collectors, and county supervisors around measurable pickups.',
    problem: 'Waste collection systems struggle when residents cannot see how to participate, collectors lack a trusted record of work, and supervisors cannot connect pickups to community outcomes.',
    solution: 'The live product presents household and collector registration, supervisor access, pickup logging, kilogram tracking, eco-points, profiles, leaderboards, and a Nakuru County pilot narrative.',
    stack: ['React', 'TypeScript', 'Role-based registration', 'Pickup tracking', 'Community metrics'],
    accent: '#22c55e',
    icon: 'leaf',
    article: {
      standfirst: 'The County Waste Management System currently presents as EcoTrack Nakuru County, a pilot concept that links waste collection to youth income, household participation, and visible environmental progress.',
      sections: [
        {
          heading: 'The operational problem',
          paragraphs: [
            'Municipal services are experienced locally. A household wants to know when waste will be collected, a collector needs to prove the work completed, and a supervisor needs a view that supports accountability across zones. A dashboard that only serves administrators misses the participation layer that makes the system work.',
            'The product therefore has to be designed around multiple roles with different motivations, not just a single route-optimisation screen.'
          ]
        },
        {
          heading: 'The product response',
          paragraphs: [
            'The public surface gives households a registration path, collectors a way to join the programme, and supervisors a dashboard entry point. It then turns collection into a visible record: every pickup can contribute to kilograms collected, eco-points, badges, and countywide recognition.',
            'That approach makes service delivery legible. Residents can participate, collectors can build a track record, and supervisors can work with a shared vocabulary instead of disconnected complaints and spreadsheets.'
          ]
        },
        {
          heading: 'Systems thinking behind the build',
          paragraphs: [
            'The key data model is simple but powerful: household, bin or pickup identity, collector, zone, pickup event, weight, points, and supervisor review. Those entities can support transparent payouts, exception handling, route planning, and impact reporting without forcing every stakeholder into the same interface.',
            'A production rollout would also need offline-friendly capture, verification for reported weights, privacy controls for household information, and an escalation path for missed or disputed pickups.'
          ]
        }
      ],
      takeaway: 'The build demonstrates how civic software can combine service delivery, income opportunity, and community feedback in one understandable operating model.',
      publicSurface: 'The live product currently presents EcoTrack Nakuru County as a 2026 pilot with household registration, collector onboarding, supervisor access, pickup tracking, eco-points, and community metrics.'
    }
  },
  {
    id: 'pori-safari-path',
    number: '06',
    title: 'Pori Safari Path',
    liveBrand: 'Pori Guide',
    label: 'Travel companion',
    url: 'https://pori-safari-path.base44.app/',
    category: 'Travel',
    summary: 'A safari companion that helps travellers prepare, plan journeys, learn about wildlife, and keep a personal record of the trip.',
    problem: 'Safari planning is spread across destination research, packing, route decisions, wildlife education, guide discovery, and memories captured after the trip.',
    solution: 'The public application exposes weather, New to Kenya guidance, wildlife checklists, community gallery, map view, a safari glossary, local guides, wildlife encyclopedia, trip planner, packing preparation, journeys, saved trips, journals, photo galleries, rewards, and packing analytics.',
    stack: ['React', 'TypeScript', 'Trip planning', 'Travel knowledge base', 'Personal travel data'],
    accent: '#eab308',
    icon: 'compass',
    article: {
      standfirst: 'Pori Safari Path currently presents as Pori Guide. Its product direction is broader than a booking page: it is a preparation and memory layer for travellers who want context before, during, and after a safari.',
      sections: [
        {
          heading: 'The operational problem',
          paragraphs: [
            'Travel planning is often fragmented across browser tabs, saved messages, maps, packing notes, and post-trip photo folders. Safari travel adds another layer of complexity because the experience depends on weather, geography, wildlife knowledge, local guidance, and personal readiness.',
            'A good companion product should reduce that fragmentation without flattening the trip into a checklist.'
          ]
        },
        {
          heading: 'The product response',
          paragraphs: [
            'The public route structure covers both practical preparation and discovery: weather, map view, local guides, glossary, wildlife encyclopedia, packing preparation, trip planner, saved journeys, journal, gallery, rewards, and packing analytics.',
            'This combination creates a useful product loop. A traveller learns, plans, prepares, records, and returns to the experience after the journey instead of treating the app as a one-time booking funnel.'
          ]
        },
        {
          heading: 'Systems thinking behind the build',
          paragraphs: [
            'The product benefits from a personal travel graph: destinations, journeys, packing items, wildlife entries, guides, photos, and journal notes should be connected but editable. That gives the interface enough continuity to feel personal while keeping data ownership understandable.',
            'The next design question is trust. Local guide information, wildlife content, weather, and travel advice should have clear provenance and update paths so the companion remains useful in the field.'
          ]
        }
      ],
      takeaway: 'The build demonstrates how a travel product can create value through preparation and context, not only through reservations.',
      publicSurface: 'The public page currently exposes Pori Guide routes for weather, wildlife, maps, guides, trip planning, packing, journeys, journals, galleries, rewards, and analytics.'
    }
  },
  {
    id: 'risiti-yangu',
    number: '07',
    title: 'Risiti Yangu',
    liveBrand: 'RisitiYangu',
    label: 'Retail operations',
    url: 'https://risitiyangu.lovable.app/',
    category: 'Commerce',
    summary: 'A Kenya-focused mobile POS concept that brings M-Pesa, cash sales, WhatsApp receipts, and KRA/VAT records into one small-shop workflow.',
    problem: 'Small shops need to sell quickly while keeping a usable record of payments, receipts, VAT, products, and daily performance without adding enterprise-level complexity.',
    solution: 'The product combines M-Pesa and cash flows, WhatsApp receipts, VAT-ready invoices, KRA PIN and invoice details, tax summaries, product setup, stock alerts, loyalty, reports, supplier alerts, and multi-user plans.',
    stack: ['React', 'TypeScript', 'Mobile-first POS', 'WhatsApp receipts', 'KRA/eTIMS concepts'],
    accent: '#0f766e',
    icon: 'receipt',
    article: {
      standfirst: 'Risiti Yangu is designed around the moment a small shop makes a sale. Instead of separating payment, receipt delivery, and tax records, it treats them as one interaction that should be fast for the seller and legible later.',
      sections: [
        {
          heading: 'The operational problem',
          paragraphs: [
            'Retailers often use one tool for stock, another for mobile money, paper for receipts, and memory for daily performance. That creates avoidable reconciliation work and makes it harder to answer basic questions about sales and tax.',
            'The challenge is not to reproduce every capability of a large enterprise POS. It is to make the essential transaction flow reliable on the device a shop owner already carries.'
          ]
        },
        {
          heading: 'The product response',
          paragraphs: [
            'The live page describes a flow in which the seller records an M-Pesa or cash sale, sends a WhatsApp receipt, and keeps the transaction ready for VAT and KRA-oriented records. It also exposes product setup, daily summaries, tax visibility, stock alerts, loyalty points, supplier alerts, reports, and multi-user plans.',
            'The strength of the concept is the tight relationship between action and record. A receipt is not just a message to a customer; it is also a structured event in the shop ledger.'
          ]
        },
        {
          heading: 'Systems thinking behind the build',
          paragraphs: [
            'A trustworthy POS needs a clear source of truth for sale, payment status, tax calculation, receipt delivery, and inventory impact. Those events should be traceable even when the network is unreliable or a payment confirmation arrives later.',
            'The product also needs careful wording around compliance. Tax and eTIMS functionality should be presented as supported workflows and integration readiness unless an official integration has been validated for the specific deployment.'
          ]
        }
      ],
      takeaway: 'The build demonstrates how a small-business tool can create leverage by joining speed at checkout with discipline in the records behind it.',
      publicSurface: 'The live page currently positions RisitiYangu as a Kenya-focused mobile POS for M-Pesa, cash, WhatsApp receipts, VAT-ready invoices, KRA details, summaries, stock, loyalty, and reports.'
    }
  },
  {
    id: 'faragha-pulse',
    number: '08',
    title: 'Faragha Pulse',
    liveBrand: 'FARAGHA Media Group',
    label: 'Publishing operations',
    url: 'https://faragha-pulse-live.base44.app/',
    category: 'Health & media',
    summary: 'A newsroom-style publishing surface with public news categories, live analysis, breaking-news presentation, and a management dashboard entry point.',
    problem: 'A media organisation needs to publish quickly while keeping stories discoverable, categorised, and connected to internal editorial operations.',
    solution: 'The current public product presents a media home, news categories, public portal, management dashboard, live breaking-news ticker, featured analysis, story cards, and organisation-level contact and support pages.',
    stack: ['React', 'TypeScript', 'Editorial content model', 'Category navigation', 'Management dashboard'],
    accent: '#ef4444',
    icon: 'broadcast',
    article: {
      standfirst: 'The supplied Faragha Pulse URL currently renders as FARAGHA Media Group, a news and publishing product. That current public surface is the source of truth for this case study, replacing the earlier healthcare-telemetry framing with a more accurate editorial-operations story.',
      sections: [
        {
          heading: 'The operational problem',
          paragraphs: [
            'News products have two audiences with different needs. Readers need clarity, recency, navigation, and enough context to decide what to read. Editors need a workflow that supports publishing, categorisation, updates, and operational control without making the public site feel like an internal system.',
            'The product must also handle the risks of fast-moving content: corrections, timestamps, story status, source notes, and editorial ownership.'
          ]
        },
        {
          heading: 'The product response',
          paragraphs: [
            'The public experience is structured as a media home with politics, business, entertainment, sports, and other categories. It includes a live breaking-news ribbon, a featured story with live analysis, latest-story filters, a public portal, and a management dashboard entry point.',
            'That separation gives readers a simple path into the content while signalling that a deeper management surface exists for the team behind the publication.'
          ]
        },
        {
          heading: 'Systems thinking behind the build',
          paragraphs: [
            'The content model should make story state explicit: draft, reviewed, published, updated, corrected, or archived. Categories, authors, timestamps, and analysis links then become structured metadata rather than formatting decisions repeated by hand.',
            'A production newsroom would also benefit from a clear audit trail for edits and a visible correction pattern. Trust is a product feature, especially when the interface foregrounds live and breaking content.'
          ]
        }
      ],
      takeaway: 'The build demonstrates how an editorial interface can balance reader speed with the structure required for responsible publishing.',
      publicSurface: 'The live URL currently presents FARAGHA Media Group with public news categories, breaking-news presentation, live analysis, a public portal, and management dashboard navigation.'
    }
  },
  {
    id: 'pawmfort',
    number: '09',
    title: 'Pawmfort',
    liveBrand: 'Pawmfort',
    label: 'Pet commerce',
    url: 'https://pawmfort.lovable.app/',
    category: 'Consumer',
    summary: 'A polished pet-wellness storefront with product discovery, category filters, cart flows, trust signals, and content-led merchandising.',
    problem: 'Pet owners want products that feel safe, useful, and easy to compare, while a small consumer brand needs a storefront that communicates care before asking for a purchase.',
    solution: 'The public storefront combines a warm brand story, product categories, product detail pages, add-to-cart actions, checkout trust signals, shipping and returns information, and email capture for future engagement.',
    stack: ['React', 'TypeScript', 'E-commerce UX', 'Product discovery', 'Cart flow'],
    accent: '#84a98c',
    icon: 'paw',
    article: {
      standfirst: 'Pawmfort is a consumer-commerce build that shows how design, merchandising, and trust can work together. It treats pet products as part of a care routine rather than a grid of undifferentiated items.',
      sections: [
        {
          heading: 'The commerce problem',
          paragraphs: [
            'Pet owners buy for animals that cannot explain what feels comfortable or safe. The storefront therefore has to make product purpose obvious, create confidence around quality and returns, and keep the path from discovery to cart straightforward.',
            'For the brand, the challenge is to balance emotional connection with practical information. A warm visual identity should support conversion, not replace clarity.'
          ]
        },
        {
          heading: 'The product response',
          paragraphs: [
            'The public experience leads with a strong promise around comfort and wellness, then organises products into Hydration, Grooming, Comfort, and Safety. Product cards carry badges, descriptions, prices, review counts, and add-to-cart actions, while the supporting content explains guarantees, shipping, and secure checkout.',
            'This creates a merchandising system that can grow. New products can be added without losing the category structure or the brand voice that helps customers decide.'
          ]
        },
        {
          heading: 'Systems thinking behind the build',
          paragraphs: [
            'The storefront should keep product data, inventory status, cart state, checkout, fulfilment, returns, and customer communication connected. The interface may feel simple, but the underlying system must preserve accurate price, availability, and order state across every step.',
            'The next level of maturity is lifecycle thinking: product education, post-purchase support, repeat purchase reminders, and customer feedback can turn a single transaction into a durable relationship.'
          ]
        }
      ],
      takeaway: 'The build demonstrates how a focused e-commerce experience can turn product information and trust signals into a calm, conversion-ready customer journey.',
      publicSurface: 'The live storefront currently presents Pawmfort as a premium dog and cat comfort and wellness brand with category filters, product pages, cart, shipping, returns, trust signals, and email capture.'
    }
  }
];
