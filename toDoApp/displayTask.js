import React from 'react'

class DisplayTask extends React.Component {
    constructor() {
        super();

        this.editBtnClicked= this.editBtnClicked.bind(this);
        this.deleteBtnClicked= this.deleteBtnClicked.bind(this);
        this.doneBtnClicked= this.doneBtnClicked.bind(this);
    }

    editBtnClicked(event) {
        this.props.editBtnClicked(event);
    }

    deleteBtnClicked(event) {
        this.props.deleteBtnClicked(event);
    }

    doneBtnClicked(event) {
        this.props.doneBtnClicked(event);
    }
    
    render() {
        const text= this.props.text
        const editBtnId= 'editBtn' + this.props.id;
        const deleteBtnId= 'deleteBtn' + this.props.id;
        const doneBtnId= 'doneBtn' + this.props.id;
        const done= this.props.done;

        return(
            <div>
                {!done &&  
                <button 
                    onClick= {this.doneBtnClicked}
                    name= 'doneBtn'
                    id= {doneBtnId}
                >
                    done
                </button>
                }

                <label>{text}</label>

                <button
                    onClick= {this.editBtnClicked}
                    name='editBtn'
                    id={editBtnId}
                >
                    Edit
                </button>

                <button
                    onClick= {this.deleteBtnClicked}
                    name='deleteBtn'
                    id={deleteBtnId}
                >
                    Delete
                </button>
            </div>
        );
    }

}

export default DisplayTask;
