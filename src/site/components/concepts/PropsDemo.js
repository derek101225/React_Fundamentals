import React, {useState} from 'react';

const PropsDemo = () => {
    const [color, setColor] = useState('white');
    const [backgroundColor, setBackgroundColor] =useState('purple');
    const [borderRadius, setBorderRadius] = useState('5px');
    const [borderStyle, setBorderStyle] = useState('dashed');
    const [display, setDisplay] = useState('inline-block');
    const [width, setWidth] = useState('350px');
    const [textAlign, setTextAlign] = useState('center');

    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    }


    return (
        <div className='main'>
            <div className='mainDiv'>
                <div style={styles}>
                    <FunctionComponent string='will this display' />
                    <FunctionComponent string='Props are cool right?' />
                    <FunctionComponent string='You can send data from one compoenent' />
                    <FunctionComponent string='.... to another!' />
                </div>
            </div>
        </div>
    )
    
    
}

const FunctionComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
        </div>
    );
};


export default PropsDemo;