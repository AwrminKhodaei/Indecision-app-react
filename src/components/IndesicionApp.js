import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import ModalOption from './ModalOption';

export default class IndesicionApp extends React.Component{
    state ={
        options:[],
        selectedOption:undefined
    }


    handleDeletOptions = () => {
        this.setState(() =>({options : []}));
    };

    handleDeletOption = (optionToRemove) => {
        this.setState ((prevState)=>({
            options: prevState.options.filter((option)=> optionToRemove !== option)
    }));

    };

    handlePick = () =>{
        const randomNum =Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState (() =>({
            selectedOption :option
        }));
    };
    handleModalBtn = ()=>{
        this.setState ((prevState) =>({selectedOption:prevState.undefined}));
    };

    handleAddOption =(option) => {
        if(!option){
            return "Enter Valid Value To Add Item";
        }
        else if (this.state.options.indexOf(option) > -1){
            return"This Option Already Exists";
        }
        else{
            this.setState((prevState)=>({options : prevState.options.concat(option)}));
        }
    };


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

    render(){
        return(
            <div>
                <Header subtitle={this.state.subtitle}/>
                <div className="container">
                    <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />

            <div className="widget">
            <Options
            options={this.state.options}
            handleDeletOptions={this.handleDeletOptions}
            handleDeletOption={this.handleDeletOption}
            />

            <AddOption handleAddOption={this.handleAddOption}/>

            </div>
                </div>

                <ModalOption
                selectedOption={this.state.selectedOption}
                handleModalBtn={this.handleModalBtn}
                />
            </div>
        );
    }
}
IndesicionApp.defaultProps = {
    options : []
};
