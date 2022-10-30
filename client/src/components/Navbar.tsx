export default function Navbar(): JSX.Element {
    return <nav className = "nav"> 
        <a href = "/" className = "site-title"> BlackBear Square </a>
        <ul>
            <li><a href = "/login"> Log In</a></li>    
            <li><a href = "/signup"> Sign Up</a></li>
        </ul>
    </nav>
}