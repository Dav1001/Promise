 // function randomValue(max) {
 //           return Math.round(Math.random()*max);
 //       }

       // let a, b, c;

       // function getA(callbackB, callbackC){
       //     setTimeout( function(){
       //         a = randomValue(5);
       //         console.log(a);
       //         callbackB(callbackC, a);
               
       //     }, 2000 );

       // }

       // function getB (callbackC, a){
       //     setTimeout(function(){
       //         b = randomValue(a);
       //         console.log(b);
       //         callbackC(b);
       //     }, 1000);

       // }

       // function getC (b){
       //  setTimeout(function(){
       //        c = randomValue(b);
       //        console.log(c);
       //        end();
       //  }, 1000)
       // }

       // function end(){
       //     console.log('a = ' + a);
       //     console.log('b = ' + b);
       //     console.log('c = ' + c);
       // }

            
        
       // getA(getB, getC);








       function randomValue(max) {
   return Math.round(Math.random()*max)
}

let a, b;

setTimeout(function(){
   a = randomValue(5)
   console.log("a", a)
}, 2000)

setTimeout(function(){

   b = randomValue(a)
   console.log("b", b)
}, 1000);