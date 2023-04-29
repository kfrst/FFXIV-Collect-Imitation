import styled from "styled-components"

const StyledTable = styled.table`
  min-width: calc(70vw - 59px);
  margin: 0 auto;
  width: auto;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-collapse: collapse;
  tr:nth-of-type(2n) {
    background-color: rgba(0, 0, 0, 0.2);
  }
  tr:nth-of-type(2n + 1) {
    background-color: rgba(0, 0, 0, 0.1);
  }
  td:first-child,
  th:first-child {
    padding-left: 0.5rem;
  }
`
export const TableContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`
export const StyledTD = styled.td`
  text-align: ${(props) => (props.alignText === "center" ? "center" : "inherit")};
  vertical-align: middle;
  white-space: pre-wrap;
  padding: 0.3rem;
  width: auto;
  max-width: ${(props) => props.maxWidth || "none"};
`
export const StyledTH = styled.th`
  text-align: ${(props) => (props.alignText === "center" ? "center" : "inherit")};
  white-space: pre-wrap;
  padding: 0.3rem;
  width: auto;
  border-bottom: 2px solid #888;
  vertical-align: bottom;
  cursor: ${(props) => (props.sort ? "pointer" : "auto")};
`
export const StyledTR = styled.tr`
  border-top: 1px solid #888;
  border-bottom: 1px solid #888;
  opacity: ${(props) => (props.owned === "owned" ? "0.4" : "1")};
`
export const StyledThead = styled.thead`
  background-color: rgba(0, 0, 0, 0.2);
`
export const IconImage = styled.img`
  vertical-align: middle;
  border-style: none;
  width: ${(props) => props.icoSize};
  height: ${(props) => props.icoSize};
`
export const OwnedCheckbox = styled.input`
  margin-top: 1px;
  cursor: pointer;
  padding: 0;
`
export const SortArrow = styled.span`
  border-style: solid;
  border-width: 5px;
  font-size: 0;
  border-color: ${(props) =>
    props.sortOrder === "asc"
      ? "#ccc transparent transparent transparent"
      : "transparent transparent #ccc transparent"};
  position: relative;
  display: inline;
  margin: 0 0 0 0.5rem;
  bottom: ${(props) => (props.sortOrder === "asc" ? "0" : "0.5rem")};
`
StyledTable.Container = TableContainer
StyledTable.Thead = StyledThead
StyledTable.Th = StyledTH
StyledTable.Td = StyledTD
StyledTable.Tr = StyledTR
StyledTable.Checkbox = OwnedCheckbox
StyledTable.Arrow = SortArrow
StyledTable.Ico = IconImage

export default StyledTable