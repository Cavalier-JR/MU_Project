import type { CSSProperties, ExtractPropTypes } from 'vue';
import type { KeyType } from './types';
export declare const tableV2HeaderRowProps: {
    readonly class: StringConstructor;
    readonly columns: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./common").AnyColumn[]>, unknown, true, unknown, unknown>;
    readonly columnsStyles: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Record<KeyType, CSSProperties>>, unknown, true, unknown, unknown>;
    readonly headerIndex: NumberConstructor;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<CSSProperties>, unknown, unknown, unknown, unknown>;
};
export declare type TableV2HeaderRowProps = ExtractPropTypes<typeof tableV2HeaderRowProps>;
