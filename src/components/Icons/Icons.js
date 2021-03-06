import { MdOutlineDashboard } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { CgMathPlus } from "react-icons/cg";
import { FiGrid, FiPaperclip, FiSearch } from "react-icons/fi";
import { BiMessageRounded, BiPencil } from "react-icons/bi";
import { IoMdAlarm } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { RiPriceTag3Fill, RiNotification3Line, RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineRight, AiOutlinePartition } from "react-icons/ai";

const iconSet = {
  dashBoard: FiGrid,
  dashBoardPlus: MdOutlineDashboard,
  ellipsis: IoEllipsisHorizontalSharp,
  hamburger: GiHamburgerMenu,
  plus: CgMathPlus,
  clip: FiPaperclip,
  message: BiMessageRounded,
  alarm: IoMdAlarm,
  assignee: FaUserAlt,
  label: RiPriceTag3Fill,
  right: AiOutlineRight,
  search: FiSearch,
  notifications: RiNotification3Line,
  edit: BiPencil,
  delete: RiDeleteBin6Line,
  share: AiOutlinePartition,
};

const Icons = ({ type, className }) => {
  const ComponentToRender = iconSet[type];
  return (
    <>
      { type &&
        <ComponentToRender
          className={className}
        />
      }
    </>
   
  );
};

export default Icons;