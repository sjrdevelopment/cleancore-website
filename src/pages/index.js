import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import * as styles from './styles.module.css'

import logo from '../images/cc-intel-jp.jpg'
import subHeroImg from '../images/flow.svg'
import alertImg1 from '../images/alertImg1.svg'
import alertImg2 from '../images/alertImg2.svg'
import gridImg from '../images/grid.svg'
import alertImg from '../images/alertImg.svg'

// markup
const IndexPage = () => {
    return (
        <main>
            <Helmet>
                <title>
                    Cleancore Intelligence - Smart cleaning compliance
                </title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;600&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <h1 className={styles.heading}>
                Cleancore Intelligence - Smart cleaning compliance
            </h1>
            <div className={styles.banner}>
                <div className={styles.maxWrapper}>
                    <img className={styles.mainImg} src={logo} alt="" />
                    <p className={styles.subheading}>
                        Smart cleaning compliance
                    </p>
                </div>
            </div>
            <div className={styles.subHeroWrapper}>
                <div className={styles.subHero}>
                    <div className={styles.maxWrapper}>
                        <img
                            className={styles.subHeroImg}
                            src={subHeroImg}
                            alt=""
                        />
                        <div className={styles.subHeroInner}>
                            <p>
                                Cleancore automatically gathers usage data and
                                operative proof-of-prescence to digitally
                                monitor cleaning schedules, replacing the need
                                for manual record keeping, while simultaneously
                                building trust in shared facilities by building
                                users.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.contentCore}>
                <div className={styles.maxWrapper}>
                    <div className={styles.contentCoreInner}>
                        <h2>CORE</h2>
                        <p>
                            Project confidence in cleanliness to building users
                            with our CORE systems, featuring digital inspection
                            displays in shared areas.
                        </p>
                        <p>
                            Each CORE wirelessly collects data at all your key
                            touch points in the building for traceability of
                            cleaning activity
                        </p>
                    </div>
                    <img src={alertImg1} alt="" className={styles.alertImg1} />
                    <img src={alertImg2} alt="" className={styles.alertImg2} />
                </div>
            </div>
            <div className={styles.contentReporting}>
                <div className={styles.maxWrapper}>
                    {' '}
                    <img src={gridImg} alt="" className={styles.gridImg} />
                    <div className={styles.contentReportingInner}>
                        <h2>OPTIMISATION</h2>
                        <p>
                            Real time monitoring and reporting of cleaning
                            performance and usage levels, automatically
                            collected from each CORE in your location.
                        </p>
                        <p>
                            Enabling a future of automation by providing
                            critical data to feed into other systems such as
                            robotic cleaning and maintenance solutions.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.contentAlerting}>
                <div className={styles.maxWrapper}>
                    <div className={styles.contentAlertingInner}>
                        <h2>ALERTING</h2>
                        <p>
                            Exception reporting and alerts when pre-defined
                            cleaning intervals are missed, or usage levels
                            exceed thresholds, focussing attention where it's
                            needed.
                        </p>
                    </div>
                    <img src={alertImg} alt="" className={styles.alertImg} />
                </div>
            </div>
            <footer>
                <div className={styles.maxWrapper}>
                    <p>
                        We are currently looking to partner with innovative
                        Facilities Management companies and building managers
                        who would be interested in collaborating on a pilot.
                    </p>
                    <p>
                        Please contact{' '}
                        <a href="mailto:info@cleancoreintelligence.com">
                            info@cleancoreintelligence.com
                        </a>{' '}
                        to find out more.
                    </p>
                </div>
            </footer>
        </main>
    )
}

export default IndexPage
