import './App.css';

function ListItem(props) {
    const glowUp = function () {
        props.update(parseInt(props.id));
    };

    const dieOut = function () {
        props.update(0);
    };

    return (
        <li id="{props.id}" onMouseEnter={glowUp} onMouseLeave={dieOut} className={"p-4 m-1 border-2 border-black rounded-full" + props.shineIfGlowing(props.id)}></li>
    );
}

export default ListItem;
