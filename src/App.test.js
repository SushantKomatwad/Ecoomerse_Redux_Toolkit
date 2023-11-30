import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import App from './App';


test('renders Navbar and Home componet for the "/" route', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('...LOADING...')).toBeInTheDocument();
})

test('renders Navbar and Cart component for the "/cart" route', () => {
    render(
        <MemoryRouter initialEntries={['/cart']}>
            <App />
        </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();

    expect(screen.getByText('Cart Page')).toBeInTheDocument();

});
