export default function PortfolioInfo() {
  return (
    <div>
      <div className="px-12">
        <h2 className="text-3xl mb-5 font-bold">Personal Information</h2>
        <form className="flex flex-col gap-4">
          <div className="flex gap-3">
            <input
              className="form-input"
              type="text"
              placeholder="First Name"
            />
            <input className="form-input" type="text" placeholder="Last Name" />
          </div>
          <div className="flex gap-3">
            <input
              className="form-input"
              type="text"
              placeholder="Phone Number"
            />
            <input className="form-input" type="email" placeholder="Email" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">LinkedIn</label>
            <input
              className="form-input"
              type="text"
              placeholder="LinkedIn URL"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">GitHub</label>
            <input
              className="form-input"
              type="text"
              placeholder="GitHub URL"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Bio</label>
            <textarea
              className="form-input"
              name=""
              id=""
              cols={30}
              rows={10}
            ></textarea>
          </div>
        </form>
      </div>
      <div className="px-12 mt-5">
        <h2 className="text-3xl font-bold mb-5">Professional Information</h2>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Job Title</label>
            <input className="form-input" type="text" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Company Name</label>
            <input className="form-input" type="text" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Description</label>
            <textarea className="form-input" cols={30} rows={10} />
          </div>
        </form>
      </div>
    </div>
  );
}
