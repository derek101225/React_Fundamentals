import React, {createElement} from 'react';

const JSXRules = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
            <h1 className='section-title'>JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>Its's not. It's actually closer to JavaScript.</dd>
                    <dt>React Elements</dt>
                    <dd>Theses are used to construct and update the DOM, or what youses on the screen.</dd>
                    <dt>Not Required</dt>
                    <dd>You can write in vanilla JS, but most san people use JSX.</dd>
                </dl>
                <hr/>
                <NormalComponent />
                <CreateElementComponent />
            </div>
        </div>
    );
};

export default JSXRules;

const NormalComponent = () => {
    return(
        <div style={{border: '2px solid black'}}>
        <h1>Normal Functional Component</h1>
        <p>This was constructed with JSX in the return.</p>
        <img src='https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg' />
        </div>
    );
};

const CreateElementComponent = () => {
    return(
            React.createElement('div', {style: { border: '2px solid black'}},
            React.createElement('h1', null, 'CreateElement Component'),
            React.createElement('p', null, 'This was constructed with CreateElement calls in the retrun.'),
            React.createElement('img', {src: 'https://cdn-images-1.medium.com/max/1200/1*jJZHFQ_7ohn18KrMhA.png'}, null)
        )
    );
};

