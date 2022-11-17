class Pila {
    constructor(){
        this.items = {};
        this.top = 0;
    }

    push(data){
        this.top++;
        this.items[this.top] = data;
    };

    pop(){
        let eliminar_dato;
        if(this.top != 0){
            eliminar_dato = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return eliminar_dato;
        }
    };

    getSize(){
        return this.top;
    }

    isEmpty(){
        if(!this.getSize()){
            return true;
        }else{
            return false;
        }

    };

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.top];
    };

    print(){
        let resultado = '';
        for(let i = this.top; i > 0; i--){
            resultado += this.items[i]+ " ";
        }
        return resultado;
    }
};

var pila = new Pila();


document.getElementById("Pilas").addEventListener("click", function(){
    document.getElementById("Opciones_pila").removeAttribute("hidden", "");
    document.getElementById("Opciones").setAttribute("hidden", "");
    
});

document.getElementById("Colocar_pila").addEventListener("click", function(){
    document.getElementById("push").removeAttribute("hidden", "");
    document.getElementById("Opciones_pila").setAttribute("hidden", "");
});

document.getElementById("Agregar_push").addEventListener("click", function(){
    var Data = document.getElementById("Data_push").value;
    if(Data === ''){
        alert('No se aceptan campos vacíos');
    }else{
        pila.push(Data);
        alert('Se agrego el elemento; '+ Data);
        document.getElementById("Data_push").value = ''
        console.log(pila);
    }
});

document.getElementById("Cancelar_pila").addEventListener("click", function(){
    document.getElementById("push").setAttribute("hidden", "");
    document.getElementById("Opciones_pila").removeAttribute("hidden", "");
});

document.getElementById("Eliminar_elementoPila").addEventListener("click", function(){
    if(pila.isEmpty() === true){
        alert('No hay elementos para eliminar, favor de agregar algunos');
    }else{
        alert('Se ha eliminado el elemento: '+ pila.pop())
        console.log(pila);
    }
});

document.getElementById("Visualizar").addEventListener("click", function(){
    alert('El elemento tope es: '+ pila.peek());
});

document.getElementById("Visualizar_todo").addEventListener("click", function(){
    if(pila.isEmpty() === true){
        alert('No hay elementos agregados, favor de agregar algunos');
    }else{
        alert('Los elementos agregados son: '+ pila.print());
    }
});


document.getElementById("InicioPila").addEventListener("click", function(){
    document.getElementById("Opciones_pila").setAttribute("hidden", "");
    document.getElementById("Opciones").removeAttribute("hidden", "");
});

