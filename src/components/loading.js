import styled, { keyframes } from "styled-components"

const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`
const spinAnimation = keyframes`
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
`
const Spinner = styled.div`
  animation: ${spinAnimation} 0.8s ease infinite;
  animation-play-state: inherit;
  border: solid 5px #3c4247;
  border-bottom-color: #1c87c9;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
  will-change: transform;
`

export const Loading = () => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  )
}