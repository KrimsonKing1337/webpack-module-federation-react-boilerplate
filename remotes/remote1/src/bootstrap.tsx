import { createRoot } from 'react-dom/client';

import { Root } from './components';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(<Root />);
