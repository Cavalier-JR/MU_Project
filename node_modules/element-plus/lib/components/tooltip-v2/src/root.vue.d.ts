declare const _default: import("vue").DefineComponent<{
    readonly delayDuration: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
    readonly defaultOpen: BooleanConstructor;
    readonly open: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
    readonly onOpenChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
    readonly 'onUpdate:open': import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly delayDuration: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
        readonly defaultOpen: BooleanConstructor;
        readonly open: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
        readonly onOpenChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
        readonly 'onUpdate:open': import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    _open: import("vue").Ref<boolean>;
    triggerRef: import("vue").Ref<HTMLElement | null>;
    open: import("vue").WritableComputedRef<boolean>;
    isOpenDelayed: import("vue").ComputedRef<boolean>;
    onDelayedOpen: import("@vueuse/shared").Fn;
    clearTimer: import("@vueuse/shared").Fn;
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
    contentId: import("vue").Ref<string>;
    onNormalOpen: () => void;
    onDelayOpen: () => void;
    onOpen: () => void;
    onClose: () => void;
    onChange: (open: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly delayDuration: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
    readonly defaultOpen: BooleanConstructor;
    readonly open: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
    readonly onOpenChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
    readonly 'onUpdate:open': import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
}>>, {
    open: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    delayDuration: number;
    onOpenChange: (state: boolean) => void;
    "onUpdate:open": (state: boolean) => void;
    defaultOpen: boolean;
}>;
export default _default;
