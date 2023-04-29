import styled from "styled-components"

export const Select = styled.select`
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid #ced4da;
  border-color: #555;
  border-radius: 0.25rem;
  color: #eee;
  margin-bottom: 0.5rem;
  height: calc(1.5em + 0.75rem + 2px);
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  option {
    background-color: #292929;
    color: #eee;
  }
`
export const SearchForm = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`
export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  position: relative;

  hr {
    border: 0;
    border-top: 1px solid rgba(233, 233, 233, 0.1);
    margin-bottom: 3.4rem;
  }
`
export const CheckBoxLabel = styled.label`
  cursor: pointer;
  margin-top: 0.08rem;
  margin-bottom: 0.5rem;
`
export const CheckBox = styled.input`
  cursor: pointer;
  margin-right: 0.5rem;
`
CheckBox.Label = CheckBoxLabel

export const SearchButton = styled.button`
  display: inline-block;
  margin-right: 0;
  margin-bottom: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  font-family: inherit;
  font-weight: 400;
  background-color: #007bff;
  border: 1px solid #007bff;
  border-radius: 0.2rem;
  color: #eee;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  cursor: pointer;

  :hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }
  :focus {
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  :active {
    color: #fff;
    background-color: #0062cc;
    border-color: #005cbf;
  }
`
export const FilterButton = styled(SearchButton)`
  margin-right: 1rem;
  background-color: #6c757d;
  border: 1px solid #6c767d;
  :hover {
    background-color: #5a6268;
    border-color: #545b62;
  }
  :focus {
    box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
  }
  :active {
    background-color: #545b62;
    border-color: #4e555b;
  }
  span {
    padding-left: 5px;
  }
`
export const SubmitBTN = styled(SearchButton)`
  position: absolute;
  margin: 0;
  right: 0;
  bottom: 0;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
`
export const SearchInput = styled.input`
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 0.25rem;
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid #555;
  padding: 0.25rem 0.5rem;
  font-family: inherit;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  width: 25em;
  color: #eee;
  outline: 0;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  ::placeholder {
    color: #ccc;
  }

  ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #ccc;
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #ccc;
    opacity: 1;
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #ccc;
    opacity: 1;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #ccc;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #ccc;
  }
  :active,
  :focus {
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.01);
    border-color: #777;
  }
`
export const FilterBTN = (props) => {
  return (
    <FilterButton {...props}>
      <i className="fas fa-filter" />
      <span>Filters</span>
    </FilterButton>
  )
}