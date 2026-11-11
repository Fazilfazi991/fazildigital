import Image from "next/image";
import Link from "next/link";
import { ProjectEnquiryDialog } from "@/components/about/ProjectEnquiryDialog";
import { JsonLd, pageMetadata } from "@/components/site/PageElements";
import "../home.css";
import "./about.css";

const title = "About Mohammad Fazil | Marketing, Technology & SEO";
const description = "Meet Mohammad Fazil, a Dubai-based marketing and technology professional and Fusion Ventures Global co-founder. Through Fazil Digital, he focuses on SEO and organic growth for Saudi businesses.";
const profileUrl = "https://ae.linkedin.com/in/fazilfazi";
const personId = "https://www.fazildigital.com/#person";

export const metadata = pageMetadata({ title, description, path: "/about/" });

const profileSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", "@id": personId, name: "Mohammad Fazil", url: "https://www.fazildigital.com/about/", image: "https://www.fazildigital.com/images/about/mohammad-fazil.webp", sameAs: [profileUrl], jobTitle: "Marketing and technology professional", worksFor: { "@type": "Organization", name: "Fazil Digital", url: "https://www.fazildigital.com/" }, affiliation: { "@type": "Organization", name: "Fusion Ventures Global", url: "https://www.fusionventuresglobal.com/" }, knowsAbout: ["Digital marketing", "Search engine optimization", "Technical and business development", "Websites and software", "Business systems", "Automation"] },
    { "@type": "AboutPage", "@id": "https://www.fazildigital.com/about/#page", url: "https://www.fazildigital.com/about/", name: "About Mohammad Fazil", description, mainEntity: { "@id": personId } },
  ],
};

