import React from 'react';


export default class AddOption extends React.Component{
    state ={
        error : undefined
    };
    // constructor(props){
    //     super(props);
    //     this.handleAddOption=this.handleAddOption.bind(this);
    // }
    handleAddOption = (e) =>{

        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        if(!error){
            e.target.elements.option.value ='';

        }

        this.setState(()=> ({error}));
    };

    render(){
        return(
            <div>
            {this.state.error && <p className="add-option-error">{this.state.error}</p> }
            <form className="add-option"
            onSubmit={this.handleAddOption}
            >
                <input className="add-option__input" type="text" placeholder="Add your options here" name="option"/>
                <button type="submit" className="small-buttons">Add Option</button>
            </form>
            </div>
        );
    }
}
