import { Field } from '../Field/Field';
import { Information } from '../Information/Information';
import styles from './Game.module.css';
import PropTypes from 'prop-types';
import React from 'react';

export function GameLayout({ handleRestartGame }) {
	return (
		<div className={styles.gameField}>
			<Information />
			<Field />
			<button className={styles.resetButton} onClick={handleRestartGame}>
				Начать заново
			</button>
		</div>
	);
}

GameLayout.propTypes = {
	handleRestartGame: PropTypes.func.isRequired,
};
