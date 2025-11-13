"use client";

import { useMemo, useState } from "react";

const features = [
  {
    title: "Unified Dashboard",
    description:
      "Monitor product health, customer sentiment, and business KPIs in a single adaptive workspace tailored to every role.",
    icon: "📊"
  },
  {
    title: "AI Signal Engine",
    description:
      "Surface actionable opportunities with real-time predictions powered by a transparent and controllable AI orchestration layer.",
    icon: "✨"
  },
  {
    title: "Workflow Automation",
    description:
      "Launch multi-step workflows that combine human approvals with automated actions across your entire tool stack.",
    icon: "⚙️"
  }
];

const metrics = [
  { label: "Faster launches", value: "6.5x" },
  { label: "Manual tasks reduced", value: "-72%" },
  { label: "Customer satisfaction", value: "98%" }
];

const steps = [
  {
    title: "Connect your data",
    description: "Secure OAuth connectors and inbound APIs stream data into a governed lakehouse in minutes.",
    stage: "Week 1"
  },
  {
    title: "Design adaptive playbooks",
    description: "Drag-and-drop builder creates reusable automations with human-in-the-loop checkpoints for critical decisions.",
    stage: "Week 2"
  },
  {
    title: "Activate intelligence",
    description: "AI signal engine highlights the highest impact actions and routes them to teams where they get done fast.",
    stage: "Week 4"
  }
];

const testimonials = [
  {
    quote:
      "We went from drowning in spreadsheets to shipping updates twice a week. Horizon keeps every team in flow.",
    name: "Sasha Nguyen",
    role: "COO, Luma Labs"
  },
  {
    quote:
      "The signal engine uncovered a revenue leak we never spotted. It paid for itself in the first month.",
    name: "Diego Martinez",
    role: "VP Growth, Sienna"
  }
];

const faqs = [
  {
    question: "How does Horizon keep data secure?",
    answer:
      "We deploy SOC 2 Type II controls across the stack, including row-level encryption, audit logging, and customer-managed keys for enterprise plans."
  },
  {
    question: "Can I integrate Horizon with existing tools?",
    answer:
      "Yes. Horizon ships with 70+ prebuilt connectors and a robust GraphQL API. Custom webhooks and SDKs cover edge cases without extra code."
  },
  {
    question: "What onboarding support is available?",
    answer:
      "Our launch engineers guide you through data mapping, automation design, and change management with dedicated success plans."
  }
];

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState(0);

  const partnerLogos = useMemo(
    () => ["Synthona", "Perigee", "AtlasOne", "Northwind", "Helio"],
    []
  );

  return (
    <main className="page">
      <header className="hero">
        <div className="hero__badge">New • Horizon 3.0 Launch</div>
        <h1>
          Operate your product like a high-velocity mission control.
        </h1>
        <p>
          Horizon synchronizes every team around live customer signals, AI-driven playbooks, and automated workflows so you can ship faster with confidence.
        </p>
        <div className="hero__actions">
          <button className="button button--primary">Start free trial</button>
          <button className="button button--ghost">Talk to sales</button>
        </div>
        <div className="hero__glow" aria-hidden="true" />
      </header>

      <section className="panel partners" aria-label="Trusted by">
        <h2>Trusted by teams shipping what comes next</h2>
        <div className="partners__logos">
          {partnerLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </section>

      <section className="panel metrics" aria-label="Impact metrics">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <div className="metrics__value">{metric.value}</div>
            <div className="metrics__label">{metric.label}</div>
          </article>
        ))}
      </section>

      <section className="panel features" aria-label="Product features">
        <div className="features__intro">
          <h2>Everything you need to orchestrate momentum</h2>
          <p>
            Replace brittle workflows with a platform that learns, adapts, and keeps teams aligned on what matters most.
          </p>
        </div>
        <div className="features__grid">
          {features.map((feature) => (
            <article key={feature.title}>
              <div className="features__icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel timeline" aria-label="Timeline">
        <div className="timeline__intro">
          <h2>Launch Horizon in under a month</h2>
          <p>
            Our success team guides every step so you capture value from day one.
          </p>
        </div>
        <div className="timeline__steps">
          {steps.map((step) => (
            <article key={step.title}>
              <span className="timeline__stage">{step.stage}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel testimonials" aria-label="Customer stories">
        <h2>Operators who trust Horizon</h2>
        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name}>
              <p>{testimonial.quote}</p>
              <cite>
                <span>{testimonial.name}</span>
                <span>{testimonial.role}</span>
              </cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="panel faq" aria-label="Frequently asked questions">
        <div className="faq__intro">
          <h2>Answers before you onboard</h2>
          <p>Everything you need to know about adopting Horizon across your teams.</p>
        </div>
        <div className="faq__list">
          {faqs.map((faq, index) => (
            <article key={faq.question}>
              <button
                onClick={() => setActiveFaq(index)}
                className={index === activeFaq ? "faq__trigger is-active" : "faq__trigger"}
                aria-expanded={index === activeFaq}
              >
                {faq.question}
              </button>
              {index === activeFaq && <p className="faq__answer">{faq.answer}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="panel cta" aria-label="Call to action">
        <div className="cta__card">
          <h2>Ready to build momentum?</h2>
          <p>
            Join pioneering teams who transform operations with Horizon. Launch your workspace or schedule a personalized deep dive.
          </p>
          <div className="cta__actions">
            <button className="button button--primary">Create workspace</button>
            <button className="button button--ghost">View pricing</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Horizon Labs</span>
        <nav>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Security</a>
        </nav>
      </footer>
    </main>
  );
}
