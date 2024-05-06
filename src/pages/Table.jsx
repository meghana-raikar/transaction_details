import React, { useEffect, useState } from "react";

const Table = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3000/data/details.json")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      })
      .catch((e) => console.log(e.message));
  };

  const getStatusButtonVariant = (status) => {
    switch (status) {
      case "Completed":
        return "success";
      case "Continue....":
        return "warning";
      case "Not started":
        return "danger";
      default:
        return "secondary";
    }
  };

  return (
    <div className="table-container">
      <div className="table-responsive">
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col"></th>
              <th scope="col">Phase</th>
              <th scope="col">Status</th>
              <th scope="col">Document</th>
              <th scope="col">Responsible Party</th>
              <th scope="col"></th>
              <th scope="col">Update Date</th>
            </tr>
          </thead>
          <tbody>
            {details &&
              details.map((detail, index) => (
                <tr key={detail.key}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img src={detail.doc} />
                  </td>
                  <td>{detail.phase}</td>
                  <td>
                    <button
                      className={`btn btn-${getStatusButtonVariant(
                        detail.status
                      )} `}
                    >
                      {detail.status}
                    </button>
                  </td>
                  <td>{detail.document}</td>
                  <td>{detail.responsibleParty}</td>
                  <td>
                    <img src={detail.icon} alt="Icon" />
                  </td>
                  <td>{detail.updateDate}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
