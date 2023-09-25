import { COLORS } from "../../../variables";
import { Wrap } from "./Loader.styled";
import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <Wrap>
      <BeatLoader color={`${COLORS.purple}`} margin={10} size={20} speedMultiplier={1.5} />
    </Wrap>
  );
};

export default Loader;
