import { StyledResultCard } from "./style"
import { ResultCardProps } from "./types"

export const ResultCard = ({ children, onClick }: ResultCardProps) => {
  return (
    <StyledResultCard onClick={onClick}>
      {children}
    </StyledResultCard>
  )
}