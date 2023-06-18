export default function VoteList(props) {
  return (
    <div>
      <h2>All Items And Their Votes</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(item => {
            return (
              item.yes > item.no ?
                <tr key={item.id} className="mb-2 table-success ">
                  <td>{item.name}</td>
                  <td>yes:{item.yes}, no:{item.no}</td>
                </tr> :
              <tr key={item.id} className="">
                <td>
                  {item.name}
                </td>
                <td>
                  yes:{item.yes}, no:{item.no}
                </td>
              </tr>
              
            );
          })}
        </tbody>
      </table>
    </div>
  );

}
