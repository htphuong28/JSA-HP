// function kiemtra (a) {
//     if (a>3) {
//         alert("Số lớn hơn 3")
//     } else alert ("Số không lớn hơn 3")
// }

// kiemtra(1)

// function chiahet (a) {
//     if (a%3==0 && a%2==0) {
//         alert("Số chia hết cho 3 và chia hết cho 2")
//     } else if (a%3!=0 && a%2==0) {
//         alert("Số chia hết cho 2 nhưng không chia hết cho 3")
//     } else if (a%3==0 && a%2!=0) {
//         alert("Số chia hết cho 3 nhưng không chia hết cho 2")
//     } else alert ("Số không chia hết cho 3 và 2")
// }

// chiahet (18)

function timx (a,b,c) {
    let delta = b*b - 4*a*c;
    console.log(delta);
    let x1 = (-b-Math.sqrt(delta))/(2*a);
    let x2 = (-b+Math.sqrt(delta))/(2*a);
    console.log(x1,x2)
}

timx (5,-12,7);

