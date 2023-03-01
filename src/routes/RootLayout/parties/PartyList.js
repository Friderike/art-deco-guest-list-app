import { Link } from 'react-router-dom';

import Header from '../../../components/header/Header'
import classes from './PartyList.module.scss';

function PartyList() {

  return (
    <>
      <div className={`${classes.partyListContainer} d-flex flex-column `}>
        <Header pageTitle={'Parties'} mainTitle={'Party List'}>
          <div className={` ${classes.mainBtnContainer} `}>
            <Link className={`${classes.mainButton} ${classes.guestListBtn}`} to="/guest-list">
              Guest List 
            </Link>
          </div>
        </Header>
        <h2>Parties here</h2>
      </div>
    </>
  )
}

export default PartyList;
