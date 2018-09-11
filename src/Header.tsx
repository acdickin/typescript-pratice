import * as React from 'react';
interface IProps{
    name?:string
}

const Header: React.SFC<IProps> =(props: IProps)=>(
  <h1>Hello {props.name}! Welcome to react with TypeScript.</h1>
);

Header.defaultProps ={
  name:"World"
}
export default Header
