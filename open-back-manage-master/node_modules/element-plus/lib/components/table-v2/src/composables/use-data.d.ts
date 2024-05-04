import type { TableV2Props } from '../table';
import type { UseRowReturn } from './use-row';
declare type UseDataProps = {
    expandedRowKeys: UseRowReturn['expandedRowKeys'];
    lastRenderedRowIndex: UseRowReturn['lastRenderedRowIndex'];
    resetAfterIndex: UseRowReturn['resetAfterIndex'];
};
export declare const useData: (props: TableV2Props, { expandedRowKeys, lastRenderedRowIndex, resetAfterIndex }: UseDataProps) => {
    data: import("vue").ComputedRef<any[]>;
    depthMap: import("vue").Ref<{
        [x: string]: number;
        [x: number]: number;
        [x: symbol]: number;
    }>;
};
export declare type UseDataReturn = ReturnType<typeof useData>;
export {};
