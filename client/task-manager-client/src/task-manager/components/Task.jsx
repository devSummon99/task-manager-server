//libs

//components

//styles
import './task.css';

function Task() {
  return (
    <>
      <div className="header">
   <div className="title">
    <i className="fas fa-tasks">
    </i>
    Task
   </div>
   <div className="user">
    <img alt="User profile picture" src="https://placehold.co/40x40"/>
    <i className="fas fa-bars menu">
    </i>
   </div>
  </div>
  <div className="content">
   <div className="sidebar">
    <div className="icon-section">
     <div className="purple">
      <i className="fas fa-cogs">
      </i>
     </div>
     <div className="green">
      <i className="fas fa-check">
      </i>
     </div>
     <div className="red">
      <i className="fas fa-trash">
      </i>
     </div>
    </div>
   </div>
   <div className="main-content">
    <h2>
     Mis tareas
    </h2>
    <p>
     Tareas para mi
    </p>
    <div className="table-container">
     <div className="actions">
      <button>
       <i className="fas fa-bars">
       </i>
      </button>
      <button>
       <i className="fas fa-filter">
       </i>
      </button>
      <button>
       <i className="fas fa-sync">
       </i>
      </button>
      <button>
       <i className="fas fa-cog">
       </i>
      </button>
      <button>
       <i className="fas fa-th">
       </i>
      </button>
     </div>
     <table>
      <thead>
       <tr>
        <th>
         ID
        </th>
        <th>
         Fecha de inicio
        </th>
        <th>
         Nombre
        </th>
        <th>
         Descripción
        </th>
        <th>
         Asunto
        </th>
        <th>
         Respuesta rápida
        </th>
        <th>
         Estado
        </th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>
         11
        </td>
        <td>
         11/01/2023 10:56
        </td>
        <td>
         Primera aprobación
        </td>
        <td>
        </td>
        <td>
         Solicitud de compras de José Patiño - Monto total: USD 149.00
        </td>
        <td>
         <select>
          <option>
           Elige una respuesta
          </option>
         </select>
        </td>
        <td>
         <span className="status normal">
          Normal
         </span>
        </td>
       </tr>
       <tr>
        <td>
         11
        </td>
        <td>
         11/01/2023 10:56
        </td>
        <td>
         Primera aprobación
        </td>
        <td>
        </td>
        <td>
         Solicitud de compras de José Patiño - Monto total: USD 149.00
        </td>
        <td>
         <select>
          <option>
           Elige una respuesta
          </option>
         </select>
        </td>
        <td>
         <span className="status normal">
          Normal
         </span>
        </td>
       </tr>
       <tr>
        <td>
         11
        </td>
        <td>
         11/01/2023 10:56
        </td>
        <td>
         Primera aprobación
        </td>
        <td>
        </td>
        <td>
         Solicitud de compras de José Patiño - Monto total: USD 149.00
        </td>
        <td>
         <select>
          <option>
           Elige una respuesta
          </option>
         </select>
        </td>
        <td>
         <span className="status normal">
          Normal
         </span>
        </td>
       </tr>
       <tr>
        <td>
         11
        </td>
        <td>
         11/01/2023 10:56
        </td>
        <td>
         Primera aprobación
        </td>
        <td>
        </td>
        <td>
         Solicitud de compras de José Patiño - Monto total: USD 149.00
        </td>
        <td>
         <select>
          <option>
           Elige una respuesta
          </option>
         </select>
        </td>
        <td>
         <span className="status normal">
          Normal
         </span>
        </td>
       </tr>
       <tr>
        <td>
         11
        </td>
        <td>
         11/01/2023 10:56
        </td>
        <td>
         Primera aprobación
        </td>
        <td>
        </td>
        <td>
         Solicitud de compras de José Patiño - Monto total: USD 149.00
        </td>
        <td>
         <select>
          <option>
           Elige una respuesta
          </option>
         </select>
        </td>
        <td>
         <span className="status normal">
          Normal
         </span>
        </td>
       </tr>
       <tr>
        <td>
         11
        </td>
        <td>
         11/01/2023 10:56
        </td>
        <td>
         Primera aprobación
        </td>
        <td>
        </td>
        <td>
         Solicitud de compras de José Patiño - Monto total: USD 149.00
        </td>
        <td>
         <select>
          <option>
           Elige una respuesta
          </option>
         </select>
        </td>
        <td>
         <span className="status normal">
          Normal
         </span>
        </td>
       </tr>
       <tr>
        <td>
         11
        </td>
        <td>
         11/01/2023 10:56
        </td>
        <td>
         Primera aprobación
        </td>
        <td>
        </td>
        <td>
         Solicitud de compras de José Patiño - Monto total: USD 149.00
        </td>
        <td>
         <select>
          <option>
           Elige una respuesta
          </option>
         </select>
        </td>
        <td>
         <span className="status normal">
          Normal
         </span>
        </td>
       </tr>
       <tr>
        <td>
         10
        </td>
        <td>
         11/01/2023 10:56
        </td>
        <td>
         Primera aprobación
        </td>
        <td>
        </td>
        <td>
         Solicitud de compras de José Patiño - Monto total: USD 149.00
        </td>
        <td>
         <select>
          <option>
           Elige una respuesta
          </option>
         </select>
        </td>
        <td>
         <span className="status normal">
          Normal
         </span>
        </td>
       </tr>
       <tr>
        <td>
         11
        </td>
        <td>
         11/01/2023 10:56
        </td>
        <td>
         Primera aprobación
        </td>
        <td>
        </td>
        <td>
         Solicitud de compras de José Patiño - Monto total: USD 149.00
        </td>
        <td>
         <select>
          <option>
           Elige una respuesta
          </option>
         </select>
        </td>
        <td>
         <span className="status normal">
          Normal
         </span>
        </td>
       </tr>
       <tr>
        <td>
         11
        </td>
        <td>
         11/01/2023 10:56
        </td>
        <td>
         Primera aprobación
        </td>
        <td>
        </td>
        <td>
         Solicitud de compras de José Patiño - Monto total: USD 149.00
        </td>
        <td>
         <select>
          <option>
           Elige una respuesta
          </option>
         </select>
        </td>
        <td>
         <span className="status finalizado">
          Finalizado
         </span>
        </td>
       </tr>
      </tbody>
     </table>
     <div className="pagination">
      <button>
       «
      </button>
      <button className="active">
       1
      </button>
      <button>
       2
      </button>
      <button>
       »
      </button>
     </div>
    </div>
   </div>
   <div className="sidebar-right">
    <div className="chart">
     <img alt="Pie chart showing task distribution" src="https://placehold.co/200x200"/>
    </div>
    <div className="status">
     <div>
      <div className="completed">
      </div>
      <span>
       Completadas
      </span>
     </div>
     <div>
      <div className="in-progress">
      </div>
      <span>
       En proceso
      </span>
     </div>
     <div>
      <div className="deleted">
      </div>
      <span>
       Eliminadas
      </span>
     </div>
    </div>
    <div className="buttons">
     <button className="continue">
      continue
     </button>
     <button className="delete">
      Delete
     </button>
    </div>
   </div>
  </div>
    </>
  )
}

export default Task;