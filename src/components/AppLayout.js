import {
    PermIdentity,
    AttachMoney,
    Group,
    Home,
    PersonAdd,
    Today,
    GroupAdd,
    Work,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  
  export default function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/" className="link">
                <li className="sidebarListItem active">
                  <Home className="sidebarIcon" />
                  Home
                </li>
              </Link>
              <Link to="/students" className="link">
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Etudiants
                </li>
              </Link>
              <Link to="/profs" className="link">
                <li className="sidebarListItem">
                  <Work className="sidebarIcon" />
                  Enseignants
                </li>
              </Link>
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Paiments
              </li>
              <li className="sidebarListItem">
                <Group className="sidebarIcon" />
                Groupes
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to="/newStudent" className="link">
                <li className="sidebarListItem">
                  <PersonAdd className="sidebarIcon" />
                  Nouveau Etudiant
                </li>
              </Link>
              <li className="sidebarListItem">
                <PersonAdd className="sidebarIcon" />
                Nouveau Enseignant
              </li>
              <li className="sidebarListItem">
                <GroupAdd className="sidebarIcon" />
                Nouveau Groupe
              </li>
              <li className="sidebarListItem">
                <Today className="sidebarIcon" />
                Présence
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  