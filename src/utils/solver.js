/**
 *
 * @param {Array} grid
 * @returns The coordinates of the next empty tile in format '0-0'
 */
export function findNextEmpty(grid) {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let curTile = grid.find((tileObj) => tileObj.coord === `${r}-${c}`)
            if (!curTile.userInputValue) {
                return curTile.coord
            }
        }
    }

    // if this is returned, there are no more empty squares
    return '9-9'
}

/**
 *
 * @param {Array} tileState
 * @returns
 */
export function isCompleteAndValidSolution(tileState) {
    // Check if all tiles have a value
    for (const tile of tileState) {
        if (!tile.userInputValue) {
            return false
        }
    }

    // Check if all rows have unique values
    for (let row = 0; row < 9; row++) {
        const rowValues = []
        for (let col = 0; col < 9; col++) {
            const tile = tileState.find((tileObj) => tileObj.coord === `${row}-${col}`)
            rowValues.push(tile.userInputValue)
        }
        if (hasDuplicates(rowValues)) {
            return false
        }
    }

    // Check if all columns have unique values
    for (let col = 0; col < 9; col++) {
        const colValues = []
        for (let row = 0; row < 9; row++) {
            const tile = tileState.find((tileObj) => tileObj.coord === `${row}-${col}`)
            colValues.push(tile.userInputValue)
        }
        if (hasDuplicates(colValues)) {
            return false
        }
    }

    // Check if all 3x3 sub-grids have unique values

    // the two topmost for loops loop through the
    // 3x3 grids
    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            const subgridValues = []

            // these inner two for loops loop through each tile
            // from each grid
            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    const tile = tileState.find(
                        (tileObj) => tileObj.coord === `${row + r}-${col + c}`
                    )
                    subgridValues.push(tile.userInputValue)
                }
            }
            if (hasDuplicates(subgridValues)) {
                return false
            }
        }
    }

    // If all checks pass, the puzzle configuration is a complete and valid solution
    return true
}

/**
 *
 * @param {Array} values
 * @returns
 */
function hasDuplicates(values) {
    // Convert the array of values to a set
    // This will remove any duplicate values
    const set = new Set(values)

    // If the set has the same number of elements as the original array,
    // there were no duplicates
    return set.size !== values.length
}

/**
 *
 * @param {Object} tileObj
 * @param {Array} grid
 * @returns
 */
export function getPossibleValues(tileObj, grid) {
    // Get the current row, column, and 3x3 sub-grid of the tile
    const row = tileObj.coord[0]
    const col = tileObj.coord[2]
    const subgridRow = Math.floor(row / 3) * 3
    const subgridCol = Math.floor(col / 3) * 3

    // Create a set of all possible values (1-9)
    const posArray = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => i.toString())
    const possibleValues = new Set(posArray)

    // Remove any values that are already present in the row, column, or sub-grid
    for (let r = 0; r < 9; r++) {
        // we increment by rows here, so what we;re doing is
        // comparing against values along the same column
        if (r !== row) {
            const tile = grid.find((tileObj) => tileObj.coord === `${r}-${col}`)
            possibleValues.delete(tile.userInputValue)
            // console.log(tile.userInputValue)
        }
        if (r !== col) {
            const tile = grid.find((tileObj) => tileObj.coord === `${row}-${r}`)
            possibleValues.delete(tile.userInputValue)
        }
    }
    for (let r = subgridRow; r < subgridRow + 3; r++) {
        for (let c = subgridCol; c < subgridCol + 3; c++) {
            if (r !== row && c !== col) {
                const tile = grid.find((tileObj) => tileObj.coord === `${r}-${c}`)
                possibleValues.delete(tile.userInputValue)
            }
        }
    }

    // Convert the set of possible values to an array and return it
    return [...possibleValues]
}
