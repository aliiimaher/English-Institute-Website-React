import "../styles/pages/Panel.scss";

import PanelSideBarMenu from "../components/PanelSideBarMenu";
import UserData from "../interfaces/UserData";
import Dashboard from "../layouts/Dashboard";

interface PanelPageProps {
  thisUser: UserData;
}

function Panel({ thisUser }: PanelPageProps) {
  return (
    <>
      <div className="panel-container">
        <PanelSideBarMenu thisUser={thisUser} />
        <span>this is user panel</span>
        <Dashboard />
      </div>
    </>
  );
}

export default Panel;
