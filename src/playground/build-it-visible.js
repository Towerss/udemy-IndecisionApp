class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisivility = this.handleToggleVisivility.bind(this);
        this.state= {
            visibility: false
        }
    }
    handleToggleVisivility(){
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisivility}>{this.state.visibility ? 'Hide Details' :'Show details'}</button>
                {this.state.visibility && <p>Hey. These are some details you can now see!</p>}
            </div>
        );
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/*
let visible = false;
const onToggle = () =>{

    
    //visible = !visible;
    //renderVisibilityApp();
    

    if(visible){
        visible = false;
        renderVisibilityApp();
    } else {
        visible = true;
        renderVisibilityApp();
    }
};

const renderVisibilityApp = () => {
    const template3 = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggle}>{visible ? 'Hide Details' :'Show details'}</button>
            {visible && <p>Hey. These are some details you can now see!</p>}
        </div>
    );

    ReactDOM.render(template3, document.getElementById('app'));
};

renderVisibilityApp();

*/