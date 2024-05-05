const PageNotFound = () => {
  return (
    <main className="h-screen bg-grey-50 flex items-center justify-center p-[48px]">
      <div className="bg-grey-0 border border-grey-100 rounded-md p-[48px] flex basis-[960px] shrink-0 grow-1 text-center">
        <h1 className="text-8 font-semibold mb-[32px]">
          The page you are looking for could not be found 😢
        </h1>
        <button>&larr; Go back</button>
      </div>
    </main>
  );
};

export default PageNotFound;
