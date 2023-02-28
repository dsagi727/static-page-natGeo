'use strict'

//copy right actual year
const paragraph = `
 <p>
  Copyright
  National ${new Date().getFullYear()} Geographic Society. All rights reserved
</p>
`
document.getElementById('copyright').innerHTML = paragraph

//NAVBAR
function navMenu() {
  let collapse = document.getElementById('myLinks')
  if (collapse.style.display === 'block') {
    collapse.style.display = 'none'
  } else {
    collapse.style.display = 'block'
  }
}
