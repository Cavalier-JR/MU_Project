declare const ScrollBar: import("vue").DefineComponent<{
    readonly alwaysOn: BooleanConstructor;
    readonly class: StringConstructor;
    readonly layout: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "vertical", false, "horizontal" | "vertical", never>;
    readonly total: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, never, true, never, never>;
    readonly ratio: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly clientSize: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly scrollFrom: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly scrollbarSize: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 6, unknown, unknown, unknown>;
    readonly startGap: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly endGap: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 2, unknown, unknown, unknown>;
    readonly visible: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "start-move" | "stop-move")[], "scroll" | "start-move" | "stop-move", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly alwaysOn: BooleanConstructor;
    readonly class: StringConstructor;
    readonly layout: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "vertical", false, "horizontal" | "vertical", never>;
    readonly total: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, never, true, never, never>;
    readonly ratio: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly clientSize: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly scrollFrom: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly scrollbarSize: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 6, unknown, unknown, unknown>;
    readonly startGap: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly endGap: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 2, unknown, unknown, unknown>;
    readonly visible: BooleanConstructor;
}>> & {
    onScroll?: ((...args: any[]) => any) | undefined;
    "onStart-move"?: ((...args: any[]) => any) | undefined;
    "onStop-move"?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    layout: import("element-plus/es/utils").BuildPropType<StringConstructor, "horizontal" | "vertical", never>;
    alwaysOn: boolean;
    scrollbarSize: number;
    startGap: number;
    endGap: number;
}>;
export default ScrollBar;
