import React from 'react'
import styles from 'styles/Header.module.css';
import { css} from '@emotion/css';
import styled from '@emotion/styled';

const HeaderPage = styled.header`
  background-color: #elelel;
  width: 90%;
  height: 100px;
  display: flex;
  aligin-itens: center;
  justify-content: space-between;
  paddin: 50px;
`;
const Input = styled.input`
  width: 100%;
  line-height: 30px;
  padding-left: 10%;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0x 0px 4px rgba(0,0,0,0.2);
  outline-color: pink;
`;
const Button = styled.button`
 width: 90px;
 line-height: 30px;
 border: none;
  border-radius: 10px;
  margin-left: 10px;
  &:hover{
    background-color: #ddd;
    cursor: pointer;
  }
`;
type HeaderProps = {
  menu?: Array<string>;
  pesquisar?: string;
}

//CSS
//5 maneiras diferentes de utilizar CSS.
//1. Importar o Css no arquivo .txs
//import '.Header.css'
//2.Utilizando css modules
//import styles from './Header.module.css'
//3.Utilizando styled-components ou Sass
//import styled from 'styled-components'
//4.Utilizando estilização direto no component
//utilizando o CSS-in-JS
//5. Usando alguma biblioteca de est
//ex: Material-UI - 4 usa Styled Componentes
export default function Header(props:HeaderProps) {
  return (
    // <header className={styles['menu-site']}> </header> //utilizando css modules
        <HeaderPage>
        <div>Logotipo</div>
        <nav>
          <ul className={css`
          width: 50%;
          display: inline-flex; 
          margin:0px;
          padding:0;
          > li {
            min-width: 100%;
            text-aligin: center;
            list-style: none;
          }
          `}>
            <li>Home</li>
            <li>Produtos</li>
            <li>Serviços</li>
            <li>Contatos</li>
          </ul>
          </nav>
        <div>
      <Input type="text" placeholder="Pesquisar"/>
      <Button>{props.pesquisar? props.pesquisar:"Search"} </Button>
        </div>
    </HeaderPage>
  )
}