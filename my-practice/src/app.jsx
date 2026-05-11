// import A from './counter';
// import './index.css';
// import React from 'react';
import './components/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
    let user = 'CM';
    return (
        <>
        <Header user={user} />
        <Content />
        <Footer/>
        </>
    );
}

export default App;