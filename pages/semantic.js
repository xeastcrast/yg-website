import React, { Component } from "react";
import { Modal, Button, Icon, Header } from "semantic-ui-react";

export default class Semantic extends Component {
  render() {
    return (
      <Modal trigger={<Button>Toggle Modal</Button>} basic size="small">
        <Header icon="archive" content="Archive Old Messages" />
        <Modal.Content>
          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" inverted>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
