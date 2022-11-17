class Node{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

class ListaEnlazada {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    agregar(data){
        const newNode = new Node(data, null);
        if(!this.head){
            this.head = newNode
        }else{
            let Actual = this.head;
            while(Actual.next){
                Actual = Actual.next;
            };
            Actual.next = newNode;
        };
        this.size++;
    }

    agregarEn(data, indice){
        if(indice < 0 || indice > this.size ){
            return null
        }
        const nuevoNode = new Node(data);
        let actual = this.head;
        let anterior;
        if(indice === 0){
            nuevoNode.next = actual;
            this.head = nuevoNode;
        }else{
            for(let i = 0; i < indice; i++){
                anterior = actual
                actual = actual.next;
            };

            nuevoNode.next = actual;
            anterior.next = nuevoNode;
        }
        this.size++;
    }

    Eliminar(data){
        let actual = this.head;
        let anterior = null;

        while(actual != null){
            if(actual.data === data){
                if(!anterior){
                    this.head = actual.next;
                }else{
                    anterior.next = actual.next;
                }
                this.size--;
                return actual.data;
            };
            anterior = actual;
            actual = actual.next;
        };
        return null;
    }

    EliminarDe(indice){
        if(indice < 0 || indice > this.size){
            return null;
        }
        let actual = this.head;
        let anterior = null;

        if(indice === 0){
            this.head = actual.next;

        }else{
            for(let i = 0; i < indice; i++){
                anterior = actual
                actual = actual.next;
            };
            anterior.next = actual.next;
        };
        this.size--;
        return actual.data;
    }

    esVacio(){
        if(this.size === 0){
            return true;
        }else{
            return false;
        }
    }

    Tamano(){
        return this.size;
    }

    print(){
        if(this.size === 0){
            return null;
        }
        let actual = this.head;
        let resultado = '';
        while(actual){
            resultado += actual.data += '->';
            actual = actual.next;
        };
        resultado += 'X';
        return resultado;
    }
}

const listaenlazada = new ListaEnlazada();
/*listaenlazada.agregar(12);
listaenlazada.agregarEn(10, 1);
listaenlazada.agregar(99);
console.log(listaenlazada.EliminarDe(2));*/


document.getElementById("Lista").addEventListener("click", function(){
    document.getElementById("Opciones_lista").removeAttribute("hidden", "");
    document.getElementById("Opciones").setAttribute("hidden", "");
});

document.getElementById("Insertar_inicio").addEventListener("click", function(){
    document.getElementById("Opciones_lista").setAttribute("hidden","");
    document.getElementById("Insertar_alInicio").removeAttribute("hidden", "");
});

document.getElementById("Volver_lista").addEventListener("click", function(){
    document.getElementById("Opciones_lista").removeAttribute("hidden","");
    document.getElementById("Insertar_alInicio").setAttribute("hidden", "");
});

document.getElementById("Insertar_final").addEventListener("click", function(){
    document.getElementById("Opciones_lista").setAttribute("hidden", "");
    document.getElementById("Insertar_alFinal").removeAttribute("hidden", "");
});

document.getElementById("Volver_listaFinal").addEventListener("click", function(){
    document.getElementById("Opciones_lista").removeAttribute("hidden", "");
    document.getElementById("Insertar_alFinal").setAttribute("hidden", "");
})

document.getElementById("Agregar_lista").addEventListener("click", function(){
    var Inicio = 0;
    var Data = document.getElementById("Inicio_insertarLista").value;
    listaenlazada.agregarEn(Data, Inicio);
    alert('Se agrego el elemento: '+ Data);
    document.getElementById("Inicio_insertarLista").value = '';
    console.log(listaenlazada);
});

document.getElementById("Agregar_listaFinal").addEventListener("click", function(){
    var Tamano = listaenlazada.Tamano();
    if(Tamano === 0){
        alert('La lista está vacía, favor de agregar elementos');
        document.getElementById("Inicio_insertarListaFinal").value = '';
    }else{
        var Data = document.getElementById("Inicio_insertarListaFinal").value;
        listaenlazada.agregarEn(Data, Tamano);
        alert('Se agrego el elemento: '+ Data + 'Al final de la lista');
        document.getElementById("Inicio_insertarListaFinal").value = '';
        console.log(listaenlazada);
    }
});

document.getElementById("InsertarEverywhere").addEventListener("click", function(){
    document.getElementById("Insertar_dondeSea").removeAttribute("hidden", "");
    document.getElementById("Opciones_lista").setAttribute("hidden", "");
});

document.getElementById("Volver_listaSea").addEventListener("click", function(){
    document.getElementById("Insertar_dondeSea").setAttribute("hidden", "");
    document.getElementById("Opciones_lista").removeAttribute("hidden", "");
});

document.getElementById("Agregar_listaSea").addEventListener("click", function(){
    var Posicion = document.getElementById("Posicion").value;
    var Data = document.getElementById("Elemento_dondeSea").value;
    if(Posicion === '' || Data === ''){
        alert('Debe completar ambos campos');
    }else if(Posicion > listaenlazada.Tamano()){
        alert('La posicion deseada, no existe en la lista, el tamaño de la lista actual es de: '+ listaenlazada.Tamano());
        document.getElementById("Posicion").value = '';
        document.getElementById("Elemento_dondeSea").value = '';
    }else{
        listaenlazada.agregarEn(Data, Posicion);
        alert('Se agrego: '+ Data+' En la posición: '+ Posicion);
        document.getElementById("Posicion").value = '';
        document.getElementById("Elemento_dondeSea").value = '';
        console.log(listaenlazada);
    }
});

document.getElementById("Eliminar_listaInicio").addEventListener("click", function(){
    if(listaenlazada.Tamano() === 0){
        alert('NO hay elementos para eliminar');
    }else{
        var Inicio = 0;
        alert('El elemento: '+ listaenlazada.EliminarDe(Inicio) +' fue eliminado');
        console.log(listaenlazada);
    }
});

document.getElementById("Eliminar_listaFinal").addEventListener("click", function(){
    if(listaenlazada.esVacio() === true){
        alert('No hay elementos que eliminar');
    }else{
        var end = listaenlazada.Tamano();
        alert(listaenlazada.EliminarDe(end - 1));
        console.log(listaenlazada);
    }
});



document.getElementById("Volver_listaDondeSea").addEventListener("click", function(){
    document.getElementById("Eliminar_dondeSea").setAttribute("hidden", "");
    document.getElementById("Opciones_lista").removeAttribute("hidden", "");
});

document.getElementById("Eliminar_cualquierLista").addEventListener("click", function(){
    if(listaenlazada.esVacio() === true){
        alert('La lista esta vacía');
    }else{
        document.getElementById("valores").innerHTML = 'Valores de la lista: '+listaenlazada.print();
    document.getElementById("Eliminar_dondeSea").removeAttribute("hidden", "");
    document.getElementById("Opciones_lista").setAttribute("hidden", "");
    }
});

document.getElementById("Eliminar_listaDondeSea").addEventListener("click", function(){
    var Eliminar = document.getElementById("Posicion_eliminar").value;
    if(listaenlazada.esVacio() === true){
        alert('No hay elemento para eliminar');
    }else if(Eliminar > listaenlazada.Tamano() || Eliminar === ''){
        alert('La posición no existe en la lista');
    }else{
        alert('El elemento: '+ listaenlazada.EliminarDe(Eliminar) + ' fue eliminado');
        document.getElementById("Posicion_eliminar").value = '';
        document.getElementById("valores").innerHTML = 'Valores de la lista: '+listaenlazada.print();
        console.log(listaenlazada);
    }
});

document.getElementById("Visualizar_todoLista").addEventListener("click", function(){
    if(listaenlazada.esVacio() === true){
        alert('No hay elementos')
    }else{
        alert(listaenlazada.print());
    }
});

document.getElementById("InicioLista").addEventListener("click", function(){
    document.getElementById("Opciones_lista").setAttribute("hidden", "");
    document.getElementById("Opciones").removeAttribute("hidden", "");
});



    