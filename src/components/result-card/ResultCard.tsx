import { StyledResultCard } from "./style"
import { ResultCardProps } from "./types"

export const ResultCard = ({ children }: ResultCardProps) => {
  return (
    <StyledResultCard >
      {children}
    </StyledResultCard>
  )
}