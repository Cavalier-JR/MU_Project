import type { ExtractPropTypes } from 'vue';
import type { TabsPaneContext } from 'element-plus/es/tokens';
import type { TabPanelName } from './tabs';
export declare const tabNavProps: {
    readonly panes: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<{
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
    readonly currentName: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly editable: BooleanConstructor;
    readonly onTabClick: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(tab: TabsPaneContext, tabName: TabPanelName, ev: Event) => void>, () => void, unknown, unknown, unknown>;
    readonly onTabRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(tab: TabsPaneContext, ev: Event) => void>, () => void, unknown, unknown, unknown>;
    readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "card" | "border-card", unknown>;
    readonly stretch: BooleanConstructor;
};
export declare type TabNavProps = ExtractPropTypes<typeof tabNavProps>;
declare const TabNav: import("vue").DefineComponent<{
    readonly panes: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<{
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
    readonly currentName: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly editable: BooleanConstructor;
    readonly onTabClick: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(tab: TabsPaneContext, tabName: TabPanelName, ev: Event) => void>, () => void, unknown, unknown, unknown>;
    readonly onTabRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(tab: TabsPaneContext, ev: Event) => void>, () => void, unknown, unknown, unknown>;
    readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "card" | "border-card", unknown>;
    readonly stretch: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly panes: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<{
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
    readonly currentName: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly editable: BooleanConstructor;
    readonly onTabClick: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(tab: TabsPaneContext, tabName: TabPanelName, ev: Event) => void>, () => void, unknown, unknown, unknown>;
    readonly onTabRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(tab: TabsPaneContext, ev: Event) => void>, () => void, unknown, unknown, unknown>;
    readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "card" | "border-card", unknown>;
    readonly stretch: BooleanConstructor;
}>>, {
    type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "card" | "border-card", unknown>;
    editable: boolean;
    stretch: boolean;
    panes: {
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
    }[];
    currentName: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    onTabClick: (tab: TabsPaneContext, tabName: TabPanelName, ev: Event) => void;
    onTabRemove: (tab: TabsPaneContext, ev: Event) => void;
}>;
export declare type TabNavInstance = InstanceType<typeof TabNav>;
export default TabNav;
