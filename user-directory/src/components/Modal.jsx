import React from 'react';
import { createPortal } from 'react-dom';

const Modal = (props) => {
	const {
		showState,
		closeModal = () => {},
		children,
		footer,
		backDropClose = true,
		modalBackDrop = true,
		childData = null,
		footerClass,
		modalDialogCssClass = 'transition-all duration-500 fixed bottom-0 left-0 right-0 m-0 w-full',
		modalContentCssClass = 'p-4 h-[240px] rounded-t-3xl',
		modalBodyCssClass = '',
	} = props;

	const RenderComponent = (
		<>
			<div className={`modal`} role='dialog' tabIndex='-1'>
				{modalBackDrop && (
					<div
						className={`modal-backdrop fixed top-0 left-0 right-0 bottom-0 bg-[#181717cf]`}
						onClick={() => {
							if (backDropClose) {
								closeModal();
							}
						}}
					></div>
				)}
				<div className={`modal-dialog ${modalDialogCssClass}`}>
					<div className={`modal-content ${modalContentCssClass}`}>
						<div className={`modal-body  ${modalBodyCssClass}`}>
							{typeof children === 'function' ? children(childData) : children}
						</div>
						{footer && (
							<div className={`modal-footer ${footerClass || ''}`}>
								{typeof children === 'function' ? footer(childData) : footer}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
	return showState && typeof document !== 'undefined'
		? createPortal(RenderComponent, document.getElementById('appPortal'))
		: null;
};

export default Modal;
