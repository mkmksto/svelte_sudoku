import { writable } from 'svelte/store'

export const tiles = writable([])

// contents
// isReplaceable (bool)
// currentValue numfrom 1-9 or none
// globalCoord (from 9x9) (will also serve as unique ID)
// column coord
// row coord
// localCoord
// isInvalidValue
