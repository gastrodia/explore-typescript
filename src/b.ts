module b{
  function myAnn1(){
    return function(target){

    }
  }

  function log(){
    return function(targe:any,key:string,value:any){
      return {
        value:(...args: any[]) => {

            var a = args.map(a => JSON.stringify(a)).join();
            var result = value.value.apply(this, args);
            var r = JSON.stringify(result);

            console.log(`Call: ${key}(${a}) => ${r}`);

            return result;
        }
      };
    }
  }

  @myAnn1()
  class A{
    constructor(){

    }

    @log()
    foo(n: number) {
        return n * 2;
    }
  }

  var a = new A();
  a.foo(12);
}
