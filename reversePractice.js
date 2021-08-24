const MyName = 'Hi! My name is Debabrata Saha'

function revereString(text) {
    let reverse = '';
    for (const char of text) {
        // console.log(char)
        reverse = char + reverse;

    }
    return reverse;
}
console.log(revereString(MyName))