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
          item.votes.yes > item.votes.no ?
            <tr className="mb-2 table-success ">
              <td>{item.name}</td>
              <td>yes:{item.votes.yes}, no:{item.votes.no}</td>
            </tr> :
          <tr className="">
              <td>
            {item.name}
                </td>
              <td>
              yes:{item.votes.yes}, no:{item.votes.no}
                </td>
              </tr>
          
        );
      })}
        </tbody>
    </table>
      </div>
      );

}
