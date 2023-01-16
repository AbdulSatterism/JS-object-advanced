// for (let i = 1; i < 6; i++) {
//     console.log(i)
// }

function likeLoop(i) {
    if (i > 5) {
        return;
    }
    console.log(i);
    likeLoop(i + 1);
}
likeLoop(1)
