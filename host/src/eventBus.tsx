import mitt from 'mitt';

export type Events = {
  'counter:decrement': void;
  'counter:increment': void;
  'counter:change': number;
};

export const bus = mitt<Events>();
