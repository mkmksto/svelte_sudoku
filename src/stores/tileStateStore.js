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
