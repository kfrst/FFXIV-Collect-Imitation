import { Spoiler, StyledLink } from "../styled-components/commonElements"
import { useCallback, useState } from "react"
import StyledTable from "../styled-components/table"
const sortData = (tableData, sortKey, reverse) => {
  if (!sortKey) return tableData
  const sortedData = tableData.sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1
  })
  if (reverse) {
    return sortedData.reverse()
  }
  return sortedData
}

export const SurveysTable = (props) => {
  const { tableData, checkCollectable } = props
  const [sortKey, setSortKey] = useState()
  const [sortOrder, setSortOrder] = useState("asc")
  const reverse = sortOrder === "desc"
  const sortedTableData = useCallback(
    () => sortData(tableData, sortKey, reverse),
    [tableData, sortKey, reverse]
  )

  const changeSort = (key) => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    setSortKey(key)
  }
  return (
    <StyledTable.Container>
      <StyledTable>
        <StyledTable.Thead>
          <StyledTable.Tr>
            <StyledTable.Th sort={true} alignText="default" onClick={() => changeSort("order")}>
              #
              {sortOrder && sortKey === "order" && (
                <StyledTable.Arrow sortOrder={sortOrder}></StyledTable.Arrow>
              )}
            </StyledTable.Th>
            <StyledTable.Th sort={true} alignText="default" onClick={() => changeSort("icon")}>
              {sortOrder && sortKey === "icon" && (
                <StyledTable.Arrow sortOrder={sortOrder}></StyledTable.Arrow>
              )}
            </StyledTable.Th>
            <StyledTable.Th sort={true} alignText="default" onClick={() => changeSort("dungeon")}>
              Dungeon
              {sortOrder && sortKey === "dungeon" && (
                <StyledTable.Arrow sortOrder={sortOrder}></StyledTable.Arrow>
              )}
            </StyledTable.Th>
            <StyledTable.Th sort={true} alignText="default" onClick={() => changeSort("name")}>
              Name
              {sortOrder && sortKey === "name" && (
                <StyledTable.Arrow sortOrder={sortOrder}></StyledTable.Arrow>
              )}
            </StyledTable.Th>
            <StyledTable.Th alignText="default">Solution</StyledTable.Th>
            <StyledTable.Th sort={true} alignText="center" onClick={() => changeSort("own")}>
              Own
              {sortOrder && sortKey === "own" && (
                <StyledTable.Arrow sortOrder={sortOrder}></StyledTable.Arrow>
              )}
            </StyledTable.Th>
            <StyledTable.Th sort={true} alignText="center" onClick={() => changeSort("patch")}>
              Patch
              {sortOrder && sortKey === "patch" && (
                <StyledTable.Arrow sortOrder={sortOrder}></StyledTable.Arrow>
              )}
            </StyledTable.Th>
            <StyledTable.Th sort={true} alignText="center" onClick={() => changeSort("isOwned")}>
              {sortOrder && sortKey === "isOwned" && (
                <StyledTable.Arrow sortOrder={sortOrder}></StyledTable.Arrow>
              )}
            </StyledTable.Th>
          </StyledTable.Tr>
        </StyledTable.Thead>
        <tbody>
          {sortedTableData().map((data) => {
            return (
              <StyledTable.Tr owned={data.isOwned} key={data.id}>
                <StyledTable.Td alignText="default">{data.order}</StyledTable.Td>
                <StyledTable.Td alignText="default">
                  <StyledLink to={data.path}>
                    <StyledTable.Ico icoSize="40px" alt={data.name} src={data.icon} />
                  </StyledLink>
                </StyledTable.Td>
                <StyledTable.Td alignText="default">{data.dungeon}</StyledTable.Td>
                <StyledTable.Td alignText="default">
                  <StyledLink to={data.path}>{data.name}</StyledLink>
                </StyledTable.Td>
                <StyledTable.Td alignText="default" maxWidth="500px">
                  <Spoiler>{data.solution}</Spoiler>
                </StyledTable.Td>
                <StyledTable.Td alignText="center">{data.owned}</StyledTable.Td>
                <StyledTable.Td alignText="center">{data.patch}</StyledTable.Td>
                <StyledTable.Td alignText="center">
                  <StyledTable.Checkbox
                    type="checkbox"
                    onChange={() => checkCollectable(data.id)}
                    checked={data.isOwned === "owned" ? true : false}
                  />
                </StyledTable.Td>
              </StyledTable.Tr>
            )
          })}
        </tbody>
      </StyledTable>
    </StyledTable.Container>
  )
}