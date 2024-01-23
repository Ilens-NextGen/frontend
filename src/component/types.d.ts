import { UseBoundStore, StoreApi } from "zustand";

export declare type SelectedCamState = UseBoundStore<StoreApi<{
  deviceId: string;
  label: string;
  selectDevice: (deviceId: string) => void;
  clearDevice: () => void; 
}>>;

export declare type WebCamCaptureState = UseBoundStore<StoreApi<{
    captured?: Blob;
    capturing:boolean;
    capture: (stream: MediaStream, duration: number) => Blob;
    clearCapture: () => void;
}>>;

export declare type WebCamState = UseBoundStore<StoreApi<{
  hasPermission?: boolean;
  selectedDevice?: MediaDeviceInfo;
  stream?: MediaStream;
  selectDevice: (device: MediaDeviceInfo) => void;
  clearDevice: () => void;
  setStream: (stream: MediaStream) => void;
  clearStream: () => void;
  setPermission: (permission: boolean) => void;
}>>;
