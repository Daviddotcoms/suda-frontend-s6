export const ErrorPage = () => {
  return (
    <main className="grid min-h-full place-items-center bg-gray-950 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center pt-40">
        <p className="font-semibold text-[#101828] text-7xl mb-10 text-shadow-[-1px_-1px_0_#256ad8,_1px_-1px_0_#256ad8,_-1px_1px_0_#256ad8,_1px_1px_0_#256ad8]">
          404
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-300 sm:text-7xl">
          Página no encontrada
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          Lo lamento, la página que estas buscando no existe.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="text-blue-700 border-blue-600 hover:bg-blue-700 dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800 dark:hover:bg-blue-500 dark:hover:text-white hover:text-white border active:transform-[scale(0.95)] duration-200 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:bg-gray-900"
          >
            Volver
          </a>
        </div>
      </div>
    </main>
  );
};
