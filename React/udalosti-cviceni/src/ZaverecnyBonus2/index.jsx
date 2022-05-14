import React from 'react'

// Zadání: Předstírejme, že na stránce je složitý formulář, do kterého uživatel možná pracně vyplnil nějaká data. Po kliku na odkaz se radši uživatele zeptej pomocí `confirm`, jestli chce opravdu odejít na jinou stránku a tím ztratit rozpracovanou práci. Pokud otázku nepotvrdí, nechce odejít, zamez přesměrování pomocí `event.preventDefault()`.

export const ZaverecnyBonus2 = () => {
	return (
		<>
			Odkaz: <a onClick={(event) => {
				if(confirm("Opravdu chcete odejít ze stránky před uložením dat?")===false){
					event.preventDefault()
				}
			}} href="https://www.czechitas.cz/">www.czechitas.cz</a>
			<hr />
			Formulář:
			<form>
				<textarea
					rows={5}
					cols={60}
					defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam vitae necessitatibus et perspiciatis consectetur, soluta quia vero porro hic, esse tempora sint eaque adipisci asperiores alias repudiandae tempore? Omnis?"
				/>
				<br />
				<button>uložit</button>
			</form>
		</>
	)
}
