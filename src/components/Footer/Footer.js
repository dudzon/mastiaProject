import React from 'react'
import classes from './Footer.module.scss'
import BlueBar from './../BlueBar/BlueBar'
import Fragment from 'render-fragment'


const Footer = () =>{

    return(
        <Fragment>
            <BlueBar />
            <footer className = { classes.footer }>
                <div className= { classes.footer__wrapper }>
                        <div className= { classes.footer__textContainer }>
                            <h4>About Us</h4>
                            <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen</p>
                        </div>
                        <div className= { classes.footer__textContainer }>
                            <h4>Related Links</h4>
                            <ul>
                                <li>Official Site</li>
                                <li>CreativeMarket Profile</li>
                                <li>Materialzer page on CM</li>
                                <li>Electronic WP Theme</li>
                                <li>Was favvvv</li>
                            </ul>
                        </div>
                        <div className= { classes.footer__textContainer }>
                            <h4>News & Media</h4>
                            <ul>
                                <li>Events</li>
                                <li>News and Press Releases</li>
                                <li>Interviews</li>
                                <li>Subsidaries Media Contact</li>
                                <li>Media Kit</li>
                            </ul>
                        </div>
                        <div className= { classes.footer__textContainer }>
                            <h4>Get in Touch</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <span className = { classes.footer__iconGps }>84 Street, City, State 24813</span>
                            <span className = { classes. footer__iconPhone}>+00 (123) 456 78 90</span>
                            <span className = { classes. footer__iconMail }>info@yourcompany.com</span>
                        </div>
                </div>
            </footer>
        </Fragment>
    )
}
export default Footer