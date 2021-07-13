//import './App.css';
import React, {Component, useState} from 'react';
import {Grid, Paper} from '@material-ui/core';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import './LandinPage.css';

import Image from "./resources/background.jpg"


import NavbarZT from './Navbar/NavbarZT';
import SmallCard from "./SmallCard";


const styles = {


    paperContainer: {
        backgroundImage: `url(${Image})`,
        height: '25em',
        width: '90%',
        backgroundPosition: 'right'
    },

    searchBox: {
        width: '50%',
        backgroundColor: 'white',
    },

    mainText: {
        display: 'flexbox',

    }
};


class LandingPage extends React.Component {

    display() {
        return (

            <div className="container">
            <NavbarZT />
                <Paper style={styles.paperContainer}>
                    <div className="divider">
                    </div>

                    <div className="main">
                        <div className="main-text">

                        Zrób TO z nami. Szukaj, zlecaj i rozwijaj się.
                        Najlepsi specjaliści dla Twojego biznesu.
                            </div>

                    <TextField style={styles.searchBox}>
                               variant="standard"
                               label="Czego szukasz? Spróbuj “logo dla mojej firmy”"

                </TextField>
                    <Button size="small" variant="contained" color="primary">
                        Szukaj
                    </Button>
                    </div>
                </Paper>
                <div className="divider">
                </div>
                <div className="card-container">
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
                </div>
            </div>
        )
    }


    render() {
        return this.display();
    }

}


export default LandingPage;
