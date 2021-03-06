//      
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Icon } from 'expo';
import R from 'ramda';

export class Button extends React.Component  
               
             
                
                          
               
                    
                
   {
  render() {
    const defaultHeight = 40;
    const height         = parseInt(R.path(['style', 'height'], this.props) || defaultHeight, 10);
    console.log(height);
    const borderRadius = this.props.round ? height / 2 : 3;
    return (
      <TouchableOpacity
        style={[
          {
            padding: 10,
            paddingRight: 30,
            paddingLeft: 20,
            width: 100,
            height,
            borderColor: 'transparent',
            backgroundColor: '#ff886a',
            borderRadius,
            paddingLeft: !!this.props.icon ? 25 : 10,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
          },
          this.props.style
        ]}
        onPress={this.props.onPress}
      >
        {this.props.icon && (
          <Icon.FontAwesome
            name={this.props.icon}
            size={18}
            style={{ marginRight: 10 }}
            color={this.props.iconColor || '#fff'}
          />
        )}
        <Text style={{ color: '#fff', fontWeight: '500' }}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
