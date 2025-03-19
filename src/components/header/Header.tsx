import { StyledHeader, StyledLogo, StyledSearchBar, StyledTextInputAndButton, StyledTextInput, StyledTypeInputContainer, StyledTypeInput } from "./style"
import { StyledRedButton } from "../style"
import { HeaderProps } from "./types"

export const Header = ({ handleSubmit, handleOnChange}: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledLogo>Getflix</StyledLogo>
      <form onSubmit={handleSubmit}>
        <StyledSearchBar>
          <StyledTextInputAndButton>
            <StyledTextInput>
              <input placeholder="Enter title" type="text" name='title' onChange={handleOnChange}/>
            </StyledTextInput>
            <StyledRedButton>
              <button type="submit">Search content</button>
            </StyledRedButton>
          </StyledTextInputAndButton>
          <StyledTypeInputContainer>
            <StyledTypeInput>
              <label>Movie</label>                
              <input type="radio" name="type" value="movie" onChange={handleOnChange} />                    
            </StyledTypeInput>
            <StyledTypeInput>
              <label>Series</label>                  
              <input type="radio" name="type" value="series" onChange={handleOnChange} />                 
            </StyledTypeInput>
          </StyledTypeInputContainer>
        </StyledSearchBar>
      </form>
    </StyledHeader>
  )
}