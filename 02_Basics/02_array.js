const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  //(output) [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]


// const all_Heros = marvel_heros.concat(dc_heros)
// console.log(all_Heros);    //(output) [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// const all_new_Heros =[...marvel_heros, ...dc_heros]
// console.log(all_new_Heros);   // (output) [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_Array= another_Array.flat(Infinity)
// console.log(real_another_Array);   //(output) [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]


console.log(Array.isArray("Himanshu"));  //(output) false

console.log(Array.from("Himanshu"));  //(output) [
                                            //     'H', 'i', 'm',
                                            //     'a', 'n', 's',
                                            //     'h', 'u'
                                            //   ]



console.log(Array.from({name : "hitesh"})); //(output) [
                                            //     'H', 'i', 'm',
                                            //     'a', 'n', 's',
                                            //     'h', 'u'
                                            //   ]
                                            //   [] (it will give empty array too like this [])


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //(output) [ 100, 200, 300 ]

