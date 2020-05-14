import React from 'react';
import Rainbow from '../hoc/rainbow.js'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nemo vitae possimus nihil maiores deleniti error, in ex nostrum enim. Placeat obcaecati eos ad, unde impedit recusandae quis labore nostrum?</p>
        </div>
    )
}

export default Rainbow(About) //wrapped in our new HOC