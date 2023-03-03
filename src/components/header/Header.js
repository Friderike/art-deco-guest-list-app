import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

function Header({ pageTitle, mainTitle, btnLeft, btnLeftText, btnRight, btnRightText }) {

  return (
    <>
      <header className={`${classes.mainHeader} d-flex flex-column w-100 `}>

        <div className={`${classes.headerTopSection}`}>
          <span className={classes.borderRT}></span>
          <span className={classes.borderLT}></span>
        <div className={` ${classes.backBtnContainer} ${classes.headerBtnLeft} ${classes.my10}`}>  
          <Link className={`${classes.mainButton} `} to={btnLeft}>{btnLeftText}</Link>
          </div>

          <div className={classes.mainTitleContainer}>
            <h1 className={`text-center ${classes.mainTitleHeading} ${classes.cardHeading} ${classes.textStrokeBlack} ${classes.font18} mb-0`}>{mainTitle}</h1>
          </div> 

          <div className={` ${classes.mainBtnContainer} `}>
          <button className={`${classes.mainButton} ${classes.guestListBtn} ${classes.my10}`} onClick={btnRight}>{btnRightText}</button> 
          </div>        
        </div>
    
        {pageTitle && (
          <div className={classes.cardHeadingContainer}>
            <h2 className={`${classes.cardHeading} ${classes.fontLimeLight} ${classes.headerSubTitle} text-center mb-0`}>{pageTitle}
            </h2>
            <span className={classes.subHeaderDecoL3}></span>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
