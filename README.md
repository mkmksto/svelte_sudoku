# mkmksto's sudoku implementation using `svelte`

## TODO's

-   helper functions
-   function that converts a string of digits to the formats i want (like 9x9, 3x3x3, row format, column format)
-   modal where i can paste a problem and my app formats in on the screen
-   pressing delete deletes a value from the tile
-   solver & animation
-   generator
-   prettify UI

## FUTURE TODO's / IMPROVE

-   currently, it can only mark inputs as invalid
-   ideally, if something is invalid, we'd also mark the values that make if invalid as invalid
-   two ways to do this:
-   from your helper functions, return the coords of the offending tiles
-   or (more expensively), recalc the validity of every non-replaceable user input
-   implement navigation using arrow keys
-   keypad
