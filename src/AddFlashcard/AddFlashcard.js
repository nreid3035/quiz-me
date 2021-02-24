import React from 'react'

class AddFlashcard extends React.Component {
    render() {
        return (
            <div>
                <h2>Add Flashcard</h2>
                <form>
                    <label for="question">Question</label>
                    <input type="text" name="question" id="question"/>
                    <label for="answer">Answer</label>
                    <input type="text" name="answer" id="answer"/>
                    <select id="folder-selection">
                        <option value={null}>...</option>
                    </select>
                    <button type="submit"></button>
                </form>
            </div>
        )
    }
}

export default AddFlashcard