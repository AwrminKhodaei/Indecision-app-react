class IndesicionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeletOptions=this.handleDeletOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeletOption=this.handleDeletOption.bind(this);
        this.state ={
            options:[]
        };
    }


    componentDidMount(){
        try{
            const json =localStorage.getItem('options');

            const options =JSON.parse(json);

            if(options){
                this.setState(() =>({ options }));
            }
        }
        catch (e){
            // Do nothing at all
        }
    }


    componentDidUpdate (prevProps,prevState) {
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify (this.state.options);
            localStorage.setItem('options',json);
            console.log('Saving data');
        }
    }




    handleDeletOptions() {
        this.setState(() =>({options : []}));
    }
    handleDeletOption (optionToRemove){
        this.setState ((prevState)=>({
            options: prevState.options.filter((option)=> optionToRemove !== option)
    }));
        

    }
    handlePick(){
        const randomNum =Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);    
    
    }
    handleAddOption(option) {
        if(!option){
            return "Enter Valid Value To Add Item";
        }
        else if (this.state.options.indexOf(option) > -1){
            return"This Option Already Exists";
        }
        else{
            this.setState((prevState)=>({options : prevState.options.concat(option)}));
        }
    }


    render(){
        return(
            <div>
                <Header subtitle={this.state.subtitle}/>
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />   
                <Options
                options={this.state.options}
                handleDeletOptions={this.handleDeletOptions}
                handleDeletOption={this.handleDeletOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}
IndesicionApp.defaultProps = {
    options : []
};
const Header =(props) =>{
    return(
    <div>
        <h1>{props.title}</h1>
        {props.subtitle &&<h2>{props.subtitle}</h2>}
    </div>

    );
};


Header.defaultProps = {
    title : "Indecision App"
}



const Action =(props)=>{
    return(
        <div>
        <button
        onClick={props.handlePick}
        disabled ={!props.hasOptions}
        >
        What Should I Do?
        </button>
        </div>
    );
};
const Options =(props) =>{
    return(
    <div>
        <button onClick={props.handleDeletOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add options</p>}

        {
            props.options.map((option,key) =>(
                <Option
                key={option} 
                optionText={option}
                handleDeletOption={props.handleDeletOption}
                />
            )
         )
        }
    </div>

    );
};
const Option = (props) =>{
    return(
        <div>
            {props.optionText}
            <button onClick={() =>{
                props.handleDeletOption(props.optionText);
            }}>Remove</button>
        </div>

    );
};

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state ={
            error : undefined
        };

    }
    handleAddOption (e) {

        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        if(!error){
            e.target.elements.option.value ='';

        }

        this.setState(()=> ({error}));
    }

    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p> }
            <form onSubmit={this.handleAddOption}>
                <input type="text" placeholder="Add your options here" name="option"/>
                <button type="submit">Add Option</button>
            </form>
            </div>
        );
    }
}


ReactDOM.render(<IndesicionApp />,document.getElementById('app'));