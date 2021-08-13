import serviceIcon1 from "../public/assets/icons/web.svg"
import serviceIcon2 from "../public/assets/icons/android.svg"
import serviceIcon3 from "../public/assets/icons/ios.svg"
import serviceIcon4 from "../public/assets/icons/ui.svg"
import serviceIcon5 from "../public/assets/icons/management.svg"
import serviceIcon6 from "../public/assets/icons/assurance.svg"

//colors
import { colors } from "../styles/global.styles"

//services list
export const services = [
  {
    name: "web development",
    icon: serviceIcon1,
    color: colors.secondaryColor1,
  },
  {
    name: "android development",
    icon: serviceIcon2,
    color: colors.secondaryColor2,
  },
  {
    name: "ios developmemt",
    icon: serviceIcon3,
    color: colors.secondaryColor3,
  },
  { name: "UI/UX", icon: serviceIcon4, color: colors.secondaryColor4 },
  {
    name: "Project Management",
    icon: serviceIcon5,
    color: colors.secondaryColor5,
  },
  {
    name: "Quality Assurance",
    icon: serviceIcon6,
    color: colors.secondaryColor1,
  },
]
