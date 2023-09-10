


function DemoFunction() {
    let dc = 10;
    this.tester = 20;
    this.method1 = function() {
        console.log("tester1: ", this.tester);
    }
    this.method2 = function() {
        console.log("tester2: ", dc);
    }
}
