import './hooks/index2.mjs';
import { version } from './version2.mjs';
import { provideGlobalConfig } from './hooks/use-global-config/index2.mjs';

const INSTALLED_KEY = Symbol("INSTALLED_KEY");
const makeInstaller = (components = []) => {
  const install = (app, options) => {
    if (app[INSTALLED_KEY])
      return;
    app[INSTALLED_KEY] = true;
    components.forEach((c) => app.use(c));
    if (options)
      provideGlobalConfig(options, app, true);
  };
  return {
    version,
    install
  };
};

export { makeInstaller };
//# sourceMappingURL=make-installer2.mjs.map
