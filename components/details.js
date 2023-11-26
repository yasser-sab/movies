import React,{useState,useEffect} from 'react';
import { Image, Text,View,StyleSheet } from 'react-native';
import {movieImage,movieById} from '../api/api';

const Details=({route})=>{

    const [movie,setMovie]=useState({});
    
    useEffect(()=>{
        movieById(route.params.id).then(res=>{
            setMovie(res);
        })
    },[])

    return (
        <View>
            <Image source={{uri:movieImage(movie.poster_path)}} style={{
                width:'100%',
                height:150,
                resizeMode:'cover'
            }}/>
            <Text>{movie.title}</Text>
            <Text>icon</Text>
            <Text>{movie.overview}</Text>
            <View>
                <Text>other</Text>
            </View>
        </View>
    )
}

export default Details;