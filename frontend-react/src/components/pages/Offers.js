import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import axios from "axios";

import NavbarZT from "../navbar/NavbarZT";
import DisplayOffers from "../offerManager/DisplayOffers";
import FilterPrice from "../FilterPrice";
import FilterCategory from "../FilterCategory";
import Child from "../Child";


class Offers extends React.Component {
    constructor() {
        super();
        this.state = {
            offers: [],
            isFilterActive : false,
            filterQuerry : "price xD",
            messageShown: false,
        }
        this.handler = this.handler.bind(this);
        this.getAllOffers = this.getAllOffers.bind(this);
    }

    componentDidMount() {
        this.getAllOffers(); //load initial value from DB
    }

    getAllOffers() {
        axios.get('http://localhost:8080/offer')
            .then(response => response.data)
            .then(data => {
                this.setState({offers: data});
                console.log(data);
            });
    }


    // This method will be sent to the child component
    handler(textxd) {
        this.setState({
            messageShown: textxd
        });
        console.log(textxd)
    }

    display() {
        return (
            <div>
                <div>
                    <NavbarZT/>
                </div>
                <div>
                    <Grid container spacing={10} direction="column">
                        <Grid item xs={12}/>

                        <Grid container>
                            <Grid item xs={1} xm={2}/>
                            <Grid item xs={10} xm={8}>
                                <h2>
                                    All offers</h2>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={1} xm={2}/>
                            <Grid item xs={10} xm={8} container spacing={1}>
                                <Grid item xl={2}><Button variant="outlined" color="primary"
                                                          size="small">Minimalistyczne</Button></Grid>
                                <Grid item xl={2}><Button variant="outlined" color="primary"
                                                          size="small">3D</Button></Grid>
                                <Grid item xl={2}><Button variant="outlined" color="primary" size="small">Retro</Button></Grid>
                                <Grid item xl={2}><Button variant="outlined" color="primary"
                                                          size="small">Geometryczne</Button></Grid>
                                <Grid item xl={2}><Button variant="outlined" color="primary" size="small">Pokaż
                                    wszystkie</Button></Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={1} xm={2}/>
                                <Grid item xs={10} xm={8} container spacing={1}>
                                    <FilterPrice />
                                    <Child action={this.handler} />
                                    <br />
                                    <b>===| {this.state.filterQuerry + this.state.messageShown} |===</b>
                                    <br />
                                   <FilterCategory action={this.handler} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}/>
                        <Grid container>
                            <Grid item xs={1} xm={2}/>
                            <Grid item xs={10} xm={8} container spacing={4} justifyContent={"space-evenly"}>
                                <DisplayOffers data={this.state.offers}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    };

    render() {
        return this.display();
    }
}


function mapStateToProps(state) {
    return { isFilterActive : state.isFilterActive }
  }


export default Offers;

