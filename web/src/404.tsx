export default function PageNotFound() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
      <div className="max-w-lg mx-auto flex-1 flex-row-reverse gap-12 items-center justify-between md:max-w-none md:flex">
        <div className="flex-1 max-w-lg">
          <img
            src="https://images.unsplash.com/photo-1515703407324-5f753afd8be8"
            alt="An empty ice rink."
          />
        </div>
        <div className="mt-12 flex-1 max-w-lg space-y-3 md:mt-0">
          <h3 className="text-[#FF8800] font-semibold">404 Error</h3>
          <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
            Page not found
          </p>
          <p className="text-gray-600">
            Sorry, the page you are looking for could not be found or has been
            removed.
          </p>
          <button
            onClick={() => history.back()}
            className="text-[#FF8800] cursor-pointer duration-150 hover:text-[#F1762E] font-medium inline-flex items-center gap-x-1"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
              className="size-5"
            >
              <title>Back Arrow</title>
              <path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z" />
            </svg>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
