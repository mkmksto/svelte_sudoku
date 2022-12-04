import { tileState } from '../stores/tileStateStore'

let sample =
    '649123875827465139135789264518934627276518493493672518752346981364891752981257346'

export function validateInRow() {
    let state
    const unsub = tileState.subscribe((val) => {
        state = val
    })
    console.log(state)
}

export function oneDto2D(flatString) {
    let flatStringIdx = 0
    const newArray = initEmptyArray(9)

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            newArray[row][col] = flatString[flatStringIdx]
            flatStringIdx++
        }
    }
    return newArray
}

/**
 * Initialize an n x n matrix
 * @param {number} arraySize
 */
export function initEmptyArray(arraySize) {
    return new Array(arraySize).fill(0).map(() => new Array(arraySize))
}

/**
 *
 * @returns An empty 1D sudoku array where each item is an object
 */
export function initObjectArray() {
    const sudokuArray = []

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            sudokuArray.push({
                coord: `${row}-${col}`,
                realValue: '',
                userInputValue: '',
                isValidValue: true,
                isReplaceable: undefined,
                isActiveTile: false,
                isUserInput: false,
            })
        }
    }
    return sudokuArray
}

/**
 *
 * @param {*} str
 * @param {number} numToDelete: number of items to delete
 */
export function delRandElements(str, numToDelete) {
    const newArr = str.split('')
    for (let i = 0; i < numToDelete; i++) {
        const randIdx = getRandomInt(0, str.length)
        newArr[randIdx] = 'x'
    }

    console.log(newArr)
    return newArr.join('')
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
