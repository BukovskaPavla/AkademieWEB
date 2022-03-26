 const dnes = dayjs()
 const velkyPatek = dayjs('2022-04-14')
 const odpoved = document.querySelector('.odpoved')

 if (dnes.isAfter(velkyPatek)) {
    odpoved.textContent = "Jdi se nadlábnout, už je po půstu!"
  } else {
    odpoved.textContent = "Vydrž a dej si kopřivový čaj!"
  }  

