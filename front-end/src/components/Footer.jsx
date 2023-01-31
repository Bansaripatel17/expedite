import React from 'react'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'

import  '../../src/footer.css'

function Footer() {
  return (
    <div>
  
  <footer className="footer" style={{color:"white"}} >
	<b>copyright	&#169;,{new Date().getFullYear()},Expedite.com</b>

</footer>
    </div>
  )


}

export default Footer


