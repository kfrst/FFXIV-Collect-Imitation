import styled from "styled-components"

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #333;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  min-width: 0;
`

export const CardHeader = styled.div`
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: calc(0.25rem - 1px) cal(0.25rem - 1px) 0 0;
  align-items: center;
  display: flex;
  justify-content: ${(props) => (props.primary ? "space-between" : "initial")};

  h4 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
`
export const CardHeaderContent = styled.div`
  display: flex;
  align-items: center;
`

export const CardBody = styled.div`
  display: flex;
  padding: 0.5rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.2);

  ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 1rem;
  }
`
export const CardTitle = styled.h5`
  margin: 0 0.5rem;
`
export const CardContainer = styled.div`
  margin-left: ${(props) => (props.primary ? "25%" : "16.6%")};
  flex: ${(props) => (props.primary ? "0 0 50%" : "0 0 66.6%")};
  max-width: ${(props) => (props.primary ? "50%" : "66.6%")};
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`
export const CardOptionalContainer = styled(CardContainer)`
  margin-left: auto;
  margin-right: auto;
  flex: 0 0 83%;
  max-width: 83%;
`
export const MinionCardContainer = styled(CardContainer)`
  margin-left: 0;
  flex: ${(props) => (props.primary ? "0 0 41.6%" : "0 0 58.3%")};
  max-width: ${(props) => (props.primary ? "41.6%" : "58.3%")};
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  white-space: pre-line;
  & > div:not(:first-child) {
    margin-top: 0.5rem;
  }

  & > audio {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  span {
    display: inline-block;
  }
  dd p {
    display: inline;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  hr {
    margin: 1rem 0;
    border: 0;
    border-top: 1px solid rgba(233, 233, 233, 0.1);
  }
  h5 {
    margin-bottom: 0.5rem;
  }
`
export const CardImage = styled.div`
  margin-right: 1.5rem;
  display: block;
  margin-top: 1rem;
`
export const CardMiniSpan = styled.span`
  color: #fff;
  background-color: #6c757d;
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  border-radius: 0.25rem;
`
export const CardShortContent = styled.div`
  display: flex;
  flex-wrap: ${(props) => (props.primary ? "nowrap" : "wrap")};
  div:not(last-child) {
    margin-right: 2rem;
  }
  i + span {
    margin-left: 0.45rem;
  }
  ul {
    margin-top: 0;
    list-style: none;
    padding-left: 0;
  }
  span p {
    display: inline;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`
Card.Header = CardHeader
Card.HeaderContent = CardHeaderContent
Card.Body = CardBody
Card.Container = CardContainer
Card.Content = CardContent
Card.Image = CardImage
Card.ShortContent = CardShortContent
Card.Title = CardTitle
Card.MinionCardContainer = MinionCardContainer
Card.OptionalContainer = CardOptionalContainer
Card.MiniSpan = CardMiniSpan
export default Card