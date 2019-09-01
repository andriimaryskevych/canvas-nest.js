const heart  = (t) => 2 - 2 * Math.sin(t) + Math.sin(t) * (Math.sqrt(Math.abs(Math.cos(t)))/(Math.sin(t) + 1.4));
const getDistance = (a, b) => {
    const x_dist = a.x - b.x;
    const y_dist = a.y - b.y;

    return  Math.Math.sqrt(x_dist * x_dist + y_dist * y_dist);
};

const createVector = (a, b) => {
    return [
        b.x - a.x,
        b.y - a.y
    ]
};

const getVectorLength = ([x, y]) => Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

const unit_OX_vector = [1, 0];
const [x1, y1] = unit_OX_vector;

const getAngle = ([x2, y2]) => {
    const dot = x1 * x2 + y1 * y2;
    const det = x1 * y2 - y1 * x2;

    let angle = (Math.atan2(det, dot) / Math.PI) * 180;

    if (angle < 0) {
        angle *= -1;

        angle = 360 - angle;
    }

    return angle;
};

const equation = (angle) => 1;