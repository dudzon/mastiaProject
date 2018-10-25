import React, { Component } from 'react'
import classes from './Team.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import person1 from './../../assets/person1.jpg'
import person2 from './../../assets/person2.jpg'
import person3 from './../../assets/person3.jpg'
import person4 from './../../assets/person4.jpg'
const Team = () => {
        return (
            <div className={classes.Team}>
                <div className={classes.Team__wrapper}>
                    <h3 className={classes.Team__title}>Our crazy Team</h3>
                    <div className={classes.Team__members}>
                        <div className={classes.Team__member}>
                            <img src={person1} alt='' className={classes.Member__picture} />
                            <h4 className={classes.Member__name}>Shila Khondoker</h4>
                            <p className={classes.Member__position}>Chief technical officer</p>
                            <div className={classes.Member__social}>
                                <a href='https://www.facebook.com'>
                                    <FontAwesomeIcon icon={['fab', 'facebook-f']} size='xs' className={classes.Member__icons} />
                                </a>
                                <a href="https://www.twitter.com">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} size='xs' className={classes.Member__icons} />
                                </a>
                                <a href="https://www.linkedin.com">
                                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} size='xs' className={classes.Member__icons} />
                                </a>
                            </div>
                        </div>
                        <div className={classes.Team__member}>
                            <img src={person2} alt='' className={classes.Member__picture} />
                            <h4 className={classes.Member__name}>Max Puttner</h4>
                            <p className={classes.Member__position}>Chief Analyst</p>
                            <div className={classes.Member__social}>
                                <a href='https://www.facebook.com'>
                                    <FontAwesomeIcon icon={['fab', 'facebook-f']} size='xs' className={classes.Member__icons} />
                                </a>
                                <a href="https://www.twitter.com">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} size='xs' className={classes.Member__icons} />
                                </a>
                                <a href="https://www.linkedin.com">
                                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} size='xs' className={classes.Member__icons} />
                                </a>
                            </div>
                        </div>
                        <div className={classes.Team__member}>
                            <img src={person3} alt='' className={classes.Member__picture} />
                            <h4 className={classes.Member__name}>Mark Evans</h4>
                            <p className={classes.Member__position}>HR Specialist</p>
                            <div className={classes.Member__social}>
                                <a href='https://www.facebook.com'>
                                    <FontAwesomeIcon icon={['fab', 'facebook-f']} size='xs' className={classes.Member__icons} />
                                </a>
                                <a href="https://www.twitter.com">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} size='xs' className={classes.Member__icons} />
                                </a>
                                <a href="https://www.linkedin.com">
                                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} size='xs' className={classes.Member__icons} />
                                </a>
                            </div>
                        </div>
                        <div className={classes.Team__member}>
                            <img src={person4} alt='' className={classes.Member__picture} />
                            <h4 className={classes.Member__name}>David Probst</h4>
                            <p className={classes.Member__position}>Senior Frontend Engineer</p>
                            <div className={classes.Member__social}>
                                <a href='https://www.facebook.com'>
                                    <FontAwesomeIcon icon={['fab', 'facebook-f']} size='xs' className={classes.Member__icons} />
                                </a>
                                <a href="https://www.twitter.com">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} size='xs' className={classes.Member__icons} />
                                </a>
                                <a href="https://www.linkedin.com">
                                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} size='xs' className={classes.Member__icons} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }


export default Team
