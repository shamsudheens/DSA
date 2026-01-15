const reverse = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
};

const rotate = (arr, d) => {
    const n = arr.length;
    d = d % n;

    reverse(arr, 0, d - 1);
    reverse(arr, d, n - 1);
    reverse(arr, 0, n - 1);

    return arr;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const d = 3;

console.log(rotate(arr, d));
