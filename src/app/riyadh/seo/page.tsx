import { CommercialPage } from '@/components/site/CommercialPage';
import { pageMetadata } from '@/components/site/PageElements';
import { saudiCities } from '@/data/saudi-content';
const page = saudiCities['riyadh'];
export const metadata = pageMetadata({title:page.metaTitle, description:page.metaDescription, path:page.path});
export default function Page() { return <CommercialPage page={page}/>; }
