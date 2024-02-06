export class Tag{

  static readonly ANGULAR=new Tag('Angular','red');
  static readonly TYPESCRIPT=new Tag('TypeScript','darkred');
  static readonly CSS=new Tag('CSS','skyblue');
  static readonly BOOTSTRAP=new Tag('Bootstrap','green');
  static readonly JAVA=new Tag('Java','orange');
  static readonly NODEJS=new Tag('Node.JS','brown');
  static readonly HTML=new Tag('HTML','purple');
  static readonly MYSQL=new Tag('Mysql','gray');
  static readonly REACT=new Tag('React','blue');
  static readonly Tailwind=new Tag('TAILWIND','yellow');
  static readonly RESTAPI=new Tag('RestApi','deep russet');
  static readonly SPRINGBOOT=new Tag('SpringBoot','burgundy');
  static readonly JDBC=new Tag('JDBC','deep green');



  



  private constructor(private readonly key:string,public readonly color:string){

  }
  toString(){
    return this.key;
  }
}
