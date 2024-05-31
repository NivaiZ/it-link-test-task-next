import React from 'react'

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({children, ...props}) => {
	return <span {...props}>{children}</span>;
}

export default Text