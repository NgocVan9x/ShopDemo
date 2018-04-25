import React from "react";
import {Button, Dimensions, TouchableOpacity, View} from "react-native";
import {Header, Icon} from "react-native-elements";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {ENTRIES1} from './entries';
import SliderEntry from './SliderEntry';
import styles, {colors} from './styles';

const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth;
const SLIDER_1_FIRST_ITEM = 1;

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
                <Button title="Learn More" onPress={() => this.props.navigation.navigate('Login')}/>
            </View>
        );
    }
}


export default Home;
