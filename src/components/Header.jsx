import { Circle, CircleUserRound, Settings } from 'lucide-react';
import PropTypes from 'prop-types';
import { useMyContext } from '../context/PageContext';

export const Header = () => {
	const { page } = useMyContext();
	return (
		<header className='w-full h-[40px] flex justify-between p-2  bg-neutral-700'>
			<div className='flex w-[50px] gap-[4px]'>
				<Circle fill='red' strokeWidth='0' />
				<Circle fill='yellow' strokeWidth='0' />
				<Circle fill='green' strokeWidth='0' />
			</div>
			<p>{page}</p>
			<div className='flex gap-2'>
				<button>
					<CircleUserRound />
				</button>
				<button>
					<Settings />
				</button>
			</div>
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string,
};
