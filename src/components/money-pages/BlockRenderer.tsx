import React from "react";
import type { BlockConfig, MoneyBlockType, MoneyPageData } from "@/data/moneyPageLayouts";

// Hero
import { HeroA, HeroB, HeroC } from "./HeroVariants";
// Props
import { ValuePropGrid, ValuePropList } from "./ValuePropVariants";
// Why
import { WhyFazilA, WhyFazilB } from "./WhyFazilVariants";
// Process
import { StepsTimeline, StepsGrid } from "./ProcessVariants";
// Action
import { MarketInsightBlock, FAQBlock, FinalCTABlock } from "./ActionBlocks";

const ComponentsMap: Record<MoneyBlockType, React.ComponentType<MoneyPageData>> = {
  HeroA,
  HeroB,
  HeroC,
  ValuePropGrid,
  ValuePropList,
  WhyFazilA,
  WhyFazilB,
  StepsTimeline,
  StepsGrid,
  MarketInsightBlock,
  FAQBlock,
  FinalCTABlock,
};

export function BlockRenderer({
  layout,
  commonData,
}: {
  layout: BlockConfig[];
  commonData: MoneyPageData;
}) {
  return (
    <>
      {layout.map((block, index) => {
        const Component = ComponentsMap[block.type];
        if (!Component) {
          console.warn(`Block type ${block.type} not found!`);
          return null;
        }
        return <Component key={`${block.type}-${index}`} {...commonData} {...block.props} />;
      })}
    </>
  );
}
