import React from 'react';
import Auxillian from '../../HOC/Auxillian';
import { Header } from '../Header/Header';

export const Layout = (props) => {
    return (
        <Auxillian>
            <Header/>

            <main>
                {props.children}
            </main>
        </Auxillian>
    )
}
