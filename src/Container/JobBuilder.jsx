import React, { Component } from 'react'
import { Control } from '../Components/Control/Control'
import JobList from '../Components/Job-Listing/JobList';

export class JobBuilder extends Component {

    state = {
        filter: []
    }

    createFilterHandler = (e) => {
        const prevFilter = this.state.filter;
        this.setState({filter: [...prevFilter, e.target.innerHTML]})
    }


    deleteFilterHandler = (e) => {
        const deleteEl = e.target.closest('section').querySelector('p').innerText;
        const indexEl = this.state.filter.indexOf(deleteEl);
        this.state.filter.splice(indexEl, 1);
        this.setState({filter: [...this.state.filter]})
        // console.log(e.target.closest('section').querySelector('p').innerText);
    }

    clearFilterHandler = () => {
        this.setState({filter: []})
    }


    render() {

        console.log(this.state.filter);
        return (
            <div>
                <Control filter={this.state.filter} clicked={this.deleteFilterHandler} clear={this.clearFilterHandler}/>
                <JobList clicked={this.createFilterHandler} filter={this.state.filter}/>
            </div>
        )
    }
}

export default JobBuilder
