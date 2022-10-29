import {PrimaryColor} from '../colors'

const Item = (name) => {
    return (
        <li>
            <span style={{ color: PrimaryColor }}>
                #
            </span>
            {name}
        </li>
    )
}

const Nav = () => {
    return (
        <ul>
            {Item("Inicio")}
            {Item("Sobre")}
            {Item("Projetos")}
            {Item("Contato")}
        </ul>
    )
}

export default Nav;