export const mountHeaderList = [
  { name: "icon", text: "#", style: "default", icoSize: "48px" },
  { name: "name", text: "Name", style: "default" },
  { name: "source", text: "Source", style: "default" },
  { name: "owned", text: "Own", style: "center" },
  { name: "patch", text: "Patch", style: "center" },
  { name: "isOwned", text: "", style: "default" },
]

export const minionHeaderList = [
  { name: "icon", text: "#", style: "default", icoSize: "48px" },
  { name: "name", text: "Name", style: "default" },
  { name: "source", text: "Source", style: "default" },
  { name: "owned", text: "Own", style: "center" },
  { name: "patch", text: "Patch", style: "center" },
  { name: "isOwned", text: "", style: "center" },
]

export const orchestrionHeaderList = [
  { name: "icon", text: "", style: "default", icoSize: "48px" },
  { name: "name", text: "Name", style: "default" },
  { name: "description", text: "Source", style: "default" },
  { name: "category", text: "Category", style: "center" },
  { name: "owned", text: "Own", style: "center" },
  { name: "patch", text: "Patch", style: "center" },
  { name: "isOwned", text: "", style: "center" },
]

export const spellHeaderList = [
  { name: "order", text: "#", style: "default", icoSize: "48px" },
  { name: "icon", text: "", style: "default" },
  { name: "name", text: "Name", style: "default" },
  { name: "enemy", text: "Enemy", style: "default" },
  { name: "location", text: "Location", style: "default" },
  { name: "type", text: "Type", style: "center" },
  { name: "aspect", text: "Aspect", style: "center" },
  { name: "rank", text: "Rank", style: "center" },
  { name: "owned", text: "Own", style: "center" },
  { name: "isOwned", text: "", style: "center" },
]

export const emotesHeaderList = [
  { name: "icon", text: "#", style: "default", icoSize: "48px" },
  { name: "name", text: "Name", style: "default" },
  { name: "source", text: "Source", style: "default" },
  { name: "category", text: "Category", style: "center" },
  { name: "owned", text: "Own", style: "center" },
  { name: "patch", text: "Patch", style: "center" },
  { name: "isOwned", text: "", style: "center" },
]

export const bardingsHeaderList = [
  { name: "icon", text: "#", style: "default", icoSize: "48px" },
  { name: "name", text: "Name", style: "default" },
  { name: "source", text: "Source", style: "default" },
  { name: "owned", text: "Own", style: "center" },
  { name: "patch", text: "Patch", style: "center" },
  { name: "isOwned", text: "", style: "center" },
]
export const hairstylesHeaderList = [
  { name: "icon", text: "#", style: "default", icoSize: "48px" },
  { name: "name", text: "Name", style: "default" },
  { name: "source", text: "Source", style: "default" },
  { name: "owned", text: "Own", style: "center" },
  { name: "patch", text: "Patch", style: "center" },
  { name: "isOwned", text: "", style: "center" },
]

export const armoiresHeaderList = [
  { name: "icon", text: "#", style: "default", icoSize: "48px" },
  { name: "name", text: "Name", style: "default" },
  { name: "source", text: "Source", style: "default" },
  { name: "category", text: "Category", style: "center" },
  { name: "owned", text: "Own", style: "center" },
  { name: "patch", text: "Patch", style: "center" },
  { name: "isOwned", text: "", style: "center" },
]

export const fashionsHeaderList = [
  { name: "icon", text: "#", style: "default", icoSize: "48px" },
  { name: "name", text: "Name", style: "default" },
  { name: "source", text: "Source", style: "default" },
  { name: "owned", text: "Own", style: "center" },
  { name: "patch", text: "Patch", style: "center" },
  { name: "isOwned", text: "", style: "center" },
]

export const framesHeaderList = [
  { name: "icon", text: "#", style: "default", icoSize: "48px" },
  { name: "name", text: "Portrait Background", style: "default" },
  { name: "item_name", text: "Item Name", style: "default" },
  { name: "owned", text: "Own", style: "center" },
  { name: "patch", text: "Patch", style: "center" },
  { name: "isOwned", text: "", style: "center" },
]

