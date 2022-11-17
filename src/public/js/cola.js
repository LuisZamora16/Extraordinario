

class Cola{
    constructor(){
        this.items = {};
        this.front = 0;
        this.end = 0;

    };

    enqueue(data){
        this.items[this.end] = data;
        this.end++;
    }

    dequeue(){
        if(this.front === this.end){
            return null;
        };
        delete this.items[this.front];
        const data = this.items[this.front];
        this.front++;
        return data;
    };

    getSize(){
        return this.end - this.front;
    };

    isEmpty(){
        if(this.getSize() === 0){
            return true;
        }else{
            return false;
        }
    };

    peek(){
        if(this.getSize() === 0){
            return null;
        }
        return this.items[this.front];
    };

    print(){
        if(this.getSize() === 0){
            return null;
        }
        let resultado = '';
        for(var i = this.front; i < this.end; i++){
            resultado += this.items[i] + " ";
        }
        return resultado;
    }

}

//DECLARO UNA VARIABLE EN LA QUE LLAMO A LA CLASE COLA QUE CONTENDRA TODOS LOS METODOS NECESARIOS
const queue = new Cola();



document.getElementById("Cola").addEventListener("click", function(){
    document.getElementById("Opciones").setAttribute("hidden", "");
    document.getElementById("Opciones_cola").removeAttribute("hidden", "");
});

document.getElementById("Colocar").addEventListener("click", function(){
    document.getElementById("enqueue").removeAttribute("hidden", "");
    document.getElementById("Opciones_cola").setAttribute("hidden", "");
});

document.getElementById("Cancelar_enqueue").addEventListener("click", function(){
    document.getElementById("enqueue").setAttribute("hidden", "");
    document.getElementById("Opciones_cola").removeAttribute("hidden", "");
});

document.getElementById("Agregar_enqueue").addEventListener("click", function(){
    var Data = document.getElementById("Data").value;
    if(Data === ''){
        alert('No se admiten campos vacíos');
    }else{
        queue.enqueue(Data);
        alert('Se agrego el valor de: '+ Data)
        document.getElementById("Data").value = '';
        console.log(queue);
    }
});

document.getElementById("Eliminar_cola").addEventListener("click", function(){
    if(queue.getSize() === 0){
        alert('No hay elementos para eliminar, favor de agregar algunos');
    }else{
        queue.dequeue();
        alert('Se ha eliminado un elemento');
        console.log(queue);
    }
    
});

document.getElementById("Visualizar_frontal").addEventListener("click", function(){
    alert('El elemento frontal es; '+ queue.peek());
});

document.getElementById("Visualizar_elementos").addEventListener("click", function(){
    alert('Estos son los elementos que se han agregado; '+ queue.print());
});

document.getElementById("InicioCola").addEventListener("click", function(){
    document.getElementById("Opciones_cola").setAttribute("hidden", "");
    document.getElementById("Opciones").removeAttribute("hidden", "");
});