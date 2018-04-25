import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {ButtonGroup, List, ListItem} from "react-native-elements";

const typeCar = [
    {
        name: 'Audi',
        uri: require('../../../images/logo_car/audi.jpg')
    },
    {
        name: 'BMW',
        uri: require('../../../images/logo_car/bmw.jpg')
    },
    {
        name: 'Toyota',
        uri: require('../../../images/logo_car/toyota.jpg')
    },
    {
        name: 'Ford',
        uri: require('../../../images/logo_car/ford.jpg')
    },
    {
        name: 'Volkswagen',
        uri: require('../../../images/logo_car/vw.jpg')
    },
    {
        name: 'Honda',
        uri: require('../../../images/logo_car/honda.jpg')
    },
    {
        name: 'Kia',
        uri: require('../../../images/logo_car/kia.jpg')
    },
    {
        name: 'Mazda',
        uri: require('../../../images/logo_car/mazda.jpg')
    },
    {
        name: 'Mercedes-Benz',
        uri: require('../../../images/logo_car/mercedes-logo.jpg')
    },
    {
        name: 'Nissan',
        uri: require('../../../images/logo_car/nissan.jpg')
    },
    {
        name: 'GM Chevrolet',
        uri: require('../../../images/logo_car/chevrolet_logo.jpg')
    },
    {
        name: 'Daihatsu - Isuzu - Suzuki',
        uri: require('../../../images/logo_car/suzukii.jpg')
    },
    {
        name: 'Fiat',
        uri: require('../../../images/logo_car/fiat.jpg')
    },
    {
        name: 'Renault',
        uri: require('../../../images/logo_car/renault.jpg')
    }, {
        name: 'Ssangyong',
        uri: require('../../../images/logo_car/ssangyong_logo_no_text.jpg')
    },
    {
        name: 'Subaru',
        uri: require('../../../images/logo_car/subaru.jpg')
    },
    {
        name: 'Lamborghini',
        uri: require('../../../images/logo_car/lamborghini.jpg')
    },
    {
        name: 'Abarth',
        uri: require('../../../images/logo_car/abarth.jpg')
    },
    {
        name: 'Alfaromeo',
        uri: require('../../../images/logo_car/alfaromeo.jpg')
    },
    {
        name: 'Cadillac',
        uri: require('../../../images/logo_car/cadillaclogo.jpg')
    },
    {
        name: 'Chrysler',
        uri: require('../../../images/logo_car/chrysler.jpg')
    },
    {
        name: 'Porsche',
        uri: require('../../../images/logo_car/porsche.jpg')
    },
    {
        name: 'Caterham',
        uri: require('../../../images/logo_car/caterham.jpg')
    },
    {
        name: 'Bentley',
        uri: require('../../../images/logo_car/bentley.jpg')
    },
    {
        name: 'Bugatti',
        uri: require('../../../images/logo_car/bugatti.jpg')
    },
    {
        name: 'Ferrari',
        uri: require('../../../images/logo_car/ferrari.jpg')
    },
    {
        name: 'Lexus',
        uri: require('../../../images/logo_car/lexus.jpg')
    },
]
export default class Sidebar extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedIndex: 2
        }
    }

    updateIndex = (selectedIndex) => {
        this.setState({selectedIndex})
    };

    render() {
        const container = () => {
            return (<ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={{paddingTop: 50, textAlign: 'center', fontSize: 18}}> Danh sách hãng xe</Text>
                <View>
                    <List>
                        {
                            typeCar.map((car, i) => (
                                <ListItem
                                    roundAvatar
                                    onPress={() => this.props.navigation.navigate(car.name)}
                                    avatar={car.uri}
                                    key={i}
                                    title={car.name}
                                    // subtitle={l.subtitle}
                                />
                            ))
                        }
                    </List>
                </View>

            </ScrollView>)
        }
        const component1 = () => <Text> Danh sách hãng xe</Text>
        const component2 = () => <Text>World</Text>
        const buttons = [{element: component1}, {element: component2}]
        const {selectedIndex} = this.state
        return (
            <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={styles.buttonStyle}
                buttonStyle={styles.buttonStyle}
            />
        )
    }
}
const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
        marginBottom: 20
    },
    buttonStyle: {
        height: 30,
        flex:1,
        paddingTop:50,
        margin:0,
        padding:0
    },
    buttonGroupStyle:{

    }
});

