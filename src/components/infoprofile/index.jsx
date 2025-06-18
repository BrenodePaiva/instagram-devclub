import { Flex, Typography } from "../../style";
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import * as C from "./style";
import { randomNumbers } from "../../utils/randomNumbers";
import PropTypes from "prop-types";

export function InfoProfile({ name, photo, link }) {
  return (
    <Flex direction="row" align="center" justify="space-between">
      <C.Container>
        <C.Link href={link} target="_blank">
          <C.ProfileImage src={photo} alt="fotografia" />
          <Typography weight="300" size="13px" lheight="15px">
            {name}
          </Typography>
        </C.Link>
      </C.Container>

      <C.Container>
        <AiFillHeart color="red" />
        <Typography weight="300" size="13px" lheight="15px">
          {randomNumbers()}
        </Typography>

        <FaRegComment />
        <Typography weight="300" size="13px" lheight="15px">
          {randomNumbers()}
        </Typography>
      </C.Container>
    </Flex>
  );
}

InfoProfile.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  link: PropTypes.string,
};
