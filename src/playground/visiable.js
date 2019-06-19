class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = thishandleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    };
    render () {
        return (
                <div>
                    <h1>Visibility Toggle</h1>
                    <button onClick={toggleVisibility}>
                        {visibility ? 'Hide Details' : 'Show Details'}
                    </button>
                    {this.state.visibility && (
                        <div>
                            <p>Hey, You can see this</p>
                        </div>
                    )}
                </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


