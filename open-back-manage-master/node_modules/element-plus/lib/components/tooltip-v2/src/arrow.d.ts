import type { CSSProperties, ExtractPropTypes } from 'vue';
import type { TooltipV2Sides } from './common';
export declare const tooltipV2ArrowProps: {
    readonly width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
    readonly height: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<CSSProperties | null>, null, unknown, unknown, unknown>;
};
export declare const tooltipV2ArrowSpecialProps: {
    readonly side: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<TooltipV2Sides>, unknown, true, TooltipV2Sides, unknown>;
};
export declare type TooltipV2ArrowProps = ExtractPropTypes<typeof tooltipV2ArrowProps>;
