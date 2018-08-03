import React, { Component } from 'react';
import { View, Text ,Image, FlatList, TouchableHighlight, ActivityIndicator, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
  
 
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            dataSource: null
           
        }

      }
   

  

      componentDidMount() {

        const url = 'https://api.unsplash.com/photos/?client_id=416a7a466828626eeb7c0b9086155fb4b5146dd86f9b2f369af67263d314b7a0';
        return fetch(url)
        .then(res => res.json())
        .then(images=>{
            this.setState({ 
                dataSource: images,
                isLoading: false
            })
        
   
         })
         .catch((error) =>{
           console.log(error)
         })
       
    }

    render() {
     
          if (this.state.isLoading) {
            return (
        
             <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        
                <ActivityIndicator size="large" />
        
              </View>
              
            );
        
          }else{
         
       
          return (
 
            <View>
        
              <FlatList
              
               data={ this.state.dataSource }
                                    
               renderItem={({item, index}) => 
               
                   <View style={styles.container}>
                    
                    <TouchableHighlight 
                    onPress={() => this.props.navigation.navigate('SinglePhoto', {data: item})}
                     >
                    <Image source = {{ uri: item.urls['thumb'] }} style={styles.image} />
                    </TouchableHighlight>
                     
                   
                     <Text style={styles.text}>{item.user['username']}</Text>
        
                   </View>
               
                 }
        
               keyExtractor={(item, index) => index.toString()}
               
               />
        
            </View>
       
          )
        }
    }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30
  
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: 200
  },
  text: {
    textAlign: 'center',
    marginTop: 15,
    color: '#000',
    fontSize: 20
  }

});