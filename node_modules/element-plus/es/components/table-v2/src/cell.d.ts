import type { ExtractPropTypes, StyleValue } from 'vue';
export declare const tableV2CellProps: {
    readonly class: StringConstructor;
    readonly cellData: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any>, unknown, unknown, unknown, unknown>;
    readonly column: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./common").AnyColumn>, unknown, unknown, unknown, unknown>;
    readonly columnIndex: NumberConstructor;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<StyleValue>, unknown, unknown, unknown, unknown>;
    readonly rowData: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any>, unknown, unknown, unknown, unknown>;
    readonly rowIndex: NumberConstructor;
};
export declare type TableV2CellProps = ExtractPropTypes<typeof tableV2CellProps>;
