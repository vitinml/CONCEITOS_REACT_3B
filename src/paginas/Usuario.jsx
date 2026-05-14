import { useEffect, useState } from "react"

export default function Usuario () {
   const [contador, setContador] = useState(0)
   const [usuarios, setUsuarios] = useState([])

   useEffect(() => {
         document.title = 'contagem ' + contador
         const buscarUsuarios = async () => {
            const resposta = await fetch('http://localhost:3000/usuarios')
            const data = await resposta.json()
            setUsuarios(data)
            console.log(data);
         }
         buscarUsuarios()

   }, [contador])

   return (
      <div>
         <h1>usuario</h1>
         <h1>{contador}</h1>

         <button onClick={() => {setContador(contador + 1)}}>somar</button>

         <ul>
         {usuarios.map( (usuario) => (
            <li key={usuario.id}>
                  <b>{usuario.nome}</b>
                  status: { usuario.ativo ? 'Ativo' : 'Desativo' }
            </li>
         ))}
         </ul>
      </div>
   ) 
}