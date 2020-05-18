import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom' //this is to stop the page reloading everytime we click a link, this is what React Router does

const Navbar = (props) => {
/*     setTimeout(() => {
        props.history.push('/About')
    }, 2000); */
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href='/' className="brand-logo left">React Router with Materialize</a>
                <ul className="right">
                    <li><Link to='/'>Home</Link></li> {/*this is similar to href, however it does not refresh the page, much faster*/}
                    <li><NavLink to='/About'>About</NavLink></li> {/*this is similar to above, however NavLink toggle class "active"*/}
                    <li><NavLink to='/Contact'>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar) //we use withRouter here so that we that React passes the props through, normally it wouldnt unless <BrowserRouter> is used