// import A from './counter';
// import './index.css';
import React from 'react';
import './components/style.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    let user = 'CM';
    return (
        <>
        <Header user={user} />
        <Footer/>
        </>
    );
}

export default App;