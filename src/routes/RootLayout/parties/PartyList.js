import { Link, useNavigate } from 'react-router-dom';

import invitationHeader from "../../../assets/invitations-subhead-arch.svg";
import Header from '../../../components/header/Header'
import classes from './PartyList.module.scss';

function PartyList() {
  const navigate = useNavigate();

  function toGuestList() {
    navigate('/guest-list')
  }

  return (
    <>
      <div className={`${classes.partyListContainer} d-flex flex-column `}>
        <Header mainTitle={'Party List'}
          btnLeft={'..'}
          btnLeftText={'Exit'}
          btnRight={toGuestList}
          btnRightText={'Guest List'}>
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
