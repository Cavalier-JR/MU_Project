import type { CSSProperties, UnwrapRef } from 'vue';
import type { TableV2HeaderProps } from '../header';
import type { UseColumnsReturn } from '../composables/use-columns';
declare const TableV2Header: import("vue").DefineComponent<{
    readonly class: StringConstructor;
    readonly columns: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../common").AnyColumn[]>, unknown, true, unknown, unknown>;
    readonly fixedHeaderData: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, unknown, unknown, unknown, unknown>;
    readonly headerData: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, unknown, true, unknown, unknown>;
    readonly headerHeight: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number | number[]>, 50, unknown, unknown, unknown>;
    readonly rowWidth: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly rowHeight: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 50, unknown, unknown, unknown>;
    readonly height: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
}, () => JSX.Element | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly class: StringConstructor;
    readonly columns: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../common").AnyColumn[]>, unknown, true, unknown, unknown>;
    readonly fixedHeaderData: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, unknown, unknown, unknown, unknown>;
    readonly headerData: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, unknown, true, unknown, unknown>;
    readonly headerHeight: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number | number[]>, 50, unknown, unknown, unknown>;
    readonly rowWidth: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly rowHeight: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 50, unknown, unknown, unknown>;
    readonly height: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
}>>, {
    rowHeight: number;
    fixedHeaderData: any[];
    headerHeight: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<number | number[]>, unknown, unknown>;
}>;
export default TableV2Header;
export declare type TableV2HeaderInstance = InstanceType<typeof TableV2Header> & {
    /**
     * @description scroll to position based on the provided value
     */
    scrollToLeft: (left?: number) => void;
};
export declare type TableV2HeaderRendererParams = {
    class: string;
    columns: TableV2HeaderProps['columns'];
    columnsStyles: UnwrapRef<UseColumnsReturn['columnsStyles']>;
    headerIndex: number;
    style: CSSProperties;
};
export declare type TableV2HeaderRowRendererParams = {
    rowData: any;
    rowIndex: number;
} & Omit<TableV2HeaderRendererParams, 'headerIndex'>;
