// 1. Obtener parámetro ?id= de la URL
const params = new URLSearchParams(window.location.search);
const ticketId = params.get('id'); // por ejemplo: TS-HW-0238

// 2. Definir los datos de cada ticket
const tickets = {
  'TS-HW-0238': {
    encabezado: '🔧CASO 1 — El equipo no enciende (Hardware)',
    ticket: 'TS-HW-0238',
    fecha: '18 de septiembre de 2025',
    hora: '09:15 a.m.',
    estado: 'Apertura',
    prioridad: 'Alta',
    tipo: 'Hardware',
    fuente: 'Llamada telefónica, correo electrónico y Web-Chat',
    nombre: 'Juan Pérez',
    telefono: '300 456 7890',
    correo: 'juan.perez@techsolutions.com',
    descripcion: `En la fecha y hora indicadas se recibe un ticket de soporte por parte de Juan Pérez, Director de Desarrollo de Software de la empresa, quien se encuentra ubicado en el Piso 2, Oficina 204. El usuario reporta que su PC de escritorio corporativo no enciende en absoluto. Al intentar prender el equipo, este no muestra luces, sonidos ni ningún otro indicio de funcionamiento.

El reporte inicial del usuario señala textualmente: “Mi computador no enciende. No hay luces ni ruido. Lo necesito para una reunión importante.” Esta situación genera un bloqueo total de su puesto de trabajo, impidiéndole acceder a herramientas críticas como entornos de desarrollo, correo corporativo y documentación necesaria para sus funciones.

Debido a que el incidente afecta directamente a un rol estratégico dentro de la organización y compromete una actividad relevante del negocio, el caso se clasifica con nivel de prioridad alta y se mantiene en estado de apertura mientras se realiza la atención correspondiente.

Durante la atención del caso se contempla la recolección completa de información proporcionada por el usuario, la verificación de las condiciones del entorno eléctrico y del equipo, así como la revisión general del estado del computador. Para el análisis del incidente es necesario considerar conceptos técnicos fundamentales como la fuente de poder (PSU), responsable de convertir la energía eléctrica para alimentar los componentes; la motherboard, que actúa como la placa principal del sistema; el proceso POST, encargado del autodiagnóstico al encender el equipo; la memoria RAM, indispensable para el arranque; la descarga electrostática (ESD), que puede dañar componentes sensibles; y el método de descarte, utilizado para aislar posibles causas del fallo.

El caso permanece documentado bajo un único flujo de atención, registrando todos los síntomas observados, las verificaciones realizadas y los hallazgos relevantes, con el fin de garantizar trazabilidad, correcta gestión del incidente y continuidad del servicio.`
  },

  'TS-PRN-0524': {
    encabezado: '🔧CASO 2 — No puede imprimir (Periféricos / Redes)',
    ticket: 'TS-PRN-0524',
    fecha: '5 de noviembre de 2025',
    hora: '10:42 a.m.',
    estado: 'Apertura',
    prioridad: 'Alta',
    tipo: 'Periféricos - Redes',
    fuente: 'Llamada telefónica, correo electrónico y Web-Chat',
    nombre: 'María Fernanda Gómez',
    telefono: '320 615 8934',
    correo: 'maria.gomez@techsolutions.com',
    descripcion: `En la fecha y hora indicadas se recibe un ticket de soporte proveniente del Área de Contabilidad, en el cual se reporta que no es posible realizar impresiones utilizando la impresora de red identificada como HR-FLOOR2, configurada con la dirección IP 10.1.2.35. El incidente ocurre durante el proceso de cierre financiero, una actividad crítica para la organización que requiere la impresión constante de documentos contables, reportes de facturación y soportes administrativos, razón por la cual el caso se clasifica con nivel de prioridad alta y permanece en estado de apertura.
...` // puedes pegar el texto completo aquí
  },

  'TS-NET-0631': {
    encabezado: '🔧CASO 3 — Red lenta o sin internet',
    ticket: 'TS-NET-0631',
    fecha: '12 de noviembre de 2025',
    hora: '08:57 a.m.',
    estado: 'Apertura',
    prioridad: 'Alta',
    tipo: 'Redes',
    fuente: 'Llamada telefónica, correo electrónico y Web-Chat',
    nombre: 'Andrés Morales',
    telefono: '311 904 6721',
    correo: 'andres.morales@techsolutions.com',
    descripcion: `En la fecha y hora registradas se recibe un ticket de soporte relacionado con problemas de conectividad de red, en el cual el usuario reporta que la conexión se encuentra lenta o completamente sin acceso a internet, afectando el normal desarrollo de sus actividades laborales.
...`
  },

  'TS-SW-0789': {
    encabezado: '🔧CASO 4 — Pantallazo Azul (BSOD)',
    ticket: 'TS-SW-0789',
    fecha: '3 de diciembre de 2025',
    hora: '11:26 a.m.',
    estado: 'Apertura',
    prioridad: 'Alta',
    tipo: 'Software',
    fuente: 'Llamada telefónica, correo electrónico y Web-Chat',
    nombre: 'Camila Ríos',
    telefono: '316 550 9028',
    correo: 'camila.rios@techsolutions.com',
    descripcion: `En la fecha y hora registradas se recibe un ticket de soporte en el que la usuaria reporta que su equipo presenta un pantallazo azul (BSOD) de forma recurrente, provocando reinicios inesperados y pérdida de continuidad en el trabajo.
...`
  },

  'TS-SW-0912': {
    encabezado: '🔧CASO 5 — Usuario molesto',
    ticket: 'TS-SW-0912',
    fecha: '10 de diciembre de 2025',
    hora: '04:08 p.m.',
    estado: 'Apertura',
    prioridad: 'Alta',
    tipo: 'Software',
    fuente: 'Llamada telefónica, correo electrónico y Web-Chat',
    nombre: 'Ricardo Salazar',
    telefono: '312 778 3406',
    correo: 'ricardo.salazar@techsolutions.com',
    descripcion: `En la fecha y hora registradas se recibe un ticket de soporte relacionado con un incidente de software reportado por el usuario Ricardo Salazar, quien se comunica con la mesa de ayuda manifestando un alto nivel de inconformidad y molestia debido a que el problema afecta su trabajo y considera que no ha recibido una solución oportuna.
...`
  }
};

