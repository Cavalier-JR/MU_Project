import type { CSSProperties } from 'vue';
export declare const BAR_MAP: {
    readonly vertical: {
        readonly offset: "offsetHeight";
        readonly scroll: "scrollTop";
        readonly scrollSize: "scrollHeight";
        readonly size: "height";
        readonly key: "vertical";
        readonly axis: "Y";
        readonly client: "clientY";
        readonly direction: "top";
    };
    readonly horizontal: {
        readonly offset: "offsetWidth";
        readonly scroll: "scrollLeft";
        readonly scrollSize: "scrollWidth";
        readonly size: "width";
        readonly key: "horizontal";
        readonly axis: "X";
        readonly client: "clientX";
        readonly direction: "left";
    };
};
export declare const renderThumbStyle: ({ move, size, bar }: {
    move: any;
    size: any;
    bar: any;
}) => CSSProperties;
