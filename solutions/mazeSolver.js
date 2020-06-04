// start upper left, exit @ 'e'
// can't pass thru blocked '*'
// or re-tread cells.
// this solution is unaware of its surroundings for a given square
// as such, it will simply move towards a valid exit
const mazeSolver = (maze, row=0, col=0, directions=[]) => {
    console.log(maze);
    // because of the way 2d arrays work, the coordinate order
    // on the grid is y, x
    const numRows = maze.length;
    const numCols = maze[0].length;

    // base case
    if (maze[row][col] === 'e') {
        // on success, turn array of directions into string
        return directions.join('');
    }

    if (maze[row][col] === '*' || maze[row][col] === 't') {
        // if we were directed to a blocked tile, remove last instruction
       directions.pop();
    }
    if (maze[row][col] === ' ') {
        // mark as treaded 't'
        maze[row][col] = 't';

        if (row < numRows-1) {
            directions.push('D')
            let t = mazeSolver(maze,row+1,col,directions)
            if (typeof(t)!== 'undefined') {
                return t
            }

        }
        // RIGHT
        if (col < numCols-1) {
            directions.push('R')
            let t= mazeSolver(maze,row, col+1,directions)
            if (typeof(t)!== 'undefined') {
                return t
            }
        }
        // UP
        if (row > 0) {
            directions.push('U')
            let t= mazeSolver(maze,row-1,col,directions)
            if (typeof(t)!== 'undefined') {
                return t
            }
        }
        // LEFT
        if (col > 0) {
            directions.push('L')
            let t= mazeSolver(maze,row,col-1,directions)
            if (typeof(t)!== 'undefined') {
                return t
            }
        }
    }


}

let deadendMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', '*', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let myBigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

console.log(mazeSolver(myBigMaze))