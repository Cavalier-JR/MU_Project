import Slider from './src/index2.mjs';
import './src/slider.type2.mjs';

Slider.install = (app) => {
  app.component(Slider.name, Slider);
};
const _Slider = Slider;
const ElSlider = _Slider;

export { ElSlider, _Slider as default };
//# sourceMappingURL=index2.mjs.map
