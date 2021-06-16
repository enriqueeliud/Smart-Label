import axios from 'axios'
export const getAllClothes =()=>async dispatch=>{
    
   dispatch({type:'GET_CLOTHES_REQUEST'})

   try{
      const response = await axios.get('/api/clothes/getallclothes')
      console.log(response)
       dispatch({type:'GET_CLOTHES_SUCCESS', payload : response.data})
   }

   catch (error){
       dispatch({ type: "GET_CLOTHES_FAILED", payload:error});
   }
}