function calculateBMI(){
    let weight=prompt("enter your weight");
    let height=prompt("enter your height");

    let r=weight/(height*height);
    let re=r.toFixed(2);

    document.getElementById("bmi").innerHTML="your bmi is "+re;


}