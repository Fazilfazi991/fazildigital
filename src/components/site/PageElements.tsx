import type { Metadata } from "next";
import Link from "next/link";
import { ProjectEnquiryDialog } from "@/components/about/ProjectEnquiryDialog";

export function pageMetadata({title, description, path}: {title:string;description:string;path:string}): Metadata {
  const url = `https://www.fazildigital.com${path}`;
  return { title: {absolute: title.endsWith("| Fazil Digital") ? title : `${title} | Fazil Digital`}, description, alternates: {canonical:url, languages:{}}, openGraph:{title, description,url,siteName:"Fazil Digital",type:"website"} };
}
export function JsonLd({data}:{data:unknown}) { return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,"\\u003c")}} />; }
export function PageHero({eyebrow,title,intro,breadcrumbs=[],ctaLabel="Request an SEO Review"}:{eyebrow:string;title:string;intro:string;breadcrumbs?:{label:string;href?:string}[];ctaLabel?:string}) {
 return <section className="fd-page-hero fd-container"><nav aria-label="Breadcrumb"><ol><li><Link href="/">Home</Link></li>{breadcrumbs.map((item,i)=><li key={`${item.label}-${i}`} aria-current={i === breadcrumbs.length - 1 && !item.href ? "page" : undefined}>{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</li>)}</ol></nav><div className="fd-page-hero-grid"><div><p className="fd-page-label">{eyebrow}</p><h1>{title}</h1></div><div><p>{intro}</p>{breadcrumbs.at(-1)?.label === "Contact" ? <Link className="fd-button" href="#contact-prepare">{ctaLabel} <span aria-hidden="true">↗</span></Link> : <ProjectEnquiryDialog className="fd-button">{ctaLabel} <span aria-hidden="true">↗</span></ProjectEnquiryDialog>}</div></div></section>;
}
export function PageCTA({title="Let’s make your next search opportunity count.",copy="Share your website and your priorities with Mohammad Fazil."}:{title?:string;copy?:string} = {}) { return <section className="fd-page-cta"><div className="fd-container"><h2>{title}</h2><p>{copy}</p><ProjectEnquiryDialog className="fd-button fd-button-light">Discuss your SEO goals <span aria-hidden="true">↗</span></ProjectEnquiryDialog></div></section>; }
export function PageFAQ({items}:{items:{question:string;answer:string}[]}) {return <section className="fd-faq fd-section fd-container"><div><h2>Questions, answered.</h2><p>Talk through your specific goals with Mohammad.</p></div><div>{items.map(item=><details key={item.question}><summary>{item.question}<span className="fd-faq-toggle" aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div></section>;}
