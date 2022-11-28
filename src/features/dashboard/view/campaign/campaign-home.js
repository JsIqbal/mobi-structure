import Table from 'react-bootstrap/Table';

function CampainHome() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Advertiser</th>
          <th>Campaign Name</th>
          <th>Type</th>
          <th>Channels</th>
          <th>Status</th>
          <th>Impression</th>
          <th>Reach</th>
          <th>Spent</th>
          <th>EST. Empression</th>
          <th>EST. Budget</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>1</td>
          <td>Advertiser</td>
          <td>Campaign Name</td>
          <td>Type</td>
          <td>Channels</td>
          <td>Status</td>
          <td>Impression</td>
          <td>Reach</td>
          <td>Spent</td>
          <td>EST. Empression</td>
          <td>EST. Budget</td>
          <td>Start Date</td>
          <td>End Date</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CampainHome;