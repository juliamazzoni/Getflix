import { ClipLoader } from "react-spinners";
import { StyledLoadingIcon } from "./style";


export const LoadingIcon = () => {
  return (
  <StyledLoadingIcon>
    <ClipLoader color="red" size={80} />
  </StyledLoadingIcon>
  )
}