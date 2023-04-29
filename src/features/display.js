export const displaySourceList = (sources, id) => {
  if (sources.length === 1) {
    return <dd> {sources[0].text}</dd>
  }
  return (
    <dd>
      <ul>
        {sources.map((item, index) => (
          <li key={`sourceItem-${id}-${index}`}>{item.text}</li>
        ))}
      </ul>
    </dd>
  )
}
export const displayCommonCollectable = (commonData) => {
  return (
    <>
      <div>
        <dt>Owned</dt>
        <dd>{commonData.owned}</dd>
      </div>
      <div>
        <dt>Patch</dt>
        <dd>{commonData.patch}</dd>
      </div>
    </>
  )
}
export const displayStars = (rarity, dataID, dataTitle) => {
  return Array(rarity)
    .fill(null)
    .map((value, index) => <i key={`${dataID}-${dataTitle}-icon-${index}`} className="fas fa-star" />)
}
export const displayDescription = (description) => {
  if (description.length > 1) {
    return (
      <dd>
        <span>
          {description.map((text, index) => {
            return index % 2 === 0 ? <p key={index}>{text}</p> : <strong key={index}> {text} </strong>
          })}
        </span>
      </dd>
    )
  }
  return <dd>{description}</dd>
}
