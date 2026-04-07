import axios from "axios";
export default function RetriveSubmittedData(props) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-9">
              <input
                className="search-bar w-100"
                placeholder="Enter a city..."
                type="search"
                autoFocus="on"
              ></input>
            </div>
            <div className="col-sm-3">
              <input
                className="submit-btn btn-primary ms-2 w-100"
                type="submit"
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
}
