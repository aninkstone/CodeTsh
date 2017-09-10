function BaseObj () {
};

BaseObj.prototype.setVisiable = function (b) {
    try {
        this.handle.visiable = b;
    }
    catch (e) {
        console.log (e + " " + (new Error().stack));
    }
}

BaseObj.prototype.inval = function () {
    try {
        this.handle.inval();
    }
    catch (e) {
        console.log (e + " " + (new Error().stack));
    }
}

BaseObj.prototype.setLocation = function (x, y) {
    try {
        this.handle.locX = x;
        this.handle.locY = y;
    }
    catch (e) {
        console.log (e + " " + (new Error().stack));
    }
}

BaseObj.prototype.setType = function (type) {
    try {
        this.handle.type = type;
    }
    catch (e) {
        console.log (e + " " + (new Error().stack));
    }
}

BaseObj.prototype.setSize = function (w, h) {
    try {
        this.handle.width  = w;
        this.handle.height = h;
    }
    catch (e) {
        console.log (e + " " + (new Error().stack));
    }
}

BaseObj.prototype.setName = function (name) {
    try {
        this.handle.name = name;
    }
    catch (e) {
        console.log (e + " " + (new Error().stack));
    }
}

BaseObj.prototype.setFocus = function () {
    try {
        this.handle.setFocus();
    }
    catch (e) {
        console.log (e + " " + (new Error().stack));
    }
}

BaseObj.prototype.position = function () {
    return {
        x: this.handle.locX,
        y: this.handle.locY,
        w: this.handle.width,
        h: this.handle.height,
    };
}
