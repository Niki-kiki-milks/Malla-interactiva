document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');

    // Datos completos de la malla
    const planEstudios = [
        // Ciclo 1
        {
            ciclo: "Ciclo 1",
            cursos: [
                { nombre: "Estrategias de aprendizaje en educación superior universitaria", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Formación personal humanística", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Lenguaje", creditos: 6, tipo: "obligatorio", cursado: false },
                { nombre: "Manifestaciones culturales, arte y deportes", creditos: 3, tipo: "obligatorio", cursado: false },
                { nombre: "Psicología general", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Inglés aplicado a las ciencias de la salud I", creditos: 3, tipo: "obligatorio", cursado: false }
            ]
        },
        // Ciclo 2
        {
            ciclo: "Ciclo 2",
            cursos: [
                { nombre: "Ciencias y su aplicación en ciencias de la salud", creditos: 5, tipo: "obligatorio", cursado: false },
                { nombre: "Identidad social, cultura general y disciplinas participativas", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Ciencias de la naturaleza", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Realidad nacional y tendencias globales", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Introducción a la psicología social", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Inglés técnico aplicado a las ciencias de salud II", creditos: 3, tipo: "obligatorio", cursado: false }
            ]
        },
        // Ciclo 3
            ciclo: "Ciclo 3",
            cursos: [
                { nombre: "Estrategias de aprendizaje en educación superior universitaria", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Formación personal humanística", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Lenguaje", creditos: 6, tipo: "obligatorio", cursado: false },
                { nombre: "Manifestaciones culturales, arte y deportes", creditos: 3, tipo: "obligatorio", cursado: false },
                { nombre: "Psicología general", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Inglés aplicado a las ciencias de la salud I", creditos: 3, tipo: "obligatorio", cursado: false }
            ]
        },
        // Ciclo 4
                ciclo: "Ciclo 4",
            cursos: [
                { nombre: "Estrategias de aprendizaje en educación superior universitaria", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Formación personal humanística", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Lenguaje", creditos: 6, tipo: "obligatorio", cursado: false },
                { nombre: "Manifestaciones culturales, arte y deportes", creditos: 3, tipo: "obligatorio", cursado: false },
                { nombre: "Psicología general", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Inglés aplicado a las ciencias de la salud I", creditos: 3, tipo: "obligatorio", cursado: false }
            ]
        },
        // Ciclo 5  
          ciclo: "Ciclo 5",
            cursos: [
                { nombre: "Estrategias de aprendizaje en educación superior universitaria", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Formación personal humanística", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Lenguaje", creditos: 6, tipo: "obligatorio", cursado: false },
                { nombre: "Manifestaciones culturales, arte y deportes", creditos: 3, tipo: "obligatorio", cursado: false },
                { nombre: "Psicología general", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Inglés aplicado a las ciencias de la salud I", creditos: 3, tipo: "obligatorio", cursado: false }
            ]
        },
          // Ciclo 6
          ciclo: "Ciclo 6",
            cursos: [
                { nombre: "Estrategias de aprendizaje en educación superior universitaria", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Formación personal humanística", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Lenguaje", creditos: 6, tipo: "obligatorio", cursado: false },
                { nombre: "Manifestaciones culturales, arte y deportes", creditos: 3, tipo: "obligatorio", cursado: false },
                { nombre: "Psicología general", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Inglés aplicado a las ciencias de la salud I", creditos: 3, tipo: "obligatorio", cursado: false }
            ]
        },
          // Ciclo 7
          ciclo: "Ciclo 7",
            cursos: [
                { nombre: "Estrategias de aprendizaje en educación superior universitaria", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Formación personal humanística", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Lenguaje", creditos: 6, tipo: "obligatorio", cursado: false },
                { nombre: "Manifestaciones culturales, arte y deportes", creditos: 3, tipo: "obligatorio", cursado: false },
                { nombre: "Psicología general", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Inglés aplicado a las ciencias de la salud I", creditos: 3, tipo: "obligatorio", cursado: false }
            ]
        },
          // Ciclo 8
          ciclo: "Ciclo 8",
            cursos: [
                { nombre: "Estrategias de aprendizaje en educación superior universitaria", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Formación personal humanística", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Lenguaje", creditos: 6, tipo: "obligatorio", cursado: false },
                { nombre: "Manifestaciones culturales, arte y deportes", creditos: 3, tipo: "obligatorio", cursado: false },
                { nombre: "Psicología general", creditos: 4, tipo: "obligatorio", cursado: false },
                { nombre: "Inglés aplicado a las ciencias de la salud I", creditos: 3, tipo: "obligatorio", cursado: false }
            ]
        },
        
        // Ciclo 10 (Prácticas)
        {
            ciclo: "Ciclo 10",
            cursos: [
                { nombre: "Prácticas Pre-Profesionales", creditos: 24, tipo: "obligatorio", cursado: false }
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
            if (curso.cursado) cursoCell.classList.add('cursado');
            
            cursoCell.innerHTML = `
                <strong>${curso.nombre}</strong>
                <small>${curso.creditos} créditos</small>
                ${curso.prerequisito ? `<br><em>Pre: ${curso.prerequisito}</em>` : ''}
            `;
            
            // Interacción: Marcar como cursado al hacer clic
            cursoCell.addEventListener('click', () => {
                curso.cursado = !curso.cursado;
                cursoCell.classList.toggle('cursado');
            });
            
            grid.appendChild(cursoCell);
        });
    });
});
