// se crea un arreglo vacio y se guarda en una variable
var numbers=[];
 function addNumber(num){
//   se utiliza el metodo push para llenar el arreglo vacio que anteriormente se creo   
    numbers.push(num);
    //se imprime los numeros que contiene el arreglo numbers
    console.log(num)    
 }  
//  aca se esta llamando la funcion addNumber se pueden colocar cualquier numero y llamar mas veces si se desea
 addNumber(3)
 addNumber(3)
 addNumber(4)
 addNumber(6)
 addNumber(7)
 addNumber(4)
//se implementa codigo para la funcion de numeros no repetidos
 function getFirstNonDuplicated(arr) { 
    // se crea un objeto vacio  donde se va almacenar cuantas veces esta el numero o item dentro dl arreglo
    let object = {}
    //se crea un arreglo vacio para guardar los numeros que no estan repetidos
    const arr2 = []
    //se recorre el arreglo que entra como parametro y por medio de un operador ternario preguntamos
    //si el llave contiene no esta definido sumele 1 y si no es igual a 1
    arr.forEach(function(item){
         object[item] = object[item]!== undefined ? object[item]+=1 : object[item]=1
    })
    //se recorre de nuevo el arreglo y pregunta si el objeto tiene una llave que es igual a 1 guardelo o empujelo en el arreeglo 2
    arr.forEach(function (item){
        if(object[item]==1){
           arr2.push(item)
        }                    
    })
    // se retorna el 1 numero o la 1 pocision del arreglo que es el 1 numero no repetido
    return arr2[0]
  }
    //se guerda el llamado de la funcion en una variable para poder imprimirla y mostrarla
  const result = getFirstNonDuplicated(numbers)  
  console.log("result is :",result)