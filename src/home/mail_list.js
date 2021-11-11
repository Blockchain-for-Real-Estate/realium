export function MailList({ title, description }) {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between bg-gray-50 rounded-lg shadow-sm">
      <span className="px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl block">
          {title}
        </h2>
        <h4 className="block text-indigo-600">
          {description}
        </h4>
      </span>
      <MailForm />
    </div>
  );
}

export const MailForm = () => {
  const handleSubmit = () => {
    var form = document.getElementById('sheetdb-form');
    form.addEventListener("submit", e => {
      e.preventDefault();
      e.stopImmediatePropagation();
      fetch(form.action, {
          method : "POST",
          body: new FormData(document.getElementById("sheetdb-form")),
      }).then(
          response => response.json()
      ).then((html) => {
        document.getElementById('email').value = ""
        alert("Email submitted.")
      });
    });  
  };

  return (
    <form
      method="post" id="sheetdb-form"
      action="https://sheetdb.io/api/v1/em65ljj2zvxh4">
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 sm:px-8">
          <div className="inline-flex rounded-md">
            <input
              id="email"
              type="email"
              name="data[Email]"
              placeholder="Enter your email"
              className="inline-flex items-center justify-center sm:w-80 py-3 border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            />
            <input name="data[Timestamp]" type="hidden" value={new Date().toLocaleString('en-US', {timeZone: 'America/Denver'})}/>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow-sm">
            <button onClick={handleSubmit} type="submit" className="inline-flex items-center justify-center text-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600">
              Notify Me
            </button>
          </div>
        </div>
    </form>
  );
};