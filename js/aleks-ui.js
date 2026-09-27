const AleksUI = {

    mostrarToast: function(mensaje, tipo = 'info', duracion = 3000) {
        const contenedor = document.getElementById('toast-container');
        if (!contenedor) return;

        const toast = document.createElement('div');
        toast.className = `aui-toast ${tipo}`;
        toast.innerText = mensaje;

        contenedor.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('mostrar');
        }, 10);

        setTimeout(() => {
            toast.classList.remove('mostrar');
            setTimeout(() => {
                toast.remove();
            }, 400);
        }, duracion);
    },

    abrirModal: function(titulo, contenidoHTML) {
        let modalPrevio = document.getElementById('aui-modal-dinamico');
        if (modalPrevio) modalPrevio.remove();

        const overlay = document.createElement('div');
        overlay.id = 'aui-modal-dinamico';
        overlay.className = 'aui-modal-overlay';

        overlay.innerHTML = `
            <div class="aui-modal">
                <button class="aui-modal-cerrar">&times;</button>
                <h3 style="margin-bottom: 15px; color: #1a1a1a;">${titulo}</h3>
                <div class="aui-modal-contenido" style="line-height: 1.6; color: #444;">
                    ${contenidoHTML}
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        setTimeout(() => {
            overlay.classList.add('activo');
        }, 10);

        const btnCerrar = overlay.querySelector('.aui-modal-cerrar');
        
        const cerrarModal = () => {
            overlay.classList.remove('activo');
            setTimeout(() => overlay.remove(), 300);
        };

        btnCerrar.addEventListener('click', cerrarModal);
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) cerrarModal();
        });
    },

    crearCarrusel: function(contenedorId, datos) {
        const contenedor = document.getElementById(contenedorId);
        if (!contenedor || !datos || datos.length === 0) return;

        contenedor.classList.add('aui-carrusel');
        let slideActual = 0;

        datos.forEach((item, index) => {
            const slide = document.createElement('div');
            slide.className = `aui-slide ${index === 0 ? 'activo' : ''}`;
            slide.dataset.index = index;

            slide.innerHTML = `
                <img src="${item.imagen}" alt="${item.nombre}">
                <div class="aui-info-moto">
                    <div>
                        <h3 style="font-size: 1.8rem; margin-bottom: 5px;">${item.nombre}</h3>
                        <p style="color: #ccc; font-size: 1rem;">${item.marca}</p>
                    </div>
                    <div>
                        <button class="aui-btn-accion btn-especificaciones">Ver Especificaciones</button>
                        <button class="aui-btn-accion btn-favoritos" style="margin-left: 10px; background: #e74c3c; color: white;">♥ Favorito</button>
                    </div>
                </div>
            `;

            const btnSpecs = slide.querySelector('.btn-especificaciones');
            btnSpecs.addEventListener('click', () => {
                this.abrirModal(`Especificaciones: ${item.nombre}`, item.specs);
            });

            const btnFav = slide.querySelector('.btn-favoritos');
            btnFav.addEventListener('click', () => {
                this.mostrarToast(`${item.nombre} guardada en favoritos`, 'success');
            });

            contenedor.appendChild(slide);
        });

        const btnPrev = document.createElement('button');
        btnPrev.className = 'aui-btn-nav aui-btn-prev';
        btnPrev.innerHTML = '&#10094;';

        const btnNext = document.createElement('button');
        btnNext.className = 'aui-btn-nav aui-btn-next';
        btnNext.innerHTML = '&#10095;';

        contenedor.appendChild(btnPrev);
        contenedor.appendChild(btnNext);

        const slides = contenedor.querySelectorAll('.aui-slide');
        
        const cambiarSlide = (direccion) => {
            slides[slideActual].classList.remove('activo');
            
            if (direccion === 'next') {
                slideActual = (slideActual + 1) % slides.length;
            } else {
                slideActual = (slideActual - 1 + slides.length) % slides.length;
            }
            
            slides[slideActual].classList.add('activo');
        };

        btnNext.addEventListener('click', () => cambiarSlide('next'));
        btnPrev.addEventListener('click', () => cambiarSlide('prev'));
    }
};