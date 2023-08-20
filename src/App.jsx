import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import MainPage from './Pages/MainPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
                <Container>
                    <Header />
                    <Routes>
                        <Route index element={<MainPage />} />
                    </Routes>
                </Container>
        </div>
    );
}

export default App;
