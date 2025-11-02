import mitt from 'mitt';

export type Events = {
  'counter:change': number;
};

export const bus = mitt<Events>();
