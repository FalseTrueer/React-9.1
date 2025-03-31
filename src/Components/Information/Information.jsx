import { useSelector } from 'react-redux';
import { InformationLayout } from './InformationLayout';
import React from 'react';

export function Information() {
	const isDraw = useSelector((state) => state.isDraw);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const currentPlayer = useSelector((state) => state.currentPlayer);

	return (
		<InformationLayout
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
		/>
	);
}
