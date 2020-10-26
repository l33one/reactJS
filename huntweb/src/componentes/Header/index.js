import React from 'react';
import './styles.css';
//Maneira menos verbosa de fazer o que está abaixo 
//stateless
const Header = () => (
    <header id = "main-header">JSHunt</header>
);
/* a mesma coisa que foi feito em cima
estado
class Header extends Component {
    render(){
        return <h1>Hello</h1>
    }
}
*/

export default Header;