import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';

class MessagesContainer extends Component {

    render() {
        return(
            <Comment.Group>

                {this.props.messages.map((message, index) => {
                    return (
                        <Comment key={"c" + index}>
                            <Comment.Author as="b">{message.sender}</Comment.Author>
                            <Comment.Text>{message.content}</Comment.Text>
                        </Comment>
                    );
                })}

            </Comment.Group>
        )
    }

}

export default MessagesContainer;