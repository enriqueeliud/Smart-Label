export const getAllClothesReducer =(state={clothes: []}, action)=>{

 switch (action.type) {

   case "GET_CLOTHES_REQUEST":
     return { 
       loading : true,
       ...state 
      };

   case "GET_CLOTHES_SUCCESS":
     return {
      loading :false, 
      clothes: action.payload };

   case "GET_CLOTHES_FAILED":
     return { error: action.payload,
    loading:false
    };
   default:
     return state;
 }
 
}