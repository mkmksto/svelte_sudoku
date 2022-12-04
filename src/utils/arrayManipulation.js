// import { tileState } from '../stores/tileStateStore'

let sample =
    '649123875827465139135789264518934627276518493493672518752346981364891752981257346'

/**
 *
 * @param {Array} objArr
 * @param {Object} activeTile
 * @returns (bool) indicates whether the user input is valid or not
 */
export function isInputValid(objArr, activeTile, userInputValue) {
    console.log(`user input: ${userInputValue}`)

    // compare ONLY to previous user-input values(this includes the numbers present at the start of the puzzle), not to the real values
    const localGroup = getLocalGroup(objArr, activeTile).map(
        (obj) => obj.userInputValue
    )
    const localRow = getRow(objArr, activeTile).map((obj) => obj.userInputValue)
    const localCol = getCol(objArr, activeTile).map((obj) => obj.userInputValue)

    console.log(localGroup, localRow, localCol)
    const valInGroup = localGroup.includes(userInputValue)
    const valInRow = localRow.includes(userInputValue)
    const valInCol = localCol.includes(userInputValue)

    console.log(`the 3 vals: ${valInGroup}, ${valInRow}, ${valInCol}`)
    if ([valInGroup, valInRow, valInCol].some((bool) => bool === true)) {
        return false
    } else {
        return true
    }
}

function getLocalGroup(objArr, activeTile) {
    const curRow = parseInt(getCurrentRowCoord(objArr, activeTile))
    const curCol = parseInt(getCurrentColCoord(objArr, activeTile))

    const firstBlock = [0, 1, 2]
    const secondBlock = [3, 4, 5]
    const thirdBlock = [6, 7, 8]

    let localGroupLowestRow
    if (firstBlock.includes(curRow)) {
        localGroupLowestRow = 0
    } else if (secondBlock.includes(curRow)) {
        localGroupLowestRow = 3
    } else if (thirdBlock.includes(curRow)) {
        localGroupLowestRow = 6
    }

    let localGroupLowestCol
    if (firstBlock.includes(curCol)) {
        localGroupLowestCol = 0
    } else if (secondBlock.includes(curCol)) {
        localGroupLowestCol = 3
    } else if (thirdBlock.includes(curCol)) {
        localGroupLowestCol = 6
    }

    const localGroupCoords = []
    for (let row = localGroupLowestRow; row < localGroupLowestRow + 3; row++) {
        for (
            let col = localGroupLowestCol;
            col < localGroupLowestCol + 3;
            col++
        ) {
            localGroupCoords.push(`${row}-${col}`)
        }
    }

    return objArr.filter((obj) => localGroupCoords.includes(obj.coord))
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

// export function oneDto2D(flatString) {
//     let flatStringIdx = 0
//     const newArray = initEmptyArray(9)

//     for (let row = 0; row < 9; row++) {
//         for (let col = 0; col < 9; col++) {
//             newArray[row][col] = flatString[flatStringIdx]
//             flatStringIdx++
//         }
//     }
//     return newArray
// }

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
