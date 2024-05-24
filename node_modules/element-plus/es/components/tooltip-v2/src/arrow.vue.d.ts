import type { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    side: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<import("./common").TooltipV2Sides>, unknown, true, import("./common").TooltipV2Sides, unknown>;
    width: import("../../../utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
    height: import("../../../utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
    style: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<CSSProperties | null>, null, unknown, unknown, unknown>;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        side: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<import("./common").TooltipV2Sides>, unknown, true, import("./common").TooltipV2Sides, unknown>;
        width: import("../../../utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
        height: import("../../../utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
        style: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<CSSProperties | null>, null, unknown, unknown, unknown>;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    ns: {
        namespace: import("vue").ComputedRef<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    arrowRef: import("vue").Ref<HTMLElement | null>;
    arrowStyle: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    side: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<import("./common").TooltipV2Sides>, unknown, true, import("./common").TooltipV2Sides, unknown>;
    width: import("../../../utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
    height: import("../../../utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
    style: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<CSSProperties | null>, null, unknown, unknown, unknown>;
}>>, {
    height: number;
    width: number;
    style: import("../../../utils").BuildPropType<import("../../../utils").PropWrapper<CSSProperties | null>, unknown, unknown>;
}>;
export default _default;
