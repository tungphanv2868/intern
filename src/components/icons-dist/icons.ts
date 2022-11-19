export type IconsId =
  | "account_box"
  | "add"
  | "alarm"
  | "arrow_back_ios"
  | "arrow_drop_down_circle"
  | "arrow_forward_ios"
  | "biotech"
  | "calendar_today"
  | "Call"
  | "cancel"
  | "check_box_outline"
  | "check_box"
  | "chrome_reader_mode"
  | "copy"
  | "create"
  | "delete_forever"
  | "domain"
  | "download"
  | "drag_indicator"
  | "east"
  | "exam"
  | "female"
  | "filter_center_focus"
  | "filter"
  | "first_page"
  | "folder"
  | "grade"
  | "Group-5"
  | "Group-6"
  | "Group-7"
  | "group"
  | "help_outline"
  | "home_work"
  | "home"
  | "info"
  | "lab"
  | "last_page"
  | "lecturer"
  | "mail"
  | "male"
  | "menu_collapse"
  | "menu_open"
  | "more_horizontal"
  | "ondemand_video"
  | "person_add"
  | "publish"
  | "quiz"
  | "radio_button_unchecked"
  | "remove_circle_outline"
  | "report_problem"
  | "review"
  | "role"
  | "school"
  | "search"
  | "setting"
  | "sort"
  | "supplier"
  | "toggle_off"
  | "upload"
  | "verified_user"
  | "visibility_off"
  | "visibility"
  | "Warning-logo"
  | "workshop";

export type IconsKey =
  | "AccountBox"
  | "Add"
  | "Alarm"
  | "ArrowBackIos"
  | "ArrowDropDownCircle"
  | "ArrowForwardIos"
  | "Biotech"
  | "CalendarToday"
  | "Call"
  | "Cancel"
  | "CheckBoxOutline"
  | "CheckBox"
  | "ChromeReaderMode"
  | "Copy"
  | "Create"
  | "DeleteForever"
  | "Domain"
  | "Download"
  | "DragIndicator"
  | "East"
  | "Exam"
  | "Female"
  | "FilterCenterFocus"
  | "Filter"
  | "FirstPage"
  | "Folder"
  | "Grade"
  | "Group_5"
  | "Group_6"
  | "Group_7"
  | "Group"
  | "HelpOutline"
  | "HomeWork"
  | "Home"
  | "Info"
  | "Lab"
  | "LastPage"
  | "Lecturer"
  | "Mail"
  | "Male"
  | "MenuCollapse"
  | "MenuOpen"
  | "MoreHorizontal"
  | "OndemandVideo"
  | "PersonAdd"
  | "Publish"
  | "Quiz"
  | "RadioButtonUnchecked"
  | "RemoveCircleOutline"
  | "ReportProblem"
  | "Review"
  | "Role"
  | "School"
  | "Search"
  | "Setting"
  | "Sort"
  | "Supplier"
  | "ToggleOff"
  | "Upload"
  | "VerifiedUser"
  | "VisibilityOff"
  | "Visibility"
  | "WarningLogo"
  | "Workshop";

