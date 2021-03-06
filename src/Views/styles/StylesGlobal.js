import { StyleSheet, Platform } from 'react-native';
import { Fonts } from './Fonts';

export const GUI_colors = {
  COLOR_GRAY_LIGHT: '#F4F5FA',
  COLOR_GRAY_STRONG: '#50536a',
  COLOR_FONT_DEFAULT: '#23233C',
  COLOR_FONT_MUTED: '#A5A5A5',
  COLOR_FONT_STRONG: '#122f54',
  COLOR_GREEN_STRONG: '#6CC57C',
  COLOR_ICON: '#E3E3E3',
  COLOR_RED_LIGHT: '#EE6A6E',
  COLOR_RED_STRONG: '#F02756',
  COLOR_BLUE_STRONG : '#23233C',
};

export const GUI_fuentes = {
  FONT_BOLD: Fonts.Bold,
  FONT_REGULAR: Fonts.Regular,
}

export const GUI_styles = StyleSheet.create({
  container: {
    backgroundColor: GUI_colors.COLOR_GRAY_LIGHT,
    padding: 20,
    flex: 1
  },
  //=========================== TEXT ===============================
  textTitleBig: {
    fontSize: 40,
    textAlign: 'center',
    color: GUI_colors.COLOR_FONT_DEFAULT,
    fontFamily: GUI_fuentes.FONT_BOLD
  },
  textStrong: {
    fontSize: 16,
    color: GUI_colors.COLOR_FONT_DEFAULT,
    fontFamily: GUI_fuentes.FONT_BOLD
  },
  text: {
    fontSize: 16,
    color: GUI_colors.COLOR_FONT_DEFAULT,
    fontFamily: GUI_fuentes.FONT_REGULAR
  },
  textSmall: {
    fontSize: 12,
    color: GUI_colors.COLOR_FONT_DEFAULT,
    fontFamily: GUI_fuentes.FONT_REGULAR
  },
  textTitle: {
    fontSize: 22,
    color: GUI_colors.COLOR_FONT_DEFAULT,
    fontFamily: GUI_fuentes.FONT_BOLD
  },
  textPMuted: {
    fontSize: 16,
    textAlign: 'center',
    color: GUI_colors.COLOR_FONT_MUTED,
    fontFamily: GUI_fuentes.FONT_REGULAR
  },
  textSmallMuted: {
    fontSize: 12,
    color: GUI_colors.COLOR_FONT_MUTED,
    fontFamily: GUI_fuentes.FONT_REGULAR
  },
  textMicroMuted: {
    fontSize: 10,
    color: GUI_colors.COLOR_FONT_MUTED,
    fontFamily: GUI_fuentes.FONT_REGULAR
  },
  textMicro: {
    fontSize: 10,
    color: GUI_colors.COLOR_FONT_DEFAULT,
    fontFamily: GUI_fuentes.FONT_REGULAR
  },
  //=========================== SHADOW ====================================
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  //=========================== FORM ==============================
  formInput: {
    fontFamily: GUI_fuentes.FONT_REGULAR,
    color: GUI_colors.COLOR_FONT_DEFAULT,
    backgroundColor: 'white',
    fontSize: 14,
    paddingLeft: 20,
    borderRadius:5,
  },
  formInputContainer: {
    marginBottom: 14,
    borderRadius:5,
    width: '90%',
    marginBottom: 30,
    borderColor:'white',
    justifyContent: 'flex-start',
    shadowColor: Platform.OS == 'ios' ? GUI_colors.COLOR_ICON : "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.58,
    shadowRadius: 12,
    elevation: 12,
  },
});
