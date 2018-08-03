import React, { Component } from 'react';
import { View, Image, StyleSheet} from 'react-native';


export default class SinglePhotoScreen extends Component {
      constructor(props) {
        super(props);
      }

    render() {
     
      const image = this.props.navigation.getParam('data');
           return <View style={ styles.container }>
                    <Image source = {{ uri: image.urls['small'] }} style={styles.backgroundImage} />
                   </View>
  
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch'
  },

});
