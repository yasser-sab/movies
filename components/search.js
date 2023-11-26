import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {SafeAreaView,FlatList,Text,View,Button,StyleSheet,ScrollView,TextInput, Touchable, TouchableOpacity, Image } from 'react-native';
import MovieCard from './movieCard';
import {searchMovie,movieImage,movieById} from '../api/api';

const Search=({navigation})=>{


    let [movies,setMovies]=useState([]);
    let [keyword,setKeyword]=useState("new");

    useEffect(()=>{
        searchMovie(keyword).then(res=>{
            setMovies(res.results);
        })
    },[]);
    
    return (
        <SafeAreaView style={{flex:1}}>
            
            <TextInput
                style={styles.input}
                placeholder='search'
                value={keyword}
                onChangeText={val=>{
                    setKeyword(val);
                }}
                onSubmitEditing={()=>{
                    searchMovie(keyword).then(res=>{
                        setMovies(res.results);
                    })
                }}
            />

            <ScrollView>
                {
                    movies.length==0?<Text>no result</Text>:(
                    movies.map(movie=>(
                        <MovieCard key={movie.id} id={movie.id} handler={navigation}/>
                    ))
                    )
                }
            </ScrollView>
            
        </SafeAreaView>
        
    )
}

const styles=StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:"#235fac",
        padding:8,
        marginTop:25
    },
    image:{
        flex:2,
        height:150,
        resizeMode:'cover'
    }
})

export default Search;