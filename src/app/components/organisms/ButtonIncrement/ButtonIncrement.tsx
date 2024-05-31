"use client";
import React, { useState } from 'react'
import Text from '../../atoms/Test'
import ButtonText from '../../molecules/ButtonText'
import styles from './buttonIncrement.module.css'

const ButtonIncrement: React.FC = () => {
	const [index, setIndex] = useState(0)
	const increment = () => setIndex(index + 1)
	const decrement = () => setIndex(index - 1)

	return (
		<div>
			<div className={styles.button__list}>
				<ButtonText className={`${styles.button__operations} ${styles.button__decrement}`} onClick={decrement}>—</ButtonText>
				<Text className={styles.button__counter}>{index}</Text>
				<ButtonText className={`${styles.button__operations} ${styles.button__increment}`} onClick={increment}>+</ButtonText>

			</div>
		</div>
	)
}

export default ButtonIncrement