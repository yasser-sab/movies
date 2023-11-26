import React, { useEffect, useState } from 'react';
import { Text,View,Button,StyleSheet,ScrollView,TextInput, Touchable, TouchableOpacity, Image } from 'react-native';

import {movieImage,movieById} from '../api/api';

const MovieCard=({id,handler})=>{
    const [movie,setMovie]=useState({});
    
    useEffect(()=>{
        movieById(id).then(res=>{
            setMovie(res);
        })
    },[])

    

    return (
        <TouchableOpacity
            onPress={()=>{
                handler.navigate("Details",{id});
            }}
        >
            <View style={{
                flexDirection:'row',
                marginBottom:5
            }}>
                <Image style={styles.image} source={{uri:movieImage(movie.poster_path)}}/>
                <View style={{
                    flex:3,
                    paddingHorizontal:5,
                    paddingVertical:10,
                    backgroundColor:'silver'
                }}>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        marginBottom:10
                    }}>
                        <Text style={{width:'70%'}}>{movie.title}</Text>
                        <Text>{movie.vote_average}</Text>
                    </View>
                    <Text style={{fontSize:8,maxHeight:50}}>{movie.overview}</Text>
                    <Text style={{
                        marginTop:'auto',
                        marginLeft:'auto'
                    }}>{movie.release_date}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    image:{
        flex:2,
        height:150,
        resizeMode:'cover'
    }
})

export default MovieCard;