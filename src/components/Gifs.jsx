import axios from 'axios';
import React,{useState, useEffect} from 'react';
import Gif from './Gif';
import {Grid} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import useStyles from './Styles';
import { sizing } from '@material-ui/system';
import InfiniteScroll from 'react-infinite-scroll-component';



const Gifs= () =>{
    const classes =useStyles();  
    const[GIFS, setGIFS]=useState([]);  
    const[search, setsearch]=useState('welcome');
    const[limit, setLimit]=useState(12);


    const fetchGifs= async(search, limit) =>{
        const API_KEY= process.env.REACT_APP_API_KEY;
        const url= `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=${limit}&offset=0&rating=g&lang=en` ;    
        const {data}=await axios.get(url); 
        setGIFS(data.data);   
    }

    useEffect (()=>{
        fetchGifs(search, limit);        
    }, [search, limit]);

  
       
        return( 
                <>
                        <Grid container justify="center" alignItems="center" >
                         <Grid className={classes.root} >
                             
                                <TextField name="search" type="text" style={{backgroundColor: "#800017"}} pattern="[a-zA-Z0-9]*" onChangeCapture={(e)=>setsearch(e.target.value)} className={classes.input} label="Search for a GIF" variant="filled" />
                            
                         </Grid>   
                        </Grid>         
                         
                        
  
                            
                            <InfiniteScroll  Grid item dataLength={GIFS.length} next={()=>setLimit(limit+12)} hasMore={true}   > 

                            <Grid container justify="center"   spacing={5} width={1/3}   direction="row" justify="center" alignItems="center">  
                             
                        {GIFS.map((GIF) => (    
                         <Grid item key={GIF.id} xs={3}  >
                             <Gif GIF={GIF}/>
                         </Grid>
                        ))}
                           </Grid> 
                            </InfiniteScroll>
                            
               
                   
                        
                </>
            )
}

export default React.memo( Gifs);    