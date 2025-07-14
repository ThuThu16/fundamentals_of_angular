// Converts US shoe size to EU shoe size using a fixed offset
function convertShoeSize(size: number): number {
    const offset = 33;
    return size + offset;
}

// Test the function
console.log(convertShoeSize(8)); // Expected output: 41
