import type { ExtractPropTypes } from 'vue';
import type { Placement, Strategy, VirtualElement } from '@floating-ui/dom';
export declare const tooltipV2ContentProps: {
    readonly ariaLabel: StringConstructor;
    readonly arrowPadding: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number>, 5, unknown, unknown, unknown>;
    readonly effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly contentClass: StringConstructor;
    readonly placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Placement>, "bottom", unknown, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>;
    readonly reference: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement | VirtualElement | null>, null, unknown, unknown, unknown>;
    readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 8, unknown, unknown, unknown>;
    readonly strategy: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Strategy>, "absolute", unknown, "fixed" | "absolute", unknown>;
    readonly showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
};
export declare type TooltipV2ContentProps = ExtractPropTypes<typeof tooltipV2ContentProps>;
