import AuthMenu from "components/AuthMenu/authMenu"
import "./appBar.css"

const AppBar = () => {
    return(
        <div className="header">
            <AuthMenu/>
        </div>
    )
}

export default AppBar