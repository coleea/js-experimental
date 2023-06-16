class MyClassName {
  static myStaticField = "Hello, world!";
  
  static myStaticMethod() {
    console.log(this.myStaticField);
  }
}

MyClassName.myStaticMethod();




class Class2 {
    static myStaticField = "Hello, world!";

    constructor({name, age}) {

    }
    
    static myStaticMethod() {
      console.log(this.myStaticField);
    }
  }
  
Class2.myStaticMethod(); 
// 필드가 static이 아닌 경우 undefined를 출력함
// 즉 static함수를 사용하고 싶으면 필드도 static이고 메소드도 static이어야 함


// 메소드가 static이 아닌 경우 method is not a function 출력함
// TypeError: Class2.myStaticMethod is not a function

class PrivateTest {
    #privateStr = "Hello, world!";

    static printPrivate() {
        console.log(this.privateStr);
      }
}
  
PrivateTest.printPrivate(); // 출력 안됨



class PrivateTest2 {
    #privateStr = "i am private";
    publicStr = "i am public"

    // constructor없이도 클래스 생성 됨

    printPrivate() {
        console.log(this.#privateStr);
      }
}

const instance = new PrivateTest2()
instance.printPrivate();
console.log(instance.publicStr); 

// SyntaxError: Private field '#privateStr' must be declared in an enclosing class
// console.log(instance.#privateStr); 

console.log("instance instanceof PrivateTest2");
console.log(instance instanceof PrivateTest2);