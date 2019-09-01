import React from 'react';

const Counter = (props) => {
    console.log(props.count);
    return(
      <div className="jumbotron counter">
        <h2>{props.count}</h2>
        <button className="btn btn-primary btn-lg"
                onClick={props.decrement}>DEC</button>
        <button className="btn btn-primary btn-lg"
                onClick={props.increment}>INC</button>
        <button className="btn btn-primary btn-lg"
                onClick={props.random}>RND</button>
      </div>
    );
}

export default Counter;