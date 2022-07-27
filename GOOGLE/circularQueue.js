
var MyCircularQueue = function (k) {
    this.sizeLimit = k;
    this.circularQueue = [];
    this.size = k;
    this.rear = null;
};


MyCircularQueue.prototype.enQueue = function (value) {
    if (this.sizeLimit > 0) {
        this.circularQueue.push(value);
        this.rear = value;
        this.sizeLimit--;
        return true;
    } else {
        return false;
    }
};


MyCircularQueue.prototype.deQueue = function () {
    if (this.sizeLimit === this.size) {
        return false;
    } else {
        this.circularQueue.shift();
        this.sizeLimit++;
        return true;
    }
};


MyCircularQueue.prototype.Front = function () {
    if (this.sizeLimit === this.size) {
        return -1;
    } else {
        return this.circularQueue[0];
    }
};


MyCircularQueue.prototype.Rear = function () {
    if (this.sizeLimit === this.size) {
        return -1;
    } else {
        return this.rear;
    }
};


MyCircularQueue.prototype.isEmpty = function () {
    if (this.sizeLimit === this.size) {
        return true;
    } else {
        return false;
    }
};


MyCircularQueue.prototype.isFull = function () {
    if (this.sizeLimit === 0) {
        return true;
    } else {
        return false;
    }
};