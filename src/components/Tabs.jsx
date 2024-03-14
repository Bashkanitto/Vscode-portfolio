import { Braces, Columns2 } from 'lucide-react';
import { useMyContext } from '../context/PageContext';

// eslint-disable-next-line react/prop-types
export const Tabs = () => {
	const { projectList, activeIndex, setIsPreviewActive, isPreviewActive } =
		useMyContext();

	const togglePreview = () => {
		setIsPreviewActive(!isPreviewActive);
	};
	return (
		<div className='w-full h-[40px] flex justify-between items-center bg-neutral-800 px-2'>
			<button className='h-full flex items-center p-2 gap-[10px]'>
				<Braces className='text-yellow-400' />
				<p>{projectList[activeIndex].name}</p>
			</button>
			<div className='flex gap-2'>
				<button onClick={togglePreview}>
					<Columns2 />
				</button>
			</div>
		</div>
	);
};
