// Determines structural and textual variants deterministically based on slug

function seededRandom(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  return function() {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}

export interface BlockConfig {
  type: string;
  props?: any;
}

export function getMoneyPageLayout(locationSlug: string, serviceSlug: string, baseData: any): BlockConfig[] {
  const rng = seededRandom(`${locationSlug}-${serviceSlug}`);
  const randInt = (max: number) => rng() % max;

  // Decide on Hero
  const heroes = ["HeroA", "HeroB", "HeroC"];
  const heroChoice = heroes[randInt(heroes.length)];

  // Decide on Value Prop styling
  const valueProps = ["ValuePropGrid", "ValuePropList"];
  const valuePropChoice = valueProps[randInt(valueProps.length)];

  // Decide on Why Fazil Styling
  const whyFazils = ["WhyFazilA", "WhyFazilB"];
  const whyFazilChoice = whyFazils[randInt(whyFazils.length)];

  // Decide on Process
  const processes = ["StepsTimeline", "StepsGrid"];
  const processChoice = processes[randInt(processes.length)];

  // We can also shuffle the order of middle blocks
  const middleBlocks: BlockConfig[] = [
    { type: valuePropChoice },
    { type: "MarketInsightBlock" },
    { type: whyFazilChoice },
    { type: processChoice },
  ];

  // Fisher-Yates deterministic shuffle for the middle blocks
  for (let i = middleBlocks.length - 1; i > 0; i--) {
    const j = randInt(i + 1);
    [middleBlocks[i], middleBlocks[j]] = [middleBlocks[j], middleBlocks[i]];
  }

  // Certain blocks must be last
  const layout: BlockConfig[] = [
    { type: heroChoice },
    ...middleBlocks,
    { type: "FAQBlock" },
    { type: "FinalCTABlock" },
  ];

  return layout;
}
