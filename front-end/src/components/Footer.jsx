import React from 'react'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'

import  '../../src/footer.css'

function Footer() {
  return (
    <div>
  
  <footer className="footer" >
	<div className="waves">
		
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320"><path id='wave1' fill="#0099ff" fillOpacity="1" d="M0,0L80,42.7C160,85,320,171,480,181.3C640,192,800,128,960,106.7C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

	</div>

	<ul className="footer-menu">
		<li className="footer__item"><a className="footer__link" href="http://localhost:3000/">Home</a></li>
		<li className="footer__item"><a className="footer__link" href="http://localhost:3000/about">About us</a></li>
		<li className="footer__item"><a className="footer__link" 
		href="http://localhost:3000/contact">Contact us</a></li>
	</ul>

</footer>
    </div>
  )


}

export default Footer


