// import { tileState } from '../stores/tileStateStore'

let sample =
    '649123875827465139135789264518934627276518493493672518752346981364891752981257346'

export function validateInRow(objArr, activeTile) {
    // let state
    // const unsub = tileState.subscribe((val) => {
    //     state = val
    // })
    // console.log(state)
    return getCol(objArr, activeTile)
}

function getLocalGroup(objArr, activeTile) {
    const activeCoord = activeTile.coord
}

/**
 *
 * @param {Array} objArr: full sudoku object array
 * @param {Object} activeTile
 * @returns An array containing the row to which a tile belongs
 */
function getRow(objArr, activeTile) {
    const curRow = getCurrentRowCoord(objArr, activeTile)
    const pattern = new RegExp(`${curRow}-[0-8]`)
    return objArr.filter((obj) => obj.coord.match(pattern))
}

function getCol(objArr, activeTile) {
    const curCol = getCurrentColCoord(objArr, activeTile)
    const pattern = new RegExp(`[0-8]-${curCol}`)
    return objArr.filter((obj) => obj.coord.match(pattern))
}

function getCurrentRowCoord(objArr, activeTile) {
    const activeCoord = activeTile.coord
    const curRow = activeCoord.match(/([0-8])-[0-8]/)
    return curRow[1]
}

function getCurrentColCoord(objArr, activeTile) {
    const activeCoord = activeTile.coord
    const curCol = activeCoord.match(/[0-8]-([0-8])/)
    return curCol[1]
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
