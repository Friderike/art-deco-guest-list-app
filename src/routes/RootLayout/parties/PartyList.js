import { Link } from 'react-router-dom';

import invitationHeader from "../../../assets/invitations-subhead-arch.svg";
import Header from '../../../components/header/Header'
import classes from './PartyList.module.scss';

function PartyList() {

  return (
    <>
      <div className={`${classes.partyListContainer} d-flex flex-column `}>
        <Header mainTitle={'Party List'}>

          <div className={` ${classes.backBtnContainer} ${classes.headerBtnLeft} ${classes.my10}`}>
            <Link className={`${classes.mainButton} `} to="..">
              Exit
            </Link>
          </div>
          <div className={` ${classes.mainBtnContainer} `}>
            <Link className={`${classes.mainButton} ${classes.guestListBtn} ${classes.my10}`} to="/guest-list">
              Guest List
            </Link>
          </div>
        </Header>

        <p className={`${classes.font20} mt-4`}>
          - Screen in progress -
        </p>
        <p >
          Please go to Guest List
        </p>

        <section className={`${classes.gridCol12Cards} ${classes.mainContainerOffset} ${classes.pt62} d-f mb-5`}>

          <div className={`${classes.partyContainer}`}>
            <div className={`${classes.mainCardHeader}`}>
              <img
                className={classes.cardHeaderImg}
                src={invitationHeader}
                alt="Header image"
                aria-hidden="true"
              />
              <div className={classes.cardHeadingContainer}>
                <h3 className={`${classes.cardHeading} ${classes.fontLimeLight} mb-0`}>Upcoming Event</h3>
              </div>
            </div>

            <Link to='/guest-list' >
              <div className={`${classes.mainCard}`} >
                <h3 className={`${classes.textStrokeBlack} ${classes.font20} text-center`}>
                  'Miranda’s Midnight Masquerade'
                </h3>
                <p className='text-center mb-0 mt-5'>
                  -Placeholder card-
                </p>
                <p className='text-center'>
                  Screen in progress
                </p>
              </div>
            </Link>
          </div>

        </section>
      </div>
    </>
  )
}

export default PartyList;
