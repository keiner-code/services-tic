import Image from "next/image";

export default function ContentBi() {
  return (
    <div className="w-11/12">
      <div className="flex flex-col md:flex-row justify-center">
        <Image
          width={400}
          height={400}
          src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="head"
          className="md:w-64 md:h-64 w-full  p-1 rounded-xl"
        />
        <div className="ml-2 my-7 md:my-0">
          <h1 className="text-xl font-semibold mb-1 text-center md:text-start">
            Visualizacion de datos con BI
          </h1>
          <p className="text-lg text-justify md:text-start">
            Business Intelligence (BI) se refiere al conjunto de herramientas y
            procesos que permiten a las empresas recopilar, almacenar y analizar
            datos para tomar decisiones informadas. La visualización de datos es
            una parte fundamental del BI, ya que ayuda a presentar la
            información de manera clara y comprensible.
          </p>

          <p className="text-lg mb-2 text-justify md:text-start">
            Existen varias herramientas de BI que facilitan la visualización de
            datos, como Tableau, Power BI, QlikView, Looker, entre otras. Estas
            herramientas permiten crear gráficos, tablas, paneles interactivos y
            tableros de control que ayudan a entender los datos y extraer
            información valiosa.
          </p>

          <p className="text-lg mb-2 text-justify md:text-start">
            La visualización de datos con estas herramientas implica
            generalmente los siguientes pasos:
          </p>
        </div>
      </div>

      <p className="text-lg mb-2 text-justify md:text-start">
        <strong>Conexión de datos:</strong> Importar datos de diversas fuentes
        como bases de datos, hojas de cálculo, sistemas en la nube, entre otros.
      </p>

      <p className="text-lg mb-2 text-justify md:text-start">
        <strong>Preparación de datos:</strong> Limpiar, transformar y organizar
        los datos para su análisis. Esto puede incluir la eliminación de valores
        nulos, la combinación de conjuntos de datos y la creación de nuevas
        variables.
      </p>

      <p className="text-lg mb-2 text-justify md:text-start">
        <strong>Creación de visualizaciones:</strong> Utilizando la interfaz de
        la herramienta, se pueden crear gráficos y tablas interactivas. Se
        seleccionan los tipos de gráficos más apropiados para representar la
        información, como barras, líneas, pastel, dispersión, mapas, etc.
      </p>

      <p className="text-lg mb-2 text-justify md:text-start">
        <strong>Diseño de paneles de control:</strong> Combinar varias
        visualizaciones en un tablero o panel para ofrecer una visión general de
        los datos. Esto puede incluir la creación de filtros interactivos para
        explorar los datos en detalle.
      </p>

      <p className="text-lg mb-2 text-justify md:text-start">
        <strong>Análisis e interpretación:</strong> Una vez creadas las
        visualizaciones, se analizan para identificar patrones, tendencias o
        insights que ayuden en la toma de decisiones empresariales.
      </p>

      <p className="text-lg mb-2 text-justify md:text-start">
        Estas herramientas suelen ofrecer capacidades de visualización
        avanzadas, permitiendo la creación de gráficos dinámicos, interactivos y
        personalizados, así como la generación de informes automatizados.
      </p>

      <div className="flex flex-col md:flex-row justify-between mb-6 mt-8">

        <div className="w-full mb-6 md:mb-0 md:w-1/6 bg-slate-100 flex flex-col items-center rounded-lg shadow-2xl">
          <div className="bg-yellow-300 w-full flex justify-center rounded-t-lg">
            <i className="fa-solid fa-brain text-5xl py-2 text-white"></i>
          </div>
          <p className="py-6">Capacitacion</p>
        </div>

        <div className="w-full mb-6 md:mb-0 md:w-1/6 bg-slate-100 flex flex-col items-center rounded-lg shadow-2xl">
          <div className="bg-yellow-300 w-full flex justify-center rounded-t-lg">
            <i className="fa-solid fa-chart-simple text-5xl py-2 text-white"></i>
          </div>
          <p className="py-6 text-center">Desarrollo de reportes y paneles</p>
        </div>

        <div className="w-full mb-6 md:mb-0 md:w-1/6 bg-slate-100 flex flex-col items-center rounded-lg shadow-2xl">
          <div className="bg-yellow-300 w-full flex justify-center rounded-t-lg">
            <i className="fa-regular fa-clipboard text-5xl py-2 text-white"></i>
          </div>
          <p className="py-6 text-center">
            Asesoria en creacion de reportes & paneles
          </p>
        </div>

        <div className="w-full mb-6 md:mb-0 md:w-1/6 bg-slate-100 flex flex-col items-center rounded-lg shadow-2xl">
          <div className="bg-yellow-300 w-full flex justify-center rounded-t-lg">
            <i className="fa-solid fa-magnifying-glass-chart text-5xl py-2 text-white"></i>
          </div>
          <p className="py-6">Análisis e interpretación</p>
        </div>

        <div className="w-full mb-6 md:mb-0 md:w-1/6 bg-slate-100 flex flex-col items-center rounded-lg shadow-2xl">
          <div className="bg-yellow-300 w-full flex justify-center rounded-t-lg">
            <i className="fa-solid fa-head-side-virus text-5xl py-2 text-white"></i>
          </div>
          <p className="py-6">Soporte</p>
        </div>

      </div>
    </div>
  );
}
