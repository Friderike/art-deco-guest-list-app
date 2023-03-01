
import classes from "./Header.module.scss";

function Header({ pageTitle, mainTitle, children }) {

  return (
    <>
      <header className={`${classes.mainHeader} d-flex flex-column w-100 `}>

        <div className={`${classes.headerTopSection}`}>
          <span className={classes.borderRT}></span>
          <span className={classes.borderLT}></span>
          <div className={classes.mainTitleContainer}>
            <h1 className={`text-center ${classes.mainTitleHeading} ${classes.cardHeading} ${classes.textStrokeBlack} ${classes.font18} mb-0`}>{mainTitle}</h1>
          </div>
          {children}
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
