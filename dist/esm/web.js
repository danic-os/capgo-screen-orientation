import { WebPlugin } from '@capacitor/core';
export class CapacitorScreenOrientationWeb extends WebPlugin {
    constructor() {
        var _a;
        super();
        this.pluginVersion = '1.0.0';
        if ((_a = window.screen) === null || _a === void 0 ? void 0 : _a.orientation) {
            window.screen.orientation.addEventListener('change', () => {
                this.notifyListeners('screenOrientationChange', {
                    type: this.mapOrientationType(window.screen.orientation.type),
                });
            });
        }
    }
    async orientation() {
        var _a;
        if (!((_a = window.screen) === null || _a === void 0 ? void 0 : _a.orientation)) {
            throw this.unavailable('Screen Orientation API not available');
        }
        return {
            type: this.mapOrientationType(window.screen.orientation.type),
        };
    }
    async lock(options) {
        var _a;
        const screenOrientation = (_a = window.screen) === null || _a === void 0 ? void 0 : _a.orientation;
        if (!(screenOrientation === null || screenOrientation === void 0 ? void 0 : screenOrientation.lock)) {
            throw this.unavailable('Screen Orientation lock not available');
        }
        // bypassOrientationLock is only supported on iOS native platform
        // Silently ignore it on web
        try {
            await screenOrientation.lock(options.orientation);
        }
        catch (error) {
            throw new Error(`Failed to lock orientation: ${error}`);
        }
    }
    async unlock() {
        var _a;
        const screenOrientation = (_a = window.screen) === null || _a === void 0 ? void 0 : _a.orientation;
        if (!(screenOrientation === null || screenOrientation === void 0 ? void 0 : screenOrientation.unlock)) {
            throw this.unavailable('Screen Orientation unlock not available');
        }
        screenOrientation.unlock();
    }
    async startOrientationTracking(_options) {
        // Motion-based orientation tracking is only supported on iOS
        // Silently ignore on web
        console.warn('Motion-based orientation tracking is not available on web platform', _options);
    }
    async stopOrientationTracking() {
        // Motion-based orientation tracking is only supported on iOS
        // Silently ignore on web
    }
    async isOrientationLocked() {
        const orientationResult = await this.orientation();
        return {
            locked: false,
            uiOrientation: orientationResult.type,
        };
    }
    async getPluginVersion() {
        return { version: this.pluginVersion };
    }
    mapOrientationType(type) {
        if (type.includes('portrait-primary') || type === 'portrait-primary') {
            return 'portrait-primary';
        }
        if (type.includes('portrait-secondary') || type === 'portrait-secondary') {
            return 'portrait-secondary';
        }
        if (type.includes('landscape-primary') || type === 'landscape-primary') {
            return 'landscape-primary';
        }
        if (type.includes('landscape-secondary') || type === 'landscape-secondary') {
            return 'landscape-secondary';
        }
        return 'portrait-primary'; // default fallback
    }
}
//# sourceMappingURL=web.js.map