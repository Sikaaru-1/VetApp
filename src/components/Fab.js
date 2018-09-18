import React, { Component } from 'react';
import { View, Button, Icon, Fab } from 'native-base';


export default class FloatingButton extends Component {
  constructor() {
	  super();
    this.state = {
      active: 'true'
    };
  }
  render() {
    return (  
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#f86b17' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name={this.state.active?"close":"add"} />
              <Button style={{backgroundColor: '#f86b17'}}>
                <Icon name="paw"/>
			        </Button>
            <Button disabled style={{backgroundColor: '#f86b17'}} >
              <Icon name="mail"/>
            </Button>
          </Fab>
        </View>
    );
  }
}
