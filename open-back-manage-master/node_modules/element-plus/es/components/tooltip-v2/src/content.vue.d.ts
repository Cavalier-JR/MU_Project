import type { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    nowrap: BooleanConstructor;
    ariaLabel: StringConstructor;
    arrowPadding: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<number>, 5, unknown, unknown, unknown>;
    effect: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    contentClass: StringConstructor;
    placement: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<import("@floating-ui/dom").Placement>, "bottom", unknown, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>;
    reference: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<HTMLElement | import("@floating-ui/dom").VirtualElement | null>, null, unknown, unknown, unknown>;
    offset: import("../../../utils").BuildPropReturn<NumberConstructor, 8, unknown, unknown, unknown>;
    strategy: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<import("@floating-ui/dom").Strategy>, "absolute", unknown, "fixed" | "absolute", unknown>;
    showArrow: import("../../../utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        nowrap: BooleanConstructor;
        ariaLabel: StringConstructor;
        arrowPadding: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<number>, 5, unknown, unknown, unknown>;
        effect: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        contentClass: StringConstructor;
        placement: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<import("@floating-ui/dom").Placement>, "bottom", unknown, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>;
        reference: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<HTMLElement | import("@floating-ui/dom").VirtualElement | null>, null, unknown, unknown, unknown>;
        offset: import("../../../utils").BuildPropReturn<NumberConstructor, 8, unknown, unknown, unknown>;
        strategy: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<import("@floating-ui/dom").Strategy>, "absolute", unknown, "fixed" | "absolute", unknown>;
        showArrow: import("../../../utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    triggerRef: import("vue").Ref<HTMLElement | null>;
    contentId: import("vue").Ref<string>;
    placement: import("vue").Ref<import("../../../utils").BuildPropType<import("../../../utils").PropWrapper<import("@floating-ui/dom").Placement>, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>>;
    strategy: import("vue").Ref<import("../../../utils").BuildPropType<import("../../../utils").PropWrapper<import("@floating-ui/dom").Strategy>, "fixed" | "absolute", unknown>>;
    arrowRef: import("vue").Ref<HTMLElement | null>;
    referenceRef: import("vue").Ref<HTMLElement | import("@floating-ui/dom").VirtualElement | undefined>;
    contentRef: import("vue").Ref<HTMLElement | undefined>;
    middlewareData: import("vue").Ref<{
        [x: string]: any;
        arrow?: {
            x?: number | undefined;
            y?: number | undefined;
            centerOffset: number;
        } | undefined;
        autoPlacement?: {
            index?: number | undefined;
            overflows: {
                placement: import("@floating-ui/dom").Placement;
                overflows: number[];
            }[];
        } | undefined;
        flip?: {
            index?: number | undefined;
            overflows: {
                placement: import("@floating-ui/dom").Placement;
                overflows: number[];
            }[];
        } | undefined;
        hide?: {
            referenceHidden?: boolean | undefined;
            escaped?: boolean | undefined;
            referenceHiddenOffsets?: {
                top: number;
                right: number;
                bottom: number;
                left: number;
            } | undefined;
            escapedOffsets?: {
                top: number;
                right: number;
                bottom: number;
                left: number;
            } | undefined;
        } | undefined;
        offset?: {
            x: number;
            y: number;
        } | undefined;
        shift?: {
            x: number;
            y: number;
        } | undefined;
    }>;
    x: import("vue").Ref<number | undefined>;
    y: import("vue").Ref<number | undefined>;
    update: () => Promise<void>;
    zIndex: number;
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
    side: import("vue").ComputedRef<string>;
    contentStyle: import("vue").ComputedRef<CSSProperties>;
    arrowStyle: import("vue").ComputedRef<CSSProperties>;
    contentClass: import("vue").ComputedRef<(string | undefined)[]>;
    ElVisuallyHidden: import("vue").DefineComponent<{
        style: {
            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        };
    }, {
        computedStyle: import("vue").ComputedRef<any>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        style: {
            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        };
    }>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    nowrap: BooleanConstructor;
    ariaLabel: StringConstructor;
    arrowPadding: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<number>, 5, unknown, unknown, unknown>;
    effect: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    contentClass: StringConstructor;
    placement: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<import("@floating-ui/dom").Placement>, "bottom", unknown, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>;
    reference: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<HTMLElement | import("@floating-ui/dom").VirtualElement | null>, null, unknown, unknown, unknown>;
    offset: import("../../../utils").BuildPropReturn<NumberConstructor, 8, unknown, unknown, unknown>;
    strategy: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<import("@floating-ui/dom").Strategy>, "absolute", unknown, "fixed" | "absolute", unknown>;
    showArrow: import("../../../utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
}>>, {
    offset: number;
    effect: string;
    placement: import("../../../utils").BuildPropType<import("../../../utils").PropWrapper<import("@floating-ui/dom").Placement>, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>;
    strategy: import("../../../utils").BuildPropType<import("../../../utils").PropWrapper<import("@floating-ui/dom").Strategy>, "fixed" | "absolute", unknown>;
    nowrap: boolean;
    showArrow: import("../../../utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    reference: import("../../../utils").BuildPropType<import("../../../utils").PropWrapper<HTMLElement | import("@floating-ui/dom").VirtualElement | null>, unknown, unknown>;
    arrowPadding: number;
}>;
export default _default;
