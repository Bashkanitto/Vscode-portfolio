import {
	Blocks,
	CircleUserRound,
	Files,
	GitBranch,
	Play,
	Search,
	Settings,
} from 'lucide-react';
import { useState } from 'react';
import { useMyContext } from '../context/PageContext';

export const Toolbar = () => {
	const { activeSidebar, setActiveSidebar } = useMyContext();
	const [activeTab, setActiveTab] = useState(1);

	const toggleSidebar = () => {
		setActiveSidebar(!activeSidebar);
	};

	return (
		<aside className='flex flex-col justify-between items-center  bg-neutral-700'>
			<div className='flex flex-col gap-4 py-2'>
				<button
					style={{
						paddingLeft: activeTab == 1 ? '10px' : '0',
						borderLeft: activeTab == 1 ? '4px solid white' : '0',
					}}
					onClick={() => {
						setActiveTab(1);
						toggleSidebar();
					}}
				>
					<Files />
				</button>
				<button
					style={{
						paddingLeft: activeTab == 2 ? '10px' : '0',
						borderLeft: activeTab == 2 ? '4px solid white' : '0',
					}}
					onClick={() => setActiveTab(2)}
				>
					<Search />
				</button>
				<button
					style={{
						paddingLeft: activeTab == 3 ? '10px' : '0',
						borderLeft: activeTab == 3 ? '4px solid white' : '0',
					}}
					onClick={() => setActiveTab(3)}
				>
					<GitBranch />
				</button>
				<button
					style={{
						paddingLeft: activeTab == 4 ? '10px' : '0',
						borderLeft: activeTab == 4 ? '4px solid white' : '0',
					}}
					onClick={() => setActiveTab(4)}
				>
					<Play />
				</button>
				<button
					style={{
						paddingLeft: activeTab == 5 ? '10px' : '0',
						borderLeft: activeTab == 5 ? '4px solid white' : '0',
					}}
					onClick={() => setActiveTab(5)}
				>
					<Blocks />
				</button>
			</div>
			<div className='flex flex-col gap-2'>
				<button
					onClick={() =>
						(window.location.href = 'https://bashkanitto.vercel.app')
					}
					className='w-full'
				>
					<CircleUserRound />
				</button>
				<button>
					<Settings />
				</button>
			</div>
		</aside>
	);
};
