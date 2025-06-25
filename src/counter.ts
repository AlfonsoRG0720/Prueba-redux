import  store  from "./app/store.ts";
import { online, offline } from "./slices/counterSlice.ts";
import { leerUsuarios, filtrarUsuario } from "./slices/loginSlice.ts";


const iniciarSesion=document.getElementById("Btn-iniciar");
let nameUser=document.getElementById("usuario");
const btnCerrar=document.getElementById("Btn-cerrar");
const btnIniciar=document.getElementById("Btn-iniciar");



export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}


export function homeSesion() {
  
  
  
  iniciarSesion!.addEventListener("click",(event:Event)=>{
    event.preventDefault();
    filtrar();
    //iniciar();
    console.log((store.getState().sesion).value);
  })

  btnCerrar!.addEventListener("click",(event:Event)=>{
    event.preventDefault();
    cerrar();
    console.log((store.getState().sesion).value);
  })
}

function iniciar() {
  const usuario = (document.getElementById("usuarioInput") as HTMLInputElement).value;
  nameUser!.innerText=usuario.toString();
  btnCerrar!.classList.remove("hidden");
  btnIniciar!.classList.add("hidden");
  store.dispatch(online());
}

function cerrar() {
  nameUser!.innerText="";
  btnCerrar!.classList.add("hidden");
  btnIniciar!.classList.remove("hidden");
  store.dispatch(offline());
}

function filtrar() {
  const ID = Number((document.getElementById("usuarioInput") as HTMLInputElement).value);
  store.dispatch(filtrarUsuario(ID))
  const usuarios = store.getState().usuarios;
  const nombre = usuarios.length > 0 ? usuarios[0].nombre : "ups no estás creado";
  console.log(nombre);
  nameUser!.innerText=nombre;
}