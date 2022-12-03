import { derived, writable } from 'svelte/store'

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

export const gameWon = derived(tileState, () => {
    // derive game state here
})
