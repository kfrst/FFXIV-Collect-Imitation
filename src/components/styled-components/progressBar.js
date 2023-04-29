import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  font-size: 0.75rem;
  border-radius: 0.25rem;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.6);
  height: 1.25rem;
  margin-bottom: 0.5rem;
`
const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  transition: width 0.6s ease;
  width: ${(props) => `${props.width}%`};
  background-color: ${(props) => (props.primary ? "#917D54" : "#5c6e8e")};
  color: #eee;
  border-right: 1px solid rgba(0, 0, 0, 0.4);
  white-space: nowrap;

  b {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`

ProgressBar.Container = Container

export default ProgressBar