export const recordsHeaderList = [
  { name: "order", text: "#", style: "default" },
  { name: "icon", text: "", style: "default", icoSize: "72px" },
  { name: "name", text: "Name", style: "default" },
  { name: "rank", text: "Rarity", style: "default" },
  { name: "location", text: "Location", style: "default" },
  { name: "source", text: "Source", style: "default" },
  { name: "owned", text: "Own", style: "center" },
  { name: "patch", text: "Patch", style: "center" },
  { name: "isOwned", text: "", style: "center" },
]


export const getSourceText = (data) => {
  const sourcesLength = data.sources.length - 1
  return data.sources.reduce((text, source, index) => {
    if (index < sourcesLength) {
      return text.concat(`${source.text}\n`)
    }
    return text.concat(source.text)
  }, "")
}

export const getTotalOwnedCollectable = (data) => {
  return data.reduce((owned, element) => {
    return element.isOwned === "owned" ? owned + 1 : owned
  }, 0)
}

export const getPointsAchievements = (data) => {
  return data.reduce(
    ([pointsOwned, totalPoints], element) => {
      return element.isOwned === "owned"
        ? [pointsOwned + element.points, totalPoints + element.points]
        : [pointsOwned, totalPoints + element.points]
    },
    [0, 0]
  )
}

export const formatText = (text) => {
  const formattedText = text.replaceAll(/\s+-/g, "\n   -")
  return formattedText.split("**")
}

export const formatTextNumber = (textNumber) => {
  return 10 - textNumber > 0 ? `0${textNumber}` : textNumber
}

export const sanitizeFormQuery = (query) => {
  return query.replace(/(?!\b\s\b|')\W.*/, '')
}

export const searchQueryMaker = (searchEntries) => {
  const searchParams = [...searchEntries]
  const paramsLength = searchParams.length - 1
  const newQuery = searchParams.reduce((query, params, index) => {
    if (index < paramsLength) {
      return query.concat(`${params[0]}=${params[1]}&`)
    }
    return query.concat(`${params[0]}=${params[1]}`)
  }, "")
  return newQuery
}

// This function is basing on the way that filters works in the official web and how the progress bar is affected by it. 
// Boolean filters that excludes elements are the only that changes the relationship owned/total
export const filterData = (data, filters) => {
  let filteredData = data.filter((collectable) => {
    for (let key in filters) {
      if (typeof filters[key] === "boolean" && filters[key] && collectable[key]) return false
    }
    return true
  })
  const totalOwned = getTotalOwnedCollectable(filteredData)
  const totalElements = filteredData.length
  filteredData = filteredData.filter((collectable) => {
    for (let key in filters) {
      if (typeof filters[key] !== "boolean" && filters[key] !== "all" && filters[key] !== collectable[key])
        return false
    }
    return true
  })
  return [filteredData, totalOwned, totalElements]
}
// Same as filterData, but this one consider that achievements have an additional feature with its own progression bar (achievement points)
export const filterAchievementsData = (data, filters) => {
  let filteredData = data.filter((collectable) => {
    for (let key in filters) {
      if (typeof filters[key] === "boolean" && filters[key] && collectable[key]) return false
    }
    return true
  })
  const totalOwned = getTotalOwnedCollectable(filteredData)
  const totalElements = filteredData.length
  const [pointsOwned, totalPoints] = getPointsAchievements(filteredData)
  filteredData = filteredData.filter((collectable) => {
    for (let key in filters) {
      if (typeof filters[key] !== "boolean" && filters[key] !== "all" && filters[key] !== collectable[key])
        return false
    }
    return true
  })
  return [filteredData, totalOwned, totalElements, pointsOwned, totalPoints]
}
// The next four function with prefix "has" are Sources and Categories filters
export const hasLimitedSource = (sources) => {
  return sources.some(
    (source) => source.type === "Limited" || source.type === "Event" || source.type === "Feast"
  )
}
export const hasPremiumSource = (sources) => {
  return sources.some((source) => source.type === "Premium")
}
export const hasLimitedCategory = (category) => {
  const limitedCategories = ["Seasonal"]
  return limitedCategories.includes(category)
}
export const hasPremiumCategory = (category) => {
  const premiumCategories = ["Online Store & Bonuses"]
  return premiumCategories.includes(category)
}
