import { registerPlugin } from '@capacitor/core';
const ScreenOrientation = registerPlugin('CapacitorScreenOrientation', {
    web: () => import('./web').then((m) => new m.CapacitorScreenOrientationWeb()),
});
export * from './definitions';
export { ScreenOrientation };
//# sourceMappingURL=index.js.map