import { CommercialPage } from '@/components/site/CommercialPage';
import { pageMetadata } from '@/components/site/PageElements';
import { saudiServices } from '@/data/saudi-content';
const page = saudiServices['technical-seo'];
export const metadata = pageMetadata({title:page.metaTitle, description:page.metaDescription, path:page.path});
export default function Page() { return <CommercialPage page={page}/>; }
