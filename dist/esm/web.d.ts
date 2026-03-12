import { WebPlugin } from '@capacitor/core';
import type { CapacitorScreenOrientationPlugin, OrientationLockOptions, OrientationType, ScreenOrientationResult, StartOrientationTrackingOptions } from './definitions';
export declare class CapacitorScreenOrientationWeb extends WebPlugin implements CapacitorScreenOrientationPlugin {
    private readonly pluginVersion;
    constructor();
    orientation(): Promise<ScreenOrientationResult>;
    lock(options: OrientationLockOptions): Promise<void>;
    unlock(): Promise<void>;
    startOrientationTracking(_options?: StartOrientationTrackingOptions): Promise<void>;
    stopOrientationTracking(): Promise<void>;
    isOrientationLocked(): Promise<{
        locked: boolean;
        physicalOrientation?: OrientationType;
        uiOrientation: OrientationType;
    }>;
    getPluginVersion(): Promise<{
        version: string;
    }>;
    private mapOrientationType;
}
