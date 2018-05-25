import React from "react";
import { Button, Dimensions, TouchableOpacity, View, ScrollView ,Text,Image} from 'react-native';
import {Header, Icon} from "react-native-elements";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {ENTRIES1} from './entries';
import SliderEntry from './SliderEntry';
import styles, {colors} from './styles';
import { Container, Body} from 'native-base';
import Car from './Car/car';

const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth;
const SLIDER_1_FIRST_ITEM = 1;
const typeCar = [
    {
        name: 'Audi',
        uri: require('../../../images/logo_car/audi.jpg')
    }, {
        name: 'BMW',
        uri: require('../../../images/logo_car/bmw.jpg')
    }, {
        name: 'Toyota',
        uri: require('../../../images/logo_car/toyota.jpg')
    }, {
        name: 'Ford',
        uri: require('../../../images/logo_car/ford.jpg')
    }, {
        name: 'Volkswagen',
        uri: require('../../../images/logo_car/vw.jpg')
    }, {
        name: 'Honda',
        uri: require('../../../images/logo_car/honda.jpg')
    }, {
        name: 'Kia',
        uri: require('../../../images/logo_car/kia.jpg')
    }, {
        name: 'Mazda',
        uri: require('../../../images/logo_car/mazda.jpg')
    }, {
        name: 'Mercedes-Benz',
        uri: require('../../../images/logo_car/mercedes-logo.jpg')
    }, {
        name: 'Nissan',
        uri: require('../../../images/logo_car/nissan.jpg')
    }, {
        name: 'GM Chevrolet',
        uri: require('../../../images/logo_car/chevrolet_logo.jpg')
    }, {
        name: 'Daihatsu - Isuzu - Suzuki',
        uri: require('../../../images/logo_car/suzukii.jpg')
    }, {
        name: 'Fiat',
        uri: require('../../../images/logo_car/fiat.jpg')
    }, {
        name: 'Renault',
        uri: require('../../../images/logo_car/renault.jpg')
    }, {
        name: 'Ssangyong',
        uri: require('../../../images/logo_car/ssangyong_logo_no_text.jpg')
    }, {
        name: 'Subaru',
        uri: require('../../../images/logo_car/subaru.jpg')
    }, {
        name: 'Lamborghini',
        uri: require('../../../images/logo_car/lamborghini.jpg')
    }, {
        name: 'Abarth',
        uri: require('../../../images/logo_car/abarth.jpg')
    }, {
        name: 'Alfaromeo',
        uri: require('../../../images/logo_car/alfaromeo.jpg')
    }, {
        name: 'Cadillac',
        uri: require('../../../images/logo_car/cadillaclogo.jpg')
    }, {
        name: 'Chrysler',
        uri: require('../../../images/logo_car/chrysler.jpg')
    }, {
        name: 'Porsche',
        uri: require('../../../images/logo_car/porsche.jpg')
    }, {
        name: 'Caterham',
        uri: require('../../../images/logo_car/caterham.jpg')
    }, {
        name: 'Bentley',
        uri: require('../../../images/logo_car/bentley.jpg')
    }, {
        name: 'Bugatti',
        uri: require('../../../images/logo_car/bugatti.jpg')
    }, {
        name: 'Ferrari',
        uri: require('../../../images/logo_car/ferrari.jpg')
    }, {
        name: 'Lexus',
        uri: require('../../../images/logo_car/lexus.jpg')
    }
];
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    render() {
        const {slider1ActiveSlide} = this.state;
        const renderItemWithParallax = ({item, index}, parallaxProps) => {
            return (
                <SliderEntry
                    data={item}
                    even={(index + 1) % 2 === 0}
                    parallax={true}
                    parallaxProps={parallaxProps}
                />

            );
        };
        return (
            <View>
                <Header
                    outerContainerStyles={styles.headerStyle}
                    placement="left"
                    leftComponent={
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Icon
                                name='menu'
                                color='#ffff'
                                type={'material-community'}
                                // size={36}
                            />
                        </TouchableOpacity>
                    }
                    centerComponent={{text: '', style: {color: '#ffffff', fontSize: 18}}}
                    rightComponent={
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Search')}
                        >
                            <Icon
                                name={'magnify'}
                                color={'#ffff'}
                                type={'material-community'}
                                // size={30}

                            />
                        </TouchableOpacity>
                    }
                />
                <ScrollView>
                <View style={{flex:1}}>
                <Carousel
                    ref={c => this._slider1Ref = c}
                    data={ENTRIES1}
                    renderItem={renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={SLIDER_1_FIRST_ITEM}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    inactiveSlideShift={20}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    loopClonesPerSide={2}
                    autoplay={true}
                    autoplayDelay={500}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => this.setState({slider1ActiveSlide: index})}
                />

                <Pagination
                    dotsLength={ENTRIES1.length}
                    activeDotIndex={slider1ActiveSlide}
                    containerStyle={styles.paginationContainer}
                    dotColor={'rgba(255, 255, 255, 0.92)'}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={colors.black}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    carouselRef={this._slider1Ref}
                    tappableDots={!!this._slider1Ref}
                />
                </View>
                <View style={{backgroundColor:'#888888',flex:1}}>
                    <Button title="Login" onPress={()=>this.props.navigation.navigate('Login')}> </Button>
                    {
                        typeCar.map((car,i)=>
                            <Car key={i} name={car.name} uri={car.uri}></Car>
                    )
                    }
                </View>
                </ScrollView>
            </View>
        );
    }
}

export default Home;
