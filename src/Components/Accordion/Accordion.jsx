import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { IoIosArrowDown } from 'react-icons/io';

const ReusableAccordion = ({
	subTitle,
	title,
	children,
	accordionClassName = '',
	summaryClassName = '',
	detailsClassName = '',
	...props
}) => {
	return (
		<MuiAccordion
			className={accordionClassName}
			sx={{
				boxShadow: 'none', // Remove default shadow
				borderTop: '1px solid #979797',
				borderRadius: '0px',
				// Any additional style overrides can be added here
			}}
			{...props}>
			<MuiAccordionSummary
				expandIcon={<IoIosArrowDown />}
				className={summaryClassName}>
				<div className='flex flex-col gap-2'>
					{' '}
					<span className='text-base font-semibold leading-6'>{subTitle}</span>
					<span className='text-base font-semibold leading-6 text-[#0F3557] whitespace-pre-line'>
						{title}
					</span>
				</div>
			</MuiAccordionSummary>

			<MuiAccordionDetails className={detailsClassName}>
				{children}
			</MuiAccordionDetails>
		</MuiAccordion>
	);
};

export default ReusableAccordion;
