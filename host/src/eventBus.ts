import mitt from 'mitt';

export type Events = {
  'counter:decrement': void;
  'counter:increment': void;
  'counter:change': number;
};

type GlobalThis = {
  mittInstance?: import('mitt').Emitter<Events>;
}

type Bus = import('mitt').Emitter<Events>;
const g = globalThis as GlobalThis;

if (!g.mittInstance) {
  g.mittInstance = mitt<Events>();
}

export const bus: Bus = g.mittInstance;
