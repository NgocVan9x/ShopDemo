import {StyleSheet,Platform} from "react-native";

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

export default StyleSheet.create({
    headerStyle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        height: 70,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottomWidth: 0,
        marginTop:10,
        padding: 10
    },
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainerDark: {
        backgroundColor: colors.black
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        // marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        // paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
      },
    ratingImage: {
        height: 19.21,
        width: 100
      },
    ratingText: {
        paddingLeft: 10,
        color: 'grey'
      },
      container: {
        flex: 1,
      },
      tabBar: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: '#e1e8ee',
        borderWidth: 1,
        justifyContent: 'space-around',
        marginBottom: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .2)',
                shadowOffset: {
                    height: 0,
                    width: 0
                },
                shadowOpacity: 1,
                shadowRadius: 1
            },
            android: {
                elevation: 1
            }
        }),
        // paddingTop: 5,
      },
      tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
      },
});