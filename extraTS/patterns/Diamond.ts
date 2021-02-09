export default function diamond(columns: number): void {
    let s = '';
    let Diamond = '';
    for (let i = 1; i <= columns * 2; i++) {
        if (i <= columns) {
            s = '  ';
            for (let j = columns; j >= i; j--) {
                s = s + '  ';
            }
            for (let k = 1; k <= i; k++) {
                s = s + ' *  ';
            }
            Diamond += '\n' + s;
        }
        else {
            s = '';
            for (let j = columns; j <= i; j++) {
                s = s + '  ';
            }
            for (let k = columns * 2; k >= i; k--) {
                s = s + ' *  ';
            }
            Diamond += '\n' + s;
        }
        s = '';
    }
console.log(`The diamond of ${columns} columns: \n ${Diamond} \n`);
}
