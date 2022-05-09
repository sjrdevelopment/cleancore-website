import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import * as styles from './styles.module.css'
import logo from '../images/cc-intel-jp.jpg'

// markup
const IndexPage = () => {
    return (
        <main>
            <Helmet>
                <title>
                    Cleancore Intelligence - Smart cleaning compliance
                </title>
            </Helmet>
            <h1 className={styles.heading}>
                Cleancore Intelligence - Smart cleaning compliance
            </h1>
            <img className={styles.mainImg} src={logo} alt="" />
            <p className={styles.subheading}>Smart cleaning compliance</p>
            <p>
                Cleancore uses wireless technology to automate the tracking and
                alerting of cleaning schedules and compliance to your standards.
            </p>
            <p>
                Build trust in facilities and communicate safety assurance to
                building users.
            </p>
        </main>
    )
}

export default IndexPage
