function radixSort(arr) {
    // Find the maximum number to determine the number of digits
    const maxNum = Math.max(...arr);
    // Find the number of digits in the maximum number
    let maxDigits = Math.floor(Math.log10(maxNum)) + 1;

    // Create buckets to hold the numbers for each digit place (0-9)
    let buckets = Array.from({ length: 10 }, () => []);

    // Loop through each digit place (from right to left)
    for (let k = 0; k < maxDigits; k++) {
        // Place numbers into buckets based on the current digit
        for (let i = 0; i < arr.length; i++) {
            let digit = Math.floor(arr[i] / Math.pow(10, k)) % 10;
            buckets[digit].push(arr[i]);
        }
        // Concatenate all the buckets into a new array
        arr = buckets.flat();
        // Clear the buckets for the next iteration
        buckets = Array.from({ length: 10 }, () => []);
    }

    return arr;
}

module.exports = radixSort;
