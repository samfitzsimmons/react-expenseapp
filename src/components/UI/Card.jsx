import './Card.css';
// Example of a wrapper component
// compostion is a key aspect of react, where components are composed of comonent trees.
const Card = (props) => {
    // props.children is a reserved property that will make the properties available between the opening and closing 
    // Card tag
    const classes = 'card ' + props.className;
    return (<div className={classes}>{props.children}</div>);
}

export default Card;