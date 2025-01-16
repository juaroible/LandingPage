const select = document.getElementById("ColabType");

const DivSeleccionado = document.getElementById("DivSeleccionado");

select.addEventListener("change", () => {
  changeColabType(select.value);
});

function changeColabType() {
  console.log(select.value);

  if (select.value == "Ads") {
    DivSeleccionado.innerHTML = `
<h3>Anunciantes: Paquetes de patrocinio</h3>
    <div id="ociones"></div>
    <div class="container">
      <p>
        En CritiCompare, estamos comprometidos en ofrecer una plataforma de
        comparación de reseñas de películas que atrae a una audiencia de adultos
        apasionados por el ocio digital, especialmente el cine y las series.
        Nuestro sitio web es el lugar ideal para marcas que desean conectar con
        un público exigente y en busca de contenido de calidad.
      </p>

      <p>
        Ofrecemos varias opciones de patrocinio para adaptarnos a las
        necesidades y objetivos de visibilidad de todo tipo de empresas. Con
        nuestra audiencia altamente comprometida, aportamos muchas oportunidades
        de aumentar el alcance digital de nuestros patrocinadores.
      </p>
    </div>

    <div class="containerUsuarios">
      <h2>Nuestros planes:</h2>
      <table class="tablePlanes">
        <tr>
          <td class="tdPlanes">
            <h2>Estándar</h2>

            <ul>
              <li>
                Publicidad distribuida en zonas de interés para los usuarios
              </li>
              <li>Informe de desempeño trimestral</li>
            </ul>

            <h1>300€ - $700€/mes</h1>
          </td>
          <td class="tdPlanes">
            <h2>Medium</h2>

            <ul>
              <li>Banner destacado en una ubicación visible</li>
              <li>Informe de desempeño mensual</li>
            </ul>

            <h1>150€ - 400€/mes</h1>
          </td>

          <td class="tdPlanes">
            <h2>Pro</h2>
            <ul>
              <li>
                Ubicación destacada en la página principal, con un banner en la
                parte superior de la landing page, asegurando máxima visibilidad
              </li>
              <li>Acceso a todo tipo de valoraciones</li>
            </ul>
            <h1>500€ - 1,200€</h1>
          </td>
        </tr>
      </table>
    </div>
        `;
  }

  if (select.value == "Colaborator") {
    DivSeleccionado.innerHTML = ``;
  }
}
