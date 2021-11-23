const NetworkApi=async(url:any)=>{
const res=await fetch(url);
const out=await res.json();
return out;
}

export default NetworkApi;