import type { CSSProperties } from 'vue';
import type { ColumnCellsType } from '../types';
import type { TableV2HeaderRowProps } from '../header-row';
declare const TableV2HeaderRow: import("vue").DefineComponent<{
    readonly class: StringConstructor;
    readonly columns: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../common").AnyColumn[]>, unknown, true, unknown, unknown>;
    readonly columnsStyles: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Record<import("../types").KeyType, CSSProperties>>, unknown, true, unknown, unknown>;
    readonly headerIndex: NumberConstructor;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<CSSProperties>, unknown, unknown, unknown, unknown>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly class: StringConstructor;
    readonly columns: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../common").AnyColumn[]>, unknown, true, unknown, unknown>;
    readonly columnsStyles: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Record<import("../types").KeyType, CSSProperties>>, unknown, true, unknown, unknown>;
    readonly headerIndex: NumberConstructor;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<CSSProperties>, unknown, unknown, unknown, unknown>;
}>>, {
    style: CSSProperties;
}>;
export default TableV2HeaderRow;
export declare type TableV2HeaderRowCellRendererParams = {
    columns: TableV2HeaderRowProps['columns'];
    column: TableV2HeaderRowProps['columns'][number];
    columnIndex: number;
    headerIndex: number;
    style: CSSProperties;
};
export declare type TableV2HeaderRowRendererParams = {
    cells: ColumnCellsType;
    columns: TableV2HeaderRowProps['columns'];
    headerIndex: number;
};
