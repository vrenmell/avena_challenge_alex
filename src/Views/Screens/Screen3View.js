/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { GUI_styles, GUI_colors } from '../styles/StylesGlobal';
import ELEBackButton from '../elements/navigation/ELEBackButton';
import { Icon } from 'react-native-elements';
import ELEFoodSlide from '../elements/screens/3/ELEFoodSlide';
import ELEResultsInformation from '../elements/screens/3/ELEResultsInformation';
import ELEBottomNavigationMenu from '../elements/navigation/ELEBottomNavigationMenu';

export default class HomeView extends Component {

  render() {
    return (
      <>
        <ELEBackButton />
        <ScrollView style={{ backgroundColor: GUI_colors.COLOR_GRAY_LIGHT }}>
          <Image
            style={{
              width: 425,
              height: 137,
              marginTop: -20
            }}
            source={require('../../assets/img/tops/top2.png')}
          />
          <View style={[GUI_styles.container, {}]}>
            <View style={{
              marginTop:-20,
              flexDirection:'row'
            }}>
              <View style={{
                flexDirection:'row',
                alignItems:'center'
              }}>
                <Text style={[GUI_styles.textStrong, {fontSize:24, marginRight:20}]} >Activity</Text>
                <Icon
                name="angle-down"
                type='font-awesome'
                size={30}
                color={GUI_colors.COLOR_FONT_DEFAULT}
                onPress={()=>{
                  alert('press activity')
                }}
                />
              </View>
              <View style={{
                flexDirection: 'row', 
                justifyContent: 'flex-end',
                flex:1,
                alignItems:'center'
              }}>
                <Text style={GUI_styles.textSmall}>Today, 2 october 2020</Text>
              </View>
            </View>
            <ELEResultsInformation />
            <ELEFoodSlide />
          </View>
        </ScrollView>
        <ELEBottomNavigationMenu />
      </>
    );
  }
}