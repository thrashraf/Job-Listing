import React from 'react'
import Delete from '../../Assets/images/icon-remove.svg';
import classes from './Control.module.css';


export const Control = (props) => {

    let filteredArr = <p>Loading...</p>

    if (props.filter) {
        filteredArr = props.filter.map(filter => {

            return (
                <section key={Math.random()}>
                <p id="fil">{filter}</p>
                <button onClick={props.clicked}>
                    <img src={Delete} alt="delete"/>
                </button>
            </section>
            )
        })
    }

    return (
        <div style={{display: props.filter.length > 0 ? 'flex' : 'none'}} className={classes.Control}>
            <div className={classes.list}>
            {filteredArr}
            </div>
           
            <button className={classes.clear} onClick={props.clear}>Clear</button>
        </div>
    )
}
