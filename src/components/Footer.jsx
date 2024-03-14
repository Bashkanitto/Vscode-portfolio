import { Bell, GitBranch, RefreshCcw } from 'lucide-react';
import PropTypes from 'prop-types';

export const Footer = () => {
	return (
		<footer className='w-full h-[40px] flex justify-between items-center p-2 bg-blue-400'>
			<div className='flex gap-[10px]'>
				<GitBranch />
				<p>master*</p>
				<RefreshCcw />
			</div>
			<div className='flex gap-2	'>
				<p>JavaScript</p>
				<Bell />
			</div>
		</footer>
	);
};

Footer.propTypes = {
	title: PropTypes.string,
};
