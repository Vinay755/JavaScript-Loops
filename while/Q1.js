function countDown(int){
    if(int <= 0){
        console.log("Error")
    }
    while(int > 0){
        console.log(int);
        int--;
    }
   
}
countDown(20);