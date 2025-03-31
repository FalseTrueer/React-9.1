import React from 'react';
import { GameLayout } from './GameLayout';
import { useDispatch } from 'react-redux';
import { SET_RESTARTGAME } from '../../redux/actions';

export function Game() {
	const dispatch = useDispatch();
	return (
		<GameLayout
			handleRestartGame={() => {
				dispatch(SET_RESTARTGAME);
			}}
		/>
	);
}