const capabilities = [
  ["Marketing & growth", "I bring a customer perspective to discovery, messaging and growth. Fazil Digital's current offer focuses on SEO and organic growth for Saudi businesses."],
  ["Websites & software", "I work with teams to clarify what a website or application needs to do, map the experience and shape a practical plan for delivery."],
  ["Business systems", "I look at how enquiries, sales conversations and operational handoffs move through a business, then help make the next step clearer."],
  ["AI & automation", "I explore where automation can reduce repetitive work, with clear human checks for decisions and customer information."],
  ["Digital products", "I help connect a business problem to a useful first version by clarifying who it serves, what it needs to do and which decisions come first."],
  ["Business development", "My publicly listed Fusion Ventures Global role is Co-Founder, Technical & Business Development. I bring business context into technical conversations."]
] as const;

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function AboutPage() {
  return <div className="fd-about-page">
    <JsonLd data={profileSchema} />
    <section className="fd-about-hero fd-about-wrap" aria-labelledby="about-title">
      <div className="fd-about-copy">
        <p className="fd-about-overline">Mohammad Fazil <span aria-hidden="true">/</span> Marketing × technology</p>
        <h1 id="about-title">I connect ideas, marketing and technology to build better businesses.</h1>
        <p className="fd-about-intro">I’m a Dubai-based marketing and technology professional. I work across digital growth, websites and software, business systems and practical automation—bringing customer needs and the way a business operates into the same conversation.</p>
        <p className="fd-about-intro fd-about-intro-second">Through Fazil Digital, I focus on SEO and organic growth for Saudi businesses. My wider professional work connects marketing leadership with technical and business development.</p>
        <div className="fd-about-hero-actions"><ProjectEnquiryDialog className="fd-about-button">Talk about your project <Arrow /></ProjectEnquiryDialog><a className="fd-about-link" href={profileUrl} target="_blank" rel="noopener noreferrer">View LinkedIn <Arrow /></a></div>
        <p className="fd-about-place"><span className="fd-about-place-mark" aria-hidden="true" />Based in Dubai, UAE</p>
      </div>
      <figure className="fd-about-photo"><Image src="/images/about/mohammad-fazil.webp" alt="Mohammad Fazil seated in a café" width={1126} height={1376} preload sizes="(max-width: 760px) 100vw, 46vw" /><figcaption><span>Mohammad Fazil</span><span>Dubai, UAE</span></figcaption></figure>
      <span aria-hidden="true" className="fd-about-side-note">MARKETING · TECHNOLOGY · BUSINESS</span>
    </section>

    <section className="fd-about-route" aria-label="Professional focus"><div className="fd-about-wrap fd-about-route-inner"><span>Customer perspective</span><i aria-hidden="true"/><span>Technical &amp; business development</span><i aria-hidden="true"/><span>Digital growth</span></div></section>

    <section className="fd-about-story fd-about-wrap" aria-labelledby="story-title"><div className="fd-about-story-label"><span>01 / Perspective</span><h2 id="story-title">Good work starts with the right question.</h2></div><div className="fd-about-story-copy"><p>I’m interested in the point where an idea meets the real world: the people it serves, the message that reaches them and the systems that help a team deliver.</p><p>Marketing gave me the customer perspective. Technical and business-development work widened that view to include the decisions and operations behind an experience. I bring those perspectives together to find a useful next step for the business.</p></div></section>

    <section className="fd-about-career" aria-labelledby="career-title"><div className="fd-about-wrap"><div className="fd-about-section-heading"><div><span className="fd-about-overline">Professional story</span><h2 id="career-title">Different roles. One connected view.</h2></div><p>A few parts of my path, without invented dates or performance claims.</p></div><ol className="fd-about-timeline">
      <li><span className="fd-about-timeline-node" aria-hidden="true">01</span><div className="fd-about-timeline-meta"><span>Marketing</span><span>Customer perspective</span></div><div className="fd-about-timeline-content"><h3>Understanding how people find a business</h3><p>My professional foundation is in digital marketing: understanding an audience, shaping a message and making useful information easier to find.</p></div></li>
      <li><span className="fd-about-timeline-node" aria-hidden="true">02</span><div className="fd-about-timeline-meta"><span>ZORX</span><span>Owner-confirmed</span></div><div className="fd-about-timeline-content"><h3>Marketing leadership</h3><p>I led marketing at ZORX. I share this without dates, formal title or outcome claims.</p></div></li>
      <li><span className="fd-about-timeline-node" aria-hidden="true">03</span><div className="fd-about-timeline-meta"><span>Fusion Ventures Global</span><span>Publicly listed role</span></div><div className="fd-about-timeline-content"><h3>Co-Founder, Technical &amp; Business Development</h3><p>This is the role listed on my public profile and the Fusion Ventures team page. I work across technical and business development.</p><a href="https://www.fusionventuresglobal.com/" target="_blank" rel="noopener noreferrer">Visit Fusion Ventures <Arrow /></a></div></li>
      <li><span className="fd-about-timeline-node" aria-hidden="true">04</span><div className="fd-about-timeline-meta"><span>Fazil Digital</span><span>Dubai, UAE</span></div><div className="fd-about-timeline-content"><h3>SEO and organic growth</h3><p>I work directly with businesses on search. Fazil Digital&apos;s current commercial SEO focus is Saudi Arabia, including Riyadh, Jeddah and Dammam.</p><Link href="/services/seo/">Explore SEO services <Arrow /></Link></div></li>
    </ol></div></section>

    <section className="fd-about-practice fd-about-wrap" aria-labelledby="practice-title"><div className="fd-about-practice-intro"><span className="fd-about-overline">Areas of experience</span><h2 id="practice-title">A practical mix of disciplines.</h2><p>Choose a topic to see how it fits into the way I think about business problems.</p></div><div className="fd-about-capabilities" role="list">{capabilities.map(([name, text], index) => <details key={name} className="fd-about-capability" open={index === 0}><summary><span>{name}</span><span className="fd-about-capability-mark" aria-hidden="true">+</span></summary><p>{text}</p></details>)}</div></section>

    <section className="fd-about-contact" aria-labelledby="contact-title"><div className="fd-about-wrap fd-about-contact-inner"><div><span className="fd-about-overline">Let’s connect</span><h2 id="contact-title">Have an idea, challenge or project in mind?</h2><p>Tell me what you’re trying to make clearer or easier. We can start with the problem and decide whether a useful next step makes sense.</p></div><div className="fd-about-contact-actions"><ProjectEnquiryDialog className="fd-about-button fd-about-button-lime">Discuss a project <Arrow /></ProjectEnquiryDialog><Link href="/digital-marketing-expert-calicut/">Calicut and Kozhikode consultancy</Link><a href="https://wa.me/918086191325" target="_blank" rel="noopener noreferrer">WhatsApp <Arrow /></a></div></div></section>
  </div>;
}
