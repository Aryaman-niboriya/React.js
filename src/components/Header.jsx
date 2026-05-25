import React from "react"
import "../style/Header.css"

function Header(){
    return(
        <div className="head">
         <h1 className="head__title" >iam cool head</h1>
         <button className="head__action">switch on</button>
        </div>
    )
}
export default Header;