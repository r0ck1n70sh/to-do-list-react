import React from 'react';

class TextInput extends React.Component {
    constructor(){
        super();
    
        this.onInputChange= this.onInputChange.bind(this);
        this.onBtnClicked= this.onBtnClicked.bind(this);
    }
   
    onInputChange(event) {
        this.props.onInputChange(event);
    }    

    onBtnClicked(event) {
        event.preventDefault();
        event.target.reset();
        this.props.onBtnClicked(event);
    }

    render() {
        const btnId= "editBtn"+this.props.id;
        const btnValue= this.props.btnValue;
        const inputText= this.props.newText;

        return(
            <form
                onSubmit={this.onBtnClicked}
                id={btnId}
            >
                <input
                    type="text"
                    name="task-name"
                    value={inputText}
                    onChange={this.onInputChange}
                />

                <input
                    type="submit"
                    id= {btnId}
                    value= {btnValue}
                />
            </form>
        );
    }
}

export default TextInput;
