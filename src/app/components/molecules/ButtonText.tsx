import React from 'react'
import Button from '../atoms/Buttons'
import Text from '../atoms/Test'

interface ButtonTextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

const ButtonText: React.FC<ButtonTextProps> = ({ children, ...props }) => {
	return (
		<Button {...props}>
			<Text>{children}</Text>
		</Button>
	)
}

export default ButtonText