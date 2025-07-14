import './Nav.css'

const Nav = function(props){

    const tags = props.sections.map(
        (section) =>{
            const tag = "#"+section;
            return(
            <li key={section}>
                <a href={tag}>{section}</a>
            </li>
        )
    });

    return(
        <div className={props.nameOfClass}>
            <ul>
                {tags}
            </ul>
        </div>
    )
}

export default Nav;