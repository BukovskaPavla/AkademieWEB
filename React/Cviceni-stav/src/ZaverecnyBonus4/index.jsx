import React, {useState} from 'react'

// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypiš do `<output></output>` jejich součet.

export const ZaverecnyBonus4 = () => {
	const [vstup1, setVstup1] = useState(0)
	const [vstup2, setVstup2] = useState(0)
	return (
		<>
			<input onChange={(e) => setVstup1(Number(e.target.value))} type="number" defaultValue="0" /> +{' '}
			<input onChange={(e) => setVstup2(Number(e.target.value))} type="number" defaultValue="0" /> = <output>{vstup1+vstup2}</output>
		</>
	)
}
