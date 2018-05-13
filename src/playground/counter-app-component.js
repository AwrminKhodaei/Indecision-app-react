class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleIncrement=this.handleIncrement.bind(this);
        this.handleDecrease=this.handleDecrease.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state = {
            count:props.count
        };
    }

    handleIncrement() {
        this.setState((prevState)=>{
            return{
                count:prevState.count + 1
            };
        });
    }

    handleDecrease(){
        this.setState((prevState)=>{
            return{
                count:prevState.count - 1
            };
        });

    }

    handleReset(){
        this.setState(()=>{
            return{
                count: 0
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleIncrement}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>

        );
        
    }

}

Counter.defaultProps = {
    count : 0
};









ReactDOM.render(<Counter/>,document.getElementById('app'));






































// class IndesicionApp extends React.Component{
//     render(){
//         const title = 'Indecision';
//         const subtitle = 'Put your life in hands of a computer';
//         const options = ['Thing one','Thing two','Thing three'];
//         return(
//             <div>
//                 <Header title={title} subtitle={subtitle}/>
//                 <Action/>   
//                 <Options options={options}/>
//                 <AddOption/>
//             </div>
//         );
//     }
// }
// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }

// }
// class Action extends React.Component{
//     handlePick(){
//         alert('HandlePick');
//     }

//     render(){
//         return(
//             <div>
//             <button onClick={this.handlePick}>What Should I Do?</button>
//             </div>
//         );
//     }
// }
// class Options extends React.Component{
//     constructor (props){
//         super(props);
//         this.handleRemoveAll=this.handleRemoveAll.bind(this);
//     }
//     handleRemoveAll(){
//         console.log(this.props.options);
//     }
//     render(){
//         return(
//             <div>
//                 <button onClick={this.handleRemoveAll}>Remove All</button>

//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option}/>)
//                 }
//             </div>
//         );
//     }
    
// }
// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//             {this.props.optionText}
//             </div>
//         );
//     }
// }

// class AddOption extends React.Component{
//     handleAddOption (e) {
//         e.preventDefault();
//         const option = e.target.elements.option.value.trim();
//         if(option){
//             alert(option);
//         }

        
//     }
//     render(){
//         return(
//             <div>
//             <form onSubmit={this.handleAddOption}>
//                 <input type="text" placeholder="Add your options here" name="option"/>
//                 <button type="submit">Add Option</button>
//             </form>

//             </div>
//         );
//     }
// }


// ReactDOM.render(<IndesicionApp/>,document.getElementById('app'));