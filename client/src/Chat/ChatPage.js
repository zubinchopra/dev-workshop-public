import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import MessagesContainer from './MessagesContainer';
import InputContainer from './InputContainer';
import './ChatPage.css';

class ChatPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/message", {
            method: "GET"
        }).then((res) => {
            return res.json();
        }).then((resJson) => {
            this.setState({
                messages: resJson
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return(
            <Grid>
                
                <Grid.Column width={4} />

                <Grid.Column width={8}>
                    <Grid.Row className="messages-container">
                        {this.state.messages.length > 0 ?
                        <MessagesContainer messages={this.state.messages}/>
                        :
                        <div />
                        }
                    </Grid.Row>
                    <Grid.Row>
                        <InputContainer handleSubmit={this.handleSubmit}/>
                    </Grid.Row>
                </Grid.Column>

                <Grid.Column width={4} />

            </Grid>
        );
    }

    handleSubmit = (sender, content) => {

        let reqBody = {
            sender: sender,
            content: content
        }

        fetch("http://localhost:8080/api/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reqBody)
        }).then((res) => {
            return res.json();
        }).then((resJson) => {
            console.log(resJson);
        }).catch((err) => {
            console.log(err);
        });
    }

}

export default ChatPage;