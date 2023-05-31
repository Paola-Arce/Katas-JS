let nombre = "Paola";
let nombre1 = "Roberto";
let nombre2 = ["Camila", "Leonor", "Sofía", "María", "Elena", "Pablo", "Sergio", "Alex", "Lucas", "Juan"];
let numero = 4;
let numero1 = 6;
let numero2 = 12;
let numero3 = -26;
let numero4 = [2, -34, 24, 76, -9, 67, 32, -78, 4, 32];




// 1 Muestre un "¡Hola Mundo!"
console.log("¡Hola Mundo!");

// 10 Lea tu nombre por consola y devuela un "¡Hola tu nombre!"
console.log("¡Hola"+ " " + nombre +"!");

// 11 Lea un número en consola y devuelva el doble
console.log(numero * 2);
console.log(2 * 2);

// 100 Lea dos números en consola y devuelva su suma
console.log(numero + numero1);
console.log(6 + 4);

// 101 Lea un número en consola y devuelva la mitad
console.log(numero1 / 2);
console.log(15 / 2);

// 110 Lea dos números en consola y devuelva el mayor
console.log(Math.max(numero, numero1));

// 111 Lea tres números en consola y devuelva el mayor
console.log(Math.max(numero, numero1, numero2));

// 1000 Lea dos números por consola e indique si son iguales.
console.log(numero == numero2);

// 1001 Lea dos nombres por consola e indique si son iguales.
console.log(nombre == nombre1);

// 1010 Lea dos numeros por consola y que devuelva "verdadero" si los dos son positivos o los dos son negativos. En caso contrario, que devuelva "falso".
if((numero1<0 && numero2<0) || (numero1>0 && numero2>0)){
    console.log("verdadero");
}else{
    console.log("falso");
}

// 1011 Lea dos números por consolsa y devuelva "Verdadero" si uno es negativo y el otro es positivo. En caso contrario, que devuelva "falso".
if((numero<0 && numero3>0) || (numero>0 && numero3<0)){
    console.log("verdadero");
}else{
    console.log("falso");
}

// 1100 Lea 10 número por consola y devuelva el mayor
console.log(Math.max(23, 43, 9, 54,-3, 12, 89, 76, -34, -2));

// 1101 Lea tu nombre y devuelva "¡Hola tuNombre!" Tu nombre tiene n caracteres". conde n sea la cantiadad de caracteres de tuNombre.
console.log("¡Hola "+ nombre + "!", "mi nombre tiene", nombre.length, "caracteres")

// 1110 Lea 10 nombres y los devuelva ordanados alfabéticamente    
console.log(nombre2.sort());

// 1111 Lea 10 números en consola y devuelva los negativos.
let negNum = numero4.filter(numero => numero < 0);
document.write(negNum)

// 10000 Lea una cantidad arbitraria de nombres y devuelva cuantos son.
console.log( nombre2.length )

// 10001 Lea una cantidad arbitraria de nombres y devuelva la suma de todos sus carácteres
let contarNom = nombre2.join() //aqui cramos una variable y después la llamamos
console.log(contarNom.length)