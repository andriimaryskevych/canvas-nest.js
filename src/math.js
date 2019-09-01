const sin = Math.sin;
const cos = Math.cos;
const sqrt = Math.sqrt;
const abs = Math.abs;

const heart  = (t) => 2 - 2 * sin(t) + sin(t) * (sqrt(abs(cos(t)))/(sin(t) + 1.4));
const getDistance = (a, b) => {
    const x_dist = a.x - b.x;
    const y_dist = a.y - b.y;

    return  Math.sqrt(x_dist * x_dist + y_dist * y_dist);
};