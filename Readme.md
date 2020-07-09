# EverySports React-native App

# Setting

node.js : v14.2.0
yarn : 1.22.4
react-native-cli: 2.0.1
react-native: 0.62.2

# dependencies

1. check the package.json

# Use react-navigation

1. yarn add @react-navigation/native
2. yarn add react-native-reanimated react-native-gesture-handler react-native-screens @react-navigation/stack react-native-safe-area-context @react-native-community/masked-view @react-navigation/bottom-tabs
3. cd ios
   pod install
   cd ..

# Use react-native-vectors-icons

1. setting guide : https://github.com/oblador/react-native-vector-icons

# if your RN.ver >= .06 && get error about RNGhandler

1. react-native unlink react-native-gesture-hadnler
2. project restart
