import mitt from 'mitt';

export type Events = {
  'counter:decrement': void;
  'counter:increment': void;
  'counter:change': number;
};

type Bus = import('mitt').Emitter<Events>;
const g = globalThis as any;

if (!g.__MF_BUS__) {
  g.__MF_BUS__ = mitt<Events>();
}

export const bus: Bus = g.__MF_BUS__;
