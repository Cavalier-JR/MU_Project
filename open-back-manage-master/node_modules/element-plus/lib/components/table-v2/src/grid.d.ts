import type { ExtractPropTypes } from 'vue';
import type { ItemSize } from 'element-plus/es/components/virtual-list';
export declare type onRowRenderedParams = {
    rowCacheStart: number;
    rowCacheEnd: number;
    rowVisibleStart: number;
    rowVisibleEnd: number;
};
export declare const tableV2GridProps: {
    readonly columns: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./common").AnyColumn[]>, unknown, true, unknown, unknown>;
    readonly data: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, unknown, true, unknown, unknown>;
    readonly fixedData: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, unknown, unknown, unknown, unknown>;
    readonly estimatedRowHeight: {
        readonly default: undefined;
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __elPropsReservedKey: true;
    };
    readonly width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly height: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly headerWidth: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly headerHeight: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number | number[]>, 50, unknown, unknown, unknown>;
    readonly bodyWidth: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly rowHeight: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly cache: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 2, false, never, never>;
    readonly useIsScrolling: BooleanConstructor;
    readonly scrollbarAlwaysOn: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly scrollbarStartGap: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly scrollbarEndGap: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 2, unknown, unknown, unknown>;
    readonly class: StringConstructor;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties>, unknown, unknown, unknown, unknown>;
    readonly containerStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties>, unknown, unknown, unknown, unknown>;
    readonly getRowHeight: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ItemSize>, unknown, true, unknown, unknown>;
    readonly rowKey: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./types").KeyType>, "id", unknown, unknown, unknown>;
    readonly onRowsRendered: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(params: onRowRenderedParams) => void>, unknown, unknown, unknown, unknown>;
    readonly onScroll: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(...args: any[]) => void>, unknown, unknown, unknown, unknown>;
};
export declare type TableV2GridProps = ExtractPropTypes<typeof tableV2GridProps>;
