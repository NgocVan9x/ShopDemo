//import liraries
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    Platform
} from 'react-native';
import {Card, ListItem, Button, Rating} from 'react-native-elements';

const Width = Dimensions
    .get('window')
    .width;
const Height = Dimensions
    .get('window')
    .height
// create a component
const IS_IOS = Platform.OS === 'ios';

class Car extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <View
                        style={{
                        padding: 2,
                        flex: 3
                    }}>
                        <Image source={this.props.uri} style={styles.image}/>
                    </View>
                    <View
                        style={{
                        padding: 2,
                        flex: 1
                    }}>
                        <Text
                            style={{
                            paddingTop: 5,
                            paddingBottom: 5
                        }}>Hyundai-santafe</Text>
                        <Rating imageSize={20} readonly startingValue={1.57} //     style={{} //     flex: 1
                            // }}
                        />
                    </View>
                </View>
                <View style={styles.item}>
                    <View
                        style={{
                        padding: 2,
                        flex: 3
                    }}>
                        <Image source={this.props.uri} style={styles.image}/>
                    </View>
                    <View
                        style={{
                        padding: 2,
                        flex: 1
                    }}>
                        <Text
                            style={{
                            paddingTop: 5,
                            paddingBottom: 5
                        }}>Hyundai-santafe</Text>
                        <Rating imageSize={20} readonly startingValue={1.57} 
                        />
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    item: {
        flex: 4,
        flexDirection: 'column',
        width: Width / 2 - 10,
        height: Height / 3,
        backgroundColor: 'white',
        borderColor: '#e1e8ee',
        borderWidth: 1,
        padding: 5,
        margin: 5,
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
        // justifyContent: 'center', justifyContent: 'center',
    },
    image: {
        width: null,
        height: null,
        resizeMode: 'cover',
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        marginBottom: IS_IOS
            ? 0
            : -1, // Prevent a random Android rendering issue
    }
});

//make this component available to the app
export default Car;
