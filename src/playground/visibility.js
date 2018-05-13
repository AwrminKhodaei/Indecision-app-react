class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleVisibility=this.handleVisibility.bind(this);
        this.state ={
            Visibility : false
        }

    }
    handleVisibility (){
        this.setState((prevState) =>{
            return{
                Visibility : !prevState.Visibility
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle App</h1>
                <button onClick={this.handleVisibility}>
                {this.state.Visibility ? 'Hide details' : 'Show details'}
                </button>
                {
                    this.state.Visibility &&
                    (
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis laudantium nemo praesentium repudiandae odit quas alias dolor ratione iusto asperiores perspiciatis, molestiae ab aspernatur, quod eius, id rem laboriosam!</p>
                        </div>
                    )
                }
            </div>

        );
        
    }

}
ReactDOM.render(<Visibility/>,document.getElementById('app'));