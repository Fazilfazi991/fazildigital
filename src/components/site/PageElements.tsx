import type { Metadata } from "next";
import Link from "next/link";

export function pageMetadata({title, description, path}: {title:string;description:string;path:string}): Metadata {
  const url = `https://www.fazildigital.com${path}`;
  return { title: {absolute: title.endsWith("| Fazil Digital") ? title : `${title} | Fazil Digital`}, description, alternates: {canonical:url, languages:{}}, openGraph:{title, description,url,siteName:"Fazil Digital",type:"website"} };
}
export function JsonLd({data}:{data:unknown}) { return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,"\\u003c")}} />; }
export function PageHero({eyebrow,title,intro,breadcrumbs=[]}:{eyebrow:string;title:string;intro:string;breadcrumbs?:{label:string;href?:string}[]}) {
 return <section className="fd-page-hero fd-container"><nav aria-label="Breadcrumb"><Link href="/">Home</Link>{breadcrumbs.map((item,i)=><span key={i}> / {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</span>)}</nav><div className="fd-page-hero-grid"><div><p className="fd-page-label">{eyebrow}</p><h1>{title}</h1></div><div><p>{intro}</p><Link className="fd-button" href={breadcrumbs.at(-1)?.label === "Contact" ? "#contact-prepare" : "/contact/"}>Request an SEO Review <span aria-hidden="true">↗</span></Link></div></div></section>;
}
export function PageCTA({title="Let’s make your next search opportunity count.",copy="Share your website and your priorities with Mohammad Fazil."}:{title?:string;copy?:string} = {}) { return <section className="fd-page-cta"><div className="fd-container"><h2>{title}</h2><p>{copy}</p><Link className="fd-button fd-button-light" href="/contact/">Discuss your SEO goals <span aria-hidden="true">↗</span></Link></div></section>; }
export function PageFAQ({items}:{items:{question:string;answer:string}[]}) {return <section className="fd-faq fd-section fd-container"><div><h2>Questions, answered.</h2><p>Talk through your specific goals with Mohammad.</p></div><div>{items.map(item=><details key={item.question}><summary>{item.question}<span className="fd-faq-toggle" aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div></section>;}
