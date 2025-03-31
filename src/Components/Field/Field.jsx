import { FieldLayout } from './FieldLayout';
import { WIN_PATTERNS } from '../../constants/constants';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	SET_CURRENT_PLAYER,
	SET_FIELD,
	SET_IS_DRAW,
	SET_IS_GAME_ENDED,
} from '../../redux/actions';

export function Field() {
	const field = useSelector((state) => state.field);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const dispatch = useDispatch();

	function checkWin(field, currentPlayer) {
		return WIN_PATTERNS.some((pattern) => {
			const [a, b, c] = pattern;
			return (
				field[a] === currentPlayer &&
				field[b] === currentPlayer &&
				field[c] === currentPlayer
			);
		});
	}

	function buttonClick(ind) {
		if (field[ind] || isGameEnded) {
			return;
		}

		const newField = [...field];
		newField[ind] = currentPlayer;
		dispatch(SET_FIELD(newField));

		if (checkWin(newField, currentPlayer)) {
			dispatch(SET_IS_GAME_ENDED(true));
			return;
		}

		if (!newField.includes('')) {
			dispatch(SET_IS_DRAW(true));
			return;
		}

		dispatch(SET_CURRENT_PLAYER(currentPlayer === 'X' ? 'O' : 'X'));
	}

	return <FieldLayout buttonClick={buttonClick} />;
}
