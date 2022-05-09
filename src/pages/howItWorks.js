import * as React from 'react'
import { Link } from 'gatsby'
import * as myStyles from './styles.module.css'

// markup
const IndexPage = () => {
    return (
        <main>
            <title>Contact Page</title>
            <h1 className={myStyles.test}>Contact</h1>
            <Link to="/">homepage</Link>
        </main>
    )
}

export default IndexPage
