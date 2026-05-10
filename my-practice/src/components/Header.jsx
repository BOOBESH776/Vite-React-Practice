import React from 'react';
function Header(props){
    console.log(props);
        return(
        <header>
            <>
                <h1 style={{ color: 'black' }}>Header</h1>
                <p>Hello, {props.user}!</p>
            </>
        </header>
    );
}
export default Header;