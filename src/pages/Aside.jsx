import './aside.css'

const Aside = () => {
  return (
    <>
      <div className="asidemain">
        <div className="homeTransaction">
          <img className="homeTransactionimg" src="/images/asidehome.svg" />
          <p className="para">Transaction</p>
        </div>

        <div className="homeTransaction" id="divactive">
          <img className="homeTransactionimg" src="/images/asidestage.svg" />
          <p className="para" id="active">
            Stages
          </p>
        </div>
        <div className="homeTransaction">
          <img className="homeTransactionimg" src="/images/tasks.svg" />
          <p className="para">Tasks</p>
        </div>
        <div className="homeTransaction">
          <img className="homeTransactionimg" src="/images/clock.svg" />
          <p className="para">Phases</p>
        </div>
        <div className="homeTransaction">
          <img className="homeTransactionimg" src="/images/sign-tracking.svg" />
          <p className="para">Sign Tracking</p>
        </div>
        <div className="homeTransaction">
          <img className="homeTransactionimg" src="/images/save.svg" />
          <p className="para">Critical Info Setting</p>
        </div>
        <div className="homeTransaction">
          <img className="homeTransactionimg" src="/images/scan.svg" />
          <p className="para">Analysis Phase</p>
        </div>
        <div className="homeTransaction">
          <img className="homeTransactionimg" src="/images/asidecalender.svg" />
          <p className="para">Calender</p>
        </div>
        <div className="homeTransaction">
          <img className="homeTransactionimg" src="/images/activity.svg" />
          <p className="para">Activity Log</p>
        </div>
        <div className="homeTransaction">
          <img className="homeTransactionimg" src="/images/3dot.svg" />
        </div>
      </div>
    </>
  );
}

export default Aside