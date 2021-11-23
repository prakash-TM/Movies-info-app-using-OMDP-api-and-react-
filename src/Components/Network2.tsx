import { useState } from "react";
import NetworkApi from "./Network";
var outData=[];
var outTotal="";
const DataReq = async (movieName: string,pageNum: number) => {
   if(pageNum>=1){
    const url = `http://www.omdbapi.com/?s=${movieName}&apikey=640e67ea&page=${pageNum}`;
    const data = await NetworkApi(url);
    outData= data.Search;
    outTotal=data.totalResults
    return {outData,outTotal}
   }
  
   
    
  };


export default DataReq