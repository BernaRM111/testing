export function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

export function gamma(x: number): number {
    if (Number.isInteger(x) && x > 0) {
        return factorial(x - 1);
    } else if (x > 0.5) {
        let product = Math.sqrt(Math.PI);
        while (x > 0.5) {
            product *= (x -= 1);
        }
        return product;
    } else {
        return NaN;
    }
}

