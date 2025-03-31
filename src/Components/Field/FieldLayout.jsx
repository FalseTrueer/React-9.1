import styles from './Field.module.css';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

export function FieldLayout({ buttonClick }) {
	const field = useSelector((state) => state.field);

	return (
		<ul className={styles.fieldUl}>
			{field.map((el, ind) => (
				<li key={ind} className={styles.fieldLi}>
					<button onClick={() => buttonClick(ind)}>{el}</button>
				</li>
			))}
		</ul>
	);
}

FieldLayout.propTypes = {
	buttonClick: PropTypes.func.isRequired,
};
