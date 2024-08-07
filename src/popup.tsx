import React from 'react';
import { createRoot } from 'react-dom/client';
import './popup.css';

const Popup = () => {
	return <div className="min-w-[24rem] p-6"></div>;
};

const root = createRoot(document.getElementById('root')!);

root.render(
	<React.StrictMode>
		<Popup />
	</React.StrictMode>
);
