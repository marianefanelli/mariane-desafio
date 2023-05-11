var boards = [];

//Factory that create boards
function create({ name, w, h, d }) {
    var new_board = {
        name: name,
        dimension: {
            width: w,
            height: h,
            deeph: d
        }
    }
    boards.push(new_board);

    return new_board;
}

function remove(name) {
    var t = boards.length;
    boards = boards.filter((b) => {
        return b.name !== name;
    });

    return boards.length < t;
}

function get() {
    return boards;
}


module.exports = { create, remove, get };