export enum Icons {
  AccountBox = "account_box",
  Add = "add",
  Alarm = "alarm",
  ArrowBackIos = "arrow_back_ios",
  ArrowDropDownCircle = "arrow_drop_down_circle",
  ArrowForwardIos = "arrow_forward_ios",
  Biotech = "biotech",
  CalendarToday = "calendar_today",
  Call = "Call",
  Cancel = "cancel",
  CheckBoxOutline = "check_box_outline",
  CheckBox = "check_box",
  ChromeReaderMode = "chrome_reader_mode",
  Copy = "copy",
  Create = "create",
  DeleteForever = "delete_forever",
  Domain = "domain",
  Download = "download",
  DragIndicator = "drag_indicator",
  East = "east",
  Exam = "exam",
  Female = "female",
  FilterCenterFocus = "filter_center_focus",
  Filter = "filter",
  FirstPage = "first_page",
  Folder = "folder",
  Grade = "grade",
  Group_5 = "Group-5",
  Group_6 = "Group-6",
  Group_7 = "Group-7",
  Group = "group",
  HelpOutline = "help_outline",
  HomeWork = "home_work",
  Home = "home",
  Info = "info",
  Lab = "lab",
  LastPage = "last_page",
  Lecturer = "lecturer",
  Mail = "mail",
  Male = "male",
  MenuCollapse = "menu_collapse",
  MenuOpen = "menu_open",
  MoreHorizontal = "more_horizontal",
  OndemandVideo = "ondemand_video",
  PersonAdd = "person_add",
  Publish = "publish",
  Quiz = "quiz",
  RadioButtonUnchecked = "radio_button_unchecked",
  RemoveCircleOutline = "remove_circle_outline",
  ReportProblem = "report_problem",
  Review = "review",
  Role = "role",
  School = "school",
  Search = "search",
  Setting = "setting",
  Sort = "sort",
  Supplier = "supplier",
  ToggleOff = "toggle_off",
  Upload = "upload",
  VerifiedUser = "verified_user",
  VisibilityOff = "visibility_off",
  Visibility = "visibility",
  WarningLogo = "Warning-logo",
  Workshop = "workshop",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.AccountBox]: "61697",
  [Icons.Add]: "61698",
  [Icons.Alarm]: "61699",
  [Icons.ArrowBackIos]: "61700",
  [Icons.ArrowDropDownCircle]: "61701",
  [Icons.ArrowForwardIos]: "61702",
  [Icons.Biotech]: "61703",
  [Icons.CalendarToday]: "61704",
  [Icons.Call]: "61705",
  [Icons.Cancel]: "61706",
  [Icons.CheckBoxOutline]: "61707",
  [Icons.CheckBox]: "61708",
  [Icons.ChromeReaderMode]: "61709",
  [Icons.Copy]: "61710",
  [Icons.Create]: "61711",
  [Icons.DeleteForever]: "61712",
  [Icons.Domain]: "61713",
  [Icons.Download]: "61714",
  [Icons.DragIndicator]: "61715",
  [Icons.East]: "61716",
  [Icons.Exam]: "61717",
  [Icons.Female]: "61718",
  [Icons.FilterCenterFocus]: "61719",
  [Icons.Filter]: "61720",
  [Icons.FirstPage]: "61721",
  [Icons.Folder]: "61722",
  [Icons.Grade]: "61723",
  [Icons.Group_5]: "61724",
  [Icons.Group_6]: "61725",
  [Icons.Group_7]: "61726",
  [Icons.Group]: "61727",
  [Icons.HelpOutline]: "61728",
  [Icons.HomeWork]: "61729",
  [Icons.Home]: "61730",
  [Icons.Info]: "61731",
  [Icons.Lab]: "61732",
  [Icons.LastPage]: "61733",
  [Icons.Lecturer]: "61734",
  [Icons.Mail]: "61735",
  [Icons.Male]: "61736",
  [Icons.MenuCollapse]: "61737",
  [Icons.MenuOpen]: "61738",
  [Icons.MoreHorizontal]: "61739",
  [Icons.OndemandVideo]: "61740",
  [Icons.PersonAdd]: "61741",
  [Icons.Publish]: "61742",
  [Icons.Quiz]: "61743",
  [Icons.RadioButtonUnchecked]: "61744",
  [Icons.RemoveCircleOutline]: "61745",
  [Icons.ReportProblem]: "61746",
  [Icons.Review]: "61747",
  [Icons.Role]: "61748",
  [Icons.School]: "61749",
  [Icons.Search]: "61750",
  [Icons.Setting]: "61751",
  [Icons.Sort]: "61752",
  [Icons.Supplier]: "61753",
  [Icons.ToggleOff]: "61754",
  [Icons.Upload]: "61755",
  [Icons.VerifiedUser]: "61756",
  [Icons.VisibilityOff]: "61757",
  [Icons.Visibility]: "61758",
  [Icons.WarningLogo]: "61759",
  [Icons.Workshop]: "61760",
};
