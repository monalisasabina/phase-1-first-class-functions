//receives a function Callback
function receivesAFunction (spy){
 return spy();
 
}


//returns a named function
function returnsANamedFunction(){
   return function fn(){

   }

}

//returns an anonymous function
function returnsAnAnonymousFunction (){
    return function (){

    }
} 