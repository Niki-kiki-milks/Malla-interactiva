document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');

    // Datos completos de la malla
    const planEstudios = [
// Ciclo 1 (sin prerrequisitos) 
{
    ciclo: "Ciclo 1",
    cursos: [
        { 
            nombre: "Estrategias de aprendizaje en educación superior universitaria", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Formación personal humanística", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Lenguaje", 
            creditos: 6.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Manifestaciones culturales, arte y deportes", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        {
            nombre: "Psicología general", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Inglés aplicado a las ciencias de la salud I", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
         }
    ]
},

// Ciclo 2 (sin prerrequisitos) 
{
    ciclo: "Ciclo 2",
    cursos: [
        { 
            nombre: "Ciencias y su aplicación en ciencias de la salud", 
            creditos: 5.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Identidad social, cultura general y disciplinas participativas", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Ciencias de la naturaleza", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Realidad nacional y tendencias globales", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        {
            nombre: "Introducción a la psicología social", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Inglés técnico aplicado a las ciencias de la salud II", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
         }
    ]
},

// Ciclo 3 (sin prerrequisitos) 
{
    ciclo: "Ciclo 3",
    cursos: [
        { 
            nombre: "Psicología del aprendizaje", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Psicología evolutiva", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Procesos cognitivos básicos", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Epistemología de la Psicología", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        {
            nombre: "Historia de la Psicología", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Neurofisiología y comportamiento humano", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Estadística aplicada I", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
         }
    ]
}, 

// Ciclo 4 (con prerrequisitos)
{
    ciclo: "Ciclo 4",
    cursos: [
        { 
            nombre: "Psicometría y construcción de pruebas", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Psicología organizacional", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Psicología de la personalidad", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Psicología de la inteligencia", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Psicología del trabajo", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false,
        }, 
        { 
            nombre: "Procesos cognitivos superiores", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false,
            prerequisito: "Procesos cognitivos básicos" // ← Prerrequisito
        },
        { 
            nombre: "Psicología social experimental y virtualidad en las organizaciones", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        }
    ]
},

// Ciclo 5 (con prerrequisitos)
{
    ciclo: "Ciclo 5",
    cursos: [
        { 
            nombre: "Técnicas de entrevista y observación", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Psicología de la motivación, la afectividad, y las actitudes psicosociales", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Psicología de la comunicación organizacional", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Análisis y evaluación de puestos", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Métodos de investigación cuantitativa", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false,
            prerequisito: "Estadística aplicada I" // ← Prerrequisito
        },
        { 
            nombre: "Evaluación de habilidades cognitivas", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false,
            prerequisito: "Procesos cognitivos superiores" // ← Prerrequisito
        },
        { 
            nombre: "Técnicas de evaluación de la personalidad", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false,
            prerequisito: "Psicología de la personalidad" // ← Prerrequisito
        }
    ]
},
                          
// Ciclo 6 (con prerrequisitos)
{
    ciclo: "Ciclo 6",
    cursos: [
        { 
            nombre: "Métodos de investigación cualitativa", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Técnicas psicológicas de intervención cognitivo conductual", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Psicología ambiental", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Psicología de grupos y trabajo en equipo", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Comportamiento organizacional", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false,
            prerequisito: "Psicología organizacional" // ← Prerrequisito
        },
        { 
            nombre: "Estrategias de selección de personal y evaluación del desempeño", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Psicopatología", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        }
    ]
},

// Ciclo 7 (con prerrequisitos)
{
    ciclo: "Ciclo 7",
    cursos: [
        { 
            nombre: "Psicología y manejo de conflictos", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Capacitación y desarrollo del talento humano", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Psicología económica", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Psicología política", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Cultura y clima organizacional", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false,
            prerequisito: "Comportamiento organizacional" // ← Prerrequisito
        },
        { 
            nombre: "Estadística aplicada II", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false,
            prerequisito: "Estadística aplicada I" // ← Prerrequisito
        },
        { 
            nombre: "Salud y seguridad basado en el comportamiento", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        }
    ]
},

// Ciclo 8 (con prerrequisitos)
{
    ciclo: "Ciclo 8",
    cursos: [
        { 
            nombre: "Taller de tesis I", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false,
            prerequisito: "Estadística aplicada II" // ← Prerrequisito
        },
        { 
            nombre: "Gestión por competencias", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false,
            prerequisito: "Psicología del trabajo" // ← Prerrequisito
        },
        { 
            nombre: "Gestión del talento humano", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false,
            prerequisito: "Análisis y evaluación de puestos" // ← Prerrequisito
        },
        { 
            nombre: "Psicología del consumidor", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false,
            prerequisito: "Psicología económica" // ← Prerrequisito
        },
        { 
            nombre: "Gestión de la calidad", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Taller de liderazgo y toma de decisiones", 
            creditos: 3.0, 
            tipo: "obligatorio", 
            cursado: false 
        },
        { 
            nombre: "Cambio y desarrollo organizacional", 
            creditos: 4.0, 
            tipo: "obligatorio", 
            cursado: false,
            prerequisito: "Cultura y clima organizacional" // ← Prerrequisito
                
// Ciclo 9 (con obligatorios + electivos)
        {
            ciclo: "Ciclo 9",
            cursos: [
                // Obligatorios
                { 
                    nombre: "Taller de tesis II", 
                    creditos: 4.0, 
                    tipo: "obligatorio", 
                    cursado: false,
                    prerequisito: "Taller de tesis I"
                },
                { 
                    nombre: "Diagnóstico e informes en psicología organizacional", 
                    creditos: 4.0, 
                    tipo: "obligatorio", 
                    cursado: false 
                },
                { 
                    nombre: "Principios y procesos de la administración", 
                    creditos: 4.0, 
                    tipo: "obligatorio", 
                    cursado: false,
                    prerequisito: "Gestión del talento humano"
                },
                { 
                    nombre: "Marketing y publicidad", 
                    creditos: 3.0, 
                    tipo: "obligatorio", 
                    cursado: false,
                    prerequisito: "Psicología del consumidor"
                },
                { 
                    nombre: "Emprendimiento y gestión de proyectos", 
                    creditos: 3.0, 
                    tipo: "obligatorio", 
                    cursado: false 
                },
                { 
                    nombre: "Deontología psicológica", 
                    creditos: 3.0, 
                    tipo: "obligatorio", 
                    cursado: false 
                },
                // Electivos (se muestran en morado pastel)
                { 
                    nombre: "Orientación y consejo psicológico", 
                    creditos: 3.0, 
                    tipo: "electivo", 
                    cursado: false 
                },
                { 
                    nombre: "Psicología clínica y de la salud", 
                    creditos: 3.0, 
                    tipo: "electivo", 
                    cursado: false 
                },
                { 
                    nombre: "Psicología educativa", 
                    creditos: 3.0, 
                    tipo: "electivo", 
                    cursado: false 
                },
                { 
                    nombre: "Psicodiagnóstico de Rorschach", 
                    creditos: 3.0, 
                    tipo: "electivo", 
                    cursado: false 
                },
                { 
                    nombre: "Técnicas proyectivas", 
                    creditos: 3.0, 
                    tipo: "electivo", 
                    cursado: false 
                },
            ]
        },
        // Ciclo 10 (solo obligatorios)
        {
            ciclo: "Ciclo 10",
            cursos: [
                { 
                    nombre: "Prácticas Pre-Profesionales", 
                    creditos: 24.0, 
                    tipo: "obligatorio", 
                    cursado: false 
                }
            ]
        }
    ];

    // Generar la malla
    planEstudios.forEach((ciclo) => {
        // Título del ciclo
        const cicloTitle = document.createElement('div');
        cicloTitle.classList.add('ciclo-title');
        cicloTitle.textContent = ciclo.ciclo;
        grid.appendChild(cicloTitle);

        // Cursos del ciclo
        ciclo.cursos.forEach((curso) => {
            const cursoCell = document.createElement('div');
            cursoCell.classList.add('curso-cell', curso.tipo);
            
            // Aplica estilo "cursado" si corresponde
            if (curso.cursado) cursoCell.classList.add('cursado');
            
            // Contenido del curso (nombre, créditos y prerrequisitos)
            cursoCell.innerHTML = `
                <strong>${curso.nombre}</strong>
                <small>${curso.creditos} créditos</small>
                ${curso.prerequisito ? `<br><em class="prerequisito">Pre: ${curso.prerequisito}</em>` : ''}
            `;
            
            // Interacción: Marcar/desmarcar como cursado al hacer clic
            cursoCell.addEventListener('click', () => {
                curso.cursado = !curso.cursado;
                cursoCell.classList.toggle('cursado');
            });
            
            grid.appendChild(cursoCell);
        });
    });
});
