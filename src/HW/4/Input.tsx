import {ChangeEvent} from "react";

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (e: ChangeEvent<HTMLInputElement>) => void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(event);
	};

	return (
	  <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
