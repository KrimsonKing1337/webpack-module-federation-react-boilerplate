/* eslint-disable */

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module 'remote1/Button' {
  import * as React from 'react';
  const Button: React.ComponentType<React.ComponentProps<'button'>>;
  export default Button;
}

declare module 'remote2/Wrapper';
declare module 'remote1/Root';
declare module 'remote2/Root';
declare module 'host/eventBus';
