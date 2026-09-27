const galeriaMotos = [
    {
        nombre: "Z900",
        marca: "Kawasaki",
        imagen: "img/Z900.jpg",
        specs: "<ul><li><strong>Motor:</strong> 948cc, 4 cilindros en línea</li><li><strong>Potencia:</strong> 125 HP</li><li><strong>Peso:</strong> 212 kg</li><li><strong>Estilo:</strong> Hypernaked</li></ul>"
    },
    {
        nombre: "1390 Super Duke R",
        marca: "KTM",
        imagen: "img/DUKE1390.png",
        specs: "<ul><li><strong>Motor:</strong> 1350cc, V-Twin LC8</li><li><strong>Potencia:</strong> 190 HP</li><li><strong>Peso:</strong> 200 kg</li><li><strong>Estilo:</strong> Hypernaked Extrema</li></ul>"
    },
    {
        nombre: "Gold Wing",
        marca: "Honda",
        imagen: "img/GOLDWING.jpg",
        specs: "<ul><li><strong>Motor:</strong> 1833cc, 6 cilindros boxer</li><li><strong>Potencia:</strong> 124 HP</li><li><strong>Peso:</strong> 385 kg</li><li><strong>Estilo:</strong> Touring / Lujo</li></ul>"
    },
    {
        nombre: "Super Meteor 650",
        marca: "Royal Enfield",
        imagen: "img/SUPERMETEOR650.jpg",
        specs: "<ul><li><strong>Motor:</strong> 648cc, bicilíndrico en paralelo</li><li><strong>Potencia:</strong> 47 HP</li><li><strong>Peso:</strong> 241 kg</li><li><strong>Estilo:</strong> Cruiser Clásica</li></ul>"
    },
    {
        nombre: "XJ6",
        marca: "Yamaha",
        imagen: "img/XJ6.jpg",
        specs: "<ul><li><strong>Motor:</strong> 600cc, 4 cilindros en línea</li><li><strong>Potencia:</strong> 77 HP</li><li><strong>Peso:</strong> 210 kg</li><li><strong>Estilo:</strong> Naked / Urbana</li></ul>"
    },
    {
        nombre: "GSX-S750",
        marca: "Suzuki",
        imagen: "img/GSX750.jpg",
        specs: "<ul><li><strong>Motor:</strong> 749cc, 4 cilindros en línea</li><li><strong>Potencia:</strong> 114 HP</li><li><strong>Peso:</strong> 213 kg</li><li><strong>Estilo:</strong> Naked Deportiva</li></ul>"
    },
    {
        nombre: "Ninja ZX-10R",
        marca: "Kawasaki",
        imagen: "img/ZX10R.jpg",
        specs: "<ul><li><strong>Motor:</strong> 998cc, 4 cilindros en línea</li><li><strong>Potencia:</strong> 203 HP</li><li><strong>Peso:</strong> 207 kg</li><li><strong>Estilo:</strong> Superbike / Pista</li></ul>"
    },
    {
        nombre: "Pulsar NS400",
        marca: "Bajaj",
        imagen: "img/NS400.jpg",
        specs: "<ul><li><strong>Motor:</strong> 373cc, monocilíndrico</li><li><strong>Potencia:</strong> 40 HP</li><li><strong>Peso:</strong> 174 kg</li><li><strong>Estilo:</strong> Naked Streetfighter</li></ul>"
    },
    {
        nombre: "MT-09",
        marca: "Yamaha",
        imagen: "img/MT09.jpg",
        specs: "<ul><li><strong>Motor:</strong> 890cc, 3 cilindros (CP3)</li><li><strong>Potencia:</strong> 119 HP</li><li><strong>Peso:</strong> 189 kg</li><li><strong>Estilo:</strong> Hypernaked Master of Torque</li></ul>"
    },
    {
        nombre: "675 SR-R",
        marca: "CFMoto",
        imagen: "img/CF675SR.png",
        specs: "<ul><li><strong>Motor:</strong> 675cc, 3 cilindros en línea</li><li><strong>Potencia:</strong> 95 HP</li><li><strong>Peso:</strong> 175 kg</li><li><strong>Estilo:</strong> Supersport</li></ul>"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    AleksUI.crearCarrusel('mi-carrusel', galeriaMotos);
    document.getElementById('btn-prueba-toast-exito').addEventListener('click', () => {
        AleksUI.mostrarToast('Vehículo agregado a favoritos correctamente.', 'success');
    });
    document.getElementById('btn-prueba-toast-error').addEventListener('click', () => {
        AleksUI.mostrarToast('Error al conectar con el servidor de la agencia.', 'error');
    });
    document.getElementById('btn-prueba-modal').addEventListener('click', () => {
        const specsPrueba = `
            <p><strong>Motor:</strong> 225.9cc, monocilíndrico SOHC</p>
            <p><strong>Potencia:</strong> 20.4 HP a 7750 rpm</p>
            <p><strong>Torque:</strong> 19.93 Nm a 3750 rpm</p>
            <p><strong>Peso:</strong> 160 kg</p>
            <hr style="margin: 10px 0; border: 0; border-top: 1px solid #ccc;">
            <p><em>Este modal fue generado dinámicamente con JavaScript sin escribir HTML en el documento original.</em></p>
        `;
        AleksUI.abrirModal('TVS Ronin - Especificaciones', specsPrueba);
    });
});