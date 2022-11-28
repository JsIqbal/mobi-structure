import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

function CampaignList () {
  return (
    <ButtonGroup aria-label="Basic example" style={{margin: "30px 0"}}>
      <Link style={{marginLeft: "1px"}} to='/my-dash/campaign/sms' className='button-custom' variant="secondary">+ SMS</Link>
      <Link className='button-custom' variant="secondary">+ Vibar</Link>
      <Link className='button-custom' variant="secondary">+ IMO</Link>
      <Link className='button-custom' variant="secondary">+ Whatsapp</Link>
    </ButtonGroup>
  );
}

export default  CampaignList;