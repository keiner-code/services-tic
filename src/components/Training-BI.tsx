export default function TriningBI() {
  return (
    <div className="flex justify-center w-full mb-4">
      <div className="w-11/12 flex">
        <div>
          <h1 className="text-3xl font-semibold mb-4">
            Capacitaciones con power bi
          </h1>
          <p className="w-11/12 text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus veniam, omnis reiciendis quos nulla sit, adipisci
            impedit eaque suscipit vel quam id mollitia voluptatibus assumenda
            tenetur odit quaerat? Voluptatem, repellat?
          </p>
          <div className="w-full flex justify-end items-end pr-0.5 h-1/2">
            <div className="bg-yellow-200 flex items-center p-1">
              <a className="font-semibold" href="http://">Ir a capacitaciones</a>
              <i className="fa-solid fa-arrow-right mt-1 ml-1"></i>
            </div>
          </div>
        </div>
        <img
          className="w-1/3 rounded-lg"
          src="https://img.freepik.com/foto-gratis/personas-que-participan-eventos-negocios_23-2149346666.jpg?w=740&t=st=1701375320~exp=1701375920~hmac=7e7912f6895766e433ba21c787178832ccd3f991e083e51be6d72619c8d7fe1e"
          alt="img-capacitacion"
        />
      </div>
    </div>
  );
}
