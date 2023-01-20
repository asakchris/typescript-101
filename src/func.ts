// Functions
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    else
        return income * 1.3;
}

calculateTax(10_000);

// Combining types
function kgToLbs(weight: number | string) {
    // Narrowing
    if (typeof weight == 'number') {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs('10kg');

// Nullable types
function greet(name: string | null | undefined) {
    if (name) {
        console.log(name);
    } else {
        console.log('Hola!')
    }
}

greet('John');
greet(null);
greet(undefined);
