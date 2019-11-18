import { Dimensions, Platform, StatusBar } from 'react-native';

export function isIphoneX() {
    const dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
    );
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
    if (isIphoneX()) {
        return iphoneXStyle;
    }
    return regularStyle;
}

export function isAndroid() {
  return (Platform.OS === 'android');
}

export function ifAndroid(androidStyle, regularStyle) {
  if (isAndroid()) {
    return androidStyle;
  }
  return regularStyle;
}

const isFunction = input => typeof input === 'function';
export function renderIf(predicate) {
  return function(elemOrThunk) {
    return predicate ? (isFunction(elemOrThunk) ? elemOrThunk() : elemOrThunk) : null;
  }
}

export function getNavBarHeight() {
  if (isAndroid()) {
    return 54 //android portrait navbar height;
  } else{
    if(isIphoneX())
      return 88 // iPhone X navbar height (regular title);
    else
      return 64 // iPhone navbar height;
  }
}

export function getStatusBarHeight(safe) {
    return Platform.select({
        ios: ifIphoneX(safe ? 44 : 30, 20),
        android: global.Expo ? StatusBar.currentHeight : 0,
        default: 0
    });
}

export function getBottomSpace() {
    return isIphoneX() ? 34 : 0;
}
