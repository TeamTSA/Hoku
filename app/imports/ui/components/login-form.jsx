import React, {Component} from 'react';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

// App component - represents the whole app
export default class login-form extends Component {

  render() {
    return (
        <Container>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>
              <Header as="h2" textAlign="center" className='top-header'>
                Login to your account
              </Header>
              <Form onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input
                      label="Email"
                      icon="user"
                      iconPosition="left"
                      name="email"
                      type="email"
                      placeholder="E-mail address"
                  />
                  <Form.Input
                      label="Password"
                      icon="lock"
                      iconPosition="left"
                      name="password"
                      placeholder="Password"
                      type="password"
                  />
                  <div className='right-button'>
                    <Form.Button content="Submit"/>
                  </div>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}
