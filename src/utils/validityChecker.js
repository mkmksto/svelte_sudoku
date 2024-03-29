/**
 *
 * @param {Array} objArr
 * @param {Object} activeTile
 * @returns (bool) indicates whether the user input is valid or not
 */
export function isInputValid(objArr, activeTile, userInputValue) {
    // compare ONLY to previous user-input values(this includes the numbers present at the start of the puzzle), not to the real values
    userInputValue = userInputValue.toString()
    const localGroup = getLocalGroup(objArr, activeTile).map((obj) => obj.userInputValue)
    const localRow = getRow(objArr, activeTile).map((obj) => obj.userInputValue)
    const localCol = getCol(objArr, activeTile).map((obj) => obj.userInputValue)

    const valInGroup = localGroup.includes(userInputValue)
    const valInRow = localRow.includes(userInputValue)
    const valInCol = localCol.includes(userInputValue)

    if ([valInGroup, valInRow, valInCol].some((bool) => bool === true)) {
        return false
    } else {
        return true
    }
}

function getLocalGroup(objArr, activeTile) {
    const curRow = parseInt(getCurrentRowCoord(activeTile))
    const curCol = parseInt(getCurrentColCoord(activeTile))

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
        for (let col = localGroupLowestCol; col < localGroupLowestCol + 3; col++) {
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
    const curRow = getCurrentRowCoord(activeTile)
    const pattern = new RegExp(`${curRow}-[0-8]`)
    return objArr.filter((obj) => obj.coord.match(pattern))
}

function getCol(objArr, activeTile) {
    const curCol = getCurrentColCoord(activeTile)
    const pattern = new RegExp(`[0-8]-${curCol}`)
    return objArr.filter((obj) => obj.coord.match(pattern))
}

function getCurrentRowCoord(activeTile) {
    const activeCoord = activeTile.coord
    const curRow = activeCoord.match(/([0-8])-[0-8]/)
    return curRow[1]
}

function getCurrentColCoord(activeTile) {
    const activeCoord = activeTile.coord
    const curCol = activeCoord.match(/[0-8]-([0-8])/)
    return curCol[1]
}
