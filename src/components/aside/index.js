import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  FaFileArchive,
  FaAlignJustify,
  FaAngleDoubleLeft,
} from "react-icons/fa";
import { IoIosArchive } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { ImOffice } from "react-icons/im";
import { AiOutlineShop } from "react-icons/ai";
import {} from "react-icons/gr";
import { RiSettings2Line, RiBuilding2Fill } from "react-icons/ri";
import { connect } from "react-redux";
import { setAside } from "../../redux";
const Aside = (props) => {
  const { visiblesidebar, navigationsData, setAside } = props;

  const visibleAside = () => {
    setAside({ visible: !visiblesidebar });
  };

  const sideContentRenderer = () => {
    if (navigationsData) {
      return navigationsData?.map((item, index) => {
        if (item.menuToggle) {
          return (
            <SubMenu
              icon={<FaFileArchive />}
              suffix={<span className="badge yellow"></span>}
              title={item.menu}
            >
              {item.menuToggle.map((value, idx) => (
                <MenuItem>
                  <ImOffice className="iconSubMenu" />
                  <Link to={value.link}>{value.subMenu}</Link>
                </MenuItem>
              ))}
            </SubMenu>
          );
        }
        return (
          <MenuItem>
            <ImOffice className="iconSubMenu" />
            <Link to={item.link}>{item.menu}</Link>
          </MenuItem>
        );
      });
    }
    return null;
  };

  const collapseBtn = () => {
    if (visiblesidebar) {
      return (
        <div className="collapse-on">
          <FaAlignJustify size={25} onClick={visibleAside} />
        </div>
      );
    }
    return (
      <div className="m-3">
        <span className="textmenu">KOTAK IN </span>
        <div className="collapse-off">
          <FaAngleDoubleLeft size={25} onClick={visibleAside} />
        </div>
      </div>
    );
  };

  return (
    <ProSidebar collapsed={visiblesidebar}>
      <SidebarHeader>{collapseBtn()}</SidebarHeader>
      <SidebarContent>
        <Menu iconShape="round">{sideContentRenderer()}</Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

const mapStateToProps = (state) => {
  return {
    visiblesidebar: state.generalReducer.sidebar.visible,
  };
};

export default connect(mapStateToProps, { setAside })(Aside);
