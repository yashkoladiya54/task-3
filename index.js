//  Q1-rev of digit


        // let num = 123;
        // let sum = 0;

        // while (num > 0) {
        //     rem = num % 10;
        //     sum = sum * 10 + rem;
        //     num = Math.floor(num / 10);
        // }
        // console.log(sum);


        // Q2-sum of digit

        // let num = 123;
        // let sum = 0;

        // while (num > 0) {
        //     sum += num % 10;
        //     num = Math.floor(num / 10);
        // }

        // console.log(sum);
        


        // Q3-prime number

        // var n = Number(prompt("enter the number :"))
        // var flag = 0;

        // if (n == 0 || n == 1) {
        //     console.log("number is nor prime")
        // }

        // for (i = 2; i < n / 2; i++) {
        //     if (n % i == 0) {
        //         flag = 1
        //     }
        // }
        // if(flag==0){
        //     console.log("number is prime")
        // }else{
        //     console.log("number is not prime")
        // }



        // Q4-prime fact

        // var n = Number(prompt("enter the number :"))

        // var c = 2;

        // while (n > 1) {
        //     if (n % c == 0) {
        //         console.log(c);
        //         n = n / c;
        //     }
        //     else {
        //         c++;
        //     }
        // }




        // Q5-fibonnia  ex=0+1=0,0+1=0,1+2=3,2+3=5,3+5=8,5+8=13

        // var a=0,b=1,c,n,i=2;

        // var n=Number(prompt("enter the number"))

        // console.log(a)
        // console.log(b)

        // while(i<n){
        //     c=a+b;
        //     console.log(c);
        //     a=b;
        //     b=c;
        //     i++
        // }




        // Q6-palindrome number     ex=12321,1234321,123454321

        // var n = Number(prompt("enter the number :"))
        // var p = n;
        // var rev = 0;

        // while (n > 0) {
        //     rem = n % 10;
        //     rev = rev * 10 + rem;
        //     n = Math.floor(n / 10);
        // }

        // if (p == rev) {
        //      console.log("this is the palindrome number:",rev)
        // }
        // else{
        //     console.log("this is the not palindrome number:",p)
        // }



        // Q7-armstrong number

        // var n = Number(prompt("enter the number :"))
        // var rem; temp = 0;
        // y = n;

        // while (n > 0) {
        //     rem = n % 10;
        //     temp = temp + (rem * rem * rem);
        //     n = parseInt(n / 10);
        // }

        // console.log(temp);

        // if (temp == y) {
        //     console.log("this is the armstrong number")
        // }
        // else {
        //     console.log("this is a not the armstrong number")
        // }