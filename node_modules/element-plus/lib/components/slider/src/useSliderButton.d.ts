import type { CSSProperties, ComponentInternalInstance, ComputedRef } from 'vue';
import type { ISliderButtonInitData, ISliderButtonProps } from './slider.type';
export declare const useSliderButton: (props: ISliderButtonProps, initData: ISliderButtonInitData, emit: ComponentInternalInstance['emit']) => {
    button: import("vue").Ref<any>;
    tooltip: import("vue").Ref<any>;
    tooltipVisible: import("vue").Ref<boolean>;
    showTooltip: ComputedRef<boolean>;
    wrapperStyle: ComputedRef<CSSProperties>;
    formatValue: ComputedRef<string | number>;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    onButtonDown: (event: MouseEvent | TouchEvent) => void;
    onKeyDown: (event: KeyboardEvent) => void;
    setPosition: (newPosition: number) => Promise<void>;
};
