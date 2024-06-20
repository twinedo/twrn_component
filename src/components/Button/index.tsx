import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface IButton {
    text: string;
}

const Button = (props: IButton) => {
    const {text} = props;
  return (
    <View>
      <Text style={{color: 'black'}}>{text}</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})