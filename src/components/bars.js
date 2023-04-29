import ProgressBar from "./styled-components/progressBar"

export const OwnedBar = (props) => {
  const { totalOwned, totalElements } = props
  const currentProgress = (totalOwned / totalElements) * 100
  return (
    <ProgressBar.Container>
      <ProgressBar width={currentProgress}>
        <b>{`${totalOwned}/${totalElements} (${Math.round(currentProgress)}%)`}</b>
      </ProgressBar>
    </ProgressBar.Container>
  )
}

export const PointsBar = (props) => {
  const { pointsOwned, totalPoints } = props
  const currentProgress = (pointsOwned / totalPoints) * 100
  return (
    <ProgressBar.Container>
      <ProgressBar primary width={currentProgress}>
        <b>{`${pointsOwned} of ${totalPoints} points`}</b>
      </ProgressBar>
    </ProgressBar.Container>
  )
}