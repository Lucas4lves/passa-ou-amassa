export default function Header(props){
    
    return(
        <header class="header">
        <button onClick={props.openMenu}>&#9776;</button>
        <span class="header-logo" ></span>
      </header>
    )

}