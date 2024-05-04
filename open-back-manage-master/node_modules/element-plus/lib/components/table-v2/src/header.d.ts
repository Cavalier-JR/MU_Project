import type { ExtractPropTypes } from 'vue';
export declare const tableV2HeaderProps: {
    readonly class: StringConstructor;
    readonly columns: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./common").AnyColumn[]>, unknown, true, unknown, unknown>;
    readonly fixedHeaderData: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, unknown, unknown, unknown, unknown>;
    readonly headerData: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, unknown, true, unknown, unknown>;
    readonly headerHeight: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number | number[]>, 50, unknown, unknown, unknown>;
    readonly rowWidth: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly rowHeight: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 50, unknown, unknown, unknown>;
    readonly height: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
};
export declare type TableV2HeaderProps = ExtractPropTypes<typeof tableV2HeaderProps>;
