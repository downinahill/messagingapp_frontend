import { ContactSupportRounded } from '@material-ui/icons';
import React, { Component }from 'react';


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment = []
        }
    }


handleChange= (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
};

handleSubmit = (event) => {
    event.preventDefault();
    console.log("doing fetch")
    fetch(this.props.baseUrl + '/comments', {
        method: "POST",
        body: JSON.stringify({
            comment: this.state.comment,
            tags: this.state.tags,
        }),
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    })
    .then((data) => {
        console.log(data);
        this.props.addComment(data);
        this.props.toggleCommentModal();
    });
};

resetState = () => {
    this.setState({
        comment: "",
    })
}

handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

    render () {
        console.log(this.state.comment)

        return (
            <>
            <Modal class="bg-light"
            
            show={this.props.goalsFormModal}
            onHide={this.props.toggleGoalModal}
          >
            <form onSubmit={this.handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title class="text-dark font-welcome-buttons">Create New Goal</Modal.Title>
              </Modal.Header>
              <Modal.Body class="row mx-3 g-1 font-welcome-text">
                <label htmlFor="goal">Goal: </label>
                <input
                  type="text"
                  id="goal"
                  name="goal"
                  onChange={(e) => this.handleChange(e)}
                  value={this.state.goal}
                />
                <label>Due Date: </label>
                <input
                  type="date"
                  id="name"
                  name="dueDate"
                  onChange={(e) => this.handleChange(e)}
                  value={this.state.dueDate}
                />
                <label>Tags: </label>
                <input
                  type="text"
                  id="name"
                  name="tags"
                  onChange={(e) => this.handleChange(e)}
                  value={this.state.tags}
                />
            </Modal.Body><br></br>
              <Modal.Footer>
                <Button variant="secondary" className="font-signup-buttons" onClick={this.props.toggleGoalModal}>
                  Close
                </Button>
                <input
                  className="btn btn-dark text-light font-signup-buttons"
                  type="submit"
                  value="Add New Goal"
                />
              </Modal.Footer>
            </form>
          </Modal>
        </>
      );
    }
  }
  
  export default CommentForm;
