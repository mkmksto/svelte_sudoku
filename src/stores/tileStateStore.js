import { writable } from 'svelte/store'

export const tileState = writable([
    {
        coord: '0-0',
        realValue: '1',
        userInputValue: '',
        isValidValue: undefined,
        isReplaceable: undefined,
        isActiveTile: false,
    },
])

// function initializeObjectArray() {
//     const sudokuArray = []

//     for (let row = 0; row < 9; row++) {
//         for (let col = 0; col < 9; col++) {
//             sudokuArray.push({
//                 coord: `${row}-${col}`,
//                 realValue: '',
//                 userInputValue: '',
//                 isValidValue: undefined,
//                 isReplaceable: undefined,
//                 isActiveTile: false,
//             })
//         }
//     }
//     return sudokuArray
// }
