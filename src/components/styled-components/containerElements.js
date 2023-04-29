import styled from "styled-components"

export const MainContainer = styled.main`
  padding-left: 280px;
  padding-right: 30px;
  margin-top: 1rem;
  max-width: 100%;
  position: relative;
  width: 100%;
  display: block;
`
export const FlexContainer = styled.div`
  display: flex;
`

export const FlexMainContainer = styled(FlexContainer)`
  margin-right: -15px;
  margin-left: -15px;
  flex-wrap: wrap;
`
export const FlexColumnContainer = styled(FlexContainer)`
  flex-direction: column;
`
export const CenterContainer = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: ${(props) => props.mb || "0"};
  margin-left: ${(props) => props.ml || "0"};
  margin-top: ${(props) => props.mt || "0"};
  margin-right: ${(props) => props.mr || "0"};
`
export const MainContentContainer = styled.div`
  margin-left: ${(props) => (props.primary ? "8.3%" : "initial")};
  flex: ${(props) => (props.primary ? "0 0 83%" : "0 0 100%")};
  max-width: ${(props) => (props.primary ? "83%" : "100%")};
  position: relative;
  width: 100%;
  padding-right: ${(props) => (props.primary ? "15px" : "0px")};
  padding-left: ${(props) => (props.primary ? "15px" : "0px")};
`