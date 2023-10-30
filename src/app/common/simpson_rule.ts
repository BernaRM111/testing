export function simpson(x0: number, x1: number, num_seg: number, ERROR: number, f: (x: number) => number): number {
    let integral = 0;
    let prevIntegral = Number.POSITIVE_INFINITY;

    while (Math.abs(integral - prevIntegral) > ERROR) {
        prevIntegral = integral;
        const w = (x1 - x0) / num_seg;
        let sumOddIndex = 0;
        let sumEvenIndex = 0;

        for (let i = 1; i < num_seg; i += 2) {
            sumOddIndex += f(x0 + i * w);
        }

        for (let i = 2; i < num_seg - 1; i += 2) {
            sumEvenIndex += f(x0 + i * w);
        }

        integral = (w / 3) * (f(x0) + 4 * sumOddIndex + 2 * sumEvenIndex + f(x1));
        num_seg *= 2;
    }

    return integral;
}

  

  