// 3. Pintar la plantilla completa del ticket (formulario + texto)
const contenedor = document.getElementById('detalle-ticket');

if (!ticketId || !tickets[ticketId]) {
  contenedor.innerHTML = `<p>No se encontró información para el ticket solicitado.</p>`;
} else {
  const t = tickets[ticketId];

  contenedor.innerHTML = `
    <div class="bloque">
      <h2>${t.encabezado}</h2>
      <p>${t.descripcion.replace(/\n/g, '<br>')}</p>
    </div>

    <div class="bloque">
      <h2>Datos del ticket</h2>
      <p class="campo"><strong>Ticket:</strong> ${t.ticket}</p>
      <p class="campo"><strong>Fecha:</strong> ${t.fecha}</p>
      <p class="campo"><strong>Hora:</strong> ${t.hora}</p>
      <p class="campo"><strong>Estado:</strong> ${t.estado}</p>
      <p class="campo"><strong>Nivel de prioridad:</strong> ${t.prioridad}</p>
      <p class="campo"><strong>Tipo de emisión:</strong> ${t.tipo}</p>
      <p class="campo"><strong>Fuente del ticket:</strong> ${t.fuente}</p>

      <p class="campo"><strong>Nombre del cliente:</strong> ${t.nombre}</p>
      <p class="campo"><strong>Teléfono del cliente:</strong> ${t.telefono}</p>
      <p class="campo"><strong>Correo electrónico del cliente:</strong> ${t.correo}</p>
    </div>

    <div class="bloque">
      <h2>Gestión del ticket</h2>

      <label>Notas:
        <textarea placeholder="Notas del caso..."></textarea>
      </label>

      <label>Medidas adoptadas:
        <textarea placeholder="Acciones realizadas..."></textarea>
      </label>

      <label>Resolución:
        <textarea placeholder="Detalle de la resolución..."></textarea>
      </label>

      <label>Especialista de Soporte en TI:
        <input type="text" placeholder="Nombre del especialista">
      </label>
    </div>
  `;
}
