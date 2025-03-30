import React from 'react';
import DefaultButton from '../Buttons/DefaultButton';

const ReusableSection = ({
	backgroundImage,
	title,
	description,
	defaultButtonProps,
	sectionClassName = '',
	containerClassName = '',
	overlayClassName = '',
	titleClassName = '',
	descriptionClassName = '',
	dataAos = '',
}) => {
	return (
		<section
			data-aos={dataAos}
			className={`relative bg-repeat bg-cover bg-center text-white py-16 px-4 md:px-0 ${sectionClassName}`}
			style={{ backgroundImage: `url('${backgroundImage}')` }}>
			{/* Gradient overlay from black to white */}
			<div className={`absolute inset-0 ${overlayClassName}`}></div>

			{/* Content container */}
			<div
				className={`relative container mx-auto my-auto flex flex-col gap-8 ${containerClassName}`}>
				<h1 className={`text-4xl playscript leading-[50px] ${titleClassName}`}>
					{title}
				</h1>
				<p
					className={`text-base leading-6 text-center md:text-left ${descriptionClassName}`}>
					{description}
				</p>
				<div>
					<DefaultButton {...defaultButtonProps} />
				</div>
			</div>
		</section>
	);
};

export default ReusableSection;
