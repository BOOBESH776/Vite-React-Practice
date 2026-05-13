import A from './counter';
// import './index.css';
// import React from 'react';
import './components/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Condition from './components/Condition';
function App() {
    let user = 'CM';
    return (
        <>
        <A />
        <Header user={user} />
        <Content />
        <Footer/>
        <Condition />
        </>
    );
}

export default App;