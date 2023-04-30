const greetings = 'Hello, How are you?';

function reverseString(text) {
    let reverse = '';
    for (const element of text) {
        reverse = element + reverse;
    }
    return reverse;
}

const reversed = reverseString(greetings);
console.log(reversed);