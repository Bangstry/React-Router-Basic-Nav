import React from 'react';
import { Route } from 'react-router-dom';
const About = (props) => {
    console.log('About', props);
    console.log(props.match.params.id);
    return (
        <h1>
          About {props.match.params.id}
          <Route path ={`${props.match.path}/tyler`} render={props => <div>tyler</div>}/>
          <Route path ={`${props.match.path}/zach`} render={props => <div>zach</div>}/>
          <button onClick={() => {
            console.log('We CLicked the Button!');
            props.history.push('/');
        }}> Navigate to Home</button>
        <button onClick={() => {
            console.log('We CLicked Back!');
            props.history.goBack();
        }}> Go Back</button>
        </h1>
    );
};
    


export default About;
