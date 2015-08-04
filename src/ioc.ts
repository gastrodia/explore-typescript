
var appClassList:Array<any> = [];

function Application(){
  return function(target){
    appClassList.push(target);
  }
}

function Name(name){
  return function(target){
    target._name = name;
  }
}

interface IApplication{
  run();
}

function boot(){

  for(var i in appClassList){
    var appClass:any =<Function> (appClassList[i]);
    var app = new appClass();
    app.name = appClass._name;
    app.run();
  }
}

@Application()
@Name('typescript')
class App implements IApplication{
  name:string;
  constructor(){

  }

  static getInstance(){
    return new App();
  }

  run(){
    this.sayHello();
  }

  sayHello(){
    console.log('hi, ',this.name);
  }
}

boot();
