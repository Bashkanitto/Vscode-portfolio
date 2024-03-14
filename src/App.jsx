import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Toolbar } from './components/Toolbar';
import { Footer } from './components/Footer';
import { Tabs } from './components/Tabs';
import { Main } from './components/Main';
import { Terminal } from './components/Terminal';

function App() {
	return (
		<div className='rounded-lg'>
			<Header />
			<div className='flex'>
				<Toolbar />
				<Sidebar />
				<div className='w-full flex flex-col'>
					<Tabs />
					<Main />
					<Terminal />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
