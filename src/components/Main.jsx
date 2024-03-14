import { useMyContext } from '../context/PageContext';
import CodeEditor from '@uiw/react-textarea-code-editor';

// eslint-disable-next-line react/prop-types
export const Main = () => {
	const { isPreviewActive, projectList, activeIndex } = useMyContext();
	const list = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27,
	];

	return (
		<section className='w-full h-[80vh] flex justify-start items-start px-2 bg-neutral-900 overflow-scroll'>
			<div className='flex flex-col'>
				{list.map(item => (
					<p key={item} className='text-secondary'>
						{item}
					</p>
				))}
			</div>
			<div className='min-w-[50%] min-h-[80vh] max-h-[80vh] overflow-scroll'>
				<CodeEditor
					value={projectList[activeIndex].code}
					language='js'
					className='w-full'
					data-color-mode='dark'
					style={{
						backgroundColor: 'rgb(29,29,29)',
					}}
				/>
			</div>

			{isPreviewActive && (
				<aside className='min-w-1/2 h-[80vh] overflow-scroll bg-white'>
					<img src={projectList[activeIndex].preview} alt='' />
				</aside>
			)}
		</section>
	);
};
