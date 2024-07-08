import { Flex, Spacer, Typography } from "../../style";
import * as C from "./style";
import { BsSun, BsMoon, BsGear } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { RiGlobalLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { BiExit } from "react-icons/bi";
import { MdMonitor } from "react-icons/md";
import logoInstagran from "../../assets/logo-instagran.svg";

const menuNav = [
  {
    icon: <AiOutlineHome />,
    menuName: "Inicio",
  },
  {
    icon: <RiGlobalLine />,
    menuName: "Explorar",
  },
  {
    icon: <FiSend />,
    menuName: "Direct",
  },
  {
    icon: <MdMonitor />,
    menuName: "IGTV",
  },
  {
    icon: <BsGear />,
    menuName: "Ajustes",
  },
];

export function NavBar({ themeToggler, theme }) {
  function GroupText({ title, subTitle }) {
    return (
      <Flex gap="4px">
        <Typography>{title}</Typography>
        <Typography weight="300" size="14px" lheight="14px">
          {subTitle}
        </Typography>
      </Flex>
    );
  }
  return (
    <C.Container>
      <Flex>
        <C.BtnTheme onClick={themeToggler}>
          {theme === "light" ? <BsMoon /> : <BsSun />}
        </C.BtnTheme>
      </Flex>

      <img src={logoInstagran} alt="a logo do instagran" />

      <Flex>
        <C.Profile>
          <img
            src="https://avatars.githubusercontent.com/u/138159817?v=4"
            alt="imagem de perfil"
          />
        </C.Profile>

        <GroupText title="Breno Paiva" subTitle="@Br3no_dev" />
      </Flex>

      <Spacer margin="8px" />

      <Flex direction="row" justify="space-between">
        <GroupText title="148" subTitle="Publicações" />
        <GroupText title="14K" subTitle="Seguidores" />
        <GroupText title="1K" subTitle="Seguindo" />
      </Flex>

      <Spacer />

      <Flex align="start" gap="16px">
        {menuNav.map((menu) => (
          <C.ListIcon key={menu.menuName}>
            {menu.icon}
            <Typography>{menu.menuName}</Typography>
          </C.ListIcon>
        ))}
      </Flex>

      <Spacer />
      <C.Divider />
      <Spacer margin="8px" />

      <Flex align="start" gap="16px">
        <C.ListIcon>
          <BiExit />
          <Typography>Sair</Typography>
        </C.ListIcon>
      </Flex>
    </C.Container>
  );
}
