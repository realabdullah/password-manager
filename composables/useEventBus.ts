import mitt from "mitt";

type Events = {
  showToast: string;
};

const emitter = mitt<Events>();

export const useEvent = emitter.emit;
export const useListen = emitter.on;
