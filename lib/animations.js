import { keyframes } from '@chakra-ui/react'

export const wave = keyframes`
	0% { transform: rotate(0deg); }
	10% { transform: rotate(14deg); }
	20% { transform: rotate(-8deg); }
	30% { transform: rotate(14deg); }
	40% { transform: rotate(-4deg); }
	50% { transform: rotate(10deg); }
	60% { transform: rotate(0deg); }
	100% { transform: rotate(0deg); }
`

export const float = keyframes`
	0% { transform: translateY(0px); }
	50% { transform: translateY(-6px); }
	100% { transform: translateY(0px); }
`

export const gradientMove = keyframes`
	0% { background-position: 0% 50%; }
	50% { background-position: 100% 50%; }
	100% { background-position: 0% 50%; }
`

export const floatSlow = keyframes`
	0% { transform: translateY(0px) rotate(0deg); }
	50% { transform: translateY(-15px) rotate(5deg); }
	100% { transform: translateY(0px) rotate(0deg); }
`

export const floatReverse = keyframes`
	0% { transform: translateY(0px) rotate(0deg); }
	50% { transform: translateY(10px) rotate(-5deg); }
	100% { transform: translateY(0px) rotate(0deg); }
`

export const glow = keyframes`
	0% { box-shadow: 0 0 20px rgba(56, 178, 172, 0.3), 0 0 40px rgba(56, 178, 172, 0.1); }
	50% { box-shadow: 0 0 30px rgba(56, 178, 172, 0.5), 0 0 60px rgba(56, 178, 172, 0.2); }
	100% { box-shadow: 0 0 20px rgba(56, 178, 172, 0.3), 0 0 40px rgba(56, 178, 172, 0.1); }
`

export const blink = keyframes`
	0%, 50% { opacity: 1; }
	51%, 100% { opacity: 0; }
`
