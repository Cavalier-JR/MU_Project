import type { ExtractPropTypes } from 'vue';
import type TabBar from './tab-bar.vue';
export declare const tabBarProps: {
    readonly tabs: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<{
        uid: number;
        slots: {
            [x: string]: import("vue").Slot | undefined;
        };
        props: {
            readonly disabled: boolean;
            readonly name: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly label: string;
            readonly closable: boolean;
            readonly lazy: boolean;
        };
        paneName: string | number | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }[]>, () => [], unknown, unknown, unknown>;
};
export declare type TabBarProps = ExtractPropTypes<typeof tabBarProps>;
export declare type TabBarInstance = InstanceType<typeof TabBar>;
