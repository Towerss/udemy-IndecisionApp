import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToDelete) => {
        this.setState((prevState) => ({ options: prevState.options.filter((option) => optionToDelete !== option) }));
    };
    handlePick = () => {
        let randomNumber = Math.floor(Math.random() * this.state.options.length);
        let option = this.state.options[randomNumber];
        this.setState(() => ({
            selectedOption: option
        }));
    };
    handleAddOption = (option) => {

        if (!option) {
            return 'Please enter a valid option.';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option already Exists';
        }

        this.setState((prevState) => ({ options: this.state.options.concat(option) }));
    };
    handleCloseModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };
    componentDidMount() {

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            console.log(e);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className='container'>
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                    <div className='widget'>
                        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleCloseModal={this.handleCloseModal} />
            </div>
        );
    }
}