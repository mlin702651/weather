import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import weatherPJson from '../json/F-D0047-061.json';
import weatherTJson from '../json/F-A0010-001.json';
//大安區在4447   4975 濕度
const Weatherbar = () => {
   
    const weatherDataMaxT = (weatherTJson.cwbdata.resources.resource.data.agrWeatherForecasts.weatherForecasts.location[0].weatherElements.MaxT.daily[2].temperature);
    const weatherDataMinT = (weatherTJson.cwbdata.resources.resource.data.agrWeatherForecasts.weatherForecasts.location[0].weatherElements.MinT.daily[2].temperature);
    const weatherid = (weatherTJson.cwbdata.resources.resource.data.agrWeatherForecasts.weatherForecasts.location[0].weatherElements.Wx.daily[2].weatherid);

    const weatherDataPOP = (weatherPJson.cwbopendata.dataset.locations.location[2].weatherElement[4].time[5].elementValue.value);
    
    function judgimg(weatherid) {
        if(weatherid<3&&weatherid>0){return(require('../images/sun.png'))}
        else if (weatherid<15&&weatherid>2){return(require('../images/could.png'))}
        else{return(require('../images/rain.png'))}
        
    };
    
    return(
    <View style={styles.containerStyle}>
        
        
        <Image
        // source={require('../images/could.png')}
        source={judgimg(weatherid)}
        style={styles.imgweather}
        />
        <Text style={styles.textTemper}>{weatherDataMaxT}°~{weatherDataMinT}°</Text>
        <View>
            <Text style={styles.textPopword}>降雨</Text>
            <Text style={styles.textPopword}>機率</Text>
        </View>       
        <Text style={styles.textPop}>{weatherDataPOP}</Text>
        <Text style={styles.textPoppr}>%</Text>
        
        


    </View>

    );
};

export default Weatherbar;
const styles = {
    containerStyle: {
        flexDirection: 'row',
        top:30,
        marginTop:30,
        width:244,
        height:48,
        color:'#fff',
        left:40,
    },
    textTemper:{
        color:'#fff',
        fontSize:30,
        left:20,
    },
    textPopword:{
        color:'#fff',
        fontSize:18,
        left:50,
        top:-3
    },
    textPop:{
        color:'#fff',
        fontSize:30,
        left:70,
        top:0
    },
    textPoppr:{
        color:'#fff',
        fontSize:20,
        left:80,
        top:11
    },
    imgweather:{
        width:50,
        height:50,
        
    },

 };