import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { MyProvider } from './context/PageContext.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MyProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MyProvider>
	</React.StrictMode>
);
