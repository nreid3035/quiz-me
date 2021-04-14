import React from 'react'
import Flashcard from '../Flashcard/Flashcard'
import './Checkbox.css'

class Checkbox extends React.Component {
    // CONSTRUCTOR WITH STATE TO TELL IF CHECKBOX IS CHECKED
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }
   
    // CHECKBOX CHANGE ON CLICK EVENT HANDLER
    handleCheckedChange = () => {
        this.setState({
            checked: !this.state.checked
        })
    }


    render() {
        // IF CHECKED RETURN WITH CLASSNAME 'CHECKED' ELSE RETURN WITHOUT
        if (this.state.checked === true) {
            return (
                <label htmlFor={this.props.cardId} className="checked">
                    <input type="checkbox" className="checkbox" name='checkbox' id={this.props.cardId} value={this.props.cardId}
                    onClick={() => this.handleCheckedChange()}
                    onChange={(e) => this.props.handleCheckboxChange(e)}
                    />
                    <Flashcard cardQuestion={this.props.cardQuestion} key={this.props.key} />
                </label>
            )
        }

        return (
            
            <label htmlFor={this.props.cardId}>
            <input type="checkbox" className="checkbox" name='checkbox' id={this.props.cardId} value={this.props.cardId}
                onClick={() => this.handleCheckedChange()}
                onChange={(e) => this.props.handleCheckboxChange(e)}
                />
                <Flashcard cardQuestion={this.props.cardQuestion} key={this.props.key}/>
            </label>
            
            
        )
    }
}

export default Checkbox