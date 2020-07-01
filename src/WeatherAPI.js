import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View ,Image} from 'react-native';
import Constants from "expo-constants";
import axios from "axios";

const weatherP_URL="https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-D0047-061?Authorization=CWB-DF3E1AA6-CCDA-4883-98BF-35EB900001CC&format=JSON"
const weatherT_URL="https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-A0010-001?Authorization=CWB-DF3E1AA6-CCDA-4883-98BF-35EB900001CC&format=JSON"
//大安區在4447   4975 濕度


const Weatherbar = () => {
    
    const [MaxT, setMaxT] = useState([36]);
    const [MinT, setMinT] = useState([28]);
    const [id, setid] = useState([22]);
    const [POP, setPOP] = useState([70]);

    const getweatherDataAsync = async () => {
        let response = await axios.get(weatherT_URL);
        setMaxT(response.cwbdata.resources.resource.data.agrWeatherForecasts.weatherForecasts.location[0].weatherElements.MaxT.daily[2].temperature);
        setMinT(response.cwbdata.resources.resource.data.agrWeatherForecasts.weatherForecasts.location[0].weatherElements.MinT.daily[2].temperature);
        setid(response.cwbdata.resources.resource.data.agrWeatherForecasts.weatherForecasts.location[0].weatherElements.Wx.daily[2].weatherid);
      };
      const getweatherPOPAsync = async () => {
        let response = await axios.get(weatherP_URL);
        setPOP(response.cwbopendata.dataset.locations.location[2].weatherElement[4].time[5].elementValue.value);
      };
      useEffect(() => {
        if (Platform.OS === "android" && !Constants.isDevice) {
          setErrorMsg(
            "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
          );
        } else {
            getweatherDataAsync();
            getweatherPOPAsync();
        }
      }, []);
    // const weatherDataMaxT = (weatherTJson.cwbdata.resources.resource.data.agrWeatherForecasts.weatherForecasts.location[0].weatherElements.MaxT.daily[2].temperature);
    // const weatherDataMinT = (weatherTJson.cwbdata.resources.resource.data.agrWeatherForecasts.weatherForecasts.location[0].weatherElements.MinT.daily[2].temperature);
    // const weatherid = (weatherTJson.cwbdata.resources.resource.data.agrWeatherForecasts.weatherForecasts.location[0].weatherElements.Wx.daily[2].weatherid);
    // const weatherDataPOP = (weatherPJson.cwbopendata.dataset.locations.location[2].weatherElement[4].time[5].elementValue.value);
    
    function judgimg(id) {
        if(id<3&&id>0){return(require('../images/sun.png'))}
        else if (id<15&&id>2){return(require('../images/could.png'))}
        else{return(require('../images/rain.png'))}
        
    };
    console.log(id);
    return(
    <View style={styles.containerStyle}>
        
        
        <Image
        // source={require('../images/could.png')}
        source={judgimg(id)}
        style={styles.imgweather}
        />
        <Text style={styles.textTemper}>{MaxT}°~{MinT}°</Text>
        <View>
            <Text style={styles.textPopword}>降雨</Text>
            <Text style={styles.textPopword}>機率</Text>
        </View>       
        <Text style={styles.textPop}>{POP}</Text>
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