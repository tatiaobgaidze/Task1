/* 
    Task 1 : 
    ანა არის 28 წლის , ხოლო მისი ძმა ლევანი 21ის .

    გამოიყენეთ ცვლადები , რომელშიც შეინახავთ თითოეულის ასაკს და სახელს.
    განსაზღვრეთ ახალი სტრინგ ტიპის ცვლადი რომელიც შეინახასვს ტექსტს :
    'ანა ლევანზე 7 წლით უფროსია'
    სხვაობა დათვალეთ დინამიურად ცვლადების და არითმეტიკული ოპერატორების გამოყენებით
    დალოგეთ ზემოაღნიშნული ცვლადი . 
*/

let user = {
    name: 'Ana',
    age: 28
}

let user2 = {
    name: 'Levani',
    age: 21
}

let ageDifference = user.age - user2.age

let text = `ანა ლევანიზე ${ageDifference} წლით უფროსია`

console.log(text);


/*
    Task 2 : 
        გვაქვს სტუდენტების სახელების კენტი სიგრძის მასივი ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
        დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.

*/

let studentsName = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']

let middleName = (studentsName.length - 1) / 2

let result = studentsName[middleName]
console.log(result);


/*
    Task 3 : 
    Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;
    firstname,lastname - string type
    age - number
    subject - object (array of strings)
    roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )

    მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან

    Part 2 : 
        for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.

        ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.

        ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს. 
         
        დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
            ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
        

*/


const student = {
    firstName: 'Tatia',
    lastName: 'Obgaidze',
age: 23,
subjects: [
    'HTML',
    'CSS',
    'JS',
    'React.JS',
    'Node.JS'
]
}


for (let i=0; i<student.subjects.length; i++) {
    console.log(student.subjects[i]);
}

student.fullName = student.firstName + ' ' + student.lastName

console.log(student);

student.rummate = 'Elon Musk'

studentResult = `${student.firstName}`+' '+`${student.lastName}`+' '+`aris ${student.age} wlis da misi rummate aris`+' '+`${student.rummate}`

console.log(studentResult);



// Task 4 : 
// გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
// გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
// დალოგეთ ეს ელემენტი.


const fruteArr = ["Banana", "Orange", "Apple", "Mango",2,12]
console.log(fruteArr);
console.log(typeof(fruteArr));


let i = 0;
while(typeof fruteArr[i] === 'string'){
console.log(fruteArr[i]);
i++;
}


/*
    Task 5 : 
    გვაქვს მასივი : [12,23,43,11,9,2,121,90]
    თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
    თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'

*/


const numberArr = [12,23,43,11,9,2,121,90]

for (let i=0; i<numberArr.length; i++){
    if(numberArr[i] > 31 && numberArr[i] % 2) {
        console.log('Element is greater than provided value and is EVEN'); 
    }else{
        console.log('Element is less than provided value and is ODD');
    }
}
