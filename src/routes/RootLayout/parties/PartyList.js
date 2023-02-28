import Header from '../../../components/header/Header'
import classes from './PartyList.module.scss';

function PartyList() {
 
  return (
    <>
    <div className={`${classes.partyListContainer} d-flex flex-column `}>
     <Header pageTitle={'Parties'}></Header>
     <h2>Parties here</h2>;
     </div>
    </>
  )
}

export default PartyList;
