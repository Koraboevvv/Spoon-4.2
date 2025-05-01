// {
//     // M-1
//     function A1(n) {
//         return n **3
//     }
//     console.log(A1(3));
    
//     const A2 = function(n) {
//         return n ** 3
//     }
//     console.log(A2(6));
    
//     const A3 = n => n ** 3
//     console.log(A3(5));
    
// }

// {
//     // M-2
//     function A1(age) {
//         if ( age >= 18) {
//             console.log("Voyaga Yetgan");
            
//         } else {
//             console.log("Voyaga Yetmagan");

//         }
//     }    
//     A1(18)
//     const A2 = function(age){
//         if ( age >= 18) {
//             console.log("Voyaga Yetgan");
            
//         } else {
//             console.log("Voyaga Yetmagan");

//         }
//     }    
//     A2(14)
//     const A3 = age =>  {
//         if ( age >= 18) {
//         console.log("Voyaga Yetgan");
        
//     } else {
//         console.log("Voyaga Yetmagan");
//     }
//     }
//     A3(14)
// }

// {
//     // M-3
//     function A1(n) {
//         for (let i = 1; i <= n; i++) {
//             if ( i  % 2 !== 0) {
//                 console.log(i);
//             }
            
//         }
//     }
//     A1(10)
//     const A2 = function (n) {
//         for (let i = 1; i <= n; i++) {
//             if ( i  % 2 !== 0) {
//                 console.log(i);
//             }
            
//         }
//     }
//     A2(19)
//     const A3 = n => {
//         for (let i = 1; i <= n; i++) {
//             if ( i  % 2 !== 0) {
//                 console.log(i);
//             }
//         }
//     }
//     A3(19)
// }

// {
//     // M-4
//     function A1(a,b,c) {
//         if ( a < b && a < c) {
//             console.log(a);
            
//         } else if ( b < c  && b < a){
//             console.log(b);
            
//         } else {
//             console.log(c);
            
//         }
//     }
//     A1(9,4,6)
//     const A2 = function (a,b,c){
//         console.log(Math.min(a,b,c));
        
//     }
//     A2(9,40,6)
//     const A3 = (a,b,c) => {
//         console.log(Math.min(a,b,c));
//     }
//     A1(9,40,6)
// }

{
    // M-5
    let s = 0 
    function A1(name) {
        for (let i = 0; i < name.length; i++) {
            console.log(name[i]);
            if (name[i] == "a" ) {
                s++
                continue
            }
            if (name[i] == "e" ) {
                s++
                continue
            }
            if (name[i] == "i" ) {
                s++
                continue
            }
            if (name[i] == "o" ) {
                s++
                continue
            }
            if (name[i] == "u" ) {
                s++
                continue
            }
        }
        console.log(s);
    }
    A1("Bexruz")

    const A2 = function (name) {
        for (let i = 0; i < name.length; i++) {
            console.log(name[i]);
            if (name[i] == "a" ) {
                s++
                continue
            }
            if (name[i] == "e" ) {
                s++
                continue
            }
            if (name[i] == "i" ) {
                s++
                continue
            }
            if (name[i] == "o" ) {
                s++
                continue
            }
            if (name[i] == "u" ) {
                s++
                continue
            }
        }
        console.log(s);
    }
    A2("Bexruz")
    const A3 = name => {
            for (let i = 0; i < name.length; i++) {
                console.log(name[i]);
                if (name[i] == "a" ) {
                    s++
                    continue
                }
                if (name[i] == "e" ) {
                    s++
                    continue
                }
                if (name[i] == "i" ) {
                    s++
                    continue
                }
                if (name[i] == "o" ) {
                    s++
                    continue
                }
                if (name[i] == "u" ) {
                    s++
                    continue
                }
            }
        console.log(s);
    }
    A3("Bexruz")
}

