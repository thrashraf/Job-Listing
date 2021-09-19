import React, {Component} from 'react';
import axios from 'axios';
import classes from './JobList.module.css'

export class JobList extends Component {

    state = {
        list: null,
    }

    componentDidMount() {
        axios.get('data.json')
        .then(res => {
            this.setState({list: res.data})
        })

        
    }

    

    render() {
        let jobList = <p>Loading...</p>

        

        if (this.state.list) {

            jobList = this.state.list.filter(fil => {
                
                   if (this.props.filter.length > 0) {
                    const filters = [...fil.languages, ...fil.tools, fil.role]
                    // console.log(filters);
 
                    return jobList = this.props.filter.every(item => filters.includes(item))
                   } else {
                       return jobList
                   }

            })
            
            .map(job => {        
            return (
                <article key={job.id} className={classes.Card}>
                    <section className={classes.CardDetail}>
                    <div className={classes.split}>
                    <img src={`../../Assets/images/${job.company.toLowerCase().replace(/\s/g, '')}.svg`}alt="img"/>

                    <section>
                        <section className={classes.Company}>
                                <h6>{job.company}</h6>
                                <button style={{display: job.new ? 'block' : 'none'}}>NEW!</button>
                                <button style={{display: job.featured ? 'block' : 'none'}}>FEATURED</button>
                            </section>
                            <section className={classes.title}>
                                <h1>{job.position}</h1>
                            </section>
                            <section className={classes.JobDetail}>
                                <p>{job.postedAt}</p>
                                <p>{job.contract}</p>
                                <p>{job.location}
                                </p>
                            </section>
                    </section>
                       
                    </div>
                   
                    <section className={classes.role}>
                        {job.languages.map(lan => {
                            return (
                                <button key={Math.random()} onClick={this.props.clicked} >{lan}</button>
                            )
                        })}

                        {job.tools.map(tool => {
                            return (
                                <button key={Math.random()} onClick={this.props.clicked} >{tool}</button>
                            )
                        })}

                        <button onClick={this.props.clicked} >{job.role}</button>
                    </section>
                    </section>
                </article>
            )
        })
    }
    
        

        return (
            <div>
                {jobList}
            </div>
        )
    }
}

export default JobList

