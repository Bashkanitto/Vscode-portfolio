import { ChevronRight, Ellipsis } from 'lucide-react';
import { useMyContext } from '../context/PageContext';

// eslint-disable-next-line react/prop-types
export const Sidebar = () => {
	const { setActiveIndex, projectList, activeIndex } = useMyContext();
	return (
		<aside className='w-[300px] flex flex-col justify-between p-4  bg-neutral-800'>
			<div className='flex flex-col gap-4'>
				<h5 className='flex justify-between items-center'>
					Explorer
					<button>
						<Ellipsis />
					</button>
				</h5>
				<ul className='flex flex-col text-md'>
					{projectList.map(item => (
						<a
							key={item.id}
							onClick={() => setActiveIndex(item.id)}
							style={{
								background: activeIndex == item.id ? '#cccccc19' : 'none',
								transform: activeIndex == item.id && 'translateX(10px)',
							}}
							className='flex p-1 transition'
						>
							<ChevronRight /> {item.name}
						</a>
					))}
				</ul>
			</div>
			<div className='flex flex-col gap-4'></div>
		</aside>
	);
};
