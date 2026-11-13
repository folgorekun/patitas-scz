/* =========================================================
   PATITAS SCZ — LÓGICA PRINCIPAL CON MODERACIÓN Y PIN
   ========================================================= */

   const STORAGE_KEY = 'patitas_scz_data_v1';
   const MOD_SESSION_KEY = 'patitas_scz_mod_active';
   const CLAVE_MODERADOR = '2026';
   
   const DATOS_RESPALDO = {
     reportes: [
       {
         id: 201,
         titulo: "Cachorro mestizo rescatado necesita hogar temporal urgente",
         categoria: "rescate",
         categoriaLabel: "Rescate y Urgencia",
         zona: "Av. Banzer y 4to Anillo — Zona Norte",
         contacto: "70012345 (Refugio Patitas)",
         pin: "1234",
         verificado: true,
         aprobado: true,
         urgencia: "critica",
         estado: "En atención",
         notaCierre: "",
         fecha: "Hace 2 horas",
         descripcion: "Cachorro de aproximadamente 3 meses rescatado con deshidratación leve. Ya recibió primera revisión veterinaria y necesita un hogar temporal por 15 días mientras completa su recuperación.",
         imagen: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
         apoyos: 42
       },
       {
         id: 202,
         titulo: "Canela (2 años) busca familia responsable en adopción",
         categoria: "adopcion",
         categoriaLabel: "En Adopción",
         zona: "Barrio Equipetrol — Calle 6",
         contacto: "75098765 (Voluntaria Sofía)",
         pin: "1234",
         verificado: false,
         aprobado: true,
         urgencia: "alta",
         estado: "Buscando hogar",
         notaCierre: "",
         fecha: "Hace 5 horas",
         descripcion: "Perrita mediana, muy dócil, esterilizada y con vacunas al día. Convive bien con niños y otros perros. Se entrega con seguimiento responsable.",
         imagen: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
         apoyos: 29
       },
       {
         id: 203,
         titulo: "SE BUSCA: Gatito atigrado perdido cerca del Parque Urbano",
         categoria: "perdidos",
         categoriaLabel: "Mascota Perdida",
         zona: "Av. Argentina y 1er Anillo — Centro",
         contacto: "76044321 (Familia Rojas)",
         pin: "1234",
         verificado: false,
         aprobado: true,
         urgencia: "critica",
         estado: "Se busca",
         notaCierre: "",
         fecha: "Ayer",
         descripcion: "Responde al nombre de 'Milo'. Llevaba collar azul con cascabel al momento de extraviarse por la noche. Cualquier dato o foto avisar de inmediato.",
         imagen: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
         apoyos: 64
       },
       {
         id: 204,
         titulo: "Refugio Esperanza requiere alimento balanceado y mantas",
         categoria: "rescate",
         categoriaLabel: "Rescate y Urgencia",
         zona: "Zona Plan 3 Mil — Av. Principal",
         contacto: "71055678 (Albergue Esperanza)",
         pin: "1234",
         verificado: true,
         aprobado: true,
         urgencia: "alta",
         estado: "En atención",
         notaCierre: "",
         fecha: "Hace 1 día",
         descripcion: "Actualmente albergamos 38 perros rescatados de calle. Necesitamos apoyo con croquetas para adultos y cachorros, periódicos y cobijas limpias.",
         imagen: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
         apoyos: 53
       },
       {
         id: 205,
         titulo: "Bruno ya fue adoptado tras su rehabilitación",
         categoria: "adopcion",
         categoriaLabel: "En Adopción",
         zona: "Carretera al Norte — Km 9",
         contacto: "72100998 (Red Patitas SCZ)",
         pin: "1234",
         verificado: true,
         aprobado: true,
         urgencia: "moderada",
         estado: "Adoptado",
         notaCierre: "Adoptado por la familia Méndez. Ya cuenta con su patio seguro y controles veterinarios al día.",
         fecha: "Hace 2 días",
         descripcion: "Gracias a la difusión ciudadana y el apoyo de la clínica aliada, Bruno completó su tratamiento dermatológico y ya vive con su nueva familia.",
         imagen: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80",
         apoyos: 87
       },
       {
         id: 206,
         titulo: "Dos gatitos rescatados listos para adopción conjunta o separada",
         categoria: "adopcion",
         categoriaLabel: "En Adopción",
         zona: "Av. Santos Dumont — Zona Sur",
         contacto: "72133445 (Hogar Temporal Luz)",
         pin: "1234",
         verificado: false,
         aprobado: true,
         urgencia: "moderada",
         estado: "Buscando hogar",
         notaCierre: "",
         fecha: "Hace 3 días",
         descripcion: "Tienen 2 meses, ya usan arenero y están desparasitados. Buscan hogares seguros con ventanas protegidas en Santa Cruz.",
         imagen: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80",
         apoyos: 36
       }
     ],
     guias: [
       {
         id: 1,
         tipo: "refugios",
         badge: "Refugio y Acopio",
         verificado: true,
         titulo: "Albergue Solidario y Punto de Donación Norte",
         lugar: "Av. Beni y 5to Anillo — Zona Norte",
         horario: "Lunes a Sábado: 08:30 a 17:30",
         detalle: "Recepción directa de alimento balanceado, medicamentos veterinarios, correas y mantas. Visitas coordinadas para adopción."
       },
       {
         id: 2,
         tipo: "campanas",
         badge: "Campaña Veterinaria",
         verificado: true,
         titulo: "Esterilización a Bajo Costo y Desparasitación",
         lugar: "Clínica Veterinaria Aliada — Av. Piraí",
         horario: "Miércoles y Sábados: 08:00 a 14:00",
         detalle: "Cupos solidarios para perros y gatos rescatados o de familias de escasos recursos. Incluye medicación postoperatoria."
       },
       {
         id: 3,
         tipo: "refugios",
         badge: "Red de Hogares",
         verificado: true,
         titulo: "Centro de Tránsito Patitas del Sur",
         lugar: "Av. Santos Dumont — Zona Sur",
         horario: "Todos los días: 09:00 a 18:00",
         detalle: "Coordinación de hogares temporales de emergencia para animales atropellados o abandonados mientras encuentran familia."
       },
       {
         id: 4,
         tipo: "campanas",
         badge: "Vacunación Gratuita",
         verificado: true,
         titulo: "Jornada Antirrábica y Control Preventivo",
         lugar: "Parque Urbano Central — Explanada Oeste",
         horario: "Domingos: 08:30 a 13:00",
         detalle: "Aplicación gratuita de vacuna antirrábica, entrega de cartilla sanitaria y orientación sobre tenencia responsable."
       },
       {
         id: 5,
         tipo: "refugios",
         badge: "Acopio Solidario",
         verificado: false,
         titulo: "Punto Vecinal Mascotero — Zona Equipetrol",
         lugar: "Av. San Martín — Barrio Equipetrol",
         horario: "Lunes a Viernes: 09:00 a 19:00",
         detalle: "Contenedor solidario para dejar bolsas de croquetas selladas, platos, camas y transportadoras en buen estado."
       },
       {
         id: 6,
         tipo: "campanas",
         badge: "Atención de Emergencia",
         verificado: true,
         titulo: "Red de Veterinarios Voluntarios 24/7",
         lugar: "Cobertura en toda Santa Cruz (Ciudad y alrededores)",
         horario: "Atención de urgencias previa coordinación",
         detalle: "Tarifa social para rescates viales comprobados reportados a través de la comunidad Patitas SCZ."
       }
     ],
     chatbot: {
       bienvenida: "¡Hola! Soy el Asistente de Patitas SCZ 🐾. ¿Cómo quieres ayudar hoy?",
       opciones: [
         {
           id: "adoptar",
           pregunta: "¿Cómo puedo adoptar o dar hogar temporal?",
           respuesta: "Ingresa a 'Casos y Mascotas', abre la ficha del animalito y pulsa 'Contactar por WhatsApp' para hablar directo con el rescatista.",
           accionTexto: "Ver mascotas en adopción",
           accionDestino: "casos.html"
         },
         {
           id: "verificado",
           pregunta: "¿Cómo obtiene un refugio o clínica el sello verificado?",
           respuesta: "Contáctanos en el formulario de la portada. Tras validar la institución, el equipo moderador activa su sello ✔ Aliado Verificado en la red.",
           accionTexto: "Ir a formulario de contacto",
           accionDestino: "index.html#contacto"
         },
         {
           id: "pin",
           pregunta: "¿Para qué sirve el PIN de 4 dígitos al publicar?",
           respuesta: "Protege tu publicación para que solo tú (o un moderador) puedas editar los datos, eliminarla o marcarla como Sanado, Adoptado o Encontrado.",
           accionTexto: "Publicar caso ahora",
           accionDestino: "publicar.html"
         },
         {
           id: "campanas",
           pregunta: "¿Dónde hay campañas de esterilización o refugios?",
           respuesta: "Revisa nuestro directorio con sello verificado para jornadas de esterilización solidaria, vacunas y acopio de alimento en toda Santa Cruz.",
           accionTexto: "Ver refugios y campañas",
           accionDestino: "refugios.html"
         }
       ]
     }
   };
   
   const FALLBACK_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%23ccfbf1'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='28' font-weight='bold' fill='%230f766e'%3E🐾 Patitas SCZ — Foto de Plantilla%3C/text%3E%3C/svg%3E";
   
   const ESTADOS_FINALES = {
     rescate: 'Sanado',
     adopcion: 'Adoptado',
     perdidos: 'Encontrado'
   };
   
   function esCasoFinalizado(estado) {
     return ['Sanado', 'Adoptado', 'Encontrado', 'Resuelto'].indexOf(estado) !== -1;
   }
   
   let appData = null;
   let reportesData = [];
   let filtroCategoriaActual = 'todos';
   let filtroUrgenciaActual = 'todas';
   let textoBusquedaActual = '';
   let ordenActual = 'recientes';
   let reporteSeleccionadoId = null;
   let accionPendientePin = null;
   
   function esModeradorActivo() {
     return sessionStorage.getItem(MOD_SESSION_KEY) === 'true';
   }
   
   /* =========================================================
      1. INICIALIZACIÓN Y CARGA DE DATOS
      ========================================================= */
   document.addEventListener('DOMContentLoaded', async function() {
     await cargarDatos();
     inicializarMenuMovil();
     actualizarEstadisticasPortada();
     renderizarDestacadosPortada();
     inicializarCasosPage();
     inicializarDirectorioPage();
     inicializarFormularioPublicar();
     inicializarFormularioContacto();
     inicializarVisorJSON();
     inicializarChatbot();
   });
   
   async function cargarDatos() {
     const guardadoLocal = localStorage.getItem(STORAGE_KEY);
     if (guardadoLocal) {
       try {
         appData = JSON.parse(guardadoLocal);
         reportesData = appData.reportes || [];
         return;
       } catch (e) {
         localStorage.removeItem(STORAGE_KEY);
       }
     }
   
     try {
       const respuesta = await fetch('datos.json');
       if (!respuesta.ok) throw new Error('No se pudo leer datos.json');
       appData = await respuesta.json();
     } catch (error) {
       appData = JSON.parse(JSON.stringify(DATOS_RESPALDO));
     }
   
     reportesData = appData.reportes || [];
     guardarColeccionEnLocal();
   }
   
   function guardarColeccionEnLocal() {
     if (!appData) return;
     appData.reportes = reportesData;
     localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
   }
   
   /* =========================================================
      2. NAVEGACIÓN MÓVIL
      ========================================================= */
   function inicializarMenuMovil() {
     const toggle = document.getElementById('nav-toggle');
     const menu = document.getElementById('nav-menu');
     if (!toggle || !menu) return;
   
     toggle.addEventListener('click', function() {
       menu.classList.toggle('open');
     });
   }
   
   /* =========================================================
      3. PORTADA: ESTADÍSTICAS Y CASOS DESTACADOS
      ========================================================= */
   function actualizarEstadisticasPortada() {
     const totalEl = document.getElementById('stat-total');
     const urgentesEl = document.getElementById('stat-urgentes');
     const resueltosEl = document.getElementById('stat-resueltos');
   
     if (!totalEl) return;
   
     const aprobados = reportesData.filter(function(r) { return r.aprobado !== false; });
     const total = aprobados.length;
     const resueltos = aprobados.filter(function(r) { return esCasoFinalizado(r.estado); }).length;
     const activos = total - resueltos;
   
     totalEl.textContent = total;
     urgentesEl.textContent = activos;
     resueltosEl.textContent = resueltos;
   }
   
   function renderizarDestacadosPortada() {
     const contenedor = document.getElementById('contenedor-destacados');
     if (!contenedor) return;
   
     const aprobados = reportesData.filter(function(r) { return r.aprobado !== false; });
     const destacados = aprobados.slice(0, 3);
   
     contenedor.innerHTML = destacados
       .map(function(item, index) {
         const finalizado = esCasoFinalizado(item.estado);
         return `
         <article class="report-card" style="animation-delay: ${index * 0.08}s">
           <div class="card-img-box">
             <img src="${item.imagen}" alt="${item.titulo}" onerror="this.onerror=null; this.src='${FALLBACK_SVG}';">
             <span class="badge-urgencia urg-${item.urgencia}">${item.urgencia}</span>
           </div>
           <div class="card-body">
             <div class="card-category-row">
               <span class="card-category">${item.categoriaLabel}</span>
               ${item.verificado ? '<span class="verified-seal">✔ Aliado Verificado</span>' : ''}
             </div>
             <h3 class="card-title">${item.titulo}</h3>
             <p class="card-zone">📍 ${item.zona} • <small>${item.fecha}</small></p>
             <p class="card-desc">${item.descripcion}</p>
             ${item.notaCierre ? `<div class="card-closing-note">🎉 ${item.notaCierre}</div>` : ''}
             <div class="card-footer">
               <span class="status-tag ${finalizado ? 'is-resolved' : ''}">
                 ${finalizado ? '✔' : '🐾'} ${item.estado} • 🤝 ${item.apoyos}
               </span>
               <a href="casos.html" class="btn-detail" target="_blank" rel="noopener">Ver en red →</a>
             </div>
           </div>
         </article>
       `;
       })
       .join('');
   }
   
   /* =========================================================
      4. PÁGINA CASOS Y MASCOTAS (MODERACIÓN + PIN + WHATSAPP + CRUD)
      ========================================================= */
   function inicializarCasosPage() {
     const contenedor = document.getElementById('contenedor-reportes');
     if (!contenedor) return;
   
     actualizarUIModerador();
     renderizarCasos();
   
     const btnMod = document.getElementById('btn-toggle-moderador');
     const modalMod = document.getElementById('modal-moderador');
     const formMod = document.getElementById('form-login-moderador');
   
     btnMod.addEventListener('click', function() {
       if (esModeradorActivo()) {
         sessionStorage.removeItem(MOD_SESSION_KEY);
         actualizarUIModerador();
         renderizarCasos();
       } else {
         document.getElementById('mod-login-error').hidden = true;
         document.getElementById('input-clave-mod').value = '';
         modalMod.hidden = false;
       }
     });
   
     document.getElementById('modal-mod-close').addEventListener('click', function() {
       modalMod.hidden = true;
     });
   
     formMod.addEventListener('submit', function(e) {
       e.preventDefault();
       const clave = document.getElementById('input-clave-mod').value.trim();
       if (clave === CLAVE_MODERADOR) {
         sessionStorage.setItem(MOD_SESSION_KEY, 'true');
         modalMod.hidden = true;
         actualizarUIModerador();
         renderizarCasos();
       } else {
         document.getElementById('mod-login-error').hidden = false;
       }
     });
   
     document.getElementById('btn-salir-moderador').addEventListener('click', function() {
       sessionStorage.removeItem(MOD_SESSION_KEY);
       actualizarUIModerador();
       renderizarCasos();
     });
   
     document.getElementById('filter-buttons').addEventListener('click', function(e) {
       if (e.target.classList.contains('filter-btn')) {
         document.querySelectorAll('#filter-buttons .filter-btn').forEach(function(b) {
           b.classList.remove('active');
         });
         e.target.classList.add('active');
         filtroCategoriaActual = e.target.dataset.categoria;
         renderizarCasos();
       }
     });
   
     document.getElementById('buscador-reportes').addEventListener('input', function(e) {
       textoBusquedaActual = e.target.value.trim().toLowerCase();
       renderizarCasos();
     });
   
     document.getElementById('filtro-urgencia').addEventListener('change', function(e) {
       filtroUrgenciaActual = e.target.value;
       renderizarCasos();
     });
   
     document.getElementById('ordenar-reportes').addEventListener('change', function(e) {
       ordenActual = e.target.value;
       renderizarCasos();
     });
   
     contenedor.addEventListener('click', function(e) {
       const boton = e.target.closest('.btn-detail');
       if (boton) {
         abrirModalDetalle(Number(boton.dataset.id));
       }
     });
   
     const modalOverlay = document.getElementById('modal-detalle');
     document.getElementById('modal-close').addEventListener('click', function() {
       modalOverlay.hidden = true;
     });
   
     modalOverlay.addEventListener('click', function(e) {
       if (e.target === modalOverlay) modalOverlay.hidden = true;
     });
   
     document.getElementById('btn-apoyar-modal').addEventListener('click', function() {
       const caso = reportesData.find(function(r) { return r.id === reporteSeleccionadoId; });
       if (caso) {
         caso.apoyos += 1;
         guardarColeccionEnLocal();
         document.getElementById('modal-apoyos').textContent = caso.apoyos;
         renderizarCasos();
       }
     });
   
     // Aprobar publicación pendiente (Solo Moderador)
     document.getElementById('btn-aprobar-modal').addEventListener('click', function() {
       const caso = reportesData.find(function(r) { return r.id === reporteSeleccionadoId; });
       if (caso && esModeradorActivo()) {
         caso.aprobado = true;
         guardarColeccionEnLocal();
         actualizarUIModerador();
         renderizarCasos();
         abrirModalDetalle(caso.id);
       }
     });
   
     // Otorgar o quitar sello Verificado internamente (Solo Moderador)
     document.getElementById('btn-verificar-modal').addEventListener('click', function() {
       const caso = reportesData.find(function(r) { return r.id === reporteSeleccionadoId; });
       if (caso && esModeradorActivo()) {
         caso.verificado = !caso.verificado;
         guardarColeccionEnLocal();
         renderizarCasos();
         abrirModalDetalle(caso.id);
       }
     });
   
     document.getElementById('btn-resolver-modal').addEventListener('click', function() {
       solicitarVerificacionPin('cerrar');
     });
   
     document.getElementById('btn-editar-modal').addEventListener('click', function() {
       solicitarVerificacionPin('editar');
     });
   
     document.getElementById('btn-eliminar-modal').addEventListener('click', function() {
       solicitarVerificacionPin('eliminar');
     });
   
     document.getElementById('btn-confirmar-pin').addEventListener('click', function() {
       const caso = reportesData.find(function(r) { return r.id === reporteSeleccionadoId; });
       if (!caso) return;
   
       const pinIngresado = document.getElementById('input-pin-autor').value.trim();
       if (pinIngresado === (caso.pin || '1234')) {
         document.getElementById('modal-pin-box').hidden = true;
         ejecutarAccionProtegida(accionPendientePin);
       } else {
         document.getElementById('pin-error-msg').hidden = false;
       }
     });
   
     document.getElementById('btn-cancelar-pin').addEventListener('click', function() {
       document.getElementById('modal-pin-box').hidden = true;
       accionPendientePin = null;
     });
   
     document.getElementById('btn-confirmar-cierre').addEventListener('click', function() {
       const caso = reportesData.find(function(r) { return r.id === reporteSeleccionadoId; });
       if (!caso) return;
   
       const nuevoEstado = ESTADOS_FINALES[caso.categoria] || 'Sanado';
       const nota = document.getElementById('input-nota-cierre').value.trim();
   
       caso.estado = nuevoEstado;
       if (nota) caso.notaCierre = nota;
   
       guardarColeccionEnLocal();
       document.getElementById('modal-cierre-box').hidden = true;
       renderizarCasos();
       abrirModalDetalle(caso.id);
     });
   
     document.getElementById('btn-cancelar-cierre').addEventListener('click', function() {
       document.getElementById('modal-cierre-box').hidden = true;
     });
   
     const vistaNormal = document.getElementById('modal-vista-normal');
     const formEditar = document.getElementById('form-editar-reporte');
   
     document.getElementById('btn-cancelar-edicion').addEventListener('click', function() {
       formEditar.hidden = true;
       vistaNormal.hidden = false;
     });
   
     formEditar.addEventListener('submit', function(e) {
       e.preventDefault();
       const caso = reportesData.find(function(r) { return r.id === reporteSeleccionadoId; });
       if (!caso) return;
   
       const etiquetas = {
         rescate: 'Rescate y Urgencia',
         adopcion: 'En Adopción',
         perdidos: 'Mascota Perdida'
       };
   
       caso.titulo = document.getElementById('edit-titulo').value.trim();
       caso.categoria = document.getElementById('edit-categoria').value;
       caso.categoriaLabel = etiquetas[caso.categoria];
       caso.urgencia = document.getElementById('edit-urgencia').value;
       caso.zona = document.getElementById('edit-zona').value.trim();
       caso.estado = document.getElementById('edit-estado').value;
       caso.contacto = document.getElementById('edit-contacto').value.trim();
       caso.descripcion = document.getElementById('edit-descripcion').value.trim();
   
       if (esModeradorActivo()) {
         caso.verificado = document.getElementById('edit-verificado').checked;
       }
   
       guardarColeccionEnLocal();
       renderizarCasos();
       abrirModalDetalle(caso.id);
     });
   }
   
   function actualizarUIModerador() {
    const btnMod = document.getElementById('btn-toggle-moderador');
    const statusBar = document.getElementById('mod-status-bar');
    if (!btnMod) return;
  
    const pendientesCount = reportesData.filter(function(r) { return r.aprobado === false; }).length;
    const badgeHTML = pendientesCount > 0
      ? `<span class="mod-count">${pendientesCount} pendiente${pendientesCount > 1 ? 's' : ''}</span>`
      : '';
  
    if (esModeradorActivo()) {
      if (statusBar) statusBar.hidden = false;
      btnMod.innerHTML = `🛡️ Moderador Activo ${badgeHTML}`;
    } else {
      if (statusBar) statusBar.hidden = true;
      btnMod.innerHTML = `🛡️ Modo Moderador ${badgeHTML}`;
    }
  }
   function solicitarVerificacionPin(accion) {
     accionPendientePin = accion;
     document.getElementById('modal-cierre-box').hidden = true;
   
     if (esModeradorActivo()) {
       ejecutarAccionProtegida(accion);
       return;
     }
   
     document.getElementById('input-pin-autor').value = '';
     document.getElementById('pin-error-msg').hidden = true;
     document.getElementById('modal-pin-box').hidden = false;
     document.getElementById('input-pin-autor').focus();
   }
   
   function ejecutarAccionProtegida(accion) {
     const caso = reportesData.find(function(r) { return r.id === reporteSeleccionadoId; });
     if (!caso) return;
   
     if (accion === 'cerrar') {
       const estadoObjetivo = ESTADOS_FINALES[caso.categoria] || 'Sanado';
       document.getElementById('cierre-box-titulo').textContent = `🎉 Marcar caso como "${estadoObjetivo}"`;
       document.getElementById('input-nota-cierre').value = caso.notaCierre || '';
       document.getElementById('modal-cierre-box').hidden = false;
       document.getElementById('input-nota-cierre').focus();
     } else if (accion === 'editar') {
       document.getElementById('edit-titulo').value = caso.titulo;
       document.getElementById('edit-categoria').value = caso.categoria;
       document.getElementById('edit-urgencia').value = caso.urgencia;
       document.getElementById('edit-zona').value = caso.zona;
       document.getElementById('edit-estado').value = caso.estado;
       document.getElementById('edit-contacto').value = caso.contacto || '';
       document.getElementById('edit-descripcion').value = caso.descripcion;
   
       const grupoVerificado = document.getElementById('grupo-edit-verificado');
       if (grupoVerificado) {
         grupoVerificado.hidden = !esModeradorActivo();
         document.getElementById('edit-verificado').checked = Boolean(caso.verificado);
       }
   
       document.getElementById('modal-vista-normal').hidden = true;
       document.getElementById('form-editar-reporte').hidden = false;
     } else if (accion === 'eliminar') {
       if (!confirm('¿Estás seguro de eliminar definitivamente esta ficha?')) return;
       reportesData = reportesData.filter(function(r) { return r.id !== reporteSeleccionadoId; });
       guardarColeccionEnLocal();
       document.getElementById('modal-detalle').hidden = true;
       actualizarUIModerador();
       renderizarCasos();
     }
   }
   
   function renderizarCasos() {
     const contenedor = document.getElementById('contenedor-reportes');
     if (!contenedor) return;
   
     const modActivo = esModeradorActivo();
   
     const filtrados = reportesData.filter(function(item) {
       if (!modActivo && item.aprobado === false) return false;
   
       const okCat = filtroCategoriaActual === 'todos' || item.categoria === filtroCategoriaActual;
       const okUrg = filtroUrgenciaActual === 'todas' || item.urgencia === filtroUrgenciaActual;
       const okTxt =
         item.titulo.toLowerCase().includes(textoBusquedaActual) ||
         item.zona.toLowerCase().includes(textoBusquedaActual) ||
         item.descripcion.toLowerCase().includes(textoBusquedaActual);
       return okCat && okUrg && okTxt;
     });
   
     const pesos = { critica: 3, alta: 2, moderada: 1 };
     const ordenados = filtrados.slice().sort(function(a, b) {
       if (modActivo && a.aprobado !== b.aprobado) {
         return a.aprobado === false ? -1 : 1;
       }
       if (ordenActual === 'importancia') return (pesos[b.urgencia] || 0) - (pesos[a.urgencia] || 0);
       if (ordenActual === 'alfabetico') return a.titulo.localeCompare(b.titulo, 'es', { sensitivity: 'base' });
       if (ordenActual === 'apoyos') return b.apoyos - a.apoyos;
       return 0;
     });
   
     if (ordenados.length === 0) {
       contenedor.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:#64748b; padding:2rem;">No se encontraron casos con esos filtros.</p>`;
       return;
     }
   
     contenedor.innerHTML = ordenados
       .map(function(item, index) {
         const finalizado = esCasoFinalizado(item.estado);
         const pendiente = item.aprobado === false;
   
         return `
         <article class="report-card ${pendiente ? 'is-pending-card' : ''}" style="animation-delay: ${index * 0.06}s">
           <div class="card-img-box">
             <img src="${item.imagen}" alt="${item.titulo}" loading="lazy" onerror="this.onerror=null; this.src='${FALLBACK_SVG}';">
             ${pendiente ? '<span class="badge-pending-overlay">⏳ Pendiente de revisión</span>' : ''}
             <span class="badge-urgencia urg-${item.urgencia}">${item.urgencia}</span>
           </div>
           <div class="card-body">
             <div class="card-category-row">
               <span class="card-category">${item.categoriaLabel}</span>
               ${item.verificado ? '<span class="verified-seal">✔ Aliado Verificado</span>' : ''}
             </div>
             <h3 class="card-title">${item.titulo}</h3>
             <p class="card-zone">📍 ${item.zona} • <small>${item.fecha}</small></p>
             <p class="card-desc">${item.descripcion}</p>
             ${item.notaCierre ? `<div class="card-closing-note">🎉 ${item.notaCierre}</div>` : ''}
             <div class="card-footer">
               <span class="status-tag ${finalizado ? 'is-resolved' : ''}">
                 ${finalizado ? '✔' : '🐾'} ${item.estado} • 🤝 ${item.apoyos}
               </span>
               <button type="button" class="btn-detail" data-id="${item.id}">Ver ficha →</button>
             </div>
           </div>
         </article>
       `;
       })
       .join('');
   }
   
   function abrirModalDetalle(id) {
     const caso = reportesData.find(function(r) { return r.id === id; });
     if (!caso) return;
   
     reporteSeleccionadoId = id;
     document.getElementById('modal-vista-normal').hidden = false;
     document.getElementById('form-editar-reporte').hidden = true;
     document.getElementById('modal-pin-box').hidden = true;
     document.getElementById('modal-cierre-box').hidden = true;
   
     const modalImg = document.getElementById('modal-img');
     modalImg.onerror = function() {
       modalImg.onerror = null;
       modalImg.src = FALLBACK_SVG;
     };
     modalImg.src = caso.imagen;
   
     document.getElementById('modal-categoria').textContent = caso.categoriaLabel;
     document.getElementById('modal-urgencia').textContent = `Urgencia ${caso.urgencia}`;
     document.getElementById('modal-estado-badge').textContent = caso.aprobado === false ? '⏳ Pendiente de aprobación' : `Estado: ${caso.estado}`;
   
     const verificadoBadge = document.getElementById('modal-verificado-badge');
     if (verificadoBadge) {
       verificadoBadge.hidden = !caso.verificado;
     }
   
     document.getElementById('modal-titulo').textContent = caso.titulo;
     document.getElementById('modal-zona').textContent = caso.zona;
     document.getElementById('modal-fecha').textContent = caso.fecha;
     document.getElementById('modal-contacto').textContent = caso.contacto || 'Coordinación vía Patitas SCZ';
     document.getElementById('modal-descripcion').textContent = caso.descripcion;
     document.getElementById('modal-apoyos').textContent = caso.apoyos;
   
     const notaBox = document.getElementById('modal-nota-cierre-box');
     if (caso.notaCierre) {
       notaBox.textContent = `🎉 Final Feliz: ${caso.notaCierre}`;
       notaBox.hidden = false;
     } else {
       notaBox.hidden = true;
     }
   
     const soloDigitos = (caso.contacto || '').replace(/\D/g, '');
     const telefonoWA = soloDigitos.length === 8 ? `591${soloDigitos}` : (soloDigitos || '59170000000');
     const mensajeWA = encodeURIComponent(`Hola, vi el caso "${caso.titulo}" en Patitas SCZ y me gustaría ayudar.`);
     document.getElementById('btn-whatsapp-modal').href = `https://wa.me/${telefonoWA}?text=${mensajeWA}`;
   
     const modActivo = esModeradorActivo();
   
     const btnAprobar = document.getElementById('btn-aprobar-modal');
     btnAprobar.hidden = !(modActivo && caso.aprobado === false);
   
     const btnVerificar = document.getElementById('btn-verificar-modal');
     if (btnVerificar) {
       btnVerificar.hidden = !modActivo;
       btnVerificar.textContent = caso.verificado ? '✖ Quitar Verificado' : '✔ Dar Check Verificado';
     }
   
     const btnResolver = document.getElementById('btn-resolver-modal');
     const estadoObjetivo = ESTADOS_FINALES[caso.categoria] || 'Sanado';
   
     if (esCasoFinalizado(caso.estado)) {
       btnResolver.textContent = `✅ Caso ${caso.estado}`;
       btnResolver.disabled = true;
     } else {
       btnResolver.textContent = `✔ Marcar como ${estadoObjetivo}`;
       btnResolver.disabled = false;
     }
   
     document.getElementById('modal-detalle').hidden = false;
   }
   
   /* =========================================================
      5. DIRECTORIO DE REFUGIOS Y CAMPAÑAS (refugios.html)
      ========================================================= */
   function inicializarDirectorioPage() {
     const contenedor = document.getElementById('contenedor-guias');
     if (!contenedor || !appData) return;
   
     const renderGuias = function(tipo) {
       const tipoFiltro = tipo || 'todos';
       const lista = tipoFiltro === 'todos' ? appData.guias : appData.guias.filter(function(g) { return g.tipo === tipoFiltro; });
       contenedor.innerHTML = lista
         .map(function(g) {
           return `
           <article class="guide-card">
             <div class="guide-top-badges">
               <span class="guide-badge">${g.badge}</span>
               ${g.verificado ? '<span class="verified-seal">✔ Aliado Verificado</span>' : ''}
             </div>
             <h3>${g.titulo}</h3>
             <p class="guide-meta">📍 <strong>Ubicación:</strong> ${g.lugar}</p>
             <p class="guide-meta">🕒 <strong>Horario:</strong> ${g.horario}</p>
             <p class="guide-detail">${g.detalle}</p>
           </article>
         `;
         })
         .join('');
     };
   
     renderGuias('todos');
   
     const btns = document.getElementById('guias-filter-buttons');
     if (btns) {
       btns.addEventListener('click', function(e) {
         if (e.target.classList.contains('filter-btn')) {
           document.querySelectorAll('#guias-filter-buttons .filter-btn').forEach(function(b) {
             b.classList.remove('active');
           });
           e.target.classList.add('active');
           renderGuias(e.target.dataset.tipo);
         }
       });
     }
   }
   
   /* =========================================================
      6. FORMULARIO PUBLICAR CASO CON PIN DE AUTOR (publicar.html)
      ========================================================= */
   function inicializarFormularioPublicar() {
     const form = document.getElementById('form-reporte');
     if (!form) return;
   
     const inputFoto = document.getElementById('rep-foto');
     const previewBox = document.getElementById('preview-container');
     const previewImg = document.getElementById('preview-img');
     let imagenBase64 = '';
   
     inputFoto.addEventListener('change', function(e) {
       const file = e.target.files[0];
       if (!file) {
         imagenBase64 = '';
         previewBox.hidden = true;
         return;
       }
       const reader = new FileReader();
       reader.onload = function(ev) {
         imagenBase64 = ev.target.result;
         previewImg.src = imagenBase64;
         previewBox.hidden = false;
       };
       reader.readAsDataURL(file);
     });
   
     form.addEventListener('submit', function(e) {
       e.preventDefault();
   
       const titulo = document.getElementById('rep-titulo').value.trim();
       const categoria = document.getElementById('rep-categoria').value;
       const urgencia = document.getElementById('rep-urgencia').value;
       const zona = document.getElementById('rep-zona').value.trim();
       const contacto = document.getElementById('rep-contacto').value.trim();
       const pin = document.getElementById('rep-pin').value.trim();
       const descripcion = document.getElementById('rep-descripcion').value.trim();
       const errorEl = document.getElementById('rep-error');
       const exitoEl = document.getElementById('rep-exito');
   
       const pinValido = /^\d{4}$/.test(pin);
   
       if (!titulo || !categoria || !zona || !contacto || !pinValido || !descripcion) {
         exitoEl.hidden = true;
         errorEl.hidden = false;
         return;
       }
   
       errorEl.hidden = true;
   
       const etiquetas = {
         rescate: 'Rescate y Urgencia',
         adopcion: 'En Adopción',
         perdidos: 'Mascota Perdida'
       };
   
       const estadosIniciales = {
         rescate: 'En atención',
         adopcion: 'Buscando hogar',
         perdidos: 'Se busca'
       };
   
       const nuevoCaso = {
         id: Date.now(),
         titulo: titulo,
         categoria: categoria,
         categoriaLabel: etiquetas[categoria],
         zona: zona,
         contacto: contacto,
         pin: pin,
         verificado: false,
         aprobado: false,
         urgencia: urgencia,
         estado: estadosIniciales[categoria],
         notaCierre: '',
         fecha: 'Hace un momento',
         descripcion: descripcion,
         imagen: imagenBase64 || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
         apoyos: 1
       };
   
       reportesData.unshift(nuevoCaso);
       guardarColeccionEnLocal();
   
       exitoEl.textContent = `✅ ¡Caso enviado a revisión! Activa el Modo Moderador (clave 2026) en "Casos y Mascotas" para aprobarlo y otorgar verificación si corresponde. Tu PIN de autor es ${pin}.`;
       exitoEl.hidden = false;
       form.reset();
       previewBox.hidden = true;
   
       setTimeout(function() {
         window.location.href = 'casos.html';
       }, 2200);
     });
   }
   
   /* =========================================================
      7. FORMULARIO DE CONTACTO / ALIANZAS (index.html)
      ========================================================= */
   function inicializarFormularioContacto() {
     const formContacto = document.getElementById('form-contacto');
     if (!formContacto) return;
   
     formContacto.addEventListener('submit', function(e) {
       e.preventDefault();
   
       const nombre = document.getElementById('contacto-nombre').value.trim();
       const contactoDato = document.getElementById('contacto-email').value.trim();
       const asunto = document.getElementById('contacto-asunto').value;
       const mensaje = document.getElementById('contacto-mensaje').value.trim();
       const errorEl = document.getElementById('contacto-error');
       const exitoEl = document.getElementById('contacto-exito');
   
       const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactoDato);
       const soloNumeros = contactoDato.replace(/[\s\-\+\(\)]/g, '');
       const telefonoValido = /^\d{7,15}$/.test(soloNumeros);
   
       if (!nombre || (!emailValido && !telefonoValido) || !asunto || !mensaje) {
         exitoEl.hidden = true;
         errorEl.hidden = false;
         return;
       }
   
       errorEl.hidden = true;
       exitoEl.textContent = `✅ ¡Gracias, ${nombre}! Recibimos tu solicitud para la red Patitas SCZ. Te contactaremos pronto a ${contactoDato}.`;
       exitoEl.hidden = false;
       formContacto.reset();
     });
   }
   
   /* =========================================================
      8. VISOR JSON EN VIVO Y CHATBOT ASISTENTE
      ========================================================= */
   function inicializarVisorJSON() {
     const btnVer = document.getElementById('btn-ver-json');
     const modalJson = document.getElementById('modal-json');
     const btnCerrar = document.getElementById('modal-json-close');
     const btnReset = document.getElementById('btn-reset-json');
     const viewer = document.getElementById('json-viewer-content');
   
     if (!btnVer || !modalJson) return;
   
     btnVer.addEventListener('click', function() {
       viewer.textContent = JSON.stringify(appData, null, 2);
       modalJson.hidden = false;
     });
   
     btnCerrar.addEventListener('click', function() {
       modalJson.hidden = true;
     });
   
     btnReset.addEventListener('click', function() {
       localStorage.removeItem(STORAGE_KEY);
       sessionStorage.removeItem(MOD_SESSION_KEY);
       location.reload();
     });
   }
   
   function inicializarChatbot() {
     const toggle = document.getElementById('chatbot-toggle');
     const win = document.getElementById('chatbot-window');
     const closeBtn = document.getElementById('chatbot-close');
     const messages = document.getElementById('chatbot-messages');
     const options = document.getElementById('chatbot-options');
   
     if (!toggle || !win || !appData || !appData.chatbot) return;
   
     toggle.addEventListener('click', function() {
       win.hidden = !win.hidden;
     });
   
     closeBtn.addEventListener('click', function() {
       win.hidden = true;
     });
   
     messages.innerHTML = `<div class="chat-msg">${appData.chatbot.bienvenida}</div>`;
   
     options.innerHTML = appData.chatbot.opciones
       .map(function(op) {
         return `<button type="button" class="chat-opt-btn" data-id="${op.id}">${op.pregunta}</button>`;
       })
       .join('');
   
     options.addEventListener('click', function(e) {
       if (!e.target.classList.contains('chat-opt-btn')) return;
       const op = appData.chatbot.opciones.find(function(o) { return o.id === e.target.dataset.id; });
       if (!op) return;
   
       messages.innerHTML += `
         <div class="chat-msg user">${op.pregunta}</div>
         <div class="chat-msg">
           ${op.respuesta}
           <br><a href="${op.accionDestino}" target="_blank" rel="noopener" style="color:#0d9488; font-weight:700;">${op.accionTexto} →</a>
         </div>
       `;
       messages.scrollTop = messages.scrollHeight;
     });